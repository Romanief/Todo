import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import jwt_decode from "jwt-decode"

import Home from "./Pages/Home"
import Daily from "./Pages/Daily"
import Calendar from "./Pages/Calendar"
import Login from "./Pages/Login"
import Tasks from "./Pages/Tasks"
import Trial from "./Pages/Trial"
import SideBar from "./Components/SideBar"
import ProfileBar from "./Components/ProfileBar"

import { daily } from "./PseudoData/pseudoData"

export default function App() {
  let [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")!)
      : null
  )
  let [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens")!)
      : null
  )

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem("authTokens")
  }

  return (
    <div className="w-screen h-screen flex">
      <SideBar />
      <div className="flex flex-col w-full h-full">
        <ProfileBar />
        <div className="py-5 px-12 w-full h-full">
          <Routes>
            <Route
              path="/Home"
              element={
                <Home user={user} authTokens={authTokens} logout={logoutUser} />
              }
            />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Daily" element={<Daily daily={daily} />} />
            <Route path="Tasks" element={<Tasks />} />
            <Route
              path=""
              element={
                <Trial
                  user={user}
                  setUser={setUser}
                  authTokens={authTokens}
                  setAuthTokens={setAuthTokens}
                  logout={logoutUser}
                />
              }
            />
            <Route
              path="Login"
              element={<Login setLogIn={() => {}} setUsername={() => {}} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}
