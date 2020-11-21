import React from "react"
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react"
// https://www.youtube.com/watch?v=lt9x2-0Vnr4&ab_channel=Grepsoft

export default () => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="slide out"
      icon="labeled"
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="dashboard" />
        Dashboard
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="folder" />
        Projects
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="users" />
        My Team
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="user" />
        Account
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="setting" />
        Settings
      </Menu.Item>
    </Sidebar>

    {/* <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher> */}
  </Sidebar.Pushable>
)
