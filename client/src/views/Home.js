import React from "react"
import Frame from "../components/Frame"
import PieChart from "../components/PieChart"

/**
 * Render home dashboard
 * props passed to dashboard is test data
 */
export default () => {
  return (
    <Frame elements={() => (
      <div className="container-fluid">
        <h2 className="text-secondary ml-2">Dashboard</h2>
        <PieChart issuesCountByPriority={[20, 6, 14]} />
      </div>
    )} />
  )
}
