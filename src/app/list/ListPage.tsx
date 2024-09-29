"use client"

import { getProfile } from "@/app/(actions)/getProfile"
import { Profile } from "@/app/list/Profile"
import { User, Profile as typeProfile } from "@/prisma-types"
import { useState } from "react"
import { useFormState } from "react-dom"
type Props = {
  userData: User[]
}

export const ListPage = ({ userData }: Props) => {
  const [state, formAction] = useFormState(getProfile, null)

  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {userData.map((v) => (
          <li key={v.id}>
            <form action={formAction}>
              <div>name:{v.name}</div>
              <div>email:{v.email}</div>
              <input type="hidden" name="userId" value={v.id} />
              <button type="submit">プロフィールを取得</button>
            </form>
          </li>
        ))}
      </ul>
      {state && <Profile profile={state} />}
    </div>
  )
}
