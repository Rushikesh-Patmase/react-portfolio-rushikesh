const Education = () => {
    return (  
        <div className=''>
            <div className='bg-white bg-opacity-30 md:mx-48 m-5 p-5 rounded-lg shadow-2xl flex flex-col'>
                <p className='font-bold text-2xl text-center pb-5 '>Education.</p>
                <div className='flex flex-col justify-center space-y-5'>
                    <div className='bg-emerald-600 bg-opacity-20 m-5 md:mx-28 p-5 hover:bg-emerald-600 transition duration-500 rounded-lg text-center'>
                        <span className='bg-blue-800 bg-opacity-20 text-white font-sans rounded-full my-2 px-4 py-1'>2021 - present</span>
                        <p className='font-bold mt-2 text-xl'>Bachelor of Technology.</p>
                        <p className=' text-md'>Anil Neerukonda Institute of Technology and Sciences, Visakhapatnam</p>
                        <p className=' text-md'>Computer Science and Engineering (CSE).</p>
                        <p className=' text-md'>CGPA: 8.28</p>
                    </div>
                    <div className='bg-emerald-600 bg-opacity-20 m-5 md:mx-28 p-5 hover:bg-emerald-600 transition duration-500 rounded-lg text-center'>
                        <span className='bg-blue-800 bg-opacity-20 text-white rounded-full font-sans my-2 px-4 py-1'>2018 - 2020</span>
                        <p className='font-bold mt-2 text-xl'>Andhra Pradesh Board of Intermediate Education (APBIE).</p>
                        <p className=' text-md'>Narayana Junior College, Visakhapatnam.</p>
                        <p className=' text-md'>Maths, Physics and Chemistry (MPC).</p>
                        <p className=' text-md'>Percentage: 90.04%</p>
                    </div>
                    <div className='bg-emerald-600 bg-opacity-20 m-5 md:mx-28 p-5 hover:bg-emerald-600 transition duration-500 rounded-lg text-center'>
                        <span className='bg-blue-800 bg-opacity-20 text-white rounded-full font-sans my-2 px-4 py-1'>2017 - 2018</span>
                        <p className='font-bold mt-2 text-xl'>Central Board of Secondary Education (CBSE).</p>
                        <p className=' text-md'>Kendriya Vidyalaya No-2, Visakhapatnam.</p>
                        <p className=' text-md'>10th Class</p>
                        <p className=' text-md'>Percentage: 77.8%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Education;

