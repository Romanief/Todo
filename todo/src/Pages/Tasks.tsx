import Task from "../Components/Task"
import { tasks } from "../PseudoData/pseudoData"

export default function Tasks() {
  return (
    <div className="text-xl">
      {tasks.map((x, i) => {
        return <Task key={i} task={x} />
      })}
    </div>
  )
}
