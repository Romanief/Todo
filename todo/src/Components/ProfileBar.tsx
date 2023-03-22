import Avatar from "./Avatar"
import SideBarList from "./SideBarList"

import { loggedInOptions, loggedOutOptions } from "../PseudoData/pseudoData"
import { Link } from "react-router-dom"

export default function ProfileBar() {
  return (
    <div className="w-11/12 mx-auto h-1/6 border-b border-slate-100 flex flex-row-reverse text-xl">
      <Avatar initials="FR" />
      <div className="my-auto">
        <Link className="mx-3" to="/Home">
          Home
        </Link>
        <Link className="mx-3" to="/Login">
          Login
        </Link>
      </div>
    </div>
  )
}
