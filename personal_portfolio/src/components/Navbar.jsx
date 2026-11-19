import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

export const navItems = [
  { title: "About", link: "about-me" },
  { title: "Experience", link: "experiences" },
  { title: "Projects", link: "projects" },
  { title: "Skills", link: "skills" },
  { title: "Contact", link: "contact" },
];

const linkProps = { smooth: true, spy: true, duration: 900, offset: -40, activeClass: "is-active" };

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <header className="border-b border-slate-900 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-screen-xl items-center justify-between px-6 sm:px-10">
        <Link
          to="home"
          {...linkProps}
          offset={0}
          href="#home"
          onClick={close}
          className="cursor-pointer select-none uppercase tracking-wider text-slate-300"
        >
          Dhruv <span className="font-bold text-blue-400">Chokshi</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  to={item.link}
                  {...linkProps}
                  href={`#${item.link}`}
                  className="nav-link relative cursor-pointer select-none py-2 text-sm font-medium text-slate-300 transition-colors hover:text-blue-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-2xl text-slate-300 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            className="overflow-hidden border-t border-slate-900 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col px-6 py-3">
              {navItems.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    {...linkProps}
                    href={`#${item.link}`}
                    onClick={close}
                    className="block cursor-pointer py-3 text-base font-medium text-slate-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
