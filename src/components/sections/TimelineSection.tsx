import { Calendar, Clock, Flag, Users } from "lucide-react";

const timelineEvents = [
	{
		icon: Users,
		title: "Registration Opens",
		date: "Ashwin 10",
		time: "12:00 AM",
		description: "Team registration opens. Form your teams and register early.",
		color: "neon-green",
	},
	{
		icon: Calendar,
		title: "Registration Closes",
		date: "Kartik 05",
		time: "11:59 PM",
		description:
			"Registration closes. Make sure your team is registered before the deadline.",
		color: "neon-blue",
	},
	{
		icon: Flag,
		title: "Selection Announcement",
		date: "Kartik 08",
		time: "6:00 PM",
		description: "Selected teams will be announced for the main hackathon event.",
		color: "neon-purple",
	},
	{
		icon: Clock,
		title: "Hackathon Begins",
		date: "Kartik 14",
		time: "9:00 AM",
		description: "Hackathon kick-off. 48 hours of coding and collaboration.",
		color: "neon-pink",
	},
	{
		icon: Flag,
		title: "Project Build Complete",
		date: "Kartik 16",
		time: "10:00 AM",
		description: "All teams must submit and finalize their projects by this time.",
		color: "neon-green",
	},
	{
		icon: Flag,
		title: "Project Demonstration",
		date: "Kartik 16",
		time: "11:00 AM onwards",
		description: "Teams present demos; judges evaluate and finalists selected.",
		color: "neon-green",
	},
];

const cssVarMap: Record<string, string> = {
	"neon-green": "--neon-green",
	"neon-blue": "--electric-blue",
	"neon-pink": "--hot-pink",
	"neon-purple": "--cyber-purple",
};

// Updated the Timeline section to use the background color from ThemesSection
const TimelineSection = () => {
	return (
		<section className="py-20 relative bg-black">
			<div className="container mx-auto px-6">
				<div className="text-center mb-10">
					<h2 className="text-5xl font-extrabold mb-4 text-neon-green">Timeline</h2>
					<p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
						Follow the journey step by step with our clean timeline.
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					<div className="pl-8 space-y-12 relative">
						{/* Adjusted the vertical line to curve and connect circles as per the provided design */}
						{/* <svg
							className="absolute left-0 top-0 w-full h-full"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M 20 20 Q 40 40, 20 60 T 20 100"
								stroke="yellow"
								strokeWidth="4"
								fill="none"
							/>
						</svg> */}

						{timelineEvents.map((event, idx) => {
							const cssVar = cssVarMap[event.color] ?? "--neon-green";

							return (
								<div key={event.title} className="relative">
									{/* Connector Dot */}
									<div
										className="absolute -left-5 top-0 w-10 h-10 rounded-full border-4 border-yellow-400 flex items-center justify-center"
										style={{ backgroundColor: `hsl(var(${cssVar}))` }}
									>
										<div className="w-4 h-4 rounded-full bg-gray-900"></div>
									</div>

									{/* Event Content */}
									<div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 shadow-lg">
										<h3 className="text-xl font-bold text-yellow-500 mb-2">
											{event.title}
										</h3>
										<div className="text-sm text-yellow-500 font-semibold mb-1">
											{event.date}
										</div>
										<div className="text-xs text-gray-300 mb-4">
											{event.time}
										</div>
										<p className="text-sm text-gray-300 leading-relaxed">
											{event.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TimelineSection;