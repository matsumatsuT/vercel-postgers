import { prisma } from "@/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: String } }
) {
  const userId = params.userId
  const res = await prisma.profile.findUnique({
    where: { userId: Number(userId) },
  })

  return NextResponse.json(res)
}
