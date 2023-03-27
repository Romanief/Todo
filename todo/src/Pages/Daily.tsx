import React, { useContext, useState } from "react"

import DailyList from "../Components/DailyList"
import Cube from "../Components/Cube"
import { DailyTask } from "../Types/types"

import { dailyTaskContext } from "../Contexts/DataContext"
import { loginContext } from "../Contexts/LoginContext"
import Unathorized from "../Components/Unathorized"

export default function Daily() {
  const { user, authTokens, logout } = useContext(loginContext)
  const {
    dailyTasks,
    getTasks,
  }: { dailyTasks: Array<DailyTask>; getTasks: any } =
    useContext(dailyTaskContext)

  const [nameInput, setNameInput] = useState("")

  let createTask = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/dailytasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        name: nameInput,
      }),
    })
    let data = await response.json()

    if (response.status == 200) {
      console.log(data)
      setNameInput("")
      getTasks()
    } else if (response.statusText === "Unauthorized") {
      logout()
    }
  }

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    console.log("click")
    console.log(nameInput)

    if (nameInput) {
      console.log("accepted")
      createTask()
    }
  }

  return user ? (
    <div className="text-lg my-3 h-4/5 flex w-full justify-between">
      <DailyList daily={dailyTasks} />

      <div className="flex flex-col justify-between px-10">
        {/* Quote on side */}
        <form className="flex flex-col text-xl">
          <div className="text-pink-500 font-extrabold text-3xl text-center mb-5">
            New Daily task
          </div>
          <input
            className="bg-gray-200 rounded-3xl p-5 my-3 hover:bg-pink-100 focus:outline-none focus:bg-pink-200"
            type="text"
            placeholder="Insert Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input
            className="bg-gray-100 rounded-3xl p-5 my-3 hover:bg-pink-100 focus:outline-none font-extrabold"
            type="submit"
            value="Add Daily Task"
            onClick={(e) => {
              handleClick(e)
            }}
          />
        </form>

        {/* Number of tasks completed on side */}
        <div className="text-3xl w-full text-center mx-10 my-3 h-full rounde py-10 px-10 border-t border-slate-100 ">
          Task completed: {dailyTasks.filter((x: any) => x.isCompleted).length}{" "}
          / {dailyTasks.length}
          {/* Shows task completed as a graph */}
          <div className="flex justify-center mt-5">
            {dailyTasks
              .filter((x) => x.isCompleted)
              .map((x, i) => {
                return <Cube size={10} key={i} completed={true} />
              })}
            {dailyTasks
              .filter((x) => x.isCompleted == false)
              .map((x, i) => {
                return <Cube size={10} key={i} completed={false} />
              })}
          </div>
          {/* Show message if all tasks are completed */}
          {dailyTasks.filter((x) => !x.isCompleted).length == 0 && (
            <div className="text-lg my-3">Well Done!</div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Unathorized />
  )
}
