import React, { useContext, useState } from "react"
import { loginContext } from "../Contexts/LoginContext"

const Register = () => {
  const [message, setMessage] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [usernameInput, setUsernameInput] = useState("")
  const { user, logout } = useContext(loginContext)

  let register = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput,
      }),
    })
    let data = await response.json()

    if (response.status === 200) {
      console.log(data)
      setMessage("Succsessfully registered")
    }
  }

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    console.log("click")

    if (usernameInput && passwordInput) {
      register()
    }
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
      ) : message ? (
        <div className="mx-auto my-10 py-10 text-center text-3xl text-pink-500 font font-extrabold">
          {message}
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
            value="Register"
            onClick={(e) => handleClick(e)}
          />
        </form>
      )}
    </div>
  )
}

export default Register
