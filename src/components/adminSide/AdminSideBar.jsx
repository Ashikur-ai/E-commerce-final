import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

import { FaRegUserCircle } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaUserEditSolid } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";
import { GiHamburgerMenu } from 'react-icons/gi';

const AdminSideBar = () => {
    const [show, setShow] = useState(false);

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {

                navigate('/')
            })
    }

    return (
        <>
            <div
                className={`bg-theme_primary text-white ${show ? "w-1/4" : "w-16"}`}
                id="sidebar"
            >
                <div className="p-5 flex justify-between text-2xl cursor-pointer">
                    <div className="">
                        {show || <GiHamburgerMenu onClick={() => setShow(true)} />}
                    </div>
                    <div className="font-bold">
                        {show && (
                            <RxCross1 onClick={() => setShow(false)} />
                        )}
                    </div>
                </div>


                <div className="pt-10">
                    {/* user profile */}
                    <Link to={`/dashboard`} className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer">
                        <div
                            className="tooltip  tooltip-right"
                            data-tip={`${show ? '' : 'User Profile'}`}
                        >
                            <FaRegUserCircle />
                        </div>
                        <p className={`${show ? "" : "hidden"}`}>User Profile</p>
                    </Link>
                    {/* update Profile */}
                    <Link to={`/dashboard/update-user`} className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer">
                        <div
                            className="tooltip  tooltip-right"
                            data-tip={`${show ? '' : 'update Profile'}`}
                        >
                            <LiaUserEditSolid />
                        </div>
                        <p className={`${show ? "" : "hidden"}`}>update Profile</p>
                    </Link>
                    {/* manage product */}
                    <div className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer">
                        <div
                            className="tooltip  tooltip-right"
                            data-tip={`${show ? '' : 'Manage Product'}`}
                        >
                            <MdManageHistory />
                        </div>
                        <p className={`${show ? "" : "hidden"}`}>Manage Product</p>
                    </div>
                    {/* payment */}
                    <div className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer">
                        <div
                            className="tooltip  tooltip-right"
                            data-tip={`${show ? '' : 'Payment'}`}
                        >
                            <RiSecurePaymentLine />
                        </div>
                        <p className={`${show ? "" : "hidden"}`}>Payment</p>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default AdminSideBar