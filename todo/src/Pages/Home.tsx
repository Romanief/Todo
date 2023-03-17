import { daily, tasks } from "../PseudoData/pseudoData"
import Task from "../Components/Task"
import DailyList from "../Components/DailyList"
import HomeComponent from "../Components/HomeComponent"

export default function Home() {
  return (
    <div className="flex justify-start">
      <HomeComponent
        title="Daily left to do"
        content={
          <DailyList
            daily={daily.filter((x) => x.isActive).filter((_, i) => i < 3)}
            showCheckBox={false}
          />
        }
      />

      <HomeComponent
        title="Expiring"
        content={
          <div className="px-3 w-96">
            {tasks.map((x) => (
              <div className="my-3">
                <Task task={x} h={24} />
              </div>
            ))}
          </div>
        }
      />
    </div>
  )
}
