import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

const ease = [0.16, 1, 0.3, 1];

// "My Experience" style heading: accent word + muted word, hairline rule underneath.
export const SectionHeading = ({ accent, rest, accentFirst = true }) => (
  <h2 className="w-full border-b border-slate-800 pb-4 text-3xl font-bold tracking-tight text-slate-400 md:text-5xl">
    {accentFirst ? (
      <>
        <span className="text-blue-400">{accent}</span> {rest}
      </>
    ) : (
      <>
        {rest} <span className="text-blue-400">{accent}</span>
      </>
    )}
  </h2>
);

export const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 px-6 py-20 sm:px-10 md:py-28 ${className}`}>
    <div className="mx-auto w-full max-w-screen-xl">{children}</div>
  </section>
);

export const Tag = ({ children }) => (
  <span className="rounded-full border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-medium text-blue-300">
    {children}
  </span>
);

export const LinkPill = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 rounded-full bg-blue-400 px-4 py-1.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-300"
  >
    {children}
    <FiArrowUpRight aria-hidden="true" />
  </a>
);

// One card in an Experience/Project grid. Opens the detail modal.
export const Card = ({ img, imgAlt, imgFit = "cover", title, subtitle, date, tags = [], onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 text-left transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 hover:shadow-[0_18px_40px_-20px_rgba(2,6,23,0.9)]"
  >
    <div className={`aspect-[4/3] w-full overflow-hidden ${imgFit === "contain" ? "bg-white p-4" : imgFit === "contain-dark" ? "bg-slate-950 p-4" : "bg-slate-950"}`}>
      <img
        src={img}
        alt={imgAlt}
        loading="lazy"
        draggable="false"
        className={`h-full w-full select-none transition duration-500 group-hover:scale-[1.03] ${imgFit === "cover" ? "object-cover" : "object-contain"}`}
      />
    </div>
    <div className="flex flex-1 flex-col gap-1 p-4">
      <p className="text-base font-semibold leading-snug text-slate-200">{title}</p>
      <p className="text-sm text-slate-400">{subtitle}</p>
      <p className="text-xs text-slate-500">{date}</p>
      {tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </div>
  </button>
);

// Grid that shows `initial` cards, with a View more / View less toggle.
export const CardGrid = ({ items, initial = 4, renderCard }) => {
  const [showAll, setShowAll] = React.useState(false);
  const visible = showAll ? items : items.slice(0, initial);
  return (
    <>
      <div className="grid grid-cols-1 gap-5 pt-12 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((item, i) => (
          <React.Fragment key={i}>{renderCard(item)}</React.Fragment>
        ))}
      </div>
      {items.length > initial && (
        <div className="flex justify-center pt-10">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="rounded-full border border-slate-800 px-5 py-2 text-sm font-semibold text-blue-400 transition-colors hover:border-blue-400/60 hover:bg-slate-900"
          >
            {showAll ? "View less" : `View all ${items.length}`}
          </button>
        </div>
      )}
    </>
  );
};

// Detail dialog. `entry` = { img, imgAlt, label, title, subtitle, meta[], tags[], links[], roles[] }
// Each role = { title, team, date, loc, body }: one block per work term / write-up.
export const DetailModal = ({ entry, onClose }) => {
  const closeRef = React.useRef(null);

  React.useEffect(() => {
    if (!entry) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [entry, onClose]);

  return createPortal(
    <AnimatePresence>
      {entry && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-title"
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-slate-800 bg-slate-950 shadow-2xl sm:rounded-2xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full text-xl text-slate-400 transition-colors hover:bg-slate-900 hover:text-blue-300"
            >
              <IoMdClose />
            </button>

            <div className="overflow-y-auto overscroll-contain p-6 sm:p-8">
              <header className="flex items-start gap-5 border-b border-slate-800 pb-6 pr-10">
                <img
                  src={entry.img}
                  alt={entry.imgAlt}
                  draggable="false"
                  className="hidden size-28 shrink-0 select-none rounded-xl border border-slate-800 object-cover sm:block"
                />
                <div className="flex min-w-0 flex-col gap-2">
                  <h3 id="detail-title" className="text-2xl font-bold tracking-tight text-slate-100">
                    {entry.title}
                  </h3>
                  {entry.subtitle && <p className="font-medium text-slate-300">{entry.subtitle}</p>}
                  {entry.meta?.filter(Boolean).length > 0 && (
                    <p className="text-sm text-slate-500">{entry.meta.filter(Boolean).join(" · ")}</p>
                  )}
                  {entry.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {entry.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  )}
                  {entry.links?.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {entry.links.map((l) => (
                        <LinkPill key={l.url} href={l.url}>
                          {l.name}
                        </LinkPill>
                      ))}
                    </div>
                  )}
                </div>
              </header>

              <div className="flex flex-col">
                {entry.roles?.map((role, i) => (
                  <article
                    key={i}
                    className={`py-6 ${i > 0 ? "border-t border-slate-800/70" : ""}`}
                  >
                    {(role.title || role.date) && (
                      <div className="flex flex-col gap-1 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <p className="font-semibold text-slate-200">
                          {role.title}
                          {role.team && <span className="font-normal text-slate-400"> · {role.team}</span>}
                        </p>
                        {role.date && <p className="shrink-0 text-sm text-slate-500">{role.date}</p>}
                      </div>
                    )}
                    {role.body && (
                      <div className="max-w-[68ch] space-y-4 leading-relaxed text-slate-400 [&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-slate-300">
                        {role.body}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
