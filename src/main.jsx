import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import profilePhoto from './assets/shubham-rokade-profile.jpg';

const roles = [
  { company: 'Fareportal', title: 'Associate Tech Lead', dates: 'Jul 2021 — Present', place: 'Pune, India', tag: 'Travel Technology', bullets: ['Modernized legacy .NET applications into scalable microservices and mentored junior developers.', 'Built Auto-Ticketing, reducing commission errors from 5% to 0.20% and strengthening revenue performance.', 'Delivered Auto-Exchange automation at 99%, streamlining ticket changes caused by flight schedule shifts.', 'Led Qantas and Turkish Airlines integrations; partnered with product, QA, and operations for smooth releases.'] },
  { company: 'Tech Mahindra', title: 'Senior Software Engineer', dates: 'Oct 2019 — Jul 2021', place: 'Pune, India', tag: 'Enterprise Platforms', bullets: ['Delivered scalable software solutions with close stakeholder and cross-functional collaboration.', 'Led Gamification from discovery to deployment—KPI campaigns, points, leaderboards, and performance graphs.', 'Built critical Panorama and Cornea tools, improving project execution efficiency by 40%.'] },
  { company: 'Bizsense Solutions', title: 'Software Engineer', dates: 'Jun 2016 — Oct 2019', place: 'Nagpur, India', tag: 'ERP & Logistics', bullets: ['Developed full-stack applications across a diverse portfolio of business software projects.', 'Worked in a five-person team on ERAA ERP, including its GST compliance capabilities.', 'Managed CAFERAA for carrying and forwarding agencies, spanning logistics, warehouses, HRMS, and payroll.'] }
];

const skills = [
  ['Core development', 'C# · .NET 10 · .NET Core · ASP.NET · MVC · EF · LINQ'],
  ['Frontend', 'React · JavaScript · Kendo UI'],
  ['APIs & architecture', 'Web API · REST · WCF · Microservices'],
  ['Data', 'SQL Server · MongoDB'],
  ['Cloud & delivery', 'Azure · Docker · Kubernetes · Git · CI/CD'],
  ['Quality', 'Agile/Scrum · xUnit/NUnit · Code Reviews']
];

function Icon({ children }) { return <span className="icon" aria-hidden="true">{children}</span> }

function App() {
  const [activeRole, setActiveRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const role = roles[activeRole];
  const nav = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  return <>
    <header className="topbar">
      <button className="brand" onClick={() => nav('home')} aria-label="Back to top"><i>SR</i><span>Shubham Rokade</span></button>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">☰</button>
      <nav className={menuOpen ? 'open' : ''}>{[['About', 'about'], ['Experience', 'experience'], ['Expertise', 'expertise'], ['Connect', 'connect']].map(([label,id]) => <button key={id} onClick={() => nav(id)}>{label}</button>)}</nav>
    </header>

    <main id="home">
      <section className="hero wrap">
        <div className="intro">
          <p className="eyebrow">Software Development · Associate Tech Lead</p>
          <h1>Building <em>reliable</em> software for complex business problems.</h1>
          <p className="lede">I’m Shubham, a .NET developer with 10+ years of experience turning ambitious ideas into scalable, thoughtful web applications.</p>
          <div className="hero-actions"><button className="primary" onClick={() => nav('experience')}>Explore my work <b>↓</b></button></div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait"><img src={profilePhoto} alt="Shubham Rokade" /></div>
          <div className="availability"><span></span> Available for meaningful work</div>
          <div className="exp-badge"><strong>10<span>+</span></strong><small>years of<br/>experience</small></div>
        </div>
      </section>

      <section className="facts"><div><strong>99%</strong><span>automation achieved</span></div><div><strong>0.20%</strong><span>commission errors reduced to</span></div><div><strong>40%</strong><span>execution efficiency gain</span></div><div><strong>3</strong><span>languages spoken</span></div></section>

      <section id="about" className="about wrap section"><p className="eyebrow">01 / Profile</p><div><h2>A practical builder with a <em>systems mindset.</em></h2><p>I design and develop end-to-end solutions across .NET, APIs, SQL Server, and React. I enjoy simplifying difficult workflows, improving the quality of delivery, and helping teams grow around strong engineering habits.</p><div className="contact-line"><span><Icon>⌖</Icon> Pune, India</span><a href="mailto:shubhamrokade9923@gmail.com"><Icon>✉</Icon> shubhamrokade9923@gmail.com</a><a href="tel:+919923010097"><Icon>⌕</Icon> +91 99230 10097</a></div></div></section>

      <section id="experience" className="experience section"><div className="wrap"><p className="eyebrow">02 / Selected experience</p><h2>Where I’ve made an <em>impact.</em></h2><div className="career-layout"><div className="role-list">{roles.map((item, index) => <button key={item.company} className={activeRole === index ? 'role active' : 'role'} onClick={() => setActiveRole(index)}><span className="role-index">0{index + 1}</span><span><strong>{item.company}</strong><small>{item.title}</small></span><b>↗</b></button>)}</div><article className="role-detail"><div className="role-heading"><div><span className="pill">{role.tag}</span><h3>{role.title}</h3><p>{role.company} · {role.place}</p></div><time>{role.dates}</time></div><ul>{role.bullets.map(b => <li key={b}>{b}</li>)}</ul></article></div></div></section>

      <section id="expertise" className="wrap section expertise"><p className="eyebrow">03 / Expertise</p><h2>My technical <em>toolkit.</em></h2><div className="skills">{skills.map(([name, detail], i) => <article key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{detail}</p></article>)}</div></section>

      <section className="achievements"><div className="wrap"><p className="eyebrow">04 / The numbers</p><div className="achievement-grid"><article><span>01</span><h3>AI fare matching</h3><p>Reduced booking costs by 10% and earned recognition in AI-Ideation.</p></article><article><span>02</span><h3>Commission optimization</h3><p>Automation drove a 10% profit increase through more accurate processing.</p></article><article><span>03</span><h3>Engaged teams</h3><p>Gamification helped lift team engagement and productivity by 10%.</p></article></div></div></section>

      <section id="connect" className="connect wrap section"><p className="eyebrow">05 / Find me online</p><div className="connect-box"><div><h2>Let’s create something <em>exceptional.</em></h2></div><div className="links"><a href="https://linkedin.com/in/shubham-rokade9/" target="_blank" rel="noreferrer"><span>LinkedIn</span><b>↗</b></a><a href="https://github.com/ShubhamRokade9923" target="_blank" rel="noreferrer"><span>GitHub</span><b>↗</b></a><a href="https://shubham18-tic-tac-toe.netlify.app/" target="_blank" rel="noreferrer"><span>Tic-Tac-Toe</span><b>↗</b></a></div></div></section>
    </main>
    <footer><div className="wrap"><span>© {new Date().getFullYear()} Shubham Rokade</span><span>Designed with purpose.</span></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App />);
