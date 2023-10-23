import { Link } from "react-router-dom";
import ResumeHeader from "../components/ResumeHeader";
import HoverTable from "../components/HoverTable";

const WorkExp: React.FC = () => {
    const exps = [
        {
            company: 'OAO Limited',
            role: 'Web Developer Intern',
            duration: 'Jun 2023 - Aug 2023',
            year: '2023',
            description: (<ul className="list-disc">
                <li>Contributed to the development of a web application that generates 3D models of human organs and anatomical structures for medical education purposes.</li>
                <li>Researched and implemented 3D rendering techniques to enhance the visual detail and optimize the time capacity.</li>
            </ul>)
        },
        {
            company: 'Hong Kong Observatory',
            role: 'Summer Placement at Radar and Satellite Department',
            duration: 'Jun 2022 - Jul 2022',
            year: '2022',
            description: (<ul className="list-disc">
                <li>Contributed to the development of a web application that generates 3D models of human organs and anatomical structures for medical education purposes.
                    <li>Researched and implemented 3D rendering techniques to enhance the visual detail and optimize the time capacity.</li>
                    <li>Automated the end-to-end training and rendering process, encompassing atmospheric data retrieval, heatmap conversion, data pairing, model training, satellite image synthesis, and intranet deployment.</li>
                </li>
                <li>Followed up another volcanic hotspot detection project, accurately identifying pre-eruption or eruption locations using image detection and meteorological formulas.</li>
            </ul>)
        },
        {
            company: 'Insight Robotics Limited, Hong Kong',
            role: 'AI Deep Learning Training Part-time',
            duration: 'Sep 2020 - Oct 2021',
            year: '2023',
            description: (<ul className="list-disc">
                <li>Developed a face and car-plate detection and blurring software using YOLOv4 for privacy in street view publication.</li>
                <li>Designed and implemented a GUI to enhance user experience in training and inference.</li>
                <li>Followed up another project monitoring construction safety compliance using image detection.</li>
            </ul>)
        },
        {
            company: 'The Chinese University of Hong Kong',
            role: 'STEM 1040 Teaching Assistant',
            duration: 'Jul 2021 - Aug 2021',
            year: '2021',
            description: (
                <ul className="list-disc">
                    <li>Developed lab exercises for 30 high school students, covering concepts from basic programming, OOP, other Python libraries, and machine learning.</li>
                    <li>Provided personalized assistance during lectures and labs, troubleshooting students' programming problems and ensuring a solid grasp of concepts.</li>
                </ul>
            )
        }
      ];

    return (
        <div className="bg-beige text-brown min-h-screen">
            <ResumeHeader />
            <main className="border-[1.5px] border-solid border-darkbrown mx-24 flex relative py-16 max-h-[calc(100vh-10rem)]">
                <h1 className="title-resume px-16 basis-1/5">Work Experiences</h1>
                <div>
                    <div className="flex flex-col gap-6 pr-26 w-3/4 ml-32 h-full overflow-y-auto">
                    {exps.map((exp, index) => (
                        <HoverTable
                        key={index}
                        company={exp.company}
                        role={exp.role}
                        duration={exp.duration}
                        year={exp.year}
                        description={exp.description}
                        />
                    ))}
                    </div>
                </div>
                <Link className="absolute text-lightbrown hover:text-brown bottom-6 right-10 hover:underline font-semibold" to="/">{"Home >"}</Link>
            </main>
        </div>
    );
}

export default WorkExp;