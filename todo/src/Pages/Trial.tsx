import { useState } from "react"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"

export default function Trials() {
  let [usernameInput, setUsernameInput] = useState("")
  let [passwordInput, setPasswordInput] = useState("")

  let [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")!)
      : null
  )
  let [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens")!)
      : null
  )

  let navigate = useNavigate()

  let loginUser = async (e: any) => {
    e.preventDefault()

    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput,
      }),
    })

    let data: any = await response.json()
    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem("authTokens", JSON.stringify(data))
    } else {
      alert("Something went wrong, dumbass")
    }
  }

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem("authTokens")
  }
  return (
    <div>
      {user ? (
        <div className="w-1/3 mx-auto mt-10 py-10 text-center">
          <div className="text-3xl font-bold my-5">
            Logged in as{" "}
            <span className="text-pink-500 font-extrabold">
              {(user as any).username}
            </span>
          </div>
          <div
            className="btn bg-gray-200 hover:bg-pink-200 rounded-3xl px-5 py-3 my-3 border text-lg"
            onClick={logoutUser}
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
            type="text"
            name="password"
            placeholder="Enter Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <input
            className="btn bg-gray-200 hover:bg-pink-200 rounded-3xl px-5 py-3 my-3 border text-lg"
            type="submit"
            value="Login"
            onClick={loginUser}
          />
        </form>
      )}
    </div>
  )
}
