import { Link } from "react-scroll";
import Logo from "/logo-dhruv.png";
import { socialLinks } from "./Hero";
import { navItems } from "./Navbar";

const Footer = () => (
  <footer className="w-full border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-12">
    <div className="flex flex-col items-center gap-4 text-center text-sm">
      <Link
        to="home"
        smooth
        duration={1000}
        href="#home"
        className="cursor-pointer select-none uppercase tracking-wider text-slate-400"
      >
        Dhruv <span className="font-bold text-blue-400">Chokshi</span>
      </Link>

      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {navItems.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            smooth
            duration={1000}
            offset={-40}
            href={`#${item.link}`}
            className="cursor-pointer font-medium text-slate-400 transition-colors hover:text-blue-300"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="flex gap-2">
        {socialLinks.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target={url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={name}
            className="grid size-10 place-items-center rounded-lg text-lg text-slate-400 transition-colors hover:bg-slate-900 hover:text-blue-300"
          >
            <Icon />
          </a>
        ))}
      </div>

      <img src={Logo} alt="Dhruv Chokshi logo" draggable="false" className="h-28 w-auto select-none" />

      <p className="text-xs text-slate-500">Handmade with React, Tailwind &amp; Framer</p>
      <p className="text-xs text-slate-400">Copyright © {new Date().getFullYear()} Dhruv Chokshi</p>
    </div>
  </footer>
);

export default Footer;
