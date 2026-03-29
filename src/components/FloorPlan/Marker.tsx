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
      className="absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-accent bg-bg text-accent shadow-md transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-bg"
      style={{ top: `${y}%`, left: `${x}%` }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 1v12M1 7h12" />
      </svg>
    </button>
  );
}
