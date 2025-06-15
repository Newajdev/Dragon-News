import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p className='text-lg leading-8 text-gray-400 mt-20'>Journalism Without Fear or Favour</p>
            
        </div>
    );
};

export default Header;