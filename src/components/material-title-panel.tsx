import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#03a9f4',
    color: 'white',
    padding: '16px',
  },
};

const MaterialTitlePanel = (props) => {
  const rootStyle = props.style?.root
    ? { ...styles.root, ...props.style?.root }
    : styles.root;

  const headerStyle = props.style?.header
    ? { ...styles.header, ...props.style?.header }
    : styles.header;

  return (
    <div className="material-panel" style={rootStyle}>
      <div
        className={'material-panel-header ' + props.headerClassName}
        style={headerStyle}
      >
        {props.title}
      </div>
      {props.children}
    </div>
  );
};

MaterialTitlePanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object,
  headerClassName: PropTypes.string,
};

export default MaterialTitlePanel;
