import Avatar from "./Avatar"
import SideBarList from "./SideBarList"

import { options } from "../PseudoData/pseudoData"

export default function ProfileBar() {
  return (
    <div className="w-11/12 mx-auto h-1/6 border-b border-slate-100 flex flex-row-reverse text-xl">
      <Avatar initials="FR" />
      <div className="my-auto">
        <SideBarList horizontal={true} list={options} />
      </div>
    </div>
  )
}
