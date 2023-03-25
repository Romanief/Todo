import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { taskContext } from "../Contexts/DataContext"
import { loginContext } from "../Contexts/LoginContext"

import { Task } from "../Types/types"

const TaskPage = () => {
  const { id } = useParams()
  const { tasks }: { tasks: Array<Task> } = useContext(taskContext)
  const { authTokens, logout } = useContext(loginContext)
  const { getTasks } = useContext(taskContext)
  const task = tasks.filter((x) => x.id == parseInt(id!))[0]

  let completeTask = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        name: task.name,
        description: task.description,
        deadline: task.deadline,
        isCompleted: true,
      }),
    })
    let data = await response.json()

    if (response.status == 200) {
      console.log(data.isCompleted)
      getTasks()
    } else if (response.statusText === "Unauthorized") {
      logout()
    }
  }

  function handleClick() {
    completeTask()
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-3xl font-extrabold mx-auto mt-10 text-pink-500">
        {task?.name}
      </div>
      <div className="text-xl my-3 text-center w-1/3 mx-auto">
        {task?.description}
      </div>
      <div className="text-xl my-3 text-center w-1/3 mx-auto">
        Ends on:{" "}
        <span className="font-extrabold">{task?.deadline.toString()}</span>
      </div>
      {task?.isCompleted ? (
        <div className="text-xl my-3 text-center w-1/3 mx-auto">
          Task Completed!
        </div>
      ) : (
        <div
          className="text-xl my-3 text-center w-1/3 mx-auto bg-gray-100 hover:bg-pink-100 p-3 rounded-3xl"
          onClick={handleClick}
        >
          Complete
        </div>
      )}
    </div>
  )
}

export default TaskPage
