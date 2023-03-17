import DailyList from "../Components/DailyList"
import Cube from "../Components/Cube"

export default function Daily({ daily }: { daily: Array<any> }) {
  return (
    <div className="text-lg my-3 h-4/5 flex w-full justify-between">
      <DailyList daily={daily} />
      <div className="flex flex-col justify-between px-10">
        <div className="w-full h-full text-5xl rounded mx-3 my-3 py-5 px-10 flex justify-center">
          <div className="rounded p-5 my-auto text-pink-600 font-bold text-center">
            "A quote of your choice to motivate you"
          </div>
        </div>
        <div className="text-3xl w-full text-center mx-10 my-3 h-full rounde py-10 px-10 border-t border-slate-100 ">
          Task completed: {daily.filter((x) => x.isActive == false).length} /{" "}
          {daily.length}
          <div className="flex justify-center mt-5">
            {daily
              .filter((x) => x.isActive == false)
              .map((x) => {
                return <Cube size={10} completed={x.isActive} />
              })}
            {daily
              .filter((x) => x.isActive)
              .map((x) => {
                return <Cube size={10} completed={x.isActive} />
              })}
          </div>
          {daily.filter((x) => x.isActive).length == 0 && (
            <div className="text-lg my-3">Well Done!</div>
          )}
        </div>
      </div>
    </div>
  )
}
