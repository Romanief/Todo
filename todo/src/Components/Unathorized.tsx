import React from "react"
import { Link } from "react-router-dom"

const Unathorized = () => {
  return (
    <div className="mx-auto my-10 py-10 text-center text-3xl">
      Please{" "}
      <Link to={"/"} className="text-pink-500 font-extrabold">
        login
      </Link>{" "}
      to view this page
    </div>
  )
}

export default Unathorized
