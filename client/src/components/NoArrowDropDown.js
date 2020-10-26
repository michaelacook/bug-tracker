import React from "react"

/*
example menuItems array:

[
  {
    link: true,
    func: false,
    itemText: "Delete",
    path: "/delete",
    funcRef: null,
  },
  {
    link: false,
    func: true,
    itemText: "Click Me",
    funcRef: function() { ... }
  }
]
*/

/**
 * Accepts headerText and menuItems props
 * menuItems is an array of objects containing references
 * to link text, link paths or function to run on click
 */
export default ({ headerText, menuItems }) => {
  return (
    <div className="dropdown no-arrow">
      <a
        id="issuesByPriorityDropdown"
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
      >
        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
      </a>
      <div
        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
        aria-labelledby="issuesByPriorityDropdown"
      >
        <div className="dropdown-header">{headerText}</div>
        {menuItems.map((item) =>
          item.link ? (
            <a className="dropdown-item" href={item.path}>
              {item.itemText}
            </a>
          ) : (
            <button className="dropdown-item" onClick={(e) => item.funcRef(e)}>
              {item.itemText}
            </button>
          )
        )}
      </div>
    </div>
  )
}
