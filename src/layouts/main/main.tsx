import React from 'react';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from '../../components/material_title_panel';
import SidebarContent from '../../components/sidebar_content';
import Navbar from '../../components/navbar';

interface Props {}

interface State {
  docked: boolean;
  open: boolean;
  transitions: boolean;
  touch: boolean;
  shadow: boolean;
  pullRight: boolean;
  touchHandleWidth: any;
  dragToggleDistance: any;
}

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

const mql = window.matchMedia(`(min-width: 800px)`);

class Main extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: mql.matches,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    };

    this.onSetOpen = this.onSetOpen.bind(this);
    this.onSetDocked = this.onSetDocked.bind(this);
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({ docked: mql.matches, open: mql.matches });
  }

  onSetOpen(open: boolean) {
    this.setState({ open });
  }

  onSetDocked(docked: boolean) {
    this.setState({ docked });
  }

  handleMenuButtonClick(event) {
    event.preventDefault();
    this.onSetOpen(!this.state.open);
    this.onSetDocked(!this.state.docked);
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <Navbar menuButtonClick={this.handleMenuButtonClick} />
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      contentId: 'custom-sidebar-content-id',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel
          title={contentHeader}
          headerClassName="main-header navbar navbar-light navbar-expand shadow mb-4 topbar"
        >
          <div
            className="material-panel-content main-content"
            style={styles.content}
          >
            <p>
              React Sidebar is a sidebar component for React. It offers the
              following features:
            </p>
            <ul>
              <li>Have the sidebar slide over main content</li>
              <li>Dock the sidebar next to the content</li>
              <li>Touch enabled: swipe to open and close the sidebar</li>
              <li>
                Easy to combine with media queries for auto-docking (
                <a href="responsive_example.html">see example</a>)
              </li>
              <li>
                Sidebar and content passed in as PORCs (Plain Old React
                Components)
              </li>
              <li>
                <a href="https://github.com/balloob/react-sidebar">
                  Source on GitHub
                </a>{' '}
                (MIT license)
              </li>
              <li>Only dependency is React</li>
            </ul>
            <p>
              <a href="https://github.com/balloob/react-sidebar#installation">
                Instructions how to get started.
              </a>
            </p>
            <p>
              <b>Current rendered sidebar properties:</b>
            </p>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }
}

export default Main;
