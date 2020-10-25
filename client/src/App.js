import React, { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"

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
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar
            viewed={viewed}
            notifications={notifications}
            notificationsCount={notificationsCount}
          />
        </div>
        <Footer />
      </div>
    </div>
  )
}
