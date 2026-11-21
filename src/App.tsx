import './index.css';
import CharacterHeader from './components/CharacterHeader';
import StatsPanel from './components/StatsPanel';
import QuestLog from './components/QuestLog';
import AchievementsPanel from './components/AchievementsPanel';
import PartyPanel from './components/PartyPanel';
import ContactPanel from './components/ContactPanel';

export default function App() {
  return (
    <>
      {/* CRT scanline overlay */}
      <div className="scanlines" />

      {/* Ambient background radials */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-8%", width: 400, height: 400,
          background: "radial-gradient(circle, rgba(192,132,252,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "40%", left: "45%", width: 300, height: 300,
          background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      {/* Main layout */}
      <div className="relative z-10 min-h-screen px-3 py-5 sm:px-6 lg:px-10 max-w-7xl mx-auto">

        {/* Title bar */}
        <div className="text-center mb-4">
          <span className="font-pixel text-[7px]" style={{ color: "var(--gold-dim)", letterSpacing: "0.3em" }}>
            ═══════════════ CHARACTER SHEET ═══════════════
          </span>
        </div>

        {/* Character Header (full width) */}
        <CharacterHeader />

        {/* Two-column: Stats left | Quest Log right */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-4 mb-4">
          <StatsPanel />
          <QuestLog />
        </div>

        {/* Party Panel */}
        <div className="mb-4">
          <PartyPanel />
        </div>

        {/* Achievements (full width) */}
        <div className="mb-4">
          <AchievementsPanel />
        </div>

        {/* Contact / Footer */}
        <ContactPanel />

        {/* Bottom deco */}
        <div className="text-center mt-4">
          <span className="font-pixel text-[7px]" style={{ color: "var(--gold-dim)", letterSpacing: "0.3em" }}>
            ═══════════════════════════════════════════════
          </span>
        </div>
      </div>
    </>
  );
}
