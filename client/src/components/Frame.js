import React, { useContext } from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Footer from "../components/Footer"
import Context from "../components/Provider"

/**
 * Frame provides the sidebar, topbar, and footer
 * elements prop references a function that renders any passed components
 */
export default ({ elements }) => {
  const { viewed, notifications, notificationsCount } = useContext(Context)

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
          {elements()}
        </div>
        <Footer />
      </div>
    </div>
  )
}
