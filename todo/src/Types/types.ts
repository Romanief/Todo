type Task = {
  id: number
  name: string
  description: string
  deadline: Date
  isCompleted: boolean
  author_id: number
}

type DailyTask = {
  id: number
  name: string
  isCompleted: boolean
  author_id: number
}

type Author = {
  id: number
  username: string
  first: string
  last: string
}

type Option = {
  id?: number
  name: string
}

export type { Task, DailyTask, Author, Option }
