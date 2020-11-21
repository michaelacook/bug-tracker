import React from "react"
import { NavLink } from "react-router-dom"
import { Input, Menu } from "semantic-ui-react"

export default function () {
  return (
    <div>
      <Menu inverted color="black">
        <Menu.Item as={NavLink} exact to="/dashboard" name="dashboard" />
        <Menu.Item as={NavLink} exact to="/projects" name="my projects" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/signout" name="signout" />
        </Menu.Menu>
      </Menu>
    </div>
  )
}
