import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { IoMdLogIn } from 'react-icons/io'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.init';

const Register = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    

    const googleRegister = ()=>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    const handleRegister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const data = {name, email, password};
        console.log(data);
    }

    return (
        <div>
            <div className="min-h-screen lg:flex">
                <div className="bg-theme_primary lg:w-3/5">
                    <p className='text-white text-5xl font-bold p-4'>SHOP.CO</p>
                    <div className=" flex justify-center items-center lg:mt-40">
                        <p className='text-white lg:text-7xl text-3xl text-center lg:text-start my-5  lg:w-3/4 font-bold'>You make the choice. We delivered it to you.</p>
                    </div>
                </div>
                <div className="lg:w-2/5">
                    <div className="text-center my-5">
                        <button className='btn bg-theme_primary text-white px-12 hover:bg-white hover:text-theme_primary text-lg'><IoMdLogIn />Sign in</button>
                    </div>

                    <div className=" w-11/12 mx-auto  lg:mt-20 ">
                        <p className='font-bold'>Registration</p>
                        <p>Create your free account</p>

                        <form action="" onSubmit={handleRegister} className=''>

                            {/* Name */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-bold">Name</span>
                                </div>
                                <input type="text" name='name' placeholder="Enter your full name" className="input input-bordered w-full max-w-xs" />
                            </label>

                            {/* email  */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-bold">E-mail Address</span>
                                </div>
                                <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered w-full max-w-xs" />
                            </label>

                            {/* password  */}
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-bold">Password</span>
                                </div>
                                <input type="password" name='password' placeholder="Enter 9 character or more" className="input input-bordered w-full max-w-xs" />
                            </label>

                            <div className="">
                                <button className='bg-theme_primary text-white btn mt-5'>Register</button>

                            </div>
                        </form>
                    </div>
                    <div className="divider">OR</div>
                    <div className="text-center my-5">
                        <button onClick={googleRegister} className='btn bg-theme_secondary text-black px-12 hover:bg-theme_primary hover:text-theme_primary text-lg'><FcGoogle />Google Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register