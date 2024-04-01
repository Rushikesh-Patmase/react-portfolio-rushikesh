import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificates = () => {

    const data = [
        { 
            name : 'Python Essentials-1',
            img : 'certificate_python.jpg',
            issuedBy : 'Cisco Networking Academy',
            issuedOn : '09-11-2022',
            link : 'https://drive.google.com/file/d/1aPjxxFWQFBBJ8gdIyKGRCNp3Jpir4yNN/view?usp=sharing',
            description : 'Python Essentials-1 is a certification that tests your knowledge on Python programming language. It covers the basics of Python programming language such as data types, operators, loops, functions, etc. It is a beginner level certification and is a good start for anyone who wants to learn Python programming language.'      
        },
        { 
            name : 'Java Full Stack Developer',
            img : 'certificate_java.jpg',
            issuedBy : 'Wipro',
            issuedOn : '06-10-2023',
            link : 'https://drive.google.com/file/d/1BKtgQ_BzPgd3bMIIITkemo_Nz5lonXZ8/view?usp=sharing',
            description : 'Java Full Stack Developer is a certification that tests your knowledge on Java programming language. It covers the basics of Java programming language such as data types, operators, loops, functions, etc. It is a beginner level certification and is a good start for anyone who wants to learn Java programming language.'
        },
        {
            name : 'C++ Programming',
            img : 'certificate_cpp.jpg',
            issuedBy : 'Udemy',
            issuedOn : '18-11-2022',
            link : 'https://drive.google.com/file/d/1adPXC_wjlmDdnRzxHoAyXFyttB4FrxOR/view?usp=sharing',
            description : 'C++ Programming is a certification that tests your knowledge on C++ programming language. It covers the basics of C++ programming language such as data types, operators, loops, functions, etc. It is a beginner level certification and is a good start for anyone who wants to learn C++ programming language.'
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (  
        <div className="w-3/4 md:w-3/5 m-auto">
            <div className="mt-10">
                <Slider {...settings} >
                    {data.map((d) => (
                        <div className="text-black rounded-xl">
                            <div className=" h-56 overflow-hidden flex justify-center items-center">
                                <img src={d.img} className=" w-4/5" alt="certificate" />
                            </div>
                            <div className=" bg-white bg-opacity-30 font-mono flex flex-col justify-center items-center p-4 gap-4">
                                <p className="font-bold text-xl">{d.name}</p>
                                <p>{d.issuedBy}</p>
                                <p>{d.issuedOn}</p>
                                <p className="font-serif text-center">{d.description}</p>
                                <a href={d.link} className="bg-emerald-100 p-4 hover:bg-emerald-400 transition duration-500">View Certificate</a>
                            </div>    
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}


 
export default Certificates;
