import { motion } from "framer-motion";
import { achievements, achievementTier } from "../data/character";

export default function AchievementsPanel() {
  return (
    <div className="rpg-panel corner-decor p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: "var(--border-gold)" }}>
        <span className="font-pixel text-[8px]" style={{ color: "var(--gold)" }}>🏆 ACHIEVEMENTS UNLOCKED</span>
        <span className="font-vt text-sm ml-auto" style={{ color: "var(--muted)" }}>
          {achievements.length} / ∞
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {achievements.map((ach, i) => {
          const tier = achievementTier[ach.tier];
          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 + i * 0.07 }}
              className="border p-3 flex gap-3 items-start group hover:brightness-110 transition-all cursor-default"
              style={{ borderColor: tier.border, background: `${tier.color}08` }}
            >
              {/* Icon */}
              <div
                className="text-xl shrink-0 w-10 h-10 flex items-center justify-center border"
                style={{ borderColor: tier.border, background: `${tier.color}12` }}
              >
                {ach.icon}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <div className="font-pixel text-[7px] mb-0.5" style={{ color: tier.color }}>
                  {ach.tier.toUpperCase()} · {ach.year}
                </div>
                <p className="font-cinzel font-semibold text-sm leading-tight" style={{ color: tier.color }}>
                  {ach.name}
                </p>
                <p className="font-vt text-sm" style={{ color: "var(--muted)" }}>{ach.issuer}</p>
                <p className="font-vt text-sm mt-1 leading-snug" style={{ color: "var(--parchment)" }}>
                  {ach.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
