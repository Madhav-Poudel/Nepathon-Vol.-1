import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Prizes", href: "#prizes" },
  { label: "Timeline", href: "#timeline" },
  { label: "Registration", href: "#registration" },
  { label: "Sponsors", href: "#sponsors" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black backdrop-blur border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Left: Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-black" />
          </div>
          <div className="font-extrabold text-xl tracking-tight text-yellow-500">
            Nepathya
          </div>
        </div>

        {/* Center: Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-8 text-base font-medium text-gray-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-yellow-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: Register + Mobile toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="#registration"
            className="hidden sm:inline-block bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            Register
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-gray-700 transition"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-gray-700">
          <div className="px-4 py-3 space-y-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 px-2 rounded-md hover:bg-muted/10 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#registration"
              className="mt-2 inline-block bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-semibold"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
