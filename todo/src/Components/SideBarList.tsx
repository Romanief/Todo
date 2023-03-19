import { useNavigate } from "react-router-dom"
import { DailyTask, Option, Task } from "../Types/types"

export default function SideBarList({
  list,
  title,
  horizontal = false,
}: {
  list: Array<Task | DailyTask | Option>
  title?: string
  horizontal?: boolean
}) {
  const navigate = useNavigate()

  return (
    <div className={horizontal ? "flex" : "flex flex-col"}>
      {title && (
        <div className="text-xl text-pink-600 font-extrabold mt-6 mb-3">
          {title}
        </div>
      )}
      {list.map((x, i) => {
        return (
          <div
            key={i}
            className="my-1 mx-3 text-m hover:font-bold"
            onClick={() => navigate(`${x.name}`)}
          >
            {x.name}
          </div>
        )
      })}
    </div>
  )
}
