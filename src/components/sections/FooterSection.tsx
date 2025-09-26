"use client";
import {
  Code,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Hash,
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-gray-700 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Branding */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-yellow-500 mr-3" />
              <h3 className="text-3xl font-bold text-yellow-500">
                Nepathon Vol. 1
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Join us for an exciting hackathon experience and showcase your
              skills at the national level.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Hash className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#themes"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Prizes
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-500">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-yellow-500" />
                <a
                  href="mailto:nepathon@nepathyacollege.edu.np"
                  className="hover:text-yellow-500 transition-colors"
                >
                  nepathon@nepathyacollege.edu.np
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-yellow-500" />
                <a
                  href="tel:+977-123-456-789"
                  className="hover:text-yellow-500 transition-colors"
                >
                  +977 - 9849121059
                </a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-yellow-500 mt-0.5" />
                <span>
                  Nepathya College
                  <br />
                  Tilottama, Manigram
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Managed Organizer Section */}
        <p className="mt-4 text-sm md:text-base text-gray-400 uppercase tracking-widest text-center">
          Organized by{" "}
          <span className="text-yellow-400 font-bold">FusionStack</span>{" "}
          &nbsp;|&nbsp; Powered by{" "}
          <span className="text-yellow-400 font-bold">Nepathya College</span>
        </p>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2025 Nepathya Hackathon Vol 1. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
