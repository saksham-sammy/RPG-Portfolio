import { motion } from "framer-motion";
import { character } from "../data/character";

export default function CharacterHeader() {
  const { stats } = character;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rpg-panel rpg-panel-gold corner-decor rounded-none p-5 mb-4"
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">

        {/* Name + class */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-pixel text-[var(--gold-dim)]">PLAYER</span>
            <span className="text-xs font-pixel" style={{ color: "var(--gold)" }}>— LVL {character.level}</span>
          </div>
          <h1 className="font-cinzel font-bold text-2xl sm:text-3xl gold-flicker" style={{ color: "var(--gold-light)" }}>
            {character.name}
          </h1>
          <p className="font-pixel text-[8px] mt-1" style={{ color: "var(--purple)", letterSpacing: "0.15em" }}>
            {character.title}
          </p>
        </div>

        {/* Class + Guild badges */}
        <div className="flex flex-col items-start sm:items-end gap-1.5 text-right">
          <div className="flex gap-2 flex-wrap justify-end">
            <span className="font-pixel text-[8px] px-2 py-1 border rounded-none" style={{ borderColor: "var(--gold-dim)", color: "var(--gold)", background: "rgba(201,168,76,0.06)" }}>
              {character.primaryClass}
            </span>
            <span className="font-pixel text-[8px] px-2 py-1 border rounded-none" style={{ borderColor: "#5b21b6", color: "var(--purple)", background: "rgba(192,132,252,0.06)" }}>
              {character.secondaryClass}
            </span>
          </div>
          <p className="font-vt text-[var(--muted)] text-base">{character.guild}</p>
          <p className="font-vt text-[var(--muted)] text-sm">📍 {character.location}</p>
        </div>
      </div>

      {/* HP / MP / XP bars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {/* HP */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-pixel text-[8px]" style={{ color: "#4ade80" }}>HP {stats.hp.label}</span>
            <span className="font-vt text-sm" style={{ color: "#4ade80" }}>{stats.hp.current}/{stats.hp.max}</span>
          </div>
          <div className="stat-bar-track">
            <motion.div
              className="stat-bar-fill bar-hp"
              initial={{ width: 0 }}
              animate={{ width: `${(stats.hp.current / stats.hp.max) * 100}%` }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
        {/* MP */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-pixel text-[8px]" style={{ color: "#818cf8" }}>MP {stats.mp.label}</span>
            <span className="font-vt text-sm" style={{ color: "#818cf8" }}>{stats.mp.current}/{stats.mp.max}</span>
          </div>
          <div className="stat-bar-track">
            <motion.div
              className="stat-bar-fill bar-mp"
              initial={{ width: 0 }}
              animate={{ width: `${(stats.mp.current / stats.mp.max) * 100}%` }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
        {/* XP */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-pixel text-[8px]" style={{ color: "var(--gold)" }}>XP {stats.xp.label}</span>
            <span className="font-vt text-sm" style={{ color: "var(--gold)" }}>{stats.xp.current.toLocaleString()}/{stats.xp.next.toLocaleString()}</span>
          </div>
          <div className="stat-bar-track">
            <motion.div
              className="stat-bar-fill bar-xp"
              initial={{ width: 0 }}
              animate={{ width: `${(stats.xp.current / stats.xp.next) * 100}%` }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>

      {/* Lore / Bio */}
      <p className="font-vt text-[var(--muted)] text-base leading-snug border-t pt-3" style={{ borderColor: "var(--border-gold)" }}>
        <span style={{ color: "var(--gold-dim)" }}>📜 LORE: </span>
        {character.lore}
      </p>

      {/* Status & Links row */}
      <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
        <span className="flex items-center gap-1.5 font-pixel text-[8px]" style={{ color: "#4ade80" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 status-pulse inline-block" />
          {character.status}
        </span>
        {Object.entries(character.links).map(([key, url]) => (
          <a
            key={key}
            href={url.startsWith("http") || url.startsWith("mailto") ? url : `mailto:${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-vt text-sm hover:underline transition-opacity hover:opacity-80"
            style={{ color: "var(--gold)" }}
          >
            [{key.toUpperCase()}]
          </a>
        ))}
      </div>
    </motion.div>
  );
}
