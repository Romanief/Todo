import React, { useContext, useState } from "react"
import Unathorized from "../Components/Unathorized"
import { loginContext } from "../Contexts/LoginContext"

const NewTaskForm = () => {
  const { user } = useContext(loginContext)

  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [dateInput, setDateInput] = useState("")

  function HandleClick(e: React.MouseEvent) {
    e.preventDefault()
    console.log("click")
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
        <input
          className={inputClassName}
          type="text"
          value={dateInput}
          placeholder="DD-MM-YY"
          onChange={(e) => {
            setDateInput(e.target.value)
          }}
        />
        <input
          className="text-md bg-gray-100 rounded-3xl p-3 my-3 focus:outline-none hover:bg-pink-100"
          type="submit"
          value="Create Task"
          onClick={(e) => HandleClick(e)}
        />
      </form>
    </div>
  ) : (
    <Unathorized />
  )
}

export default NewTaskForm
