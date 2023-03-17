import { useNavigate } from "react-router-dom"
import { format } from "date-fns"

export default function Task({ task, h = 32 }: { task: any; h?: number }) {
  const navigate = useNavigate()
  return (
    <div
      className={
        task.isActive
          ? `w-full flex justify-between rounded-3xl h-${h} my-3 px-5 py-3 bg-gray-100 hover:bg-pink-100`
          : `w-full flex justify-between rounded-3xl h-${h} my-3 px-5 py-3 bg-gray-100 hover:bg-pink-100`
      }
      onClick={() => navigate(`${task.text}`)}
    >
      <div>{task.text}</div>
      <div>Expires on: {format(task.expire, "dd/mm")}</div>
    </div>
  )
}
