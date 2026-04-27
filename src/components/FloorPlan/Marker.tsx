import elevationSymbol from "../../assets/elevation_symbol.png";

interface MarkerProps {
  x: number;
  y: number;
  onClick: () => void;
  label: string;
  type?: "location" | "elevation" | "button";
}

export function Marker({ x, y, onClick, label, type = "location" }: MarkerProps) {
  if (type === "elevation") {
    return (
      <button
        onClick={onClick}
        aria-label={label}
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-110"
        style={{ top: `${y}%`, left: `${x}%` }}
      >
        <img src={elevationSymbol} alt={label} className="h-7 w-auto" />
      </button>
    );
  }

  if (type === "button") {
    return (
      <button
        onClick={onClick}
        aria-label={label}
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer h-8 w-8 rounded-full bg-red-600 border-2 border-white shadow-md ring-1 ring-red-900/30 transition-transform duration-200 hover:scale-125"
        style={{ top: `${y}%`, left: `${x}%` }}
      />
    );
  }

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
