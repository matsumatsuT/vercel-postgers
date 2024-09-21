"use client"

import { Profile, User } from "@/prisma-types"
import { useForm } from "react-hook-form"

type FormValues = Pick<Profile, "bio" | "height" | "weight"> &
  Pick<User, "email" | "name">

export const CreateForm = () => {
  const { register } = useForm<FormValues>({
    defaultValues: { name: "", email: "", bio: "", height: 0, weight: 0 },
  })

  const onSubmit = () => {}

  return (
    <div>
      <h2>ユーザ作成</h2>
      <div style={{ display: "flex" }}>
        <form
          action="
      "
        >
          <div>
            <label htmlFor="">名前</label>
            <input type="text" {...register("name")} />
          </div>
          <div>
            <label htmlFor="">メール</label>
            <input type="text" {...register("email")} />
          </div>
          <div>
            <label htmlFor="">性別</label>
            <input type="radio" {...register("bio")} />
          </div>
          <div>
            <label htmlFor="">身長</label>
            <input type="text" {...register("height")} />
          </div>
          <div>
            <label htmlFor="">体重</label>
            <input type="text" {...register("weight")} />
          </div>
          <button>作成</button>
        </form>
      </div>
    </div>
  )
}
