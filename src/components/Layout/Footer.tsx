export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-[var(--spacing-margin)] py-[var(--spacing-v-space-sm)]">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Continuum
        </p>
      </div>
    </footer>
  );
}
