import { useState } from 'react';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const closeNav = () => setIsNavOpen(false);

    return (
        <header id="home" className="hero full-screen">
            <div className="nav">
                <a href="#home" className="brand" onClick={closeNav}>KANOKKARN</a>

                <button
                    className="nav-toggle"
                    aria-expanded={isNavOpen}
                    aria-controls="mainNav"
                    aria-label="Open menu"
                    onClick={toggleNav}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav id="mainNav" className={`main-nav ${isNavOpen ? 'is-open' : ''}`} role="navigation" aria-label="Main">
                    <a href="#home" onClick={closeNav}>Home</a>
                    <a href="#about" onClick={closeNav}>About</a>
                    <a href="#skills" onClick={closeNav}>Skills</a>
                    <a href="#projects" onClick={closeNav}>Projects</a>
                    <a href="#certs" onClick={closeNav}>Certifications</a>
                    <a href="#contact" onClick={closeNav}>Contact</a>
                </nav>
            </div>

            <div className="hero-inner hero-split">
                <div className="hero-copy">
                    <h1 className="logo-title">
                        <span className="block">KANOKKARN</span>
                        <span className="script">Muangjun</span><br />
                        <span className="sub">DATA • DEVELOPMENT</span>
                    </h1>

                    <p className="tagline">Transform <span className="script">numbers</span> — into knowledge.</p>

                    <a href="#projects" className="btn primary">See my work</a>

                    <div className="social-row" aria-label="Social links">
                        <a className="soc" href="mailto:kanokkarnmuangjun@gmail.com" aria-label="Email">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" /></svg>
                        </a>
                        <a className="soc" href="https://github.com/kanokkarn13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.2-3.37-1.2-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.6.07-.6 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 7.5c.85 0 1.7.12 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.56 1.37.21 2.39.11 2.64.64.7 1.03 1.58 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
                        </a>
                        <a className="soc" href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5H4.5V23H.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V23h-3.93z" /></svg>
                        </a>
                    </div>
                </div>

                <figure className="pfp-card">
                    <img src="/my-portfolio/buki.jpg" alt="Kanokkarn Muangjun pfp" />
                </figure>
            </div>
        </header>
    );
}
