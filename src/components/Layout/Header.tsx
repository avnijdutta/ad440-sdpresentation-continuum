const navLinks = [
  { href: "#project-brief", label: "Project Brief" },
  { href: "#site-context", label: "Site Context" },
  { href: "#concept-development", label: "Concept" },
  { href: "#old-floor-plan", label: "Old Floor Plan" },
  { href: "#new-floor-plan", label: "New Floor Plan" },
  { href: "#materials", label: "Materials" },
];

export function Header() {
  return (
    <header className="border-b border-border sticky top-0 bg-bg z-50">
      <div className="mx-[var(--spacing-margin)] flex items-center justify-between py-4">
        <a href="#" className="text-sm font-semibold tracking-widest text-text uppercase no-underline shrink-0 mr-[var(--spacing-margin)]">
          Continuum
        </a>
        <nav className="flex gap-6 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted no-underline transition-colors hover:text-text whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
