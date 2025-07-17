import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Footer from "../../components/footer/Footer";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  //useEffect(()=>{
  //if (!currentUser){
  //<Navigate to="/login"/>>;
  //}
  //},[currentUser]);

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export { Layout, RequireAuth };
