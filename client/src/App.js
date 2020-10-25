import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Provider } from "./components/Provider"
import Home from "./views/Home"

// notifications object for UI testing
import testNotifications from "./test_notifications"

export default function App() {
  const [notifications, setNotifications] = useState("")
  const [notificationsCount, setNotificationsCount] = useState("")

  useEffect(() => {
    setNotifications(testNotifications)
    setNotificationsCount(notifications.count)
  }, [notifications.count])

  /**
   * Remove clicked notification, decrement notification count
   * @param {Number} id - notification id
   */
  function viewed(id) {
    const newNotifications = Object.assign(notifications)
    newNotifications.notifications = newNotifications.notifications.filter(
      (notif) => notif.id !== id
    )
    setNotifications(newNotifications)
    setNotificationsCount(notificationsCount - 1)
  }

  return (
    <Provider
      value={{
        notifications,
        notificationsCount,
        viewed,
      }}
    >
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}
