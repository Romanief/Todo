const myElem = [
  { name: "Home", pathing: "Home", link: "/" },
  { name: "Daily", pathing: "Daily", link: "/daily" },
  { name: "Tasks", pathing: "Tasks", link: "tasks" },
  { name: "Calendar", pathing: "Calendar", link: "/calendar" },
]

const tasks = [
  {
    name: "Grocery",
    deadline: new Date(),
    isCompleted: false,
    link: "tasks/grocery",
  },
  {
    name: "Cleaning",
    deadline: new Date(),
    isCompleted: true,
    link: "tasks/cleaning",
  },
  {
    name: "TodoApp",
    deadline: new Date(),
    isCompleted: false,
    link: "tasks/todoApp",
  },
]

const favs = [
  { name: "I have no idea" },
  { name: "of what to put" },
  { name: " here :C" },
]

const daily = [
  { name: "Exercise", link: "daily/exercise", isCompleted: true },
  { name: "Shower", link: "daily/shower", isCompleted: false },
  { name: "Study", link: "daily/study", isCompleted: true },
  { name: "task1", link: "daily/exercise", isCompleted: true },
  { name: "task2", link: "daily/e3xercise", isCompleted: true },
  { name: "task3", link: "daily/exercise", isCompleted: false },
]

const options = [
  { name: "Edit Profile" },
  { name: "Log Out" },
  { name: "Invite Friends" },
]

export { myElem, tasks, favs, options, daily }
