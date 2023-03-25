import Avatar from "./Avatar"
import { Link } from "react-router-dom"

import { loginContext } from "../Contexts/LoginContext"
import { useContext } from "react"

export default function ProfileBar() {
  const { user } = useContext(loginContext)
  return (
    <div className="w-11/12 mx-auto h-1/6 border-b border-slate-100 flex flex-row-reverse text-xl justify-between">
      <div className="flex flex-row-reverse">
        {user && (
          <Avatar
            initials={
              user.username[0].toUpperCase() + user.username[1].toUpperCase()
            }
          />
        )}
        <div className="my-auto">
          <Link className="mx-3" to="/">
            {user ? "" : "Register"}
          </Link>
          <Link className="mx-3" to="/">
            {user ? "Logout" : "Login"}
          </Link>
        </div>
      </div>
      <img
        className=" w-1/5 rounded my-5"
        src={require("../Images/logo.jpeg")}
      />
    </div>
  )
}
