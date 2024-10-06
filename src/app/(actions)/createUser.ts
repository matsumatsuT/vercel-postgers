"use server";

import { prisma } from "@/lib/prisma";
import { State } from "@/types/state";
import { Prisma } from "@prisma/client";
import { z } from "zod";

const crateUser = z.object({
  name: z.string(),
  email: z.string().email({ message: "メールアドレスを入力して下さい" }),
});

export async function createUser(
  state: State,
  formData: FormData
): Promise<State> {
  const formDataName = formData.get("name");
  const formDataEmail = formData.get("email");
  // crateUserで定義したバリデーションを行う
  const validationField = crateUser.safeParse({
    name: formDataName,
    email: formDataEmail,
  });

  if (!validationField.success) {
    console.log("error", validationField.error);
    return {
      errors: validationField.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email } = validationField.data;

  try {
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return { success: true };
  } catch (error) {
    console.log("error", error);
    const errorCode =
      error instanceof Prisma.PrismaClientKnownRequestError && error.code;
    if (errorCode === "P2002") {
      return { message: "同じメールアドレスは使用できません", success: false };
    }
    return { message: "予期せぬエラーが発生しました。", success: false };
  }
}

/** createUser使用時の型情報 */
export type CrateUserSchema = z.infer<typeof crateUser>;
