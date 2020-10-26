import React, { useEffect, useRef } from "react"
import { Doughnut } from "react-chartjs-2"
import NoArrowDropDown from "./NoArrowDropDown"

/**
 * Display a doughnut chart showing number of issues by priority
 * Should receive an array of numbers representing issue counts by priority
 * in descending order from "High" to "Low"
 */
export default ({ issuesCountByPriority }) => {
  const data = {
    labels: ["High Priority", "Medium Priority", "Low Priority"],
    datasets: [
      {
        data: issuesCountByPriority,
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  }

  const menuItems = [
    {
      link: true,
      func: false,
      itemText: "Manage Issues",
      path: "",
      funcRef: null
    },
    {
      link: true,
      func: false,
      itemText: "View All",
      path: "",
      funcRef: null
    },
    // {
    //   link: false,
    //   func: true,
    //   itemText: "Click Me",
    //   path: "",
    //   funcRef: () => alert("Hello!!!")
    // }
  ]

  return (
    <div className="col-xl-4 col-lg-5 mt-5">
      <div className="card shadow">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="text-primary font-weight-bold m-0">
            Issues By Priority
          </h6>
          <NoArrowDropDown headerText="Manage Issues" menuItems={menuItems} />
        </div>
        <div className="card-body">
          <Doughnut width={250} height={250} data={data} options={options} />
        </div>
        <div className="card-footer">
          <div className="text-center small">
            <span className="mr-2">
              <i className="fas fa-circle text-primary"></i> High Priority
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-success"></i> Medium Priority
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-info"></i> Low Priority
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
