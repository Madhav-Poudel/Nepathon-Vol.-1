import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RegistrationSection = () => {
  // Replace this with the real Google Form URL
  const googleFormUrl = "https://forms.gle/8QNszcxE69VqnbUEA";

  const openForm = () => {
    // Open in new tab/window safely
    window.open(googleFormUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <section id="registration" className="py-20 relative bg-gray-900/30">
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
            <h3 className="text-2xl font-semibold text-neon-green mb-4">
              Hackathon Selection Process & Guidelines
            </h3>
            <div className="space-y-4 text-foreground/80">
              <div>
                <h4 className="font-semibold text-lg text-neon-green/80">
                  Selection Process:
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    Only 15 Teams will be selected for the hackathon.
                  </li>
                  <li>
                    If more than 15 Teams register, a shortlisting round
                    will be conducted.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-neon-green/80">
                  Registration Requirements:
                </h4>
                <p>
                  Teams must submit the following during registration:
                </p>
                <ul className="list-disc list-inside">
                  <li>GitHub profile links of all team members</li>
                  <li>CVs of all team members</li>
                  <li>LinkedIn profiles (optional)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-neon-green/80">
                  Themes:
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    Themes will be shared via email prior to the hackathon.
                  </li>
                  <li>
                    Each selected team will be assigned one theme,
                    and all work during the hackathon must be based on the
                    assigned theme.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-neon-green/80">
                  Registration Fee:
                </h4>
                <p>NPR 3,000 per Team</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-neon-green/80">
                  Selection Criteria:
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    The selection team (group of mentors) will review GitHub
                    profiles, CVs, and LinkedIn (if provided).
                  </li>
                  <li>
                    15 Teams will be selected based on this evaluation.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-neon-green">
                  Note: Please read these guidelines carefully before submitting
                  your registration.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 border-neon-green/20 p-8 text-center">
            <h3 className="text-2xl font-semibold text-neon-green mb-4">
              Ready to register?
            </h3>
            <p className="text-foreground/80 mb-6">
              Click the button below to open the Google Form and submit your
              team details.
            </p>
            <Button
              onClick={openForm}
              size="lg"
              className="bg-neon-green text-black hover:bg-neon-green/80 neon-glow px-8 py-3 text-lg font-semibold"
            >
              Register Your Team
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

