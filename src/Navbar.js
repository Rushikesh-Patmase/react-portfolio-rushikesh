import { Link } from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return ( 
        <div className="flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4 bg-black shadow-2xl">
            <h1 className='text-orange-600 font-bold text-2xl w-full'>MyFolio.</h1>
            <ul className='hidden md:flex'>
                <li><Link to='/' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>About</Link></li>
                <li><Link to='/education' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>Education</Link></li>
                <li><Link to='/projects' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>Projects</Link></li>
                <li><Link to='/certificates' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>Certificates</Link></li>
                <li><Link to='/contact' className='rounded-none text-white p-4 transform hover:bg-cyan-900 transition duration-500 hover:text-orange-500'>Contact</Link></li>
            </ul>
            <div onClick={ handleNav }>
                { !nav ? <AiOutlineClose size={30} className='text-white md:hidden'/> : <AiOutlineMenu size={30} className='text-white md:hidden' /> }
            </div>
            <div className={ !nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-emerald-900 ease-in-out transition duration-400 md:hidden' : 'fixed left-[-100%]'}>
                <h1 className='text-orange-600 font-bold text-2xl m-4 p-4 w-full'>MyFolio.</h1>
                <ul className='uppercase p-2'>
                    <li className='p-4 border-b border-gray-500'><Link to='/' className='rounded-none text-white p-4 hover:text-orange-500'>About</Link></li>
                    <li className='p-4 border-b border-gray-500'><Link to='/education' className='rounded-none text-white p-4  hover:text-orange-500'>Education</Link></li>
                    <li className='p-4 border-b border-gray-500'><Link to='/projects' className='rounded-none text-white p-4 hover:text-orange-500'>Projects</Link></li>
                    <li className='p-4 border-b border-gray-500'><Link to='/certificates' className='rounded-none text-white p-4  hover:text-orange-500'>Certificates</Link></li>
                    <li className='p-4 border-b border-gray-500'><Link to='/contact' className='rounded-none text-white p-4 hover:text-orange-500'>Contact</Link></li>
                </ul>
            </div>
        </div>    
    );
}
    
export default Navbar;
