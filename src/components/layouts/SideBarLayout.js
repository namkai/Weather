import React from 'react';

const SideBarLayout = ({ children, searchBar }) => (
  <div className="col-md-3 sidebar">
    <nav className="sidebar-nav">
      <div className="sidebar-header">
        <a className="sidebar-brand img-responsive" href="#">
          <span style={{ color: '#1ec8ff' }} className="icon icon-drop sidebar-brand-icon"/>
        </a>
      </div>
      {searchBar}
      <div className="collapse nav-toggleable-md" id="nav-toggleable-md">
        {children}
        <hr className="visible-xs mt-3" />
      </div>
    </nav>
  </div>
);

export default SideBarLayout;
