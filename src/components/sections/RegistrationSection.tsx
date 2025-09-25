import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface TeamMember {
	id: string;
	name: string;
	email: string;
	phone: string;
	tshirt: string;
	food: string;
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

	const updateTeamMember = (
		index: number,
		field: keyof TeamMember,
		value: string
	) => {
		setTeamMembers((prev) => {
			const updated = [...prev];
			updated[index] = { ...updated[index], [field]: value };
			return updated;
		});
	};

	// Enhanced validation logic
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Check if all required fields in formData are filled
		const requiredFields = ['teamName', 'teamLeader', 'city'];
		const missingFields = requiredFields.filter((field) => !formData[field]);

		if (missingFields.length > 0) {
			toast({
				title: "Missing Information",
				description: `Please fill in all required fields: ${missingFields.join(', ')}`,
				variant: "destructive",
			});
			return;
		}

		// Check if all team members have required fields filled
		const incompleteMembers = teamMembers.some((member) => {
			return !member.name || !member.email || !member.phone || !member.tshirt || !member.food;
		});

		if (incompleteMembers) {
			toast({
				title: "Incomplete Team Member Information",
				description: "Please ensure all team members have filled all required fields.",
				variant: "destructive",
			});
			return;
		}

		try {
			await sendToGoogleSheets(formData, teamMembers);
			toast({
				title: "Submission Successful!",
				description: "Your data has been stored in Google Sheets.",
			});
			// Reset form
			setFormData({
				teamName: "",
				teamLeader: "",
				memberCount: "2",
				city: "",
			});
			setTeamMembers([]);
		} catch (error) {
			toast({
				title: "Submission Failed",
				description: `Error: ${error.message}`,
				variant: "destructive",
			});
		}
	};

	return (
		<section className="py-20 relative bg-black">
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

				<div className="max-w-4xl mx-auto mb-8">
					<Card className="bg-card/50 border-neon-green/20 p-8">
						<h3 className="text-2xl font-semibold text-neon-green mb-4">Hackathon Selection Process & Guidelines</h3>
						<div className="space-y-4 text-foreground/80">
							<div>
								<h4 className="font-semibold text-lg text-neon-green/80">Selection Process:</h4>
								<ul className="list-disc list-inside">
									<li>Only 15 participants will be selected for the hackathon.</li>
									<li>If more than 15 participants register, a shortlisting round will be conducted.</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold text-lg text-neon-green/80">Registration Requirements:</h4>
								<p>Participants must submit the following during registration:</p>
								<ul className="list-disc list-inside">
									<li>GitHub profile links of all team members</li>
									<li>CVs of all team members</li>
									<li>LinkedIn profiles (optional)</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold text-lg text-neon-green/80">Themes:</h4>
								<ul className="list-disc list-inside">
									<li>Themes will be shared via email prior to the hackathon.</li>
									<li>Each selected participant/team will be assigned one theme, and all work during the hackathon must be based on the assigned theme.</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold text-lg text-neon-green/80">Registration Fee:</h4>
								<p>NPR 3,000 per participant</p>
							</div>
							<div>
								<h4 className="font-semibold text-lg text-neon-green/80">Selection Criteria:</h4>
								<ul className="list-disc list-inside">
									<li>The selection team (group of mentors) will review GitHub profiles, CVs, and LinkedIn (if provided).</li>
									<li>15 participants will be selected based on this evaluation.</li>
								</ul>
							</div>
							<div>
								<p className="font-semibold text-neon-green">Note: Please read these guidelines carefully before submitting your registration.</p>
							</div>
						</div>
					</Card>
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
										<Input
											id="teamName"
											name="teamName"
											value={formData.teamName}
											onChange={(e) =>
												setFormData({ ...formData, teamName: e.target.value })
											}
											required
										/>
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
										<Input
											id="city"
											name="city"
											value={formData.city}
											onChange={(e) =>
												setFormData({ ...formData, city: e.target.value })
											}
											required
										/>
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
													value={formData.teamLeader}
													onChange={(e) =>
														setFormData({ ...formData, teamLeader: e.target.value })
													}
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
													id: Date.now().toString(),
													name: "",
													email: "",
													phone: "",
													tshirt: "M",
													food: "Veg",
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
										key={member.id}
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
													value={member.name}
													onChange={(e) =>
														updateTeamMember(index, "name", e.target.value)
													}
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
													value={member.email}
													onChange={(e) =>
														updateTeamMember(index, "email", e.target.value)
													}
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
													value={member.phone}
													onChange={(e) =>
														updateTeamMember(index, "phone", e.target.value)
													}
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
												<Select
													value={member.tshirt}
													onValueChange={(value) =>
														updateTeamMember(index, "tshirt", value)
													}
													required
												>
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
												<Select
													value={member.food}
													onValueChange={(value) =>
														updateTeamMember(index, "food", value)
													}
													required
												>
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

const spreadsheetId = "1t0ir5z73UpFzUWPasX0mLKnK8yBoqBu1Roi4ChlXzLw"; // Updated with the user's Google Spreadsheet ID

// Updated Google Sheets integration using Google Apps Script web app
const sendToGoogleSheets = async (formData, teamMembers) => {
    try {
        // Prepare the data to send as an object matching the Apps Script expectations
        const data = {
            name: formData.teamLeader,
            email: teamMembers.length > 0 ? teamMembers[0].email : '',
            idea: formData.teamName
        };

        // Google Apps Script web app URL
        const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbwOItLe58iexnq5qiJzGtT0WF0ZRht7_xFiwbvlWLU_arZCSjF8d_V_cduvesIxJFybxw/exec';

        const response = await fetch(appsScriptUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP ${response.status}: ${text}`);
        }

        const text = await response.text();
        let result;
        try {
            result = JSON.parse(text);
        } catch (jsonError) {
            throw new Error(`Invalid JSON response from server: ${jsonError.message}, response text: ${text}`);
        }

        if (result.status !== 'success') {
            throw new Error(result.message || 'Failed to submit to Google Sheets');
        }

        console.log('Data sent to Google Sheets successfully');
    } catch (error) {
        console.error("Error while sending data to Google Sheets:", error);
        throw error;
    }
};