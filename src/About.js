import { FaArrowAltCircleRight, FaDownload } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode,  } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoCPlusPlus } from "react-icons/bi";


const About = () => {
    return (  
        <div className=' bg-white bg-opacity-40 md:mx-48 text-center items-center m-5 p-5 rounded-lg shadow-2xl'>
            <span className='bg-slate-100 rounded-full font-sans my-2 px-4 py-1'>Frontend Web Developer</span>
            <p className='font-bold text-2xl mb-5 mt-5'>Rushikesh Mukund Patmase.</p>
            
            <div className='block'>
                <div className='mx-5'>
                    <div className="block md:flex">
                        <img src='profile.jpg' alt='avatar' className='rounded-lg w-48 m-auto min-w-48'/>
                        <div className="block text-center md:text-left mx-4">
                            <p className='font-bold text-xl py-5'>About Me.</p>
                            <p >Seeking an opportunity in a competitive environment that will challenge me to push my boundaries and expand
                                my knowledge in the field of computer science, where I can leverage my technical skills, adaptability, and passion
                                for innovation to contribute to projects, while learning from experienced professionals and developing a
                                successful career.</p><br/>
                        </div>
                    </div>
                    <p className='font-bold  text-xl pb-5'>Tech Stack.</p>
                    <div className="flex justify-center">
                        <FaHtml5 className='w-20 h-10 mx-1 text-orange-600'/>
                        <FaCss3Alt className='w-20 h-10 mx-1 text-sky-600'/>
                        <FaJsSquare className='w-20 h-10 mx-1 text-black'/>
                        <FaReact className='w-20 h-10 mx-1 text-sky-600'/>
                        <BiLogoTailwindCss className='w-20 h-10 mx-1 text-purple-800'/>
                        <BiLogoMongodb className='w-20 h-10 mx-1  text-green-800'/>
                        <FaNode className='w-20 h-10 mx-1 text-green-300'/>
                        <DiPython className='w-20 h-10 mx-1 text-yellow-200'/>
                        <BiLogoCPlusPlus className='w-20 h-10 text-blue-900'/>
                    </div>
                    <p className='font-bold  text-xl pb-5 pt-5'>Languages Known.</p>
                    <p className="pb-5">English, Hindi, Marathi, Telugu. </p>
                    <div className="flex flex-row justify-evenly items-center ">
                        <a href='https://github.com/Rushikesh-Patmase' className='bg-green-100 rounded-lg font-mono flex flex-row p-3 mr-5 hover:bg-green-300 transition duration-500'>View my work<FaArrowAltCircleRight className="w-10 h-6"/></a>
                        <a href='https://drive.google.com/file/d/1ioAYs7lzxyI3u0Dg-_cP3I1JYIWlgW7J/view?usp=sharing' className='bg-green-100 rounded-lg flex flex-row font-mono mr-5 p-3 hover:bg-green-300 transition duration-500'>Download My CV<FaDownload className="w-10 h-6"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
