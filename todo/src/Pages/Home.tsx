import React, { useState, useEffect } from "react"

import { daily, tasks } from "../PseudoData/pseudoData"
import Task from "../Components/Task"
import DailyList from "../Components/DailyList"
import HomeComponent from "../Components/HomeComponent"

export default function Home({
  user,
  authTokens,
  logout,
}: {
  user: any
  authTokens: any
  logout: any
}) {
  let [tasks, setTasks] = useState<any>([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/tasks/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    })
    let data = await response.json()

    if (response.status == 200) {
      setTasks(data)
    } else if (response.statusText === "Unauthorized") {
      logout()
    }
  }

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
