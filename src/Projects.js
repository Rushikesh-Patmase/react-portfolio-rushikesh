const Projects = () => {
    return (  
        <div className="">
            <div className='bg-white bg-opacity-30 mx-48 my-5 p-5 rounded-lg shadow-2xl flex flex-col'>
                <p className='font-bold text-center text-2xl pb-5 '>Projects.</p>
                <div className='flex flex-col justify-center space-y-5'>
                    <div className='bg-emerald-400 bg-opacity-20 mx-28 p-5 transform hover:bg-emerald-600 transition duration-500 rounded-lg text-center'>
                        <span className='bg-blue-800 bg-opacity-20 text-white font-sans rounded-full my-2 px-4 py-1'>September, 2023 - present</span>
                        <p className='font-bold mt-2 text-xl'>Guardian Air-Sensor Driven Airbag Inflation for SIDS Prevention.</p>
                        <p className=' text-md'>This project focuses on preventing the infant deaths caused due to suffocation while sleeping in prone position.
                                The prevention is done by combining continuous monitoring, IOT sensors, and automated response systems, this
                                innovative approach not only addresses the issue of Sudden Infant Death Syndrome (SIDS) but also ensures swift
                                and proactive measures are taken to safeguard the infant, offering parents peace of mind and enhancing the safety
                                of their little ones during sleep.</p>
                        <p className=' text-md'><b>Tech Stack:</b> Python and Arduino</p>
                    </div>
                    <div className='bg-emerald-400 bg-opacity-20 mx-28 p-5 transform hover:bg-emerald-600 transition duration-500 rounded-lg text-center'>
                        <span className='bg-blue-800 bg-opacity-20 text-white rounded-full font-sans my-2 px-4 py-1'>April, 2023 - May, 2023</span>
                        <p className='font-bold mt-2 text-xl'>Tic Tac Toe Game.</p>
                        <p className=' text-md'>A fun TIC-TAC-TOE Game with a simple yet attractive web interface using technologies HTML, CSS and JavaScript
                                which also displays the current player's turn and also displays the winner. This project provides the freedom from
                                boredom by letting the players apply strategic thinking skills which improves the cognitive function of their brain.</p>
                        <p className=' text-md'><b>Tech Stack:</b> HTML, CSS and Javascript</p><br/>
                        <a href="https://rushikesh-patmase.github.io/" className="bg-emerald-100 p-3 transform hover:bg-emerald-400 transition duration-500">View Project Demo</a>
                    </div>
                    <div className='bg-emerald-400 bg-opacity-20 mx-28 p-5 transform hover:bg-emerald-600 transition duration-500 rounded-lg text-center'>
                        <span className='bg-blue-800 bg-opacity-20 text-white rounded-full font-sans my-2 px-4 py-1'>July, 2022 - December, 2022</span>
                        <p className='font-bold mt-2 text-xl'>Student Management System Portal.</p>
                        <p className=' text-md'>The project mainly focuses on the management of academics of the students of an institution through a website
                                which provides two types of accounts that are Student and Admin. The admin / faculty can view, modify and post
                                the results, announcements and can also add new student details to the database and the students can check
                                those results from the interface.</p>
                        <p className=' text-md'><b>Tech Stack:</b> HTML, CSS, Javascript, MySQL and PHP.</p>
                    </div>
                    <div className='bg-emerald-400 bg-opacity-20 mx-28 p-5 transform hover:bg-emerald-600 transition duration-500 rounded-lg text-center'>
                        <span className='bg-blue-800 bg-opacity-20 text-white rounded-full font-sans my-2 px-4 py-1'>March, 2022 - May, 2022</span>
                        <p className='font-bold mt-2 text-xl'>Youtuber Database Management.</p>
                        <p className=' text-md'>Sample application of SQL standards using Youtubers Data where the concepts of normalization, grouping of
                                specific data without redundancy and optimized Query implementation are applicable efficiently for the project.</p>
                        <p className=' text-md'><b>Tech Stack:</b> MySQL Workbench.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;
