import { Modal } from "../ui/Modal";
import type { MarkerData, MarkerContentBlock } from "../../data/markers";

interface MarkerModalProps {
  marker: MarkerData | null;
  onClose: () => void;
}

function ContentBlock({ block }: { block: MarkerContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <p className="text-base leading-relaxed text-text-muted">
          {block.value}
        </p>
      );
    case "image":
      return (
        <img
          src={block.src}
          alt={block.alt ?? ""}
          className="w-full rounded-sm object-cover"
        />
      );
    case "component":
      return <>{block.render()}</>;
  }
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
        {marker.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </div>
    </Modal>
  );
}
