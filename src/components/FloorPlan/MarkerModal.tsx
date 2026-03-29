import { Modal } from "../ui/Modal";
import type { MarkerData } from "../../data/markers";

interface MarkerModalProps {
  marker: MarkerData | null;
  onClose: () => void;
}

export function MarkerModal({ marker, onClose }: MarkerModalProps) {
  if (!marker) return null;

  return (
    <Modal open={!!marker} onClose={onClose}>
      <div className="space-y-4">
        <p className="text-xs font-medium tracking-widest text-accent uppercase">
          Location
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-text">
          {marker.title}
        </h2>
        {marker.image && (
          <img
            src={marker.image}
            alt={marker.title}
            className="w-full rounded-sm object-cover"
          />
        )}
        <p className="text-base leading-relaxed text-text-muted">
          {marker.description}
        </p>
      </div>
    </Modal>
  );
}
