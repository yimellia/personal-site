import { Link } from "react-router-dom";
import ResumeHeader from "../components/ResumeHeader";
import HoverTable from "../components/HoverTable";

const OtherExp: React.FC = () => {
    const exps = [
        {
            company: 'Wheaton College, MA',
            role: 'Spring Semester Exchange Program',
            duration: 'Jan 2023 - May 2023',
            year: '2023',
            description: (<ul className="list-disc">
                <li>Went on an exchange to Wheaton College in Massachusetts, United State</li>
                <li>Course taken:
                    <li>COMP 298 - Robotics</li>
                    <li>MATH 151 - Introduction to Data Science</li>
                    <li>REL 142 - Religion and Sexuality</li>
                    <li>THEA 298 - Contra Dance Technique</li>
                </li>
            </ul>)
        },
        {
            company: 'University of York',
            role: 'Service learning summer program',
            duration: 'Jul 2023 - Jul 2023',
            year: '2023',
            description: (<ul className="list-disc">
                <li>Took a two-week Service Learning/Civil Engagement course at University of York, United Kingdom .</li>
            </ul>)
        },
        {
            company: 'Artificial Intelligence: Systems And Technologies Society, The Student Union of CUHK',
            role: 'President',
            duration: 'Jan 2020 - Jan 2022',
            year: '2020',
            description: (<ul className="list-disc">
                <li>Delegated tasks and led 12 committee members.</li>
                <li>Coordinated 10 diverse events for over 120 members, imparting practical IT knowledge and industry insights.</li>
                <li>Fostered teacher-student relationships and strengthened academic connections.</li>
            </ul>)
        },
        {
            company: 'Morningside College, CUHK',
            role: 'Badminton Team Leader',
            duration: 'Oct 2021 - Oct 2022',
            year: '2021',
            description: (<ul className="list-disc">
                <li>Organized extra practice sessions, ensuring skill development among team members.</li>
                <li>Coordinated team strategy and tactics.</li>
                <li>Fostered teamwork and sportsmanship within the team of 12 members.</li>
            </ul>)
        },
        {
            company: 'The Chinese University of Hong Kong Engineering Student Activities Association',
            role: 'Vice president',
            duration: '2021 Sep – 2022 Sep',
            year: '2021',
            description: (<ul className="list-disc">
                <li>Delegated tasks and led over 60 committee members.</li>
                <li>Organized a one-week event including programming workshop, programming contest, Arduino car workshops, and a car racing contest.</li>
            </ul>)
        },
        {
            company: 'Engineering Orientation Camp Operating Committee',
            role: 'Vice President',
            duration: 'Mar 2021 - Sep 2021',
            year: '2021',
            description: (<ul className="list-disc">
                <li>Led the committee of 25 people.</li>
                <li>Organized a two-day camp for more than 200 students.</li>
                <li>Managed more than 60 facilitators.</li>
                <li>Hold external and internal meetings every week.</li>
            </ul>)
        },
        {
            company: 'Private Tutoring',
            role: 'Tutor',
            duration: 'Apr 2019 - Jan 2023',
            year: '2019',
            description: (<ul className="list-disc">
                <li>Tutoring for Maths, ICT, Chemistry.</li>
                <li>Students ranging from P5 to S6.</li>
            </ul>)
        },
        {
            company: 'Hong Kong Playground Association',
            role: 'Summer Activity Assistant',
            duration: 'Jul 2019 - Aug 2019',
            year: '2019',
            description: (
                <ul className="list-disc">
                    <li>Assisted the centre to organize more than 20 summer activity courses for children aged between 3 to 12</li>
                </ul>
            )
        }
      ];

    return (
        <div className="bg-beige text-brown min-h-screen">
            <ResumeHeader />
            <main className="border-[1.5px] border-solid border-darkbrown mx-24 flex relative py-16 max-h-[calc(100vh-10rem)]">
                <h1 className="title-resume px-16 basis-1/5">Other Experiences</h1>
                <div>
                    <div className="flex flex-col gap-6 pr-26 w-3/4 ml-32  h-full overflow-y-auto">
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

export default OtherExp;