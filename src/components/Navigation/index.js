'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/browse-hikes', label: 'Browse Hikes' },
];

export default function Navigation() {
	const pathname = usePathname();

	const isActive = (href) => {
		if (href === '/') return pathname === '/';
		return pathname?.startsWith(href);
	};

	return (
		<header className="navShell">
			<div className="navInner">
				<Link className="navBrand" href="/">
					Banff Hikes
				</Link>
				<div className="navRight">
					<nav className="navLinks" aria-label="Primary">
						{mainLinks.map((l) => (
							<Link
								key={l.href}
								href={l.href}
								className={`navLink ${isActive(l.href) ? 'navLinkActive' : ''}`}
							>
								{l.label}
							</Link>
						))}
					</nav>
					<Link
						className={`navLink ${isActive('/contact') ? 'navLinkActive' : ''}`}
						href="/contact"
					>
						Contact
					</Link>
				</div>
			</div>
		</header>
	);
}