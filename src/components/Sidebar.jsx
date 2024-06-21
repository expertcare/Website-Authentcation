import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ userRole, logout }) => {
  const profileLink = `/${userRole}_profile`;
  const coursesLink = `/${userRole}_courses`;
  const scheduleLink = `/${userRole}_schedule`;
  const attendanceLink = `/${userRole}_attendance`;
  const assignmentLink = `/${userRole}_assignment`;

  const handleLogout = () => {
    // Call the logout function passed as a prop
    logout();
  };

  return (
    <>
      <aside
        className="bsb-sidebar-1 offcanvas offcanvas-start"
        tabIndex="-1"
        id="bsbSidebar1"
        aria-labelledby="bsbSidebarLabel1"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header" data-bs-dismiss="offcanvas">
          <Link className="sidebar-brand" to="/home">
            <img
              src="https://rajrajhans.com/static/99e4a225dd2b10d50d9f3002d228ff6b/c1b63/post-13-2.png"
              alt="BootstrapBrain Logo"
              width="175"
              height="65"
            />
          </Link>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body pt-0">
          <hr className="sidebar-divider mb-3" />

          <ul className="navbar-nav">
            {/* Dashboards */}
            <li className="nav-item">
              <a
                className="nav-link p-3 active bg-light rounded"
                data-bs-toggle="collapse"
                href="#dashboardExamples"
                role="button"
                aria-expanded="true"
                aria-controls="dashboardExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="fa-solid fa-house"></i>
                </div>
                <span className="nav-link-text fw-bold">Dashboards</span>
              </a>
              <div className="collapse show" id="dashboardExamples">
                <ul className="nav flex-column ms-4">
                  {/* Dashboard links based on user's role */}
                  {userRole === "admin" ? (
                    <>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/admin_dashboard"
                        >
                          <div className="nav-link-icon text-primary-emphasis">
                            <i className="fa-solid fa-user-tie"></i>
                          </div>
                          <span className="nav-link-text">Admin Dashboard</span>
                        </Link>
                      </li>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/developer_dashboard"
                        >
                          <div className="nav-link-icon text-primary-emphasis">
                            <i className="fa-solid fa-user-tie"></i>
                          </div>
                          <span className="nav-link-text">
                            Developer Dashboard
                          </span>
                        </Link>
                      </li>
                    </>
                  ) : userRole === "faculty" ? (
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/faculty_dashboard"
                      >
                        <div className="nav-link-icon text-danger-emphasis">
                          <i className="fa-solid fa-chalkboard-user"></i>
                        </div>
                        <span className="nav-link-text">Faculty Dashboard</span>
                      </Link>
                    </li>
                  ) : userRole === "student" ? (
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/student_dashboard"
                      >
                        <div className="nav-link-icon text-info-emphasis">
                          <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <span className="nav-link-text">Student Dashboard</span>
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            </li>

            {/* Add your new clickable fields here */}
            {/* Example 1 */}

            {userRole === "student" || userRole === "faculty" ? (
              <>
                <li className="nav-item border-bottom border-top mt-3 py-1">
                  <Link
                    className="nav-link p-3"
                    to={profileLink}
                    data-bs-dismiss="collapse"
                    // data-bs-dismiss="offcanvas"
                  >
                    <div className="d-flex align-items-center gap-4">
                      <div className="nav-link-icon text-primary">
                        <i className="fa-solid fa-user-circle fa-lg"></i>{" "}
                        {/* Icon for My Profile */}
                      </div>
                      <span className="nav-link-text fw-bold">My Profile</span>
                    </div>
                  </Link>
                </li>
                {/* Example 2 */}
                <li className="nav-item border-bottom py-1">
                  <Link
                    className="nav-link p-3"
                    to={coursesLink}
                    data-bs-dismiss="collapse"
                  >
                    <div className="d-flex align-items-center gap-4">
                      <div className="nav-link-icon text-success">
                        <i className="fa-solid fa-book fa-lg"></i>{" "}
                        {/* Icon for My Courses */}
                      </div>
                      <span className="nav-link-text fw-bold">My Courses</span>
                    </div>
                  </Link>
                </li>
                {/* Example 3 */}
                <li className="nav-item border-bottom py-1">
                  <Link
                    className="nav-link p-3"
                    to={scheduleLink}
                    data-bs-dismiss="collapse"
                  >
                    <div className="d-flex align-items-center gap-4">
                      <div className="nav-link-icon text-warning">
                        <i className="fa-solid fa-calendar-alt fa-lg"></i>{" "}
                        {/* Icon for My Schedule */}
                      </div>
                      <span className="nav-link-text fw-bold">My Schedule</span>
                    </div>
                  </Link>
                </li>
                {/* Example 4 */}
                <li className="nav-item border-bottom py-1">
                  <Link
                    className="nav-link p-3"
                    to={attendanceLink}
                    data-bs-dismiss="collapse"
                  >
                    <div className="d-flex align-items-center gap-4">
                      <div className="nav-link-icon text-info">
                        <i className="fa-solid fa-check-circle fa-lg"></i>{" "}
                        {/* Icon for Attendance */}
                      </div>
                      <span className="nav-link-text fw-bold">Attendance</span>
                    </div>
                  </Link>
                </li>
                {/* Example 5 */}
                <li className="nav-item border-bottom py-1">
                  <Link
                    className="nav-link p-3"
                    to={assignmentLink}
                    data-bs-dismiss="collapse"
                  >
                    <div className="d-flex align-items-center gap-4">
                      <div className="nav-link-icon text-danger">
                        <i className="fa-solid fa-file-alt fa-lg"></i>{" "}
                        {/* Icon for Assignment */}
                      </div>
                      <span className="nav-link-text fw-bold">Assignment</span>
                    </div>
                  </Link>
                </li>
                {/* Example 6 */}
                <li className="nav-item border-bottom py-1">
                  <Link
                    className="nav-link p-3"
                    to="/notifications"
                    data-bs-dismiss="collapse"
                  >
                    <div className="d-flex align-items-center gap-4">
                      <div className="nav-link-icon text-primary">
                        <i className="fa-solid fa-bell fa-lg"></i>{" "}
                        {/* Icon for Notification */}
                      </div>
                      <span className="nav-link-text fw-bold">
                        Notification
                      </span>
                    </div>
                  </Link>
                </li>
              </>
            ) : (
              /* Admin links for sideBard */
              userRole === "admin" && (
                <>
                  <li className="nav-item border-bottom border-top mt-3 py-1">
                    <Link
                      className="nav-link p-3"
                      to={profileLink}
                      data-bs-dismiss="collapse"
                      // data-bs-dismiss="offcanvas"
                    >
                      <div className="d-flex align-items-center gap-4">
                        <div className="nav-link-icon text-primary">
                          <i className="fa-solid fa-user-circle fa-lg"></i>{" "}
                          {/* Icon for My Profile */}
                        </div>
                        <span className="nav-link-text fw-bold">
                          My Profile
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Manage Courses  */}
                  <li className="nav-item border-bottom py-1">
                    <Link
                      className="nav-link p-3"
                      to="/admin/manage_courses"
                      data-bs-dismiss="collapse"
                    >
                      <div className="d-flex align-items-center gap-4">
                        <div className="nav-link-icon text-success">
                          <i className="fa-solid fa-book fa-lg"></i>{" "}
                          {/* Icon for My Courses */}
                        </div>
                        <span className="nav-link-text fw-bold">
                          My Courses
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Manage Notifications  */}
                  <li className="nav-item border-bottom py-1">
                    <Link
                      className="nav-link p-3"
                      to="/admin/notifications"
                      data-bs-dismiss="collapse"
                    >
                      <div className="d-flex align-items-center gap-4">
                        <div className="nav-link-icon text-primary">
                          <i className="fa-solid fa-bell fa-lg"></i>{" "}
                          {/* Icon for Notification */}
                        </div>
                        <span className="nav-link-text fw-bold">
                          Manage Notification
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Manage Schedules */}
                  <li className="nav-item border-bottom py-1">
                    <Link
                      className="nav-link p-3"
                      to="/admin/student_schedule"
                      data-bs-dismiss="collapse"
                    >
                      <div className="d-flex align-items-center gap-4">
                        <div className="nav-link-icon text-warning">
                          <i className="fa-solid fa-calendar-alt fa-lg"></i>{" "}
                          {/* Icon for My Schedule */}
                        </div>
                        <span className="nav-link-text fw-bold">
                          Manage Schedule
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Manage users  */}
                  <li className="nav-item border-bottom py-1">
                    <Link
                      className="nav-link p-3"
                      to="/admin/user_list"
                      data-bs-dismiss="collapse"
                    >
                      <div className="d-flex align-items-center gap-4">
                        <div className="nav-link-icon text-primary">
                          <i className="fa-solid fa-users fa-lg"></i>{" "}
                          {/* Modified Icon for Manage Users */}
                        </div>
                        <span className="nav-link-text fw-bold">
                          Manage Users
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Manage Contacts  */}
                  <li className="nav-item border-bottom py-1">
                    <Link
                      className="nav-link p-3"
                      to="/admin/contact_list"
                      data-bs-dismiss="collapse"
                    >
                      <div className="d-flex align-items-center gap-4">
                        <div className="nav-link-icon text-success">
                          <i className="fa-solid fa-address-book fa-lg"></i>{" "}
                          {/* Modified Icon for Manage Contacts */}
                        </div>
                        <span className="nav-link-text fw-bold">
                          Manage Contacts
                        </span>
                      </div>
                    </Link>
                  </li>
                </>
              )
            )}

            {/* Projects (Pages) */}
            <li className="nav-item mt-3">
              <h6 className="py-1 text-secondary text-uppercase fs-7">Pages</h6>
            </li>
            {/* Projects  */}
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#pageExamples"
                role="button"
                aria-expanded="false"
                aria-controls="pageExamples"
              >
                <div className="nav-link-icon text-danger">
                  <i className="fa-regular fa-folder"></i>
                </div>
                <span className="nav-link-text fw-bold">Projects</span>
              </a>
              <div className="collapse" id="pageExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/todo"
                    >
                      <div className="nav-link-icon text-success">
                        <i className="fa-solid fa-calendar-check"></i>
                      </div>
                      <span className="nav-link-text">To Do App</span>
                    </Link>
                  </li>

                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/weather"
                    >
                      <div className="nav-link-icon text-primary">
                        <i className="fa-solid fa-cloud"></i>
                      </div>
                      <span className="nav-link-text">Kolhapur Weather</span>
                    </Link>
                  </li>

                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/news"
                    >
                      <div className="nav-link-icon text-danger-emphasis">
                        <i className="fa-solid fa-newspaper"></i>
                      </div>
                      <span className="nav-link-text">News App</span>
                    </Link>
                  </li>

                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/users-data"
                    >
                      <div className="nav-link-icon text-danger-emphasis">
                        <i className="fa-solid fa-users"></i>
                      </div>
                      <span className="nav-link-text">Users CRUD Demo</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* Authentication */}
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#authExamples"
                role="button"
                aria-expanded="false"
                aria-controls="authExamples"
              >
                <div className="nav-link-icon text-success">
                  <i className="fa-solid fa-gear"></i>
                </div>
                <span className="nav-link-text fw-bold">Authentication</span>
              </a>
              <div className="collapse" id="authExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/settings"
                    >
                      <div className="nav-link-icon text-success-emphasis">
                        <i className="fas fa-lock"></i>{" "}
                        {/* Icon for Change Password */}
                      </div>
                      <span className="nav-link-text">Change Password</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/signin"
                      onClick={handleLogout}
                    >
                      <div className="nav-link-icon text-success-emphasis">
                        <i className="fas fa-sign-out-alt"></i>{" "}
                        {/* Icon for Logout */}
                      </div>
                      <span className="nav-link-text">Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
