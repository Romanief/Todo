const myElem = [
  { name: "Home" },
  { name: "Tasks" },
  { name: "Daily" },
  { name: "Calendar" },
]

const tasks = [
  {
    id: 1,
    name: "TaskName",
    description: "Task description example blablablah",
    deadline: new Date(),
    isCompleted: false,
    author_id: 1,
  },
]

const favs = [
  {
    id: 1,
    name: "TaskName",
    description: "Task description example blablablah",
    deadline: new Date(),
    isCompleted: false,
    author_id: 1,
  },
]

const daily = [
  {
    id: 2,
    name: "DailyTaskName",
    isCompleted: false,
    author_id: 1,
  },
]

const options = [
  { name: "Edit Profile" },
  { name: "Log Out" },
  { name: "Invite Friends" },
]

export { myElem, tasks, favs, options, daily }
