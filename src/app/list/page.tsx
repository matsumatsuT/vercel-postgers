import { prisma } from "@/lib/prisma"

const List = async () => {
  const data = await prisma.user.findMany()

  return (
    <div>
      <div>ユーザー一覧を表示</div>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <div>name:{d.name}</div>
            <div>email:{d.email}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
