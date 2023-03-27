import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import Task from "../Components/Task"
import Unathorized from "../Components/Unathorized"
import { taskContext } from "../Contexts/DataContext"
import { loginContext } from "../Contexts/LoginContext"
import { Task as TaskType } from "../Types/types"

export default function Tasks() {
  const { tasks }: { tasks: Array<TaskType> } = useContext(taskContext)
  const { user } = useContext(loginContext)

  const [showCompleted, setShowCompleted] = useState(false)
  const navigate = useNavigate()

  tasks.forEach((task) => console.log(task.id))

  return user ? (
    <div className="text-xl mr-10">
      {tasks
        .filter((x) => !x.isCompleted)
        .map((x, i) => {
          return <Task key={i} task={x} />
        })}
      {showCompleted &&
        tasks
          .filter((x) => x.isCompleted)
          .map((x, i) => {
            return <Task key={i} task={x} />
          })}
      <div className="flex justify-between">
        <div
          className="bg-pink-100 hover:bg-pink-300 rounded-3xl w-min font-extrabold p-5"
          onClick={() => navigate("new")}
        >
          Add
        </div>
        <div
          className="bg-pink-100 hover:bg-pink-300 rounded-3xl font-extrabold p-5"
          onClick={() => setShowCompleted(showCompleted ? false : true)}
        >
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </div>
      </div>
    </div>
  ) : (
    <Unathorized />
  )
}
