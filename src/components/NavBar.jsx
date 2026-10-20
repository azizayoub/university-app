import './NavBar.css';
import { useEffect, useState } from 'react';

function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState(
		typeof window === 'undefined' ? '#home' : window.location.hash || '#home',
	);

	useEffect(() => {
		const syncActiveLink = () => setActiveLink(window.location.hash || '#home');
		window.addEventListener('hashchange', syncActiveLink);
		return () => window.removeEventListener('hashchange', syncActiveLink);
	}, []);

	const closeMenu = (href) => {
		setMenuOpen(false);
		setActiveLink(href);
	};

	return (
		<nav className="navbar" aria-label="Navigation principale">
			<a className="navbar-brand" href="#home">
				<span className="navbar-mark" aria-hidden="true">U</span>
				University <span>App</span>
			</a>

			<button
				className="navbar-toggle"
				type="button"
				aria-expanded={menuOpen}
				aria-controls="navbar-links"
				aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
				onClick={() => setMenuOpen((isOpen) => !isOpen)}
			>
				<span />
				<span />
				<span />
			</button>

			<ul className={`navbar-links${menuOpen ? ' is-open' : ''}`} id="navbar-links">
				<li>
					<a className={activeLink === '#home' ? 'is-active' : ''} aria-current={activeLink === '#home' ? 'page' : undefined} href="#home" onClick={() => closeMenu('#home')}>Accueil</a>
				</li>
				<li>
					<a className={activeLink === '#students' ? 'is-active' : ''} aria-current={activeLink === '#students' ? 'page' : undefined} href="#students" onClick={() => closeMenu('#students')}>Étudiants</a>
				</li>
				<li>
					<a className={activeLink === '#contact' ? 'is-active' : ''} aria-current={activeLink === '#contact' ? 'page' : undefined} href="#contact" onClick={() => closeMenu('#contact')}>Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
