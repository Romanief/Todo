import useSWR from "swr"
const fetcher = (...args: any) => fetch(args).then((res) => res.json())
const { data, error, isLoading } = useSWR(
  "http://127.0.0.1:8000/tasks/",
  fetcher
)

if (isLoading) {
  console.log("loading")
}
if (data) {
  console.log(data)
}
if (error) {
  console.log(error)
}
