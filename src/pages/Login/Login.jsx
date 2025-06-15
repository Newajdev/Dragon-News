import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [Visible, setVisible] = useState(false)
        const HendleCheckPassword =()=>{
            setVisible(!Visible)
        }

    const hendlerLogin = e=>{
        e.preventDefault();

    }

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            {/* LoginForm Start */}
            <div className=" bg-white rounded-box p-28 w-2/4 flex flex-col ">
            <h1 className="font-semibold text-4xl text-center border-b border-gray-100 pb-12 mb-12">Login your account</h1>
                <form onSubmit={hendlerLogin}>
                    <div className="flex flex-col mb-6 w-full">
                        <label className="label mb-4 text-base font-semibold">Email address</label>
                        <input type="email" className="input w-full" placeholder="Enter your email address" />
                    </div>

                    <div className="flex flex-col mb-6 relative">
                                            <label className="label mb-4 text-base font-semibold">Password</label>
                                            <input type={ !Visible ? "password" : "text"} className="input w-full" placeholder="Enter your password" />
                                            <div className="absolute top-12 right-4 font-semibold text-xl" onClick={HendleCheckPassword}>{ Visible ? <FaEye className="bg-gray-100"/> : <FaEyeSlash />}</div>
                    
                                        </div>

                    <input type="submit" className="btn btn-neutral w-full mt-2" value="Login" />


                    <p className="text-center mt-8 hover:cursor-pointer font-semibold text-base">Dont’t Have An Account ? <Link className="text-red-500" to='/register'>Register</Link></p>

                </form>
            </div>
            {/* LoginForm End */}
        </div>
    );
};

export default Login;