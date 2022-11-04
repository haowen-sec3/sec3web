import React, { ReactComponentElement } from "react";
import Header from "../Header";

type Layout = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layout) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
