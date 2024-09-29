"use server"

import { prisma } from "@/lib/prisma"
import { Profile } from "@prisma/client"

export async function getProfile(state: Profile | null, formData: FormData) {
  const userId = formData.get("userId")

  if (!userId) return null

  const res = await prisma.profile.findUnique({
    where: { userId: Number(userId) },
  })

  return res
}
