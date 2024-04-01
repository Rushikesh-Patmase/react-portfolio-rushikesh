import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_pbg8ipj', 'template_qhu7rvf', e.target, 'cAhTBM7c2k11ZtZx4');
        e.target.reset();
        alert('Email sent successfully!');
    }
    return (  
        <div className="bg-white bg-opacity-30 md:mx-60 m-10 rounded-lg shadow-2xl justify-center items-center">
            <p className="text-center text-2xl p-5 font-bold">Contact Me.</p>
            <form className="flex flex-col mx-10 md:mx-32 my-5" onSubmit={sendEmail}>
                <input type="text" placeholder="Please enter your Full Name" name='name' className="bg-black bg-opacity-15 text-white border-b-2 p-2 my-2 "/>
                <input type="email" placeholder="Please enter your Email" name='email_from' className="bg-black bg-opacity-15 text-white border-b-2 p-2 my-2 "/>
                <input type="text" placeholder="Please mention the Subject" name='subject' className="bg-black bg-opacity-15 text-white border-b-2 p-2 my-2 "/>
                <textarea placeholder="Write a Message" name='message' className="bg-black bg-opacity-15 text-white border-b-2 p-2 my-2 "></textarea>
                <button className="bg-green-300 p-2 my-5 rounded-lg transform hover:bg-green-500 transition duration-500">Submit</button>
            </form>
        </div>
    );
}
 
export default Contact;

// How do you send an email using emailjs in React?

// import emailjs from '@emailjs/browser';
// const sendEmail = (e) => {
//     e.preventDefault();
    
//     emailjs.sendForm('service_id', 'template_id', e.target, 'public_key');
// }

// <form className="flex flex-col mx-48 my-10" onSubmit={sendEmail}>
