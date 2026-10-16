import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, ExternalLink, Download, Crown, Crosshair, Clock3, Target, Trophy, Shield, BookOpen, ChevronRight, Sparkles, TrendingUp, Swords } from 'lucide-react';
import './styles.css';

const milestones = [
  { date: 'OCT 09', rating: 546, label: 'Early visible rating' },
  { date: 'OCT 09*', rating: 800, label: 'Visible game record' },
  { date: 'OCT 12', rating: 1095, label: 'Progress checkpoint' },
  { date: 'OCT 13', rating: 1140, label: 'Progress checkpoint' },
  { date: 'OCT 15', rating: 1254, label: 'Current rapid rating' },
];
const openings = [
  { name: 'Ruy López', tag: 'White / Open game', color: 'gold' },
  { name: 'Italian Game', tag: 'White / Open game', color: 'orange' },
  { name: 'French Defense', tag: 'Black / Semi-closed', color: 'silver' },
  { name: 'Scandinavian Defense', tag: 'Black / Direct response', color: 'avocado' },
  { name: 'Caro-Kann · Sicilian · Pirc', tag: 'Additional repertoire seen', color: 'silver' },
];
const focus = [
  { n: '01', title: 'Clock discipline', text: 'Reduce avoidable timeouts by setting a move-time budget and checking the clock before critical decisions.', icon: Clock3, tone: 'orange' },
  { n: '02', title: 'Tactical consistency', text: 'Build a daily calculation habit: checks, captures, threats, and opponent forcing moves.', icon: Crosshair, tone: 'gold' },
  { n: '03', title: 'A compact opening core', text: 'Choose a small, repeatable repertoire and learn plans and typical pawn structures—not only move orders.', icon: Shield, tone: 'avocado' },
  { n: '04', title: 'Post-game review', text: 'Review decisive moments after each serious game; identify one mistake and one lesson to carry forward.', icon: BookOpen, tone: 'silver' },
];

function RatingChart() {
  const w = 760, h = 290, pad = { l: 52, r: 20, t: 20, b: 46 };
  const min = 450, max = 1300;
  const x = i => pad.l + i * ((w - pad.l - pad.r) / (milestones.length - 1));
  const y = v => pad.t + (max - v) / (max - min) * (h - pad.t - pad.b);
  const points = milestones.map((m, i) => `${x(i)},${y(m.rating)}`).join(' ');
  const area = `${pad.l},${h-pad.b} ${points} ${w-pad.r},${h-pad.b}`;
  const ticks = [500, 700, 900, 1100, 1300];
  return <div className="chart-wrap">
    <div className="chart-legend"><span><i className="legend-line"/> Visible rating checkpoints</span><span className="chart-note">Not a complete daily rating history</span></div>
    <svg className="rating-chart" viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Selected rapid rating checkpoints rising from 546 to 1254">
      <defs><linearGradient id="areaGold" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#e8bd58" stopOpacity=".26"/><stop offset="100%" stopColor="#e8bd58" stopOpacity="0"/></linearGradient></defs>
      {ticks.map(t => <g key={t}><line x1={pad.l} x2={w-pad.r} y1={y(t)} y2={y(t)} stroke="var(--line)" strokeDasharray="4 6"/><text x={pad.l-12} y={y(t)+4} textAnchor="end" className="axis-label">{t}</text></g>)}
      <polygon points={area} fill="url(#areaGold)"/>
      <polyline points={points} fill="none" stroke="#e8bd58" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round"/>
      {milestones.map((m,i) => <g key={m.date}><circle cx={x(i)} cy={y(m.rating)} r="6" fill="#10110f" stroke="#e8bd58" strokeWidth="3"/><text x={x(i)} y={y(m.rating)-15} textAnchor="middle" className="point-label">{m.rating}</text><text x={x(i)} y={h-17} textAnchor="middle" className="axis-label date-label">{m.date}</text></g>)}
    </svg>
    <div className="milestone-list">{milestones.map((m,i)=><div className="milestone" key={m.date}><span className="milestone-dot">0{i+1}</span><div><strong>{m.rating}</strong><small>{m.label}</small></div></div>)}</div>
  </div>;
}
function OpeningBars() {
  const bars = [{label:'Open games',value:88,detail:'Ruy López · Italian Game'}, {label:'Semi-closed',value:67,detail:'French Defense · Caro-Kann'}, {label:'Flexible systems',value:48,detail:'Pirc · Modern · English'}, {label:'Other lines',value:34,detail:'Scandinavian · Sicilian · others'}];
  return <div className="opening-bars">{bars.map((b,i)=><div className="bar-row" key={b.label}><div className="bar-heading"><span>{b.label}</span><small>{b.detail}</small></div><div className="bar-track"><div className={`bar-fill bar-${i}`} style={{width:`${b.value}%`}}/></div></div>)}<p className="chart-note">Illustrative repertoire map based on openings visible in the supplied history; bar lengths are not game counts or win rates.</p></div>;
}
function App() {
  return <main>
    <nav className="nav shell"><a className="brand" href="#top"><span className="brand-mark">♞</span><span>BOARD<span className="brand-dot">/</span>LOG</span></a><div className="nav-right"><span className="status-dot"/> PERFORMANCE PORTFOLIO <span className="nav-sep">·</span> 2026</div><button className="print-button" onClick={()=>window.print()}><Download size={15}/> Save / Print</button></nav>
    <section className="hero shell" id="top">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> PLAYER DOSSIER <span className="mono">NO. 001 / 2026</span></div><p className="hero-kicker">A STUDY IN PROGRESS.</p><h1>Ace_Azimuth_<br/><span>Aviator.</span></h1><p className="hero-description">A competitive-minded chess player building sharper calculation, stronger decision-making, and a more disciplined game—one position at a time.</p><div className="hero-actions"><a className="primary-link" href="https://www.chess.com/member/ace_azimuth_aviator" target="_blank" rel="noreferrer">View Chess.com profile <ExternalLink size={16}/></a><a className="text-link" href="#performance">Explore performance <ArrowDownRight size={16}/></a></div><div className="hero-meta"><div><small>PLAYER</small><strong>Mojahidul Alam</strong></div><div><small>HOME BASE</small><strong>Jashore, Bangladesh</strong></div><div><small>MEMBER SINCE</small><strong>12 JUN 2026</strong></div></div></div>
      <div className="hero-art" aria-label="Decorative chess knight artwork"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-grid"/><div className="art-index">FIG. 01 <span>THE KNIGHT</span></div><div className="knight-shadow">♞</div><div className="knight">♞</div><div className="art-coordinate coord-a">E4</div><div className="art-coordinate coord-b">C6</div><div className="art-stamp"><Crown size={18}/><span>STRATEGY<br/>OVER IMPULSE</span></div><div className="art-bottom"><span>OPENING</span><span>CALCULATION</span><span>ENDGAME</span></div></div>
      <div className="hero-bottomline"><span>PERSONAL CHESS PORTFOLIO</span><span>OBSERVE. CALCULATE. IMPROVE.</span></div>
    </section>

    <section className="stats-band" id="performance"><div className="shell stats-grid">
      <div className="stat-card stat-main"><div className="stat-label"><span>01 / RAPID RATING</span><Crown size={17}/></div><div className="stat-number">1,254</div><div className="stat-foot"><span className="up-chip"><ArrowUpRight size={14}/> Rating milestone</span><span>10-minute chess</span></div><div className="stat-spark"><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/></div></div>
      <div className="stat-card"><div className="stat-label"><span>02 / GAMES PLAYED</span><Swords size={17}/></div><div className="stat-number">218</div><div className="stat-foot"><span>Visible profile total</span><span className="mini-arrow">↗</span></div><div className="micro-bars">{[20,34,26,45,37,56,42,70,52,66,82,60,94,74,100].map((n,i)=><i style={{height:`${n}%`}} key={i}/>)}</div></div>
      <div className="stat-card"><div className="stat-label"><span>03 / PUZZLES</span><Target size={17}/></div><div className="stat-number">640</div><div className="stat-foot"><span>Current puzzle rating</span><span className="mini-arrow">↗</span></div><div className="stat-progress"><span style={{width:'64%'}}/></div><small className="stat-sub">A baseline for tactical growth</small></div>
      <div className="stat-card"><div className="stat-label"><span>04 / STREAK</span><Sparkles size={17}/></div><div className="stat-number">06<span className="stat-unit"> days</span></div><div className="stat-foot"><span>Consecutive-day streak</span><Trophy size={15}/></div><div className="streak-dots">{Array.from({length:7},(_,i)=><span className={i<6?'active':''} key={i}>{i<6?'✓':'+'}</span>)}</div></div>
    </div></section>

    <section className="section shell rating-section"><div className="section-head"><div><div className="eyebrow"><span className="eyebrow-line"/> PERFORMANCE TRAJECTORY</div><h2>Progress, <em>in position.</em></h2></div><p className="section-intro">The supplied game history shows a meaningful upward movement in visible rating checkpoints. This is a snapshot of the available evidence—not a reconstructed full rating archive.</p></div><div className="panel rating-panel"><div className="panel-head"><div><span className="panel-label">RAPID RATING / CHECKPOINTS</span><h3>From first steps to 1,254</h3></div><span className="pill"><span className="status-dot"/> CURRENT SNAPSHOT</span></div><RatingChart/><div className="insight-strip"><div className="insight-icon"><TrendingUp size={22}/></div><div><strong>Momentum is visible. Consistency is the next challenge.</strong><p>Use each checkpoint as motivation, then judge improvement by repeatable decisions, time use, and post-game review—not rating alone.</p></div></div></div></section>

    <section className="section shell"><div className="section-head"><div><div className="eyebrow"><span className="eyebrow-line"/> PLAYER SNAPSHOT</div><h2>Beyond the <em>number.</em></h2></div><p className="section-intro">A compact profile of the activity and milestones visible in the supplied Chess.com page.</p></div><div className="snapshot-grid"><div className="snapshot-card trophy-card"><div className="trophy-orbit"><Trophy size={33}/></div><span className="panel-label">LEAGUE HIGHLIGHT</span><h3>Stone League</h3><p className="trophy-rank">1<sup>st</sup> <span>PLACE</span></p><div className="card-rule"/><div className="trophy-foot"><span>Achievements</span><strong>19</strong></div><div className="trophy-foot"><span>Awards</span><strong>101</strong></div></div><div className="snapshot-card"><div className="snapshot-icon gold-icon"><BookOpen size={19}/></div><span className="panel-label">STUDY & EXPLORATION</span><h3>Curiosity on the board</h3><div className="snapshot-metrics"><div><strong>16</strong><span>Books</span></div><div><strong>66</strong><span>Passports</span></div></div><p className="muted-copy">Profile counters reflect platform activity; they are not formal tournament credentials.</p></div><div className="snapshot-card"><div className="snapshot-icon avocado-icon"><Shield size={19}/></div><span className="panel-label">PLAYER IDENTITY</span><h3>Competitive mindset</h3><p>Competitive programming and algorithmic thinking provide a natural foundation for structured calculation, pattern recognition, and iterative improvement.</p><div className="tag-list"><span>Problem-solving</span><span>Calculation</span><span>Learning loop</span></div></div></div></section>

    <section className="section shell repertoire-section"><div className="section-head"><div><div className="eyebrow"><span className="eyebrow-line"/> OPENING LANDSCAPE</div><h2>A repertoire <em>taking shape.</em></h2></div><p className="section-intro">The game list shows experimentation across several opening families. The next step is to turn variety into a smaller, more familiar set of plans.</p></div><div className="repertoire-grid"><div className="panel opening-panel"><div className="panel-head"><div><span className="panel-label">OPENING FAMILIES</span><h3>What appears in the record</h3></div><span className="chess-glyph">♟</span></div><OpeningBars/><div className="opening-tags">{openings.map(o=><div className="opening-tag" key={o.name}><span className={`tag-dot ${o.color}`}/><div><strong>{o.name}</strong><small>{o.tag}</small></div><ChevronRight size={15}/></div>)}</div></div><div className="repertoire-aside"><div className="aside-card dark-aside"><span className="aside-number">A</span><span className="panel-label">STRATEGIC OPPORTUNITY</span><h3>Choose a home base.</h3><p>Pick one main setup as White and one dependable response each against 1.e4 and 1.d4. Revisit the same structures until plans feel familiar.</p><div className="aside-decoration">♘ <span>♙ ♙ ♙</span></div></div><div className="aside-card light-aside"><span className="panel-label">IMPORTANT DATA NOTE</span><p>Opening frequencies, win rates, and performance by color cannot be calculated reliably from the pasted page alone. No invented percentages are shown here.</p></div></div></div></section>

    <section className="section shell improvement-section"><div className="section-head"><div><div className="eyebrow"><span className="eyebrow-line"/> NEXT LEVEL</div><h2>The improvement <em>blueprint.</em></h2></div><p className="section-intro">The most useful performance portfolio is honest about both strengths and the work still ahead.</p></div><div className="focus-grid">{focus.map(f=>{const Icon=f.icon;return <article className="focus-card" key={f.n}><div className="focus-top"><span className="focus-n">{f.n}</span><span className={`focus-icon ${f.tone}`}><Icon size={19}/></span></div><h3>{f.title}</h3><p>{f.text}</p><div className="focus-line"/></article>})}</div><div className="training-panel"><div className="training-heading"><span className="panel-label">RECOMMENDED WEEKLY RHYTHM</span><h3>Train with intent.</h3><p>A practical starting structure; adjust it around study and daily responsibilities.</p></div><div className="training-schedule"><div><span className="schedule-icon">01</span><strong>Daily</strong><p>10–15 minutes of focused puzzles</p></div><div><span className="schedule-icon">02</span><strong>Each game</strong><p>Play with a clock plan; note critical moments</p></div><div><span className="schedule-icon">03</span><strong>After play</strong><p>Review one key mistake and its cause</p></div><div><span className="schedule-icon">04</span><strong>Weekly</strong><p>Study one endgame theme and one opening plan</p></div></div></div></section>

    <section className="closing-section"><div className="shell closing-inner"><div className="closing-mark">♞</div><div><div className="eyebrow"><span className="eyebrow-line"/> THE PLAYER'S STATEMENT</div><h2>Every game is <em>feedback.</em></h2><p>My goal is not only to raise a rating, but to become a more patient, accurate, and resilient player. I am building a repeatable process: calculate clearly, manage time deliberately, review honestly, and return to the board ready to learn.</p><div className="closing-signature">ACE_AZIMUTH_AVIATOR <span>·</span> CHESS PORTFOLIO 2026</div></div></div></section>

    <footer className="footer shell"><div className="footer-brand"><span className="brand-mark">♞</span><div><strong>BOARD/LOG</strong><small>A player in progress.</small></div></div><div className="footer-links"><a href="https://www.chess.com/member/ace_azimuth_aviator" target="_blank" rel="noreferrer">Chess.com <ExternalLink size={13}/></a><a href="https://github.com/Mojahidul21" target="_blank" rel="noreferrer">GitHub <ExternalLink size={13}/></a><a href="#top">Back to top ↑</a></div><div className="footer-note">DATA SNAPSHOT: 15 OCT 2026<br/>DESIGNED TO BE UPDATED AS THE GAME EVOLVES.</div></footer>
    <div className="disclaimer shell">Portfolio statistics are based on the profile and game-history text supplied for this report. Rating checkpoints are selected visible values; exact win/loss/draw totals, accuracy, opening win rates, and a continuous rating curve were not available. Profile metrics may change over time.</div>
  </main>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
