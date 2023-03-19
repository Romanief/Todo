import DailyList from "../Components/DailyList"
import Cube from "../Components/Cube"

export default function Daily({ daily }: { daily: Array<any> }) {
  return (
    <div className="text-lg my-3 h-4/5 flex w-full justify-between">
      <DailyList daily={daily} />

      <div className="flex flex-col justify-between px-10">
        {/* Quote on side */}
        <div className="w-full h-full text-5xl rounded mx-3 my-3 py-5 px-10 flex justify-center">
          <div className="rounded p-5 my-auto text-pink-600 font-bold text-center">
            "A quote of your choice to motivate you"
          </div>
        </div>

        {/* Number of tasks completed on side */}
        <div className="text-3xl w-full text-center mx-10 my-3 h-full rounde py-10 px-10 border-t border-slate-100 ">
          Task completed: {daily.filter((x) => x.isCompleted == false).length} /{" "}
          {daily.length}
          {/* Shows task completed as a graph */}
          <div className="flex justify-center mt-5">
            {daily
              .filter((x) => x.isCompleted == false)
              .map((x, i) => {
                return <Cube size={10} key={i} completed={x.isCompleted} />
              })}
            {daily
              .filter((x) => x.isCompleted)
              .map((x, i) => {
                return <Cube size={10} key={i} completed={x.isCompleted} />
              })}
          </div>
          {/* Show message if all tasks are completed */}
          {daily.filter((x) => x.isCompleted).length == 0 && (
            <div className="text-lg my-3">Well Done!</div>
          )}
        </div>
      </div>
    </div>
  )
}
