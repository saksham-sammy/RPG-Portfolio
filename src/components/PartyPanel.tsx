import { motion } from "framer-motion";
import { partyMembers } from "../data/character";

const classColors: Record<string, string> = {
  STR: "#f87171",
  INT: "#818cf8",
  DEX: "#fbbf24",
  WIS: "#4ade80",
};

export default function PartyPanel() {
  return (
    <div className="rpg-panel corner-decor p-4">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: "var(--border-gold)" }}>
        <span className="font-pixel text-[8px]" style={{ color: "var(--gold)" }}>⚔️ ACTIVE PARTY</span>
        <span className="font-vt text-sm ml-auto" style={{ color: "var(--muted)" }}>Tech Stack</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {partyMembers.map((member, i) => {
          const color = classColors[member.class] ?? "var(--gold)";
          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="border p-3 flex flex-col items-center text-center float"
              style={{ borderColor: `${color}40`, background: `${color}06`, animationDelay: `${i * 0.5}s` }}
            >
              <div
                className="text-2xl w-10 h-10 flex items-center justify-center border mb-2"
                style={{ borderColor: `${color}50`, background: `${color}10` }}
              >
                {member.icon}
              </div>
              <p className="font-cinzel font-semibold text-sm" style={{ color }}>{member.name}</p>
              <p className="font-pixel text-[7px] mb-2" style={{ color: "var(--muted)" }}>{member.role}</p>

              {/* HP bar */}
              <div className="w-full stat-bar-track">
                <motion.div
                  className="stat-bar-fill"
                  style={{ background: `linear-gradient(90deg, ${color}55, ${color})` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${member.hp}%` }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span className="font-vt text-xs mt-1" style={{ color: "var(--muted)" }}>{member.hp}/100</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
