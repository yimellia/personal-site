import ResumeHeader from "../components/ResumeHeader";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

const Skills: React.FC = () => {
	const skills = [
		{
			title: "Programming (Python)",
			strength: 95,
		},
		{
			title: "Programming (C, C++, Java)",
			strength: 70,
		},
		{
			title: "AI (Pytorch, Tensorflow)",
			strength: 85,
		},
		{
			title: "Database Management (MySQL)",
			strength: 70,
		},
		{
			title: "Front-end (React, TypeScript, JavaScript)",
			strength: 75,
		},
	];
	return (
		<div className="bg-beige text-darkbrown min-h-screen">
			<ResumeHeader />
			<main className="border-[1.5px] border-solid border-darkbrown mx-24 flex relative py-16 h-[calc(100vh-10rem)]">
				<h1 className="title-resume px-16 basis-1/5">
					Skills &<br />
					Proficiencies
				</h1>
				<div className="flex flex-col gap-6 pr-26 w-3/4 ml-32 h-full overflow-y-auto">
					<div>
						{skills.map(({ title, strength }) => (
							<div className="py-5 pr-24">
								<h2 className="font-['Mukta'] font-medium text-3xl">{title}</h2>
                                <ProgressBar targetPercentage={strength} />
							</div>
						))}
					</div>
					<section>
						<h2 className="font-['Mukta'] font-medium text-3xl">Languages</h2>
						<table className="mx-6 my-4 font-['Mukta'] font-medium text-2xl w-2/3 h-32">
							<tbody>
								<tr>
									<td>Cantonese</td>
									<td className=" text-lightbrown text-xl">native</td>
								</tr>
								<tr>
									<td>English</td>
									<td className=" text-lightbrown text-xl">fluent</td>
								</tr>
								<tr>
									<td>Mandarin</td>
									<td className=" text-lightbrown text-xl">fluent</td>
								</tr>
							</tbody>
						</table>
					</section>
				</div>
                <Link className="absolute text-lightbrown hover:text-brown bottom-6 right-10 hover:underline font-semibold" to="/">{"Home >"}</Link>
			</main>
		</div>
	);
};
export default Skills;
