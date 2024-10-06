"use server";

import { State } from "@/types/state";
import { z } from "zod";

const crateUser = z.object({
  name: z.string(),
  email: z.string().email({ message: "メールアドレスを入力して下さい" }),
});

export async function createUser(
  state: State,
  formData: FormData
): Promise<State> {
  const name = formData.get("name");
  const email = formData.get("email");
  console.log("発火");

  // crateUserで定義したバリデーションを行う
  const validationField = crateUser.safeParse({ name, email });

  if (!validationField.success) {
    console.log("error", validationField.error);
    return {
      errors: validationField.error.flatten().fieldErrors,
      message: "失敗",
    };
  }

  console.log("name", name);
  console.log("email", email);
  // 成功パターンをかく

  return { message: "成功" };
}

/** createUser使用時の型情報 */
export type CrateUserSchema = z.infer<typeof crateUser>;
