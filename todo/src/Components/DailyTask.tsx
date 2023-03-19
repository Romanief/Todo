import { useState } from "react"

export default function ({
  showCheckBox,
  x,
}: {
  showCheckBox: boolean
  x: any
}) {
  const [isCompleted, setIsCompleted] = useState(x.isCompleted)

  return (
    <div
      onClick={(e) => {
        setIsCompleted(isCompleted ? false : true)
      }}
      className="text-lg mt-3 mb-5 flex justify-between w-full px-5 py-3 rounded-3xl hover:bg-pink-50"
    >
      <div className="">{x.name}</div>
      {showCheckBox && (
        <div
          className={
            isCompleted
              ? "w-3 h-3 border-2 rounded-full my-auto bg-white"
              : "w-3 h-3 border-2 rounded-full my-auto bg-pink-600"
          }
        ></div>
      )}
    </div>
  )
}
