import { FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (  
        <div className='bg-black flex flex-row'>
            <div className='flex flex-col mx-40'>
                <span className='text-orange-600 font-bold text-2xl mx-8 my-5'>MyFolio.</span>
                <div className='flex flex-row mx-5'>
                    <a href='https://www.instagram.com/_rushikeshh___'><FaInstagram className='w-10 h-5 text-white' /></a> 
                    <a href='https://www.linkedin.com/rushikesh-mukund-patmase-895b9023b'><FaLinkedin className='w-10 h-5 text-white' /></a> 
                    <a href='https://www.gmail.com'><FaGoogle className='w-10 h-5 text-white' /></a>
                </div>
                <p className='mx-8 my-5 text-white'>&#169; Copyright Myfolio 2024</p>
                <p className='mx-8 text-blue-400'>Designed and Developed by Rushikesh Mukund Patmase.</p>
            </div>
        </div>
    );
}
 
export default Footer;