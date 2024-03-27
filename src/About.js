import { FaArrowAltCircleRight, FaDownload } from "react-icons/fa";
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNode,  } from "react-icons/fa";
import { DiMongodb, DiPython } from "react-icons/di";

const About = () => {
    return (  
        <div className=' bg-white bg-opacity-40 mx-48 my-5 p-5 rounded-lg shadow-2xl'>
            <span className='bg-slate-100 rounded-full font-sans my-2 px-4 py-1'>Frontend Web Developer</span>
            <p className='font-bold text-2xl mb-5 mt-5'>Rushikesh Mukund Patmase.</p>
            <div className='flex flex-row'>
                <div className='w-6/12 pb-5'>
                    <img src='profile.jpg' alt='avatar' className='rounded-lg min-w-48'/>
                </div>
                <div className='flex flex-col mx-5'>
                    <p className='font-bold  text-xl pb-5'>About Me.</p>
                    <p>Seeking an opportunity in a competitive environment that will challenge me to push my boundaries and expand
                        my knowledge in the field of computer science, where I can leverage my technical skills, adaptability, and passion
                        for innovation to contribute to projects, while learning from experienced professionals and developing a
                        successful career.</p><br/>
                    <p className='font-bold  text-xl pb-5'>Tech Stack.</p>
                    <div className="flex flex-row">
                        <FaHtml5 className='w-20 h-10'/>
                        <FaCss3 className='w-20 h-10'/>
                        <FaJsSquare className='w-20 h-10'/>
                        <FaReact className='w-20 h-10'/>
                        <DiMongodb className='w-20 h-10'/>
                        <FaNode className='w-20 h-10'/>
                        <DiPython className='w-20 h-10'/>
                    </div>
                    <p className='font-bold  text-xl pb-5 pt-5'>Languages Known.</p>
                    <p className="pb-5">English, Hindi, Marathi, Telugu. </p>
                </div>
            </div>
            <div className="flex flex-row">
                <a href='https://drive.google.com/file/d/1ioAYs7lzxyI3u0Dg-_cP3I1JYIWlgW7J/view?usp=sharing' className='bg-green-100 rounded-lg font-mono flex mr-5 flex-row p-3 transform hover:bg-green-300 transition duration-500'>Download My CV<FaDownload className="w-10 h-6"/></a>
                <a href='https://github.com/Rushikesh-Patmase' className='bg-green-100 rounded-lg font-mono p-3 mr-5 flex flex-row transform hover:bg-green-300 transition duration-500'>View my work<FaArrowAltCircleRight className="w-10 h-6"/></a>
            </div>   
        </div>
    );
}
 
export default About;
