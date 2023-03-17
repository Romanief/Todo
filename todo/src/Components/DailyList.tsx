export default function DailyList({
  daily,
  showCheckBox = true,
  small = false,
}: {
  daily: Array<any>
  showCheckBox?: boolean
  small?: boolean
}) {
  return (
    <div className={showCheckBox ? "w-1/3" : ""}>
      {daily.map((x) => {
        return (
          <div
            onClick={(e) => {
              x.isActive = x.isActive ? false : true
            }}
            className="text-lg mt-3 mb-5 flex justify-between w-full px-5 py-3 rounded-3xl hover:bg-pink-50"
          >
            <div className="">{x.text}</div>
            {showCheckBox && (
              <div
                className={
                  x.isActive
                    ? "w-3 h-3 border-2 rounded-full my-auto bg-white"
                    : "w-3 h-3 border-2 rounded-full my-auto bg-pink-600"
                }
              ></div>
            )}
          </div>
        )
      })}
    </div>
  )
}
