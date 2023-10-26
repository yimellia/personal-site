import { Link } from "react-router-dom";
import ResumeHeader from "../components/ResumeHeader";

const Education: React.FC = () => {
    const downloadTranscriptHandler = () => {
        const link = document.createElement('a');
        link.href = `${window.location.origin}/transcript.pdf`; 
        link.download = 'Ellia_Yim_Transcript.pdf'; 
        link.click();
    }
    return (
        <div className="bg-beige text-brown min-h-screen" >
            <ResumeHeader />
            <div className="border-[1.5px] border-solid border-darkbrown mx-24 flex gap-x-20 relative py-16">
                <h1 className="title-resume px-16">Education</h1>
                <div className="flex flex-col gap-6 pr-26">
                    <h2 className="text-company">B.ENG. IN ARTIFICIAL INTELLIGENCE - SYSTEMS AND TECHNOLOGIES</h2>
                    <div className="flex flex-row gap-40">  
                        <h3 className="text-role pl-4">The Chinese University<br/>of Hong Kong</h3>
                        <h4 className="text-other mt-8">2019 Sep – 2023 Dec (Expected)</h4>
                    </div>
                    <ul className="text-other list-disc pr-44 space-y-2">
                        <li>CGPA: 3.338 /4.0</li>
                        <li>Major GPA: 3.227 /4.0</li>
                        <li>Elective Stream: Intelligent Multimedia </li>
                        <li>Relevant Courses: Machine Learning, Numerical Optimization, Computer Systems, Database Design, Algorithm and Analysis, Signals Systems, Data Structures, Multimedia Systems, Computer Music, and Linguistics.</li>
                    </ul>
                    <button className="btn-filled mt-3" onClick={downloadTranscriptHandler}>Download Transcript</button>
                </div>
                <Link className="absolute text-lightbrown hover:text-brown bottom-6 right-10 hover:underline font-semibold" to="/">{"Home >"}</Link>
            </div>
        </div>
    );
};

export default Education;
