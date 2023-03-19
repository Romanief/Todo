export default function Cube({
  size,
  completed,
}: {
  size: number
  completed: boolean
}) {
  return (
    <div
      className={
        completed
          ? `w-10 h-10 border-y-2 border-gray-200 bg-gray-300 first:border-l-2 first:rounded-l-3xl last:border-r-2 last:rounded-r-3xl`
          : `w-10 h-10 border-y-2 border-gray-200 bg-pink-500 first:border-l-2 first:rounded-l-3xl last:border-r-2 last:rounded-r-3xl`
      }
    ></div>
  )
}
