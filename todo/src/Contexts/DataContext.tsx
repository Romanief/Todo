import React, { createContext, useContext, useEffect, useState } from "react"

import { Task as TaskType, DailyTask as DailyTaskType } from "../Types/types"
import { loginContext } from "./LoginContext"

const taskContext = createContext<any>({})
const dailyTaskContext = createContext<any>({})

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

function DailyTaskContext({ children }: { children: React.ReactNode }) {
  const { authTokens, logout } = useContext(loginContext)

  let [dailyTasks, setDailyTasks] = useState<Array<DailyTaskType>>([])

  let getTasks = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/dailytasks/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    })
    let data = await response.json()

    if (response.status == 200) {
      setDailyTasks(data)
    } else if (response.statusText === "Unauthorized") {
      logout()
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => getTasks(), 1000)
  }, [])

  const providerValue = {
    dailyTasks,
  }

  return (
    <dailyTaskContext.Provider value={providerValue}>
      {children}
    </dailyTaskContext.Provider>
  )
}

export { taskContext, TaskContext, dailyTaskContext, DailyTaskContext }
