import { motion } from "framer-motion";
import { coreAttributes, passiveSkills, levelToPercent, levelToRank, levelToColor } from "../data/character";

function StatBar({ name, level, icon, type, index }: {
  name: string; level: string; icon: string; type: string; index: number;
}) {
  const pct   = levelToPercent[level as keyof typeof levelToPercent];
  const rank  = levelToRank[level as keyof typeof levelToRank];
  const color = levelToColor[level as keyof typeof levelToColor];

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">{icon}</span>
          <span className="font-vt text-base" style={{ color: "var(--parchment)" }}>{name}</span>
          <span className="font-pixel text-[7px] opacity-40" style={{ color: "var(--muted)" }}>{type}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-vt text-sm" style={{ color }}>{pct}</span>
          <span className="font-pixel text-[8px] w-5 h-5 flex items-center justify-center border" style={{ color, borderColor: color, background: `${color}18` }}>
            {rank}
          </span>
        </div>
      </div>
      <div className="stat-bar-track">
        <motion.div
          className="stat-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}55, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function StatsPanel() {
  return (
    <div className="rpg-panel corner-decor p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: "var(--border-gold)" }}>
        <span className="font-pixel text-[8px]" style={{ color: "var(--gold)" }}>⚔️ CORE ATTRIBUTES</span>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-3 mb-5">
        {coreAttributes.map((attr, i) => (
          <StatBar key={attr.id} {...attr} name={attr.label} index={i} />
        ))}
      </div>

      {/* Passive skills */}
      <div className="border-t pt-4" style={{ borderColor: "var(--border-gold)" }}>
        <div className="font-pixel text-[8px] mb-3" style={{ color: "var(--gold)" }}>🎒 PASSIVE SKILLS</div>
        <div className="flex flex-wrap gap-2">
          {passiveSkills.map((s, i) => {
            const color = levelToColor[s.level];
            const rank  = levelToRank[s.level];
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.04 }}
                className="flex items-center gap-1.5 px-2 py-1 border font-vt text-sm"
                style={{ borderColor: `${color}40`, color: "var(--parchment)", background: `${color}0a` }}
              >
                <span>{s.icon}</span>
                <span>{s.name}</span>
                <span className="font-pixel text-[7px]" style={{ color }}>{rank}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
