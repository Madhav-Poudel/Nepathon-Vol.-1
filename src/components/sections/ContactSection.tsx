import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

function ContactForm() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name && !email && !message) return;
    setSending(true);
    try {
      // Replace these with the values you gave
      const serviceId = "service_3srz8sq";
      const templateId = "template_omx6xke";
      const publicKey = "0aKXUicBRjnhqUyof";

      const templateParams = {
        from_name: name || "Visitor",
        reply_to: email || "",
        message: message || "",
      };

      // Dynamically import EmailJS so the app still builds if the package is not installed.
      let emailjsModule: any = null;
      try {
        emailjsModule = await import("@emailjs/browser");
      } catch (impErr) {
        // If the package isn't installed, fall back to opening the user's mail client.
        console.warn(
          "@emailjs/browser not available, falling back to mailto.",
          impErr
        );
        const subject = encodeURIComponent(`Contact from ${name || "Visitor"}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`
        );
        window.location.href = `mailto:nepathon@nepathyacollege.edu.np?subject=${subject}&body=${body}`;
        setName("");
        setEmail("");
        setMessage("");
        const fallbackToast = toast({
          title: "Email client opened",
          description:
            "EmailJS not installed — opened your mail client as a fallback. Run `npm install @emailjs/browser` to enable in-site sending.",
        });
        setTimeout(() => fallbackToast.dismiss(), 3000);
        return;
      }

      const emailjsClient = emailjsModule?.default ?? emailjsModule;
      await emailjsClient.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      // show success toast
      const ok = toast({
        title: "Message sent",
        description: "Thank you — we received your message.",
      });
      setTimeout(() => ok.dismiss(), 3000);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS send error:", err);
      const fail = toast({
        title: "Send failed",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      setTimeout(() => fail.dismiss(), 3000);
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="contact-name"
          className="text-sm text-gray-200 block mb-1"
        >
          Name
        </label>
        <input
          id="contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded bg-background border"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="text-sm text-gray-200 block mb-1"
        >
          Email
        </label>
        <input
          id="contact-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full px-3 py-2 rounded bg-background border"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="text-sm text-gray-200 block mb-1"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 rounded bg-background border"
          rows={5}
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          disabled={sending}
          className="px-4 py-2 bg-yellow-400 text-black rounded font-semibold"
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}

const ContactSection = () => {
  return (
    <section id="contact" className="mt-8 lg:mt-12 mb-12 lg:mb-20">
      <div className="max-w-6xl mx-auto bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
        <h3 className="text-4xl font-extrabold text-yellow-400 mb-6 text-center">
          Contact Us
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-gray-300 mb-6 text-center lg:text-left">
              Have questions, sponsorship inquiries, or want to volunteer?{" "}
              <br /> Use the details below or send us a message using the form.
            </p>

            <ul className="text-gray-200 space-y-3 mb-6">
              <li>
                <strong className="text-yellow-300">Event Email:</strong>{" "}
                <a
                  className="text-yellow-200 no-underline hover:no-underline hover:text-yellow-200 hover:opacity-100 focus:outline-none"
                  href="mailto:nepathon@nepathyacollege.edu.np"
                >
                  nepathon@nepathyacollege.edu.np
                </a>
              </li>
              <li>
                <strong className="text-yellow-300">Venue:</strong> Nepathya
                College, Manigram
              </li>
              <li>
                <strong className="text-yellow-300">Event Dates:</strong> Kartik
                14th, 15th, and 16th
              </li>
            </ul>

            <div className="space-y-3 text-gray-200">
              <div>
                <div className="font-bold text-yellow-300">Aayam Regmi</div>
                <div className="text-sm">
                  Event Lead •{" "}
                  <a
                    className="text-yellow-200 no-underline hover:no-underline hover:text-yellow-200 hover:opacity-100 focus:outline-none"
                    href="tel:+977-9845207641"
                  >
                    +977-9845207641
                  </a>
                </div>
              </div>
              <div>
                <div className="font-bold text-yellow-300">Madhav Poudel</div>
                <div className="text-sm">
                  Event Lead •{" "}
                  <a
                    className="text-yellow-200 no-underline hover:no-underline hover:text-yellow-200 hover:opacity-100 focus:outline-none"
                    href="tel:+977-9849121059"
                  >
                    +977-9849121059
                  </a>
                </div>
              </div>
            </div>

            {/* social links removed as requested */}
          </div>

          <div>
            <Card className="p-6">
              <h4 className="text-xl font-bold mb-4">Send us a message</h4>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
