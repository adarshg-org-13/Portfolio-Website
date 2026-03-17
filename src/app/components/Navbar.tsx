"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const activeIndex = navLinks.findIndex((l) => l.href === pathname);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="navbar-logo">
        <span className="logo-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="7" height="7" rx="2" fill="#F5F1ED" />
            <rect x="11" y="2" width="7" height="7" rx="2" fill="#70798C" />
            <rect x="2" y="11" width="7" height="7" rx="2" fill="#A99985" />
            <rect x="11" y="11" width="7" height="7" rx="2" fill="#DAD2BC" />
          </svg>
        </span>
        Adarsh
      </Link>

      {/* Dynamic Island navbar buttons */}
      <div className="nav-island">
        {/* Sliding animation */}
        <span
          className="nav-island-slider"
          style={{ transform: `translateX(calc(${activeIndex} * 100%))` }}
        />
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-island-item${pathname === link.href ? " active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
