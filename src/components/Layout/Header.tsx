const navLinks = [
  { href: "#project-brief", label: "Project Brief" },
  { href: "#site-context", label: "Site Context" },
  { href: "#concept-development", label: "Concept" },
  { href: "#interior-ideation", label: "Interior" },
  { href: "#space-diagrams", label: "Diagrams" },
  { href: "#floor-plan", label: "Floor Plan" },
];

export function Header() {
  return (
    <header className="border-b border-border sticky top-0 bg-bg z-50">
      <div className="mx-[var(--spacing-margin)] flex items-center justify-between py-4">
        <a href="#hero" className="text-sm font-semibold tracking-widest text-text uppercase no-underline">
          Continuum
        </a>
        <nav className="flex gap-6 overflow-x-auto">
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
