import { character } from "../data/character";

export default function ContactPanel() {
  return (
    <div className="rpg-panel corner-decor p-4">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: "var(--border-gold)" }}>
        <span className="font-pixel text-[8px]" style={{ color: "var(--gold)" }}>✉️ SEND A MESSAGE</span>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <p className="font-vt text-base" style={{ color: "var(--muted)" }}>
          Want to embark on a quest together? Reach out through any of these portals:
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "EMAIL",     href: `mailto:${character.links.email}`,    color: "#4ade80" },
            { label: "GITHUB",    href: character.links.github,               color: "#e2e8f0" },
            { label: "LINKEDIN",  href: character.links.linkedin,             color: "#60a5fa" },
            { label: "PORTFOLIO", href: character.links.portfolio,            color: "var(--gold)" },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-[8px] px-3 py-2 border transition-all hover:opacity-80 hover:scale-105 inline-block"
              style={{ color: link.color, borderColor: link.color, background: `${link.color}10` }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t flex items-center justify-between flex-wrap gap-2" style={{ borderColor: "var(--border)" }}>
        <span className="font-pixel text-[7px]" style={{ color: "var(--muted)" }}>
          CHARACTER SHEET v1.0 · © 2026 SAKSHAM SHARMA
        </span>
        <span className="font-vt text-sm" style={{ color: "var(--gold-dim)" }}>
          ⚡ Built with React · TypeScript · Framer Motion
        </span>
      </div>
    </div>
  );
}
