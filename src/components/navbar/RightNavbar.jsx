import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import facebook from "../../assets/fb.png"
import Twitter from "../../assets/twitter.png"
import Instagram from "../../assets/instagram.png"
import Swimming from "../../assets/swimming.png"
import Classroom from "../../assets/class.png"
import Playground from "../../assets/playground.png"
import { Link } from "react-router-dom";

const RightNavbar = () => {
    const { GoogleLogin, GithubLogin } = useContext(AuthContext);
    const Googleprovider = new GoogleAuthProvider();
    const Githubprovider = new GithubAuthProvider();
    const hendelLoginWithGoogle = () => {
        GoogleLogin(Googleprovider)
    }
    const hendelLoginWithGitHub = () => {
        GithubLogin(Githubprovider)
    }

    return (
        <div className="ml-6">
            <div className="mb-8">
                <h3 className="font-semibold text-xl mb-4">Login with</h3>
                <p onClick={hendelLoginWithGoogle} className="flex justify-center items-center text-base font-medium border py-4 rounded-lg gap-2 hover:cursor-pointer hover:text-blue-500 hover:border-blue-500 duration-500"><FaGoogle /> Login with Google</p>
                <p onClick={hendelLoginWithGitHub} className="flex justify-center items-center text-base font-medium border py-4 rounded-lg gap-2 hover:cursor-pointer hover:text-blue-500 hover:border-blue-500 duration-500 mt-2"><FaGithub /> Login with GitHub</p>
            </div>
            <div className="mb-6">
                <h3 className="font-semibold text-xl mb-4">Find Us On</h3>
                <div className="hover:text-blue-500 hover:text-lg duration-500 border flex  border-gray-200  items-center py-4 rounded-t-lg gap-4 pl-4"><img src={facebook} alt="" />
                <a href="https://www.facebook.com" target="_blank">Facebook</a></div>
                <div className="hover:text-blue-500 hover:text-lg duration-500 border-x  border-gray-200 flex  items-center py-4 gap-4 pl-4"><img src={Twitter} alt="" />
                <a href="https://www.x.com" target="_blank">Twitter</a></div>
                <div className="hover:text-blue-500 hover:text-lg duration-500 border border-gray-200 flex items-center py-4 rounded-b-lg gap-4 pl-4"><img src={Instagram} alt="" />
                <a href="https://www.instagram.com" target="_blank">Instagram</a></div>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Q-Zone</h3>
                <div className="flex flex-col justify-center gap-2">
                    <img src={Swimming} alt="" />
                    <img src={Playground} alt="" />
                    <img src={Classroom} alt="" />
                </div>
            </div>
            <div className='bg-[url("/src/assets/bg.png")] px-9 py-16 mb-10 mt-4 rounded-lg'>
                <h3 className="font-bold text-3xl leading-11 text-center mb-5 text-white">Create an Amazing Newspaper</h3>
                <p className="font-normal text-base leading-7 text-center mb-8 text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <p className="font-bold  text-white text-center hover:cursor-pointer"><Link className="bg-[#D72050] px-5 py-4">Learn More</Link></p>
            </div>

        </div>
    );
};

export default RightNavbar;