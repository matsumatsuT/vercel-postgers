"use client";
import { useForm } from "react-hook-form";
import { CrateUserSchema, createUser } from "../app/(actions)/createUser";
import { useFormState } from "react-dom";
import { initialState } from "@/lib/initialState";
import { useEffect } from "react";

export const CreateForm = () => {
  const { register } = useForm<CrateUserSchema>({
    defaultValues: {
      email: "",
      name: "",
    },
  });
  const [state, dispatch] = useFormState(createUser, initialState);

  useEffect(() => {
    if (state.success) {
      alert("ユーザ作成成功");
    }
  }, [state]);

  return (
    <form action={dispatch}>
      <div>
        {state.message && state.message}
        <label htmlFor="">name</label>
        <input type="text" {...register("name")} />
        {state.errors?.name && (
          <p style={{ color: "red" }}>{state.errors?.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="">email</label>
        <input type="text" {...register("email")} />
        {state.errors?.email && (
          <p style={{ color: "red" }}>{state.errors?.email}</p>
        )}
      </div>
      <button type="submit">作成</button>
    </form>
  );
};
