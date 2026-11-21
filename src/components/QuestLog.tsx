import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quests, rarityConfig, type Quest, type Rarity } from "../data/character";

function QuestCard({ quest, index }: { quest: Quest; index: number }) {
  const [open, setOpen] = useState(false);
  const cfg = rarityConfig[quest.rarity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.06, duration: 0.4 }}
      className={`border cursor-pointer transition-all duration-300 rarity-${quest.rarity}`}
      style={{ borderColor: cfg.border }}
      onClick={() => setOpen(!open)}
    >
      {/* Card header */}
      <div className="p-3 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            {/* Rarity badge */}
            <span
              className="font-pixel text-[7px] px-1.5 py-0.5"
              style={{ color: cfg.color, background: `${cfg.color}15`, border: `1px solid ${cfg.color}40` }}
            >
              {cfg.label}
            </span>
            {/* Status */}
            <span className="font-pixel text-[7px]" style={{ color: quest.status === "completed" ? "#4ade80" : "#fbbf24" }}>
              {quest.status === "completed" ? "✓ COMPLETE" : "⚔ ACTIVE"}
            </span>
          </div>
          <h3 className="font-cinzel font-semibold text-base leading-tight" style={{ color: cfg.color }}>
            {quest.name}
          </h3>
          <p className="font-vt text-sm" style={{ color: "var(--muted)" }}>{quest.subtitle}</p>
        </div>
        <span className="font-pixel text-[8px] mt-1 shrink-0" style={{ color: "var(--muted)" }}>
          {open ? "▲" : "▼"}
        </span>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-3 pb-3 border-t" style={{ borderColor: `${cfg.border}55` }}>
              <p className="font-vt text-base mt-2 mb-3" style={{ color: "var(--parchment)" }}>
                {quest.description}
              </p>

              {/* Reward */}
              <div className="flex items-center gap-1.5 mb-3">
                <span className="font-pixel text-[7px]" style={{ color: "var(--gold)" }}>🎁 REWARD:</span>
                <span className="font-vt text-sm" style={{ color: "var(--gold)" }}>{quest.reward}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {quest.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-vt text-sm px-2 py-0.5 border"
                    style={{ color: "var(--parchment)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {quest.github && (
                  <a href={quest.github} target="_blank" rel="noopener noreferrer"
                    className="font-pixel text-[8px] hover:opacity-70 transition-opacity"
                    style={{ color: "var(--blue)" }}
                    onClick={e => e.stopPropagation()}
                  >
                    [GITHUB]
                  </a>
                )}
                {quest.demo && (
                  <a href={quest.demo} target="_blank" rel="noopener noreferrer"
                    className="font-pixel text-[8px] hover:opacity-70 transition-opacity"
                    style={{ color: "var(--green)" }}
                    onClick={e => e.stopPropagation()}
                  >
                    [LIVE DEMO]
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const RARITIES: (Rarity | "all")[] = ["all", "legendary", "epic", "rare", "uncommon"];

export default function QuestLog() {
  const [filter, setFilter] = useState<Rarity | "all">("all");

  const filtered = filter === "all" ? quests : quests.filter(q => q.rarity === filter);

  return (
    <div className="rpg-panel corner-decor p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b" style={{ borderColor: "var(--border-gold)" }}>
        <span className="font-pixel text-[8px]" style={{ color: "var(--gold)" }}>📜 QUEST LOG</span>
        <span className="font-vt text-sm ml-auto" style={{ color: "var(--muted)" }}>
          {quests.filter(q => q.status === "completed").length}/{quests.length} COMPLETED
        </span>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {RARITIES.map(r => {
          const color = r === "all" ? "var(--muted)" : rarityConfig[r].color;
          const active = filter === r;
          return (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className="font-pixel text-[7px] px-2 py-1 border transition-all"
              style={{
                borderColor: active ? color : "var(--border)",
                color: active ? color : "var(--muted)",
                background: active ? `${color}18` : "transparent",
              }}
            >
              {r.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Quest cards */}
      <div className="flex flex-col gap-2">
        <AnimatePresence mode="wait">
          {filtered.map((quest, i) => (
            <QuestCard key={quest.id} quest={quest} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
