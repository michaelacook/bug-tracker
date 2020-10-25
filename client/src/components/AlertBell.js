import React from "react"

/**
 * Handle interactive display of notifications alerts
 * When the API is up and running, this component should query the API and not accept props
 * Currently it accepts props for demonstration and testing purposes
 */
export default ({ viewed, notifications, notificationsCount }) => {
  return (
    <div>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="alertsDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-bell fa-fw"></i>

        {notificationsCount > 0 ? (
          <span className="badge badge-danger badge-counter">
            {notificationsCount}
          </span>
        ) : null}
      </a>

      <div
        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
        aria-labelledby="alertsDropdown"
      >
        <h6 className="dropdown-header">Notifications</h6>
        {notificationsCount > 0 ? (
          notifications.notifications.map((notification) => (
            <a
              key={notification.id}
              onClick={() => viewed(notification.id)}
              className="dropdown-item d-flex align-items-center"
              href="#"
            >
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-file-alt text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">{notification.date}</div>
                <span className="font-weight-bold">{notification.text}</span>
              </div>
            </a>
          ))
        ) : (
          <div className="dropdown-item">
            <span>You have no new notifications.</span>
          </div>
        )}
        <a className="dropdown-item text-center small text-gray-500" href="#">
          View All Notifications
        </a>
      </div>
    </div>
  )
}
