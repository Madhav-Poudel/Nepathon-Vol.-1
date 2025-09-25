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
    a: "Visit the Registration section on this site and fill the form. Registration is required for all participants. You will receive a confirmation email after successful registration.",
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
    a: "If more than 15 teams register, a shortlisting round will be conducted. Participants must submit their GitHub profile, CV, and optional LinkedIn profile. The selection team will choose the top 15 participants for the final hackathon.",
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
];

const FAQSection: React.FC = () => {
  return (
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
  );
};

export default FAQSection;
