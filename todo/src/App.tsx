// External imports
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import jwt_decode from "jwt-decode"

// Context imports
import { LoginContext } from "./Contexts/LoginContext"
import { TaskContext } from "./Contexts/DataContext"

// Pages imports
import Home from "./Pages/Home"
import Daily from "./Pages/Daily"
import Calendar from "./Pages/Calendar"
import Tasks from "./Pages/Tasks"
import Trial from "./Pages/Trial"

// Component imports
import SideBar from "./Components/SideBar"
import ProfileBar from "./Components/ProfileBar"

// Data imports (TODO: To remove and make everything from API)
import { daily } from "./PseudoData/pseudoData"

export default function App() {
  // States that needs to be global (TODO: Externalise contexts value and move data somewhere else)
  // Authorization states:
  let [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")!)
      : null
  )

  // Return
  return (
    // Container
    <div className="w-screen h-screen flex">
      {/* Context expanded to the whole app */}

      <LoginContext>
        <TaskContext>
          <SideBar />
          <div className="flex flex-col w-full h-full">
            <ProfileBar />
            <div className="py-5 px-12 w-full h-full">
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="Calendar" element={<Calendar />} />
                <Route path="Daily" element={<Daily daily={daily} />} />
                <Route path="Tasks" element={<Tasks />} />
                <Route path="" element={<Trial />} />
              </Routes>
            </div>
          </div>
        </TaskContext>
      </LoginContext>
      {/* </loginContext.Provider> */}
    </div>
  )
}
