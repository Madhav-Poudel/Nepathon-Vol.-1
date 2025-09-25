import { Code, Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-gray-700 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Nepathya Hackathon Vol 1 Branding */}
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-yellow-500 mr-3" />
              <h3 className="text-3xl font-bold text-yellow-500">Nepathon Vol. 1</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Join us for an exciting hackathon experience and showcase your skills at the national level.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-500">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="#themes" className="text-gray-300 hover:text-yellow-500 transition-colors">Themes</a></li>
              <li><a href="#prizes" className="text-gray-300 hover:text-yellow-500 transition-colors">Prizes</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-yellow-500 transition-colors">Timeline</a></li>
              <li><a href="#register" className="text-gray-300 hover:text-yellow-500 transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-500">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-yellow-500" />
                <a href="mailto:info@nepathon.com" className="hover:text-yellow-500 transition-colors">
                  info@nepathon.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-yellow-500" />
                <a href="tel:+977-123-456-789" className="hover:text-yellow-500 transition-colors">
                  +977-123-456-789
                </a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-yellow-500 mt-0.5" />
                <span>Nepathya College<br />Koteshwor, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Organizer Section */}
        <div className="border-t border-border/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-neon-purple">Organized by</h4>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <h5 className="text-2xl font-bold text-neon-green mb-2">FusionStack</h5>
                <p className="text-foreground/70">Tech Community & Innovation Hub</p>
              </div>
              <div className="w-px h-12 bg-border/20"></div>
              <div className="text-center">
                <h5 className="text-2xl font-bold text-neon-blue mb-2">Nepathya College</h5>
                <p className="text-foreground/70">Educational Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/20 pt-8 text-center">
          <p className="text-foreground/60">
            © 2024 Nepathya Hackathon Vol 1. All rights reserved. Built with ❤️ by FusionStack.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;