import { DailyTask as DailyTaskType } from "../Types/types"
import DailyTask from "./DailyTask"

export default function DailyList({
  daily,
  showCheckBox = true,
}: {
  daily: Array<DailyTaskType>
  showCheckBox?: boolean
}) {
  return daily.length > 0 ? (
    <div className={showCheckBox ? "w-1/3" : ""}>
      {daily.map((x, i) => {
        return <DailyTask showCheckBox={showCheckBox} x={x} key={i} />
      })}
    </div>
  ) : (
    <div className="p-3">No more tasks to complete!</div>
  )
}
