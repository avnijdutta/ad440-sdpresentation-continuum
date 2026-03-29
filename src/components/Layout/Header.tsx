export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-[var(--spacing-margin)] flex items-center justify-between py-4">
        <a href="/" className="text-sm font-semibold tracking-widest text-text uppercase no-underline">
          Continuum
        </a>
        <nav className="flex gap-6">
          <a
            href="#floor-plan"
            className="text-sm text-text-muted no-underline transition-colors hover:text-text"
          >
            Floor Plan
          </a>
          <a
            href="#about"
            className="text-sm text-text-muted no-underline transition-colors hover:text-text"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
