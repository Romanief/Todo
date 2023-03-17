import SideBarList from "./SideBarList"
import { myElem, tasks, favs } from "../PseudoData/pseudoData"

export default function SideBar() {
  return (
    <div className="h-screen w-1/5 flex flex-col">
      <img
        className=" w-11/12 rounded mx-auto my-5"
        src={require("../Images/logo.jpeg")}
      />
      <div className="rounded-3xl mx-auto w-10/12 h-3/4 bg-gray-100 my-3 p-5">
        <SideBarList list={myElem} />
        <SideBarList list={tasks} title={"Approaching"} />
        <SideBarList list={favs} title={"Favourites"} />
      </div>
    </div>
  )
}
