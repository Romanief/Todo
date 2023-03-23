import { useContext } from "react"

import Task from "../Components/Task"
import DailyList from "../Components/DailyList"
import HomeComponent from "../Components/HomeComponent"
import { taskContext } from "../Contexts/DataContext"

export default function Home() {
  const { tasks } = useContext(taskContext)

  return (
    <div className="flex justify-start">
      {tasks && (
        <ul>
          {(tasks as Array<any>).map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

{
  /* <HomeComponent
        title="Daily left to do"
        content={
          <DailyList
            daily={daily.filter((x) => !x.isCompleted).filter((_, i) => i < 3)}
            showCheckBox={false}
          />
        }
      />

      <HomeComponent
        title="Expiring"
        content={
          <div className="w-96">
            {tasks.map((x) => (
              <div className="my-3">
                <Task task={x} h={24} />
              </div>
            ))}
          </div>
        }
      /> */
}
