import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import AdminNavbar from "../components/adminSide/AdminNavbar";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import AdminSideBar from "../components/adminSide/AdminSideBar";

const DashboardLayout = () => {
  
  return (
    <div>
      <div className="min-h-screen flex">
        <AdminSideBar></AdminSideBar>
        <div className=" flex-1" id="mainArea">
          <div className=" shadow-md">
            <AdminNavbar />
          </div>

          {/* main */}
          <div>
              <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
