import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div style={{
  minHeight: '100vh',
  background: 'linear-gradient(160deg, #f0faf1 0%, #d8f3dc 30%, #b7e4c7 70%, #95d5b2 100%)',
  display: 'flex',
  flexDirection: 'column',
}}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;