import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    // const dateAndTime = moment().format("MMM Do YY")
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg leading-8 text-gray-400 mt-5'>Journalism Without Fear or Favour</p>
            <p className='text-lg leading-8 text-gray-400 mt-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;