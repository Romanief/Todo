import { DailyTask, Option, Task } from "../Types/types"

// These are data that need to be connected to API
// TODO: Create API requests in component and subsitute old data with new data, delete these Arrays
const tasks: Array<Task> = [
  {
    id: 1,
    name: "TaskName",
    description: "Task description example blablablah",
    deadline: new Date(),
    isCompleted: false,
    author_id: 1,
  },
]

const favs: Array<Task> = [
  {
    id: 1,
    name: "TaskName",
    description: "Task description example blablablah",
    deadline: new Date(),
    isCompleted: false,
    author_id: 1,
  },
]

const daily: Array<DailyTask> = [
  {
    id: 2,
    name: "DailyTaskName",
    isCompleted: false,
    author_id: 1,
  },
]

// These are static options that do not need to be connected to an API

const myElem: Array<Option> = [
  { name: "Home" },
  { name: "Tasks" },
  { name: "Daily" },
]

const loggedInOptions: Array<Option> = [
  { name: "Edit" },
  { name: "Logout" },
  { name: "Invite" },
]

const loggedOutOptions: Array<Option> = [
  { name: "Register" },
  { name: "Login" },
]

export { myElem, tasks, favs, loggedInOptions, loggedOutOptions, daily }
