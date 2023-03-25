import { Link, useNavigate } from "react-router-dom"
import { format } from "date-fns"

import { Task as TaskType } from "../Types/types"
import { useContext } from "react"
import { loginContext } from "../Contexts/LoginContext"
import { dailyTaskContext } from "../Contexts/DataContext"

export default function Task({ task, h = 32 }: { task: TaskType; h?: number }) {
  const navigate = useNavigate()

  console.log(task)

  return (
    <Link to={`../tasks/${task.id}`} replace={true}>
      <div
        className={
          task.isCompleted
            ? `w-full flex flex-col justify-between rounded-3xl h-${h} my-3 px-5 py-3 bg-gray-100 hover:bg-pink-100 text-gray-500`
            : `w-full flex flex-col justify-between rounded-3xl h-${h} my-3 px-5 py-3 bg-gray-200 hover:bg-pink-100`
        }
      >
        <div className="flex justify-between">
          <div className="font-bold">{task.name}</div>
          {task.isCompleted ? (
            <div>Completed</div>
          ) : (
            <div>Expires on: {task.deadline.toString()}</div>
          )}
        </div>
        <div className="text-sm my-3">
          <span className="font-bold">Description:</span> {task.description}
        </div>
      </div>
    </Link>
  )
}
