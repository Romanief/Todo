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

  useEffect(() => {}, [savedUser, savedPassword])

  return (
    <div>
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
          onClick={handleClick}
        />
      </form>
    </div>
  )
}
