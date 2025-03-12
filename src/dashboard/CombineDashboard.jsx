import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const CombineDashboard = () => {
  const location = useLocation();

  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: 280, height: "100vh", position: "fixed" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="fs-4">Dashboard</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="sliderdashboard" className={`nav-link ${location.pathname === "/dashboard/sliderdashboard" ? "active" : "link-dark"}`}>
              HomePage Slider
            </Link>
          </li>
          <li>
            <Link to="categorydashboard" className={`nav-link ${location.pathname === "/dashboard/categorydashboard" ? "active" : "link-dark"}`}>
              Category
            </Link>
          </li>
          <li>
            <Link to="herosection" className={`nav-link ${location.pathname === "/dashboard/herosection" ? "active" : "link-dark"}`}>
              Hero Section
            </Link>
          </li>
          <li>
            <Link to="productdashboard" className={`nav-link ${location.pathname === "/dashboard/productdashboard" ? "active" : "link-dark"}`}>
              Products
            </Link>
          </li>
          <li>
            <Link to="subcategory" className={`nav-link ${location.pathname === "/dashboard/subcategory" ? "active" : "link-dark"}`}>
              SubCategory
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="User" width={32} height={32} className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ marginLeft: 280, width: "100%", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default CombineDashboard;
