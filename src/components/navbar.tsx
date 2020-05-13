import React from 'react';
import avatar from '../assets/img/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faBell,
  faFileAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  menuButtonClick: any;
}

const styles = {
  imgProfile: {
    height: '2rem',
    width: '2rem',
  },
};

const Navbar = (props: Props) => {
  return (
    <div className="container-fluid">
      <button
        className="btn btn-outline-light rounded-circle mr-3"
        id="sidebarToggleTop"
        type="button"
        onClick={(event) => props.menuButtonClick(event)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            className="bg-light form-control border-0 small"
            type="text"
            placeholder="Search for ..."
          />
          <div className="input-group-append">
            <button className="btn btn-primary py-0" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </form>
      <ul className="nav navbar-nav flex-nowrap ml-auto">
        <li className="nav-item dropdown d-sm-none no-arrow">
          <a
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
            aria-expanded="false"
            href="# "
          >
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
            role="menu"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto navbar-search w-100">
              <div className="input-group">
                <input
                  className="bg-light form-control border-0 small"
                  type="text"
                  placeholder="Search for ..."
                />
                <div className="input-group-append">
                  <button className="btn btn-primary py-0" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1" role="presentation">
          <div className="nav-item dropdown no-arrow">
            <a
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
              href="# "
            >
              <span className="badge badge-danger badge-counter">3+</span>
              <FontAwesomeIcon icon={faBell} className="fa-fw" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
              role="menu"
            >
              <h6 className="dropdown-header">alerts center</h6>
              <a className="d-flex align-items-center dropdown-item" href="# ">
                <div className="mr-3">
                  <div className="bg-primary icon-circle">
                    <i className="fas fa-file-alt text-white"></i>
                    <FontAwesomeIcon icon={faFileAlt} className="text-white" />
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">December 12, 2019</span>
                  <p>A new monthly report is ready to download!</p>
                </div>
              </a>
              <a className="d-flex align-items-center dropdown-item" href="# ">
                <div className="mr-3">
                  <div className="bg-success icon-circle">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">December 7, 2019</span>
                  <p>$290.29 has been deposited into your account!</p>
                </div>
              </a>
              <a className="d-flex align-items-center dropdown-item" href="# ">
                <div className="mr-3">
                  <div className="bg-warning icon-circle">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">December 2, 2019</span>
                  <p>
                    Spending Alert: We&#39;ve noticed unusually high spending
                    for your account.
                  </p>
                </div>
              </a>
              <a
                className="text-center dropdown-item small text-gray-500"
                href="# "
              >
                Show All Alerts
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1" role="presentation">
          <div className="nav-item dropdown no-arrow">
            <a
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
              href="# "
            >
              <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
              <span className="badge badge-danger badge-counter">7</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
              role="menu"
            >
              <h6 className="dropdown-header">alerts center</h6>
              <a className="d-flex align-items-center dropdown-item" href="# ">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={avatar} alt="avatar" />
                  <div className="bg-success status-indicator"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    <span>
                      Hi there! I am wondering if you can help me with a problem
                      I&#39;ve been having.
                    </span>
                  </div>
                  <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                </div>
              </a>
              <a className="d-flex align-items-center dropdown-item" href="# ">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="avatars/avatar2.jpeg" alt=""/>
                  <div className="status-indicator"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    <span>I have the photos that you ordered last month!</span>
                  </div>
                  <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                </div>
              </a>
              <a className="d-flex align-items-center dropdown-item" href="# ">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="avatars/avatar3.jpeg" alt=""/>
                  <div className="bg-warning status-indicator"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    <span>
                      Last month&#39;s report looks great, I am very happy with
                      the progress so far, keep up the good work!
                    </span>
                  </div>
                  <p className="small text-gray-500 mb-0">
                    Morgan Alvarez - 2d
                  </p>
                </div>
              </a>
              <a className="d-flex align-items-center dropdown-item" href="# ">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="avatars/avatar5.jpeg" alt=""/>
                  <div className="bg-success status-indicator"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    <span>
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they
                      aren&#39;t good...
                    </span>
                  </div>
                  <p className="small text-gray-500 mb-0">
                    Chicken the Dog · 2w
                  </p>
                </div>
              </a>
              <a
                className="text-center dropdown-item small text-gray-500"
                href="# "
              >
                Show All Alerts
              </a>
            </div>
          </div>
          <div
            className="shadow dropdown-list dropdown-menu dropdown-menu-right"
            aria-labelledby="alertsDropdown"
          ></div>
        </li>
        <div className="topbar-divider"></div>
        <li className="nav-item dropdown no-arrow" role="presentation">
          <div className="nav-item dropdown no-arrow">
            <a
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
              href="# "
            >
              <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                Valerie Luna
              </span>
              <img
                className="border rounded-circle"
                style={styles.imgProfile}
                src={avatar}
                alt="avatar"
              />
            </a>
            <div
              className="dropdown-menu shadow dropdown-menu-right animated--grow-in"
              role="menu"
            >
              <a className="dropdown-item" role="presentation" href="# ">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                 Profile
              </a>
              <a className="dropdown-item" role="presentation" href="# ">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                 Settings
              </a>
              <a className="dropdown-item" role="presentation" href="# ">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                 Activity log
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" role="presentation" href="# ">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                 Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
