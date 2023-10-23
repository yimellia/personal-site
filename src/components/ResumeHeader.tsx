import { Link } from "react-router-dom";

export const ResumeHeader: React.FC = () => {
    return (
        <header className="sticky top-0 z-10">
            <nav className="container mx-auto px-4 py-10 bg-beige">
                <ul className="flex justify-between text-center items-center font-bold text-xl text-brown">
                    <li className="hover:underline"><Link to="/resume/profile">PROFILE</Link></li>
                    <li className="hover:underline"><Link to="/resume/education">EDUCATION</Link></li>
                    <li className="hover:underline"><Link to="/resume/work-exp">WORK<br />EXPERIENCES</Link></li>
                    <li className="hover:underline"><Link to="/resume/skills">SKILLS &<br />PROFICIENCIES</Link></li>
                    <li className="hover:underline"><Link to="/resume/other-exp">OTHER<br />EXPERIENCES</Link></li>
                </ul>
            </nav>
        </header>
    );
}



export default ResumeHeader;