import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";

const styles = {
  sidebar: {
    width: 256,
    height: "100%",
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none",
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575",
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white",
  },
};

const SidebarContent = (props) => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push();
  }

  return (
    <MaterialTitlePanel title="Menu" style={style} headerClassName="sidebar-header">
      <div className="material-panel-content sidebar-content" style={styles.content}>
        <a href="#" style={styles.sidebarLink}>
          Home
        </a>
        <a href="#" style={styles.sidebarLink}>
          Responsive Example
        </a>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
