import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Users } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import emailjs from "emailjs-com";

interface TeamMember {
	name: string;
	email: string;
}

const RegistrationSection = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		teamName: "",
		teamLeader: "",
		memberCount: "2",
		city: "",
	});

	const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

	const addTeamMember = () => {
		if (teamMembers.length < 4) {
			setTeamMembers([...teamMembers, { name: "", email: "" }]);
		}
	};

	const updateTeamMember = (
		index: number,
		field: keyof TeamMember,
		value: string
	) => {
		const updated = teamMembers.map((member, i) =>
			i === index ? { ...member, [field]: value } : member
		);
		setTeamMembers(updated);
	};

	const removeTeamMember = (index: number) => {
		setTeamMembers(teamMembers.filter((_, i) => i !== index));
	};

	// Enhanced validation to include all required fields
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Enhanced validation
		if (!formData.teamName || !formData.teamLeader || !formData.city) {
			toast({
				title: "Missing Information",
				description: "Please fill in all required fields.",
				variant: "destructive",
			});
			return;
		}

		if (teamMembers.some((member) => !member.name || !member.email)) {
			toast({
				title: "Incomplete Team Member Information",
				description: "Please ensure all team members have a name and email.",
				variant: "destructive",
			});
			return;
		}

		// Prepare email data
		const emailData = {
			team_name: formData.teamName,
			team_leader: formData.teamLeader,
			member_count: formData.memberCount,
			city: formData.city,
			team_members: teamMembers
				.map((member, index) => `Member ${index + 1}: ${member.name}, ${member.email}`)
				.join("\n"),
		};

		// Send email using EmailJS
		emailjs
			.send("service_bvzhaab", "template_omx6xke", emailData, "0aKXUicBRjnhqUyof")
			.then(
				() => {
					toast({
						title: "Registration Successful!",
						description:
							"Your team has been registered for Nepathon. Check your email for confirmation.",
					});
					// Reset form
					setFormData({
						teamName: "",
						teamLeader: "",
						memberCount: "2",
						city: "",
					});
					setTeamMembers([]);
				},
				(error) => {
					toast({
						title: "Email Sending Failed",
						description: `Error: ${error.text}`,
						variant: "destructive",
					});
				}
			);
	};

	return (
		<section className="py-20 relative bg-gray-900">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold mb-6 text-neon-green">
						Register for Nepathon
					</h2>
					<p className="text-xl text-foreground/80 max-w-3xl mx-auto">
						Ready to code for a cause? Join us in this exciting hackathon and
						brings your innovative ideas to life.
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<Card className="bg-card/50 border-neon-green/20 p-8">
						<form onSubmit={handleSubmit} className="space-y-8">
							{/* Team Information */}
							<div>
								<div className="flex items-center mb-6">
									<UserPlus className="h-6 w-6 text-neon-green mr-3" />
									<h3 className="text-2xl font-semibold text-neon-green">
										Team Information
									</h3>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<Label
											htmlFor="teamName"
											className="text-foreground/80"
										>
											Team Name
										</Label>
										<Input id="teamName" name="teamName" required />
									</div>
									<div>
										<Label
											htmlFor="memberCount"
											className="text-foreground/80"
										>
											Number of Members
										</Label>
										<Select
											value={formData.memberCount}
											onValueChange={(value) =>
												setFormData({ ...formData, memberCount: value })
											}
											required
										>
											<SelectTrigger className="text-foreground/80">
												<SelectValue placeholder="Select" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="2">2</SelectItem>
												<SelectItem value="3">3</SelectItem>
												<SelectItem value="4">4</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div>
										<Label htmlFor="city" className="text-foreground/80">
											City
										</Label>
										<Input id="city" name="city" required />
									</div>
								</div>
							</div>

							{/* Team Leader Information */}
							<div>
								<div className="flex items-center mb-6">
									<UserPlus className="h-6 w-6 text-neon-green mr-3" />
									<h3 className="text-2xl font-semibold text-neon-green">
										Team Leader Information
									</h3>
								</div>

								<div className="space-y-6">
									{/* Leader Information */}
									<div>
										<h4 className="text-xl font-semibold text-foreground/80 mb-4">
											Leader Information
										</h4>
										<div className="grid md:grid-cols-2 gap-6">
											<div>
												<Label
													htmlFor="leaderName"
													className="text-foreground/80"
												>
													Name
												</Label>
												<Input
													id="leaderName"
													name="leaderName"
													required
												/>
											</div>
											<div>
												<Label
													htmlFor="leaderPhone"
													className="text-foreground/80"
												>
													Phone Number
												</Label>
												<Input
													id="leaderPhone"
													name="leaderPhone"
													required
												/>
											</div>
											<div>
												<Label
													htmlFor="leaderEmail"
													className="text-foreground/80"
												>
													Email
												</Label>
												<Input
													id="leaderEmail"
													name="leaderEmail"
													required
												/>
											</div>
											<div>
												<Label
													htmlFor="leaderTshirt"
													className="text-foreground/80"
												>
													T-shirt Size
												</Label>
												<Select required>
													<SelectTrigger>
														<SelectValue placeholder="Select" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="S">S</SelectItem>
														<SelectItem value="M">M</SelectItem>
														<SelectItem value="L">L</SelectItem>
														<SelectItem value="XL">XL</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label
													htmlFor="leaderFood"
													className="text-foreground/80"
												>
													Food Preferences
												</Label>
												<Select required>
													<SelectTrigger>
														<SelectValue placeholder="Select" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="Veg">Veg</SelectItem>
														<SelectItem value="Non-Veg">Non-Veg</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label
													htmlFor="leaderGithub"
													className="text-foreground/80"
												>
													GitHub Link
												</Label>
												<Input id="leaderGithub" name="leaderGithub" />
											</div>
											<div>
												<Label
													htmlFor="leaderLinkedin"
													className="text-foreground/80"
												>
													LinkedIn Link
												</Label>
												<Input id="leaderLinkedin" name="leaderLinkedin" />
											</div>
											<div>
												<Label
													htmlFor="leaderCV"
													className="text-foreground/80"
												>
													Upload CV
												</Label>
												<Input id="leaderCV" name="leaderCV" type="file" />
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Members Information */}
							<div>
								<div className="flex items-center justify-between mb-6">
									<div className="flex items-center">
										<UserPlus className="h-6 w-6 text-neon-green mr-3" />
										<h3 className="text-2xl font-semibold text-neon-green">
											Members Information
										</h3>
									</div>
									<Button
										onClick={() =>
											setTeamMembers((prev) => [
												...prev,
												{
													name: "",
													email: "",
												},
											])
										}
										className="bg-neon-green text-black hover:bg-neon-green/80 neon-glow"
										disabled={
											teamMembers.length >=
											parseInt(formData.memberCount) - 1
										}
									>
										Add Member
									</Button>
								</div>

								{teamMembers.map((member, index) => (
									<div
										key={`${member.name}-${index}`}
										className="space-y-4 mb-6"
									>
										<h5 className="text-lg font-medium text-foreground/80">
											Member {index + 1}
										</h5>
										<div className="grid md:grid-cols-2 gap-6">
											<div>
												<Label
													htmlFor={`memberName-${index}`}
													className="text-foreground/80"
												>
													Name
												</Label>
												<Input
													id={`memberName-${index}`}
													name={`memberName-${index}`}
													required
												/>
											</div>
											<div>
												<Label
													htmlFor={`memberPhone-${index}`}
													className="text-foreground/80"
												>
													Phone Number
												</Label>
												<Input
													id={`memberPhone-${index}`}
													name={`memberPhone-${index}`}
													required
												/>
											</div>
											<div>
												<Label
													htmlFor={`memberEmail-${index}`}
													className="text-foreground/80"
												>
													Email
												</Label>
												<Input
													id={`memberEmail-${index}`}
													name={`memberEmail-${index}`}
													required
												/>
											</div>
											<div>
												<Label
													htmlFor={`memberTshirt-${index}`}
													className="text-foreground/80"
												>
													T-shirt Size
												</Label>
												<Select required>
													<SelectTrigger>
														<SelectValue placeholder="Select" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="S">S</SelectItem>
														<SelectItem value="M">M</SelectItem>
														<SelectItem value="L">L</SelectItem>
														<SelectItem value="XL">XL</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label
													htmlFor={`memberFood-${index}`}
													className="text-foreground/80"
												>
													Food Preferences
												</Label>
												<Select required>
													<SelectTrigger>
														<SelectValue placeholder="Select" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="Veg">Veg</SelectItem>
														<SelectItem value="Non-Veg">Non-Veg</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label
													htmlFor={`memberGithub-${index}`}
													className="text-foreground/80"
												>
													GitHub Link
												</Label>
												<Input
													id={`memberGithub-${index}`}
													name={`memberGithub-${index}`}
												/>
											</div>
											<div>
												<Label
													htmlFor={`memberLinkedin-${index}`}
													className="text-foreground/80"
												>
													LinkedIn Link
												</Label>
												<Input
													id={`memberLinkedin-${index}`}
													name={`memberLinkedin-${index}`}
												/>
											</div>
											<div>
												<Label
													htmlFor={`memberCV-${index}`}
													className="text-foreground/80"
												>
													Upload CV
												</Label>
												<Input
													id={`memberCV-${index}`}
													name={`memberCV-${index}`}
													type="file"
												/>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* Submit Button */}
							<div className="text-center">
								<Button
									type="submit"
									size="lg"
									className="bg-neon-green text-background hover:bg-neon-green/80 neon-glow px-12 py-4 text-lg font-semibold"
								>
									Register for Nepathon
								</Button>
							</div>
						</form>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default RegistrationSection;