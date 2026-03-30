interface MarkerProps {
  x: number;
  y: number;
  onClick: () => void;
  label: string;
}

export function Marker({ x, y, onClick, label }: MarkerProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-base font-bold uppercase text-accent underline underline-offset-2 decoration-accent/50 transition-all duration-200 hover:text-accent-light hover:decoration-accent whitespace-pre-line text-center leading-tight"
      style={{ top: `${y}%`, left: `${x}%` }}
    >
      {label}
    </button>
  );
}
