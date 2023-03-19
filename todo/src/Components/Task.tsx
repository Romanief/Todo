// import useSWR from "swr"

import { useNavigate } from "react-router-dom"
import { format } from "date-fns"

// const fetcher = (...args: any) => fetch(args).then((res) => res.json())

export default function Task({ task, h = 32 }: { task: any; h?: number }) {
  const navigate = useNavigate()

  // const { data, error, isLoading } = useSWR(
  //   "http://127.0.0.1:8000/tasks/",
  //   fetcher
  // )

  // if (isLoading) {
  //   console.log("loading")
  // }
  // if (data) {
  //   console.log(data)
  // }
  // if (error) {
  //   console.log(error)
  // }

  return (
    <div
      className={
        task.isCompleted
          ? `w-full flex justify-between rounded-3xl h-${h} my-3 px-5 py-3 bg-gray-100 hover:bg-pink-100`
          : `w-full flex justify-between rounded-3xl h-${h} my-3 px-5 py-3 bg-gray-200 hover:bg-pink-100`
      }
      onClick={() => navigate(`${task.name}`)}
    >
      <div>{task.name}</div>
      <div>Expires on: {format(task.deadline, "dd/mm")}</div>
    </div>
  )
}
