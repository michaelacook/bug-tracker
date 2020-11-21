import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Provider } from "./components/Provider"

import HeaderMenu from "./components/HeaderMenu"
import Sidebar from "./components/Sidebar"
import { Header } from "semantic-ui-react"

export default function App() {
  return (
    <Provider>
      <Router>
        <HeaderMenu />
        <Sidebar />
        <Switch></Switch>
      </Router>
    </Provider>
  )
}
