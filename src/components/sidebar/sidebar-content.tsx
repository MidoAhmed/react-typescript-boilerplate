import React from 'react';
import PropTypes from 'prop-types';
import MaterialTitlePanel from '../material-title-panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughWink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
  sidebarBrand: {
    color: '#fff',
    height: '4.375rem',
    fontSize: '1rem',
    fontWeight: 800,
    padding: '1.5rem 1rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '.05rem',
    zIndex: 1,
  },
  sidebarBrandIcon: {
    transform: 'rotate(-15deg)',
    fontSize: '2rem',
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

  const sidebarBrand = (
    <Link
      className="navbar-brand d-flex justify-content-center align-items-center m-0"
      style={styles.sidebarBrand}
      to="/"
    >
      <div className="" style={styles.sidebarBrandIcon}>
        <FontAwesomeIcon icon={faLaughWink} />
      </div>
      <div className="sidebar-brand-text mx-3">
        <span>Brand</span>
      </div>
    </Link>
  );

  return (
    <MaterialTitlePanel
      title={sidebarBrand}
      style={style}
      headerClassName="sidebar-header topbar"
    >
      <div
        className="material-panel-content sidebar-content"
        style={styles.content}
      >
        <a href="# " style={styles.sidebarLink}>
          Home
        </a>
        <a href="# " style={styles.sidebarLink}>
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
