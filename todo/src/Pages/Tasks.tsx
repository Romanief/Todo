import { useContext } from "react"

import Task from "../Components/Task"
import Unathorized from "../Components/Unathorized"
import { taskContext } from "../Contexts/DataContext"
import { loginContext } from "../Contexts/LoginContext"
import { Task as TaskType } from "../Types/types"

export default function Tasks() {
  const { tasks }: { tasks: Array<TaskType> } = useContext(taskContext)
  const { user } = useContext(loginContext)

  tasks.forEach((task) => console.log(task.id))

  return user ? (
    <div className="text-xl">
      {tasks.map((x, i) => {
        return <Task key={i} task={x} />
      })}
    </div>
  ) : (
    <Unathorized />
  )
}
