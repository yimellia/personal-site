import ResumeHeader from "../components/ResumeHeader";
import Photo from "../components/images/photo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const downloadResumeHandler = () => {
        const link = document.createElement('a');
        link.href = "../components/images/resume.pdf"; // Replace with the URL or path to your resume file
        link.download = 'Ellia_Yim_Resume.pdf'; // Replace with the desired filename for the downloaded file
        link.click();
    }
    const AboutMeHandler = () => {
        navigate('/about-me');
    }
    return (
        <div className="bg-beige text-brown min-h-screen" >
            <ResumeHeader />
            <main className="border-[1.5px] border-solid border-darkbrown mx-24 flex gap-x-16 relative">
                <div className="w-full p-16">
                    <h1 className="title-resume">Ellia Yim</h1>
                    <p className="py-4 font-sans text-xl">
                        A final-year Artificial Intelligence student seeking a practical 
                        role to apply my knowledge in software engineering. 
                        Easy-going, responsible, and hard-working, 
                        with highly appreciated efficiency and attitude in previous work experiences and teams. 
                        Experienced in AI for multimedia processing, but also keen on broadening my skill set. 
                        Seeking a role to systematically enhance my software development expertise.
                    </p>
                    <div className="flex gap-6 pt-28">
                        <button className="btn-filled" onClick={downloadResumeHandler}>Download Resume</button>
                        <button className="btn-filled" onClick={AboutMeHandler}>Back to About Me</button>
                    </div>
                </div>
                <div>
                    <img className="p-10" src={Photo} alt="" />
                </div>
				<Link className="absolute text-lightbrown hover:text-brown bottom-6 right-10 hover:underline font-semibold" to="/">{"Home >"}</Link>
            </main>
        </div>
    );
}

export default Profile;