import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

import { FaRegUserCircle } from "react-icons/fa";
import { MdManageHistory, MdOutlineSpaceDashboard } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaUserEditSolid } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";
import { GiHamburgerMenu } from 'react-icons/gi';

const AdminSideBar = () => {
    const [show, setShow] = useState(false);
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation(); // To track active route

    const handleLogout = () => {
        logOut().then(() => {
            navigate('/');
        });
    };

    // Helper function to apply active class
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className={`bg-theme_primary text-white ${show ? "w-1/4" : "w-16"}`} id="sidebar">
                <div className="p-5 flex justify-between text-2xl cursor-pointer">
                    <div>
                        {show || <GiHamburgerMenu onClick={() => setShow(true)} />}
                    </div>
                    <div className="font-bold">
                        {show && <RxCross1 onClick={() => setShow(false)} />}
                    </div>
                </div>

               
                <Link to={"/"}>
                <p className={`text-4xl  font-bold px-5 ${show || 'hidden' }`}>SHOP.CO</p>
                </Link>

                {/* Add necessary links */}
                <div className="pt-10">
                    {/* Dashboard */}
                    <Link
                        to={`/dashboard`}
                        className={`flex gap-3 items-center px-5 py-3 text-2xl cursor-pointer
                            ${isActive('/dashboard') ? "bg-white text-black rounded-tl-full rounded-bl-full -rounded-tr-[500px]" : "hover:bg-white hover:text-black"}`}
                    >
                        <div className="tooltip tooltip-right" data-tip={`${show ? '' : 'Dashboard'}`}>
                            <MdOutlineSpaceDashboard />
                        </div>
                        <p className={`${show ? "" : "hidden"}`}>Dashboard</p>
                    </Link>

                    {/* Update Profile */}
                   

                    {/* Manage Product */}
                    <Link
                        to={`/dashboard/manage-products`}
                        className={`flex gap-3 items-center px-5 py-3 text-2xl cursor-pointer
                            ${isActive('/dashboard/manage-product') ? "bg-white text-black rounded-tl-full rounded-bl-full" : "hover:bg-white hover:text-black"}`}
                    >
                        <div className="tooltip tooltip-right" data-tip={`${show ? '' : 'Manage Product'}`}>
                            <MdManageHistory />
                        </div>
                        <p className={`${show ? "" : "hidden"}`}>Manage Product</p>
                    </Link>

                    {/* Payment */}
                    <Link
                        to={`/dashboard/payment`}
                        className={`flex gap-3 items-center px-5 py-3 text-2xl cursor-pointer
                            ${isActive('/dashboard/payment') ? "bg-white text-black rounded-tl-full rounded-bl-full" : "hover:bg-white hover:text-black"}`}
                    >
                        <div className="tooltip tooltip-right" data-tip={`${show ? '' : 'Payment'}`}>
                            <RiSecurePaymentLine />
                        </div>
                        <p className={`${show ? "" : "hidden"}`}>Payment</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AdminSideBar;
