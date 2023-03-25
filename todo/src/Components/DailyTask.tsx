import React, { useState, useContext } from "react"
import { dailyTaskContext } from "../Contexts/DataContext"

import { loginContext } from "../Contexts/LoginContext"
import { DailyTask } from "../Types/types"

export default function ({
  showCheckBox,
  x,
}: {
  showCheckBox: boolean
  x: DailyTask
}) {
  const { authTokens, logout } = useContext(loginContext)
  const { getTasks } = useContext(dailyTaskContext)

  const [isCompleted, setIsCompleted] = useState(x.isCompleted)

  let completeTask = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/dailytasks/${x.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        name: x.name,
        isCompleted: x.isCompleted ? false : true,
      }),
    })
    let data = await response.json()

    if (response.status == 200) {
      console.log(data.isCompleted)
      setIsCompleted(data.isCompleted)
      getTasks()
    } else if (response.statusText === "Unauthorized") {
      logout()
    }
  }

  function handleClick() {
    console.log("sending request")
    completeTask()
    console.log("completed")
  }

  return (
    <div
      onClick={handleClick}
      className="text-lg mt-3 mb-5 flex justify-between w-full px-5 py-3 rounded-3xl hover:bg-pink-50"
    >
      <div className="">{x.name}</div>
      {showCheckBox && (
        <div
          className={
            isCompleted
              ? "w-3 h-3 border-2 rounded-full my-auto bg-pink-600"
              : "w-3 h-3 border-2 rounded-full my-auto bg-white"
          }
        ></div>
      )}
    </div>
  )
}
