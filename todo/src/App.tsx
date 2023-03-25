// External imports
import { Route, Routes } from "react-router-dom"

// Context imports
import { LoginContext } from "./Contexts/LoginContext"
import { DailyTaskContext, TaskContext } from "./Contexts/DataContext"

// Pages imports
import Home from "./Pages/Home"
import Daily from "./Pages/Daily"
import Calendar from "./Pages/Calendar"
import Tasks from "./Pages/Tasks"
import Trial from "./Pages/Trial"

// Component imports
import SideBar from "./Components/SideBar"
import ProfileBar from "./Components/ProfileBar"
import TaskPage from "./Pages/TaskPage"

export default function App() {
  // Return
  return (
    // Container
    <div className="w-screen h-screen flex">
      {/* Context expanded to the whole app */}

      <LoginContext>
        <TaskContext>
          <DailyTaskContext>
            <div className="flex flex-col w-full h-full">
              <ProfileBar />
              <div className="flex w-full h-full">
                <SideBar />
                <div className="py-5 px-12 w-full h-full">
                  <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="Calendar" element={<Calendar />} />
                    <Route path="Daily" element={<Daily />} />
                    <Route path="Tasks" element={<Tasks />} />
                    <Route path="" element={<Trial />} />
                    <Route path="Tasks/:id" element={<TaskPage />} />
                  </Routes>
                </div>
              </div>
            </div>
          </DailyTaskContext>
        </TaskContext>
      </LoginContext>
      {/* </loginContext.Provider> */}
    </div>
  )
}
