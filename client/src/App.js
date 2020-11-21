import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Provider } from "./components/Provider"

import HeaderMenu from "./components/HeaderMenu"

export default function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/" component={HeaderMenu} />
        </Switch>
      </Router>
    </Provider>
  )
}
