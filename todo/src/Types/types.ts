type Task = {
  id: number
  name: string
  description: string
  deadline: Date
  isCompleted: boolean
}

type Dailyask = {
  id: number
  name: string
  isCompleted: boolean
}

export type { Task, Dailyask }
