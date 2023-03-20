import { FormEvent, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useSWR from "swr"

const fetcher = (...args: any) => fetch(args).then((res) => res.json())

export default function Login({
  setLogIn,
  setUsername,
}: {
  setLogIn: any
  setUsername: any
}) {
  const navigate = useNavigate()

  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  const [savedUser, setSavedUser] = useState("")
  const [savedPassword, setSavedPassword] = useState("")

  const handleClick = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    setSavedUser(usernameInput)
    setSavedPassword(passwordInput)
    setUsernameInput("")
    setPasswordInput("")
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: savedUser,
        password: savedPassword,
      }),
    })
      .then((data) => {
        if (data.status == 200) {
          setLogIn(true)
          data.json()
          console.log("Success", data, data.status)
          console.log("redirected")
        }
      })
      .then((data) => {
        setUsername(data.username)
      })
  }, [savedUser, savedPassword])

  return (
    <div>
      <form className="container flex flex-col w-1/3 mx-auto my-10">
        <input
          className="rounded-3xl bg-gray-100 hover:bg-pink-100 px-5 py-3 my-3 focus:outline-none"
          type="text"
          placeholder="Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <input
          className="rounded-3xl bg-gray-100 hover:bg-pink-100 px-5 py-3 my-3 focus:outline-none"
          type="text"
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <input
          className="btn bg-gray-200 hover:bg-pink-200 rounded-3xl px-5 py-3 my-3 border text-lg"
          type="submit"
          value="Login"
          onClick={handleClick}
        />
      </form>
    </div>
  )
}
