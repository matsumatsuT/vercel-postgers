"use client"

import { Profile } from "@/app/list/Profile"
import { User, Profile as typeProfile } from "@/prisma-types"
import { useState } from "react"
type Props = {
  userData: User[]
}

export const ListPage = ({ userData }: Props) => {
  const [profile, setProfile] = useState<typeProfile>()

  const onClick = async (userId: number) => {
    const res = await fetch(`/profile/${userId}`)
    const data: typeProfile = await res.json()
    setProfile(data)
  }

  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {userData.map((v) => (
          <li key={v.id}>
            <div>name:{v.name}</div>
            <div>email:{v.email}</div>
            <button onClick={() => onClick(v.id)}>プロフィールを取得</button>
          </li>
        ))}
      </ul>
      {profile && <Profile profile={profile} />}
    </div>
  )
}
