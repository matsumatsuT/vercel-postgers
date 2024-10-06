import { prisma } from "@/lib/prisma";
import { CreateForm } from "../components/CreateForm";

export default async function Home() {
  const data = await prisma.user.findMany();

  return (
    <>
      <CreateForm />
      <hr />
      <h1>ユーザ一覧</h1>
      <ul style={{ display: "grid", gap: 5 }}>
        {data.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
