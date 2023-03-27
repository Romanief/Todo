import { setDay } from "date-fns"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import Unathorized from "../Components/Unathorized"
import { taskContext } from "../Contexts/DataContext"
import { loginContext } from "../Contexts/LoginContext"

const NewTaskForm = () => {
  const navigate = useNavigate()

  const { user, authTokens, logout } = useContext(loginContext)
  const { getTasks } = useContext(taskContext)

  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [dayInput, setDayInput] = useState("")
  const [monthInput, setMonthInput] = useState("")
  const [yearInput, setYearInput] = useState("")
  const [message, setMessage] = useState("")

  let createTask = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        name: nameInput,
        description: descriptionInput,
        deadline: yearInput + "-" + monthInput + "-" + dayInput,
      }),
    })
    let data = await response.json()

    if (response.status == 200) {
      getTasks()
      console.log(data.isCompleted)
      setMessage("Task created!")
      setNameInput("")
      setDescriptionInput("")
      setDayInput("")
      setMonthInput("")
    } else if (response.statusText === "Unauthorized") {
      logout()
    }
  }

  function HandleClick(e: React.MouseEvent) {
    e.preventDefault()
    console.log("click")

    if (nameInput && yearInput && monthInput && dayInput) {
      if (
        parseInt(yearInput) &&
        parseInt(monthInput) &&
        parseInt(dayInput) &&
        yearInput.length == 4 &&
        dayInput.length == 2 &&
        monthInput.length == 2
      ) {
        createTask()
      } else {
        setMessage("Inavlid date format: DD MM YYYY")
      }
    } else {
      setMessage("Please fill all required fields.")
    }
  }

  const inputClassName =
    "text-md bg-gray-200 rounded-3xl p-5 my-3 focus:outline-none hover:bg-pink-100 focus:bg-pink-200"

  return user ? (
    <div>
      <form className="flex flex-col mx-auto container w-1/3 py-10">
        <input
          className={inputClassName}
          type="text"
          placeholder="Insert Task Name"
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value)
          }}
        />
        <textarea
          className={inputClassName}
          placeholder="Insert Task Description"
          value={descriptionInput}
          onChange={(e) => {
            setDescriptionInput(e.target.value)
          }}
        />
        <div className="flex justify-between w-full">
          <input
            className={inputClassName + "mx-3 w-1/4"}
            type="text"
            value={dayInput}
            placeholder="DD"
            onChange={(e) => {
              setDayInput(e.target.value)
            }}
          />
          <input
            className={inputClassName + "mx-3 w-1/4"}
            type="text"
            value={monthInput}
            placeholder="MM"
            onChange={(e) => {
              setMonthInput(e.target.value)
            }}
          />
          <input
            className={inputClassName + "mx-3 w-1/4"}
            type="text"
            value={yearInput}
            placeholder="YYYY"
            onChange={(e) => {
              setYearInput(e.target.value)
            }}
          />
        </div>
        <input
          className="text-md bg-gray-100 rounded-3xl p-3 my-3 focus:outline-none hover:bg-pink-100"
          type="submit"
          value="Create Task"
          onClick={(e) => HandleClick(e)}
        />
      </form>
      {message.length > 1 && (
        <div className="text-center font-bold text-pink-500 text-3xl">
          {message}
        </div>
      )}
    </div>
  ) : (
    <Unathorized />
  )
}

export default NewTaskForm
