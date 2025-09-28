import React from "react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I register for Nepathon Vol.1?",
    a: "Visit the Registration section on this site and fill the form. You will receive a confirmation email after successful registration.",
  },
  {
    q: "Who can participate?",
    a: "Bachelor running students, +2 students, and school-level students are welcome to participate. Check the Registration section for any specific eligibility rules for particular tracks.",
  },
  {
    q: "Can bachelor passout students apply?",
    a: "No - bachelor passouts cannot apply. Eligible participants are currently enrolled students: Bachelor (currently studying), +2 students, and school-level students.",
  },
  {
    q: "Are there any participation fees?",
    a: "Filling the initial registration form is free. Fees only apply if your team is selected for the hackathon. Selected teams will receive an email with payment instructions.",
  },
  {
    q: "How will teams be shortlisted?",
    a: "If more than 15 teams register, a shortlisting round will be conducted.",
  },
  {
    q: "How are hackathon themes assigned?",
    a: "Selected teams will receive themes list from the organizing team. Teams cannot choose their theme. Teams will know which theme to work on the first day of the hackathon only.",
  },
  {
    q: "Is accommodation provided?",
    a: "Yes - accommodation is provided for participants on the 14th and 15th. For participants arriving on the 13th, teams must arrange their own stay.",
  },
  {
    q: "Do teams have to be from the same college?",
    a: "No - teams can be formed with participants from different colleges. You do not have to form a team only with your own college members.",
  },
  {
    q: "Can organizations sponsor the event?",
    a: "Yes - please contact the organizing team for sponsorship opportunities and packages at nepathon@nepathyacollege.edu.np.",
  },
  {
    q: "I need help or have other questions",
    a: "Reach out to the Event Leads listed in the Contact section or send us a message using the contact form — we'll get back to you shortly.",
  },
  {
    q: "How is the selection process conducted?",
    a: "We will provide a theme to the registered teams. Teams are required to create a short pitching demo video explaining their approach and submit it for evaluation.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <>
      <section id="code-of-conduct" className="mt-12 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-extrabold text-yellow-400">
              Nepathon Vol.1 – Hackathon Rules, Code of Conduct & Policies
            </h3>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                1. Respect & Conduct
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  All participants must respect judges, mentors, fellow teams, and
                  the organizing team at all times.
                </li>
                <li>
                  Judges’ decisions are final and binding; no disputes regarding
                  scores or outcomes will be entertained.
                </li>
                <li>
                  Any disrespect, abusive language, or misbehavior towards
                  organizers, mentors, judges, or other teams is strictly
                  prohibited.
                </li>
                <li>
                  Teams must cooperate and maintain a friendly and fair competitive
                  environment.
                </li>
                <li>
                  Disrespecting other teams’ ideas or work is strictly forbidden.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                2. Arena / Venue Rules
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  No tobacco, nicotine, alcohol, or intoxicating substances are
                  allowed inside the hackathon arena.
                </li>
                <li>
                  No disturbance to other teams: loud talking, hollering, music, or
                  any disruptive behavior is prohibited.
                </li>
                <li>
                  Participants cannot leave the venue/arena during the hackathon
                  without written permission from organizers. Violation will result
                  in immediate disqualification.
                </li>
                <li>
                  All coding and development must be done on-site. Pulling code,
                  libraries, or full solutions from external repositories is
                  strictly prohibited.
                </li>
                <li>
                  Keep the venue clean. Any damage to property or equipment will be
                  the responsibility of the participants.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                3. Team Rules
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Each participant must be registered and part of one team only.</li>
                <li>
                  All submissions (code, presentation, GitHub repo if used for
                  version control) must be completed within the hackathon arena and
                  within the deadline.
                </li>
                <li>
                  Plagiarism, idea theft, or unauthorized access to other teams’
                  work is strictly prohibited.
                </li>
                <li>
                  Teams must respect time slots for demo, Q/A, and presentations.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                4. AI / Code Assistance Rules
              </h2>
              <p className="mb-4 text-gray-300">Allowed:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  AI code assistants like GitHub Copilot, ChatGPT, Tabnine, etc. for
                  hints, suggestions, or small code snippets.
                </li>
                <li>
                  Learning resources, documentation, tutorials for guidance (e.g.,
                  understanding a function, API usage).
                </li>
              </ul>
              <p className="mb-4 text-gray-300">Not Allowed:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Using AI or tools to generate the full solution/project.</li>
                <li>
                  Copying large blocks of code from external repositories, courses,
                  or forums.
                </li>
                <li>
                  Using AI “project generator agents” that build the complete project
                  automatically.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                5. Mentors & Judges
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  Mentors provide guidance and evaluate team process, collaboration,
                  and improvement. Mentor marks are scaled according to the rubric;
                  teams cannot request extra marks.
                </li>
                <li>
                  Judges evaluate based on demo, Q/A, innovation, technical
                  implementation, and impact. Judges’ decision is final and binding.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                6. Safety & Responsibility
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  Participants are responsible for their personal belongings.
                  Organizers are not liable for lost items.
                </li>
                <li>
                  Any health or safety issues must be reported immediately to
                  organizers.
                </li>
                <li>
                  Emergency exits and safety guidelines must be followed at all
                  times.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                7. Disqualification
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Disrespecting judges, mentors, organizing team, or other teams.</li>
                <li>Plagiarism, copying code, or idea/code theft.</li>
                <li>Using prohibited substances in the arena.</li>
                <li>Disturbing or harassing other teams.</li>
                <li>Leaving the venue/arena without written permission from organizers.</li>
                <li>
                  Pulling code, libraries, or full solutions from external
                  repositories (off-site) instead of on-site development.
                </li>
                <li>Using AI or tools to generate full projects (see AI/Code Assistance rules).</li>
                <li>Ignoring safety guidelines or instructions from organizers.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                8. Reporting & Enforcement
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  Any incidents must be reported immediately to the nearest organizer
                  or help desk.
                </li>
                <li>
                  Organizers will investigate and take appropriate action. All
                  decisions are final and binding.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                9. Agreement
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  By registering and participating, all teams agree to abide by these
                  rules.
                </li>
                <li>
                  Any breach of rules will result in penalties, including possible
                  disqualification.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section id="faq" className="mt-12 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-extrabold text-yellow-400">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
              Quick answers to common questions about Nepathon Vol.1. Still
              unsure? Use the contact form below.
            </p>
          </div>

          <Card className="p-6">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-yellow-400 font-semibold no-underline hover:no-underline focus:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300 text-sm">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
