import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Provider } from "./components/Provider"

export default function App() {
  return (
    // <Provider>
    //   <Router>
    //     <Switch>
    //       <Route path="/" component={<div>Hello World!</div>} />
    //     </Switch>
    //   </Router>
    // </Provider>
    <div>Hello World!</div>
  )
}
