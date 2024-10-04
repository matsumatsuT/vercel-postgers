"use client";
import { useForm } from "react-hook-form";
import { createUser } from "../(actions)/createUser";

import { Prisma } from "@prisma/client";

export const CreateForm = () => {
  const { register } = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });
  return (
    <form action={createUser}>
      <label htmlFor="">name</label>
      <input type="text" {...register("name")} />
      <label htmlFor="">email</label>
      <input type="email" {...register("email")} />
      <button type="submit">作成</button>
    </form>
  );
};
