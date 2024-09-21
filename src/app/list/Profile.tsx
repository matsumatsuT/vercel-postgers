import { prisma } from "@/lib/prisma"
import { Profile as typeProfile } from "@/prisma-types"

type Props = {
  profile: typeProfile
}

export const Profile = ({ profile }: Props) => {
  return (
    <>
      <h2>プロフィール情報</h2>
      <div>
        性別：{profile.bio}
        身長:{profile.height}
        体重:{profile.height}
        id:{profile.id}
      </div>
    </>
  )
}
