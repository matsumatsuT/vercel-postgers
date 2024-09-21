import { ListPage } from "@/app/list/ListPage"
import { prisma } from "@/lib/prisma"

// サーバーで取得
const List = async () => {
  const userData = await prisma.user.findMany()

  return (
    <div>
      <h2>ユーザー一覧を表示</h2>
      <ListPage userData={userData} />
    </div>
  )
}

export default List
