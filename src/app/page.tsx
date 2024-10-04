import { redirect } from "next/navigation";
import styles from "./page.module.css";
import { CreateForm } from "./(components)/CreateForm";

export default function Home() {
  return (
    <>
      <CreateForm />
      <div>スタート</div>
    </>
  );
}
