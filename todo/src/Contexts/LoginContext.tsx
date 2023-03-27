import React, { createContext, useEffect, useState } from "react"
import jwt_decode from "jwt-decode"

import { Author as AuthorType } from "../Types/types"

const loginContext = createContext<any>({})

function LoginContext({ children }: { children: React.ReactNode }) {
  let [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")!)
      : null
  )

  let [user, setUser] = useState<AuthorType | any>(
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens")!)
      : null
  )

  let [loading, setLoading] = useState(true)

  let login = async (username: string, password: string) => {
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    let data: any = await response.json()
    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem("authTokens", JSON.stringify(data))
    } else {
      console.log(data)
    }
  }

  let logout = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem("authTokens")
  }

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    })
    let data: any = await response.json()

    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem("authTokens", JSON.stringify(data))
    } else {
      logout()
    }
    if (loading) {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (loading) {
      updateToken()
    }

    let fourMinutes = 1000 * 60 * 4
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken()
      }
    }, fourMinutes)

    return () => clearInterval(interval)
  }, [authTokens, loading])

  const providerValue = {
    user,
    authTokens,
    login,
    logout,
    updateToken,
  }

  return (
    <loginContext.Provider value={providerValue}>
      {children}
    </loginContext.Provider>
  )
}

export { loginContext, LoginContext }
