import React from "react";

const AdminContainer = ({ children }) => {
  return (
    <div>
      <div>sidebar</div>
      <main> {children}</main>
    </div>
  );
};

export default AdminContainer;
