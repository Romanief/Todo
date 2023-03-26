import { useContext } from "react"

import Task from "../Components/Task"
import DailyList from "../Components/DailyList"
import HomeComponent from "../Components/HomeComponent"
import { dailyTaskContext, taskContext } from "../Contexts/DataContext"
import { Task as TaskType, DailyTask as DailyTaskType } from "../Types/types"
import { loginContext } from "../Contexts/LoginContext"
import Unathorized from "../Components/Unathorized"

export default function Home() {
  const { user } = useContext(loginContext)
  const { tasks }: { tasks: Array<TaskType> } = useContext(taskContext)
  const { dailyTasks }: { dailyTasks: Array<DailyTaskType> } =
    useContext(dailyTaskContext)

  return user ? (
    <div className="flex justify-start">
      <HomeComponent
        title="Daily left to do"
        content={
          <DailyList
            daily={dailyTasks
              .filter((x) => !x.isCompleted)
              .filter((_, i) => i < 3)}
            showCheckBox={false}
          />
        }
      />
      <HomeComponent
        title="Expiring"
        content={
          <div className="w-96">
            {tasks.filter((x) => !x.isCompleted).length > 0 ? (
              tasks
                .filter((x) => !x.isCompleted)
                .map((x) => (
                  <div className="my-3">
                    <Task task={x} h={24} />
                  </div>
                ))
            ) : (
              <div className="p-3">No more tasks to complete!</div>
            )}
          </div>
        }
      />
    </div>
  ) : (
    <Unathorized />
  )
}
