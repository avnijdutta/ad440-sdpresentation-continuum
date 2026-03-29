import { useState } from "react";
import type { LayerData } from "../../data/layers";

interface LayeredMapProps {
  baseImage: string;
  baseAlt: string;
  layers: LayerData[];
}

export function LayeredMap({ baseImage, baseAlt, layers }: LayeredMapProps) {
  const [visibleLayers, setVisibleLayers] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(layers.map((layer) => [layer.id, layer.defaultVisible]))
  );

  function toggle(id: string) {
    setVisibleLayers((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function clearAll() {
    setVisibleLayers(Object.fromEntries(layers.map((l) => [l.id, false])));
  }

  const anyActive = Object.values(visibleLayers).some(Boolean);

  return (
    <div>
      {/* Map container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Base layer — always visible */}
        <img
          src={baseImage}
          alt={baseAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Toggleable layers */}
        {layers.map((layer) => (
          <div
            key={layer.id}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{ opacity: visibleLayers[layer.id] ? 1 : 0 }}
          >
            {layer.src ? (
              <img
                src={layer.src}
                alt={layer.label}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-border/50">
                <span className="text-xs text-text-muted/60">
                  {layer.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Layer toggle controls */}
      <div className="mt-4 flex flex-wrap gap-2">
        {layers.map((layer) => {
          const active = visibleLayers[layer.id];
          return (
            <button
              key={layer.id}
              onClick={() => toggle(layer.id)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
                active
                  ? "border border-accent bg-accent text-bg shadow-sm"
                  : "border border-border text-text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {layer.label}
            </button>
          );
        })}
        {anyActive && (
          <button
            onClick={clearAll}
            className="cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-text-muted transition-all duration-200 hover:text-text"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Legends for active layers */}
      {anyActive && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {layers
            .filter((layer) => visibleLayers[layer.id] && layer.legend.length > 0)
            .flatMap((layer) =>
              layer.legend.map((item) => (
                <div
                  key={`${layer.id}-${item.label}`}
                  className="flex items-center gap-2"
                >
                  <span
                    className="inline-block h-3 w-3 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-text-muted">{item.label}</span>
                </div>
              ))
            )}
        </div>
      )}
    </div>
  );
}
