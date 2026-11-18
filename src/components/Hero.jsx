import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section id="hero" className="hero-section section-wrap">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
        <p className="hero-kicker">Hello, I'm</p>
        <h1>Chetan <span className="gradient-text">Ilva.</span></h1>
        <div className="hero-role"><span>I build </span><TypeAnimation sequence={['web experiences.', 1800, 'full-stack apps.', 1800, 'things for the web.', 1800]} wrapper="span" speed={45} repeat={Infinity} /></div>
        <p className="hero-description">A developer who enjoys turning ideas into clean, responsive, and useful digital experiences. I work across the frontend and backend, and I'm always learning something new.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
          <a className="button button-ghost" href="#contact">Let's talk <span>→</span></a>
        </div>
        <div className="hero-meta"><span><i>⌘</i> JavaScript ecosystem</span><span><i>⌖</i> Mumbai, India</span></div>
      </div>
      <div className="hero-visual reveal reveal-delay">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="hero-glow" />
        <div className="code-card">
          <div className="code-card-top"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span className="code-live">● LIVE</span></div>
          <div className="code-lines"><p><b>const</b> developer = {'{'}</p><p className="indent"><em>name</em>: <strong>'Chetan Ilva'</strong>,</p><p className="indent"><em>role</em>: <strong>'Full Stack Developer'</strong>,</p><p className="indent"><em>learning</em>: [</p><p className="indent double"><strong>'React'</strong>, <strong>'Node.js'</strong>,</p><p className="indent double"><strong>'Databases'</strong>, <strong>'AI/ML'</strong></p><p className="indent">],</p><p className="indent"><em>mindset</em>: <strong>'Keep building'</strong></p><p>{'}'}</p><p className="code-cursor">▍</p></div>
          <div className="code-card-bottom"><span>✦ Curious by nature</span><span>100% caffeine-free code*</span></div>
        </div>
        <div className="floating-chip chip-top">✳ &nbsp; Creative thinking</div>
        <div className="floating-chip chip-bottom">&lt;/&gt; &nbsp; Building ideas</div>
      </div>
      <a className="scroll-cue" href="#skills"><span /> Scroll to explore</a>
    </section>
  )
}
