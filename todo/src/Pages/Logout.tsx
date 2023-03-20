import useSWR from "swr"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const fetcher = (...args: any) => fetch(args).then((res) => res.json())

export default function Logout({
  setLogIn,
  logIn,
}: {
  setLogIn: any
  logIn: boolean
}) {
  const navigate = useNavigate()

  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8000/logout/",
    fetcher
  )

  if (data) {
    console.log("succsess", data)
    setLogIn(false)
    navigate(-1)
  }

  return (
    <div>
      {logIn && (
        <div className="container w-3/5 mx-auto text-center text-3xl font-bold p-10 my-10">
          <div className="text-pink-500 my-3 text-5xl">Please Wait</div>
          You are being logged out
        </div>
      )}
    </div>
  )
}
