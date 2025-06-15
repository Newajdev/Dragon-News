import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { auth } from "../../Firebase/Firebase.config";

const Register = () => {
    const { registerUser, verifyUser } = useContext(AuthContext);
    const navigatetoLogin = useNavigate()
    const userInfo = auth.currentUser;


    const hendlerRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        registerUser(email, password)
            .then(result => {
                result.user.displayName = name
                result.user.photoURL = url
                alert(`You will recive a verification mail. So check you email and verify`)
                navigatetoLogin('/login')
                
                verifyUser()
                .then(() => {
                })

            })
            .catch(error => {
                alert(error.message)
            })
            

    }

    const [Visible, setVisible] = useState(false)
    const HendleCheckPassword = () => {
        setVisible(!Visible)
    }
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            {/* LoginForm Start */}
            <div className=" bg-white rounded-box p-28 w-2/4 flex flex-col ">
                <h1 className="font-semibold text-4xl text-center border-b border-gray-100 pb-12 mb-12">Register your account</h1>
                <form onSubmit={hendlerRegister}>

                    <div className="flex flex-col mb-6 w-full">
                        <label className="label mb-4 text-base font-semibold">Your Full Name</label>
                        <input type="name" className="input w-full" placeholder="Enter your name address" name="name" required />
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label className="label mb-4 text-base font-semibold">Your Profile Picture as a URL</label>
                        <input type="url" className="input w-full" placeholder="Enter your Profile Picture url" name="url" required />
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label className="label mb-4 text-base font-semibold">Email address</label>
                        <input type="email" className="input w-full" placeholder="Enter your email address" name="email" required />
                    </div>

                    <div className="flex flex-col mb-6 relative">
                        <label className="label mb-4 text-base font-semibold">Password</label>
                        <input type={!Visible ? "password" : "text"} className="input w-full" placeholder="Enter your password" name="password" required />
                        <div className="absolute top-12 right-4 font-semibold text-xl" onClick={HendleCheckPassword}>{Visible ? <FaEye className="bg-gray-100" /> : <FaEyeSlash />}</div>

                    </div>

                    <input type="submit" className="btn btn-neutral w-full mt-2" value="Login" />


                    <p className="text-center mt-8 hover:cursor-pointer font-semibold text-base">Already Have An Account ? <Link className="text-red-500" to='/login'>Login</Link></p>

                </form>
            </div>
            {/* LoginForm End */}
        </div>
    );
};

export default Register;