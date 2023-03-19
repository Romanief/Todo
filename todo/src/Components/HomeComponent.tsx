export default function HomeComponent({
  title,
  content,
  w = 100,
}: {
  title: string
  content: any
  w?: number
}) {
  return (
    <div className={w ? `mx-10 my-5 w-${w}` : "mx-10 my-5 w-full"}>
      <div className="text-3xl font-bold">{title}</div>
      <div className="rounded-3xl border mt-5 px-3">{content}</div>
    </div>
  )
}
