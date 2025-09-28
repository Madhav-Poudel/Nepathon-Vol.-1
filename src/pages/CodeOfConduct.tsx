import React from 'react';

const CodeOfConduct = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-300">
      <h1 className="text-4xl font-bold mb-6 text-yellow-500 text-left">Nepathon Vol.1 – Hackathon Rules, Code of Conduct & Policies</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">1. Respect & Conduct</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All participants must respect judges, mentors, fellow teams, and the organizing team at all times.</li>
            <li>Judges’ decisions are final and binding; no disputes regarding scores or outcomes will be entertained.</li>
            <li>Any disrespect, abusive language, or misbehavior towards organizers, mentors, judges, or other teams is strictly prohibited.</li>
            <li>Teams must cooperate and maintain a friendly and fair competitive environment.</li>
            <li>Disrespecting other teams’ ideas or work is strictly forbidden.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">2. Arena / Venue Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>No tobacco, nicotine, alcohol, or intoxicating substances are allowed inside the hackathon arena.</li>
            <li>No disturbance to other teams: loud talking, hollering, music, or any disruptive behavior is prohibited.</li>
            <li>Participants cannot leave the venue/arena during the hackathon without written permission from organizers. Violation will result in immediate disqualification.</li>
            <li>All coding and development must be done on-site. Pulling code, libraries, or full solutions from external repositories is strictly prohibited.</li>
            <li>Keep the venue clean. Any damage to property or equipment will be the responsibility of the participants.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">3. Team Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Each participant must be registered and part of one team only.</li>
            <li>All submissions (code, presentation, GitHub repo if used for version control) must be completed within the hackathon arena and within the deadline.</li>
            <li>Plagiarism, idea theft, or unauthorized access to other teams’ work is strictly prohibited.</li>
            <li>Teams must respect time slots for demo, Q/A, and presentations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">4. AI / Code Assistance Rules</h2>
          <p className="mb-4">Allowed:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI code assistants like GitHub Copilot, ChatGPT, Tabnine, etc. for hints, suggestions, or small code snippets.</li>
            <li>Learning resources, documentation, tutorials for guidance (e.g., understanding a function, API usage).</li>
          </ul>
          <p className="mb-4">Not Allowed:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using AI or tools to generate the full solution/project.</li>
            <li>Copying large blocks of code from external repositories, courses, or forums.</li>
            <li>Using AI “project generator agents” that build the complete project automatically.</li>
          </ul>
          <p>Examples of Not Allowed:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cursor-like AI agents that write the entire project for you.</li>
            <li>Lovable v0 / similar AI tools that automatically generate full projects end-to-end.</li>
            <li>Any tool, script, or online resource that delivers a complete working solution without team effort.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">5. Mentors & Judges</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mentors provide guidance and evaluate team process, collaboration, and improvement. Mentor marks are scaled according to the rubric; teams cannot request extra marks.</li>
            <li>Judges evaluate based on demo, Q/A, innovation, technical implementation, and impact. Judges’ decision is final and binding.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">6. Safety & Responsibility</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Participants are responsible for their personal belongings. Organizers are not liable for lost items.</li>
            <li>Any health or safety issues must be reported immediately to organizers.</li>
            <li>Emergency exits and safety guidelines must be followed at all times.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">7. Disqualification</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Disrespecting judges, mentors, organizing team, or other teams.</li>
            <li>Plagiarism, copying code, or idea/code theft.</li>
            <li>Using prohibited substances in the arena.</li>
            <li>Disturbing or harassing other teams.</li>
            <li>Leaving the venue/arena without written permission from organizers.</li>
            <li>Pulling code, libraries, or full solutions from external repositories (off-site) instead of on-site development.</li>
            <li>Using AI or tools to generate full projects (see AI/Code Assistance rules).</li>
            <li>Ignoring safety guidelines or instructions from organizers.</li>
          </ul>
          <p>Note: Violation of any rules will result in immediate disqualification. Judges’ and organizers’ decisions are final and cannot be challenged.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">8. Reporting & Enforcement</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any incidents must be reported immediately to the nearest organizer or help desk.</li>
            <li>Organizers will investigate and take appropriate action. All decisions are final and binding.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">9. Agreement</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>By registering and participating, all teams agree to abide by these rules.</li>
            <li>Any breach of rules will result in penalties, including possible disqualification.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CodeOfConduct;