import { useContext } from "react"

import SideBarList from "./SideBarList"
import { myElem } from "../PseudoData/pseudoData"
import { loginContext } from "../Contexts/LoginContext"
import { taskContext } from "../Contexts/DataContext"

export default function SideBar() {
  const { user } = useContext(loginContext)
  const { tasks } = useContext(taskContext)

  return (
    <div className="h-screen w-1/5 flex flex-col">
      <img
        className=" w-11/12 rounded mx-auto my-5"
        src={require("../Images/logo.jpeg")}
      />
      {user && (
        <div className="rounded-3xl mx-auto w-10/12 h-3/4 bg-gray-100 my-3 p-5">
          <SideBarList list={myElem} />
          {user && <SideBarList list={tasks} title={"Approaching"} />}
          {user && <SideBarList list={tasks} title={"Favourites"} />}
        </div>
      )}
    </div>
  )
}
