import { useContext } from "react"

import SideBarList from "./SideBarList"
import { loginContext } from "../Contexts/LoginContext"
import { taskContext } from "../Contexts/DataContext"
import { Option, Task } from "../Types/types"

export default function SideBar() {
  const { user } = useContext(loginContext)
  const { tasks }: { tasks: Array<Task> } = useContext(taskContext)

  const myElem: Array<Option> = [
    { name: "Home" },
    { name: "Tasks" },
    { name: "Daily" },
  ]

  return user ? (
    <div className="h-full w-1/5 flex flex-col ml-16">
      <div className="rounded-3xl mx-auto w-10/12 h-full bg-gray-100 my-3 p-5">
        <SideBarList list={myElem} isTaskList={false} />
        {user && (
          <SideBarList
            list={tasks.filter((x) => !x.isCompleted).filter((_, i) => i < 7)}
            title={"Tasks"}
          />
        )}
      </div>
    </div>
  ) : null
}
