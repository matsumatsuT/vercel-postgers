"use client";
import { useForm } from "react-hook-form";
import { CrateUserSchema, createUser } from "../app/(actions)/createUser";
import { useFormState } from "react-dom";
import { initialState } from "@/lib/initialState";

export const CreateForm = () => {
  const { register } = useForm<CrateUserSchema>({
    defaultValues: {
      email: "",
      name: "",
    },
  });
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form action={dispatch}>
      <label htmlFor="">name</label>
      <input type="text" {...register("name")} />
      <label htmlFor="">email</label>
      <input type="text" {...register("email")} />
      {state.errors?.email}
      <button type="submit">作成</button>
    </form>
  );
};
