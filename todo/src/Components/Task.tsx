import { useNavigate } from "react-router-dom"
import { format } from "date-fns"

import { Task as TaskType } from "../Types/types"

export default function Task({ task, h = 32 }: { task: TaskType; h?: number }) {
  const navigate = useNavigate()

  return (
    <div
      className={
        task.isCompleted
          ? `w-full flex flex-col justify-between rounded-3xl h-${h} my-3 px-5 py-3 bg-gray-100 hover:bg-pink-100`
          : `w-full flex flex-col justify-between rounded-3xl h-${h} my-3 px-5 py-3 bg-gray-200 hover:bg-pink-100`
      }
      onClick={() => navigate(`${task.name}`)}
    >
      <div className="flex justify-between">
        <div className="font-bold">{task.name}</div>
        <div>Expires on: {format(task.deadline, "dd/mm")}</div>
      </div>
      <div className="text-sm my-3">
        <span className="font-bold">Description:</span> {task.description}
      </div>
    </div>
  )
}
