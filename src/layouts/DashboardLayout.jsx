import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import AdminNavbar from '../components/adminSide/AdminNavbar';

const DashboardLayout = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="min-h-screen flex">
                <div className={`bg-theme_primary text-white ${show ? 'w-1/4' : 'w-16'}`} id='sidebar'>
                    <div className="p-5 flex justify-between text-2xl cursor-pointer" >
                        <div className="">
                            {
                                show || <GiHamburgerMenu onClick={() => setShow(true)} />
                            }
                        </div>
                        <div className="">
                            {
                                show && <IoMdCloseCircleOutline onClick={()=>setShow(false)} />
                            }
                        </div>
                    </div>
                </div>
                <div className=" flex-1" id='mainArea'>
                    <div className=" shadow-md">
                    <AdminNavbar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout