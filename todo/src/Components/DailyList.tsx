import DailyTask from "./DailyTask"

export default function DailyList({
  daily,
  showCheckBox = true,
}: {
  daily: Array<any>
  showCheckBox?: boolean
}) {
  return (
    <div className={showCheckBox ? "w-1/3" : ""}>
      {daily.map((x, i) => {
        return <DailyTask showCheckBox={showCheckBox} x={x} key={i} />
      })}
    </div>
  )
}
