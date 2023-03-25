import { useContext } from "react"

import SideBarList from "./SideBarList"
import { loginContext } from "../Contexts/LoginContext"
import { taskContext } from "../Contexts/DataContext"
import { Option } from "../Types/types"

export default function SideBar() {
  const { user } = useContext(loginContext)
  const { tasks } = useContext(taskContext)

  const myElem: Array<Option> = [
    { name: "Home" },
    { name: "Tasks" },
    { name: "Daily" },
  ]

  return user ? (
    <div className="h-full w-1/5 flex flex-col">
      <div className="rounded-3xl mx-auto w-10/12 h-3/4 bg-gray-100 my-3 p-5">
        <SideBarList list={myElem} isTaskList={false} />
        {user && <SideBarList list={tasks} title={"Approaching"} />}
        {user && <SideBarList list={tasks} title={"Favourites"} />}
      </div>
    </div>
  ) : null
}
