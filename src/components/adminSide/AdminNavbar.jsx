
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const AdminNavbar = () => {
    const { logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {

                navigate('/')
            })
    }


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost text-xl">SHOP.CO</Link>
            </div>
            <div className="flex-none gap-2 mr-5">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                        <li>
                            <Link to="/dashboard/admin-profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>

                        <li onClick={handleLogout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar