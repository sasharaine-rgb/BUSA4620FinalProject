'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/browse-hikes', label: 'Browse Hikes' },
];

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const isCine =
    pathname === '/easy-hikes' ||
    pathname === '/moderate-hikes' ||
    pathname === '/hard-hikes';

  return (
    <header className={`navShell ${isCine ? 'navShellCine' : ''}`}>
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
            className={`navContact ${isActive('/contact') ? 'navContactActive' : ''}`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
