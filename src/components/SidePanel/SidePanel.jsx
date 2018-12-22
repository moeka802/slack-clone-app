import React from "react";
import UserPanel from "./UserPanel.jsx";
import { Menu } from "semantic-ui-react";
import Channels from "./Channels.jsx";

class SidePanel extends React.Component {
  render() {
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#4c3c4c", fontSize: "1.2em" }}
      >
        <UserPanel />
        <Channels />
      </Menu>
    );
  }
}

export default SidePanel;
