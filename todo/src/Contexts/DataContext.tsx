import React, { createContext, useContext, useEffect, useState } from "react"

import { Task as TaskType, DailyTask as DailyTaskType } from "../Types/types"
import { loginContext } from "./LoginContext"

const taskContext = createContext<any>({})

function TaskContext({ children }: { children: React.ReactNode }) {
  const { authTokens, logout } = useContext(loginContext)

  let [tasks, setTasks] = useState<Array<TaskType>>([])

  let getTasks = async () => {
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

  useEffect(() => {
    getTasks()
  }, [])

  const providerValue = {
    tasks,
  }

  return (
    <taskContext.Provider value={providerValue}>
      {children}
    </taskContext.Provider>
  )
}

export { taskContext, TaskContext }
