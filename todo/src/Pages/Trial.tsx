import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { loginContext } from "../Contexts/LoginContext"

export default function Trials() {
  const { user, login, logout } = useContext(loginContext)
  let [usernameInput, setUsernameInput] = useState("")
  let [passwordInput, setPasswordInput] = useState("")

  let navigate = useNavigate()

  const handleClick = (e: any) => {
    e.preventDefault()
    login(usernameInput, passwordInput)
    navigate("/Home")
  }

  return (
    <div>
      {user ? (
        <div className="w-1/3 mx-auto mt-10 py-10 text-center">
          <div className="text-3xl font-bold my-5">
            Logged in as{" "}
            <span className="text-pink-500 font-extrabold">
              {user.username}
            </span>
          </div>
          <div
            className="btn bg-gray-200 hover:bg-pink-200 rounded-3xl px-5 py-3 my-3 border text-lg"
            onClick={logout}
          >
            Logout
          </div>
        </div>
      ) : (
        <form className="container flex flex-col w-1/3 mx-auto my-10">
          <input
            className="rounded-3xl bg-gray-100 hover:bg-pink-100 px-5 py-3 my-3 focus:outline-none"
            type="text"
            name="username"
            placeholder="Enter Username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <input
            className="rounded-3xl bg-gray-100 hover:bg-pink-100 px-5 py-3 my-3 focus:outline-none"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <input
            className="btn bg-gray-200 hover:bg-pink-200 rounded-3xl px-5 py-3 my-3 border text-lg"
            type="submit"
            value="Login"
            onClick={(e) => handleClick(e)}
          />
        </form>
      )}
    </div>
  )
}
