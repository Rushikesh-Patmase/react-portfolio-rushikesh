import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className='shadow-2xl flex flex-row bg-black justify-center space-x-10'>
                <span className='text-orange-600 font-bold text-xl p-4 w-1/4'>MyFolio.</span>
                <Link to='/' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>About Me</Link>
                <Link to='/education' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>Education</Link>
                <Link to='/projects' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>Projects</Link>
                <Link to='/certificates' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>Certificates</Link>
                <Link to='/contact' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>Contact Me</Link>
            </div>
        </nav>    
    );
}
    
export default Navbar;
