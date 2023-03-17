const myElem = [
  { text: "Home", pathing: "Home", link: "/" },
  { text: "Daily", pathing: "Daily", link: "/daily" },
  { text: "Tasks", pathing: "Tasks", link: "tasks" },
  { text: "Calendar", pathing: "Calendar", link: "/calendar" },
]

const tasks = [
  {
    text: "Grocery",
    expire: new Date(),
    isActive: false,
    link: "tasks/grocery",
  },
  {
    text: "Cleaning",
    expire: new Date(),
    isActive: true,
    link: "tasks/cleaning",
  },
  {
    text: "TodoApp",
    expire: new Date(),
    isActive: false,
    link: "tasks/todoApp",
  },
]

const favs = [
  { text: "I have no idea" },
  { text: "of what to put" },
  { text: " here :C" },
]

const daily = [
  { text: "Exercise", link: "daily/exercise", isActive: true },
  { text: "Shower", link: "daily/shower", isActive: false },
  { text: "Study", link: "daily/study", isActive: true },
  { text: "task1", link: "daily/exercise", isActive: true },
  { text: "task2", link: "daily/e3xercise", isActive: true },
  { text: "task3", link: "daily/exercise", isActive: false },
]

const options = [
  { text: "Edit Profile" },
  { text: "Log Out" },
  { text: "Invite Friends" },
]

export { myElem, tasks, favs, options, daily }
