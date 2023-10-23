import { Link, useNavigate } from "react-router-dom";
import Photo from "../components/images/photo.jpg";
import IgLogo from "../components/images/ig.png";
import FbLogo from "../components/images/fb.png";
import LiLogo from "../components/images/li.png";
import PhoneLogo from "../components/images/phone.png";
import { useState } from "react";
import ContactMe from "../components/ContactMe";
import Transition from "../components/Transition";

const AboutMe: React.FC = () => {
	const navigate = useNavigate();
	const [ContactMeOpen, SetContactMeOpen] = useState(false);
	const IgHandler = () => {
		window.open("https://www.instagram.com/miyaille/");
	};
	const FbHandler = () => {
		window.open("https://www.facebook.com/yim.ellia");
	};
	const LiHandler = () => {
		window.open("https://www.linkedin.com/in/ellia-yim/");
	};
	const PhoneHandler = () => {
		window.open("tel:54860861");
	};
	const ContactHandler = () => {
		SetContactMeOpen(true);
	};
	const ResumeHandler = () => {
		navigate("/resume/profile");
	};
    const ProjectHandler = () => {
		window.open("https://github.com/yimellia");
	};
	return (
		<div className="space-x-3 flex flex-column min-h-screen">
            {ContactMeOpen && <div className="fixed top-0 left-0 w-full h-full bg-beige opacity-50 z-0"/>}
			<div className="p-32 bg-beige space-y-5 flex flex-col items-center">
				<div className="flex flex-col items-center">
					<img className="w-4/5 h-auto m-4" src={Photo} alt="" />
					<p className="font-sans text-darkbrown text-3xl font-bold">Ellia YIM</p>
					<p className="font-sans text-darkbrown text-2xl font-semibold">(she/her)</p>
					<p className="font-sans text-darkbrown text-xl">AI Engineer / Software Developer</p>
				</div>
                <button className="btn-hollow" onClick={ContactHandler}>Contact Me</button>
				<div className="flex flex-row gap-x-6" >
					<img src={IgLogo} alt="" onClick={IgHandler} />
					<img src={FbLogo} alt="" onClick={FbHandler} />
					<img src={LiLogo} alt="" onClick={LiHandler} />
					<img src={PhoneLogo} alt="" onClick={PhoneHandler} />
				</div>
			</div>
			{ContactMeOpen && (
				<ContactMe
					ContactMeOpen={ContactMeOpen}
					SetContactMeOpen={SetContactMeOpen}
				/>
			)}
			<div className="py-32 px-40 space-y-7 font-sans text-xl text-darkbrown" >
				<h1 className="text-6xl font-bold" >About Me</h1>
				<p>
					I am a final-year student majoring in Artificial
					Intelligence. An easy-going, responsible and hard-working
					person, who is devoted to AI in multi-media and big data
					sector. Had a year work experience in image detection and
					GUI building. My efficiency and attitude were highly
					appreciated.
				</p>
				<div className="flex flex-row gap-x-6 pt-32">
					<button className="btn-filled hover:bg-darkbrown" onClick={ResumeHandler}>Resume</button>
					<button className="btn-filled hover:bg-darkbrown" onClick={ProjectHandler}>Projects</button>
				</div>
				<Link className="absolute text-lightbrown hover:text-brown bottom-10 right-16 hover:underline font-semibold" to="/">{"Home >"}</Link>
			</div>
		</div>
	);
};

const Trans = () => {
    return (
        <Transition Component={AboutMe} />
    );
};

export default Trans;
