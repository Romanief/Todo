import Task from "../Components/Task"
import { tasks } from "../PseudoData/pseudoData"

export default function Tasks() {
  return (
    <div className="text-xl">
      {tasks.map((x) => {
        return <Task task={x} />
      })}
    </div>
  )
}
