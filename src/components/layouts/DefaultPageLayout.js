import React from 'react';

const DefaultPageLayout = ({ children }) => (
  <div className="container">
    <div className="row">
      {children}
    </div>
  </div>
);

export default DefaultPageLayout;
