import { useState } from "react";
import { layers } from "../../data/layers";
import siteMap from "../../assets/site_map.png";

export function SiteContext() {
  const [visibleLayers, setVisibleLayers] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(layers.map((layer) => [layer.id, layer.defaultVisible]))
  );

  function toggle(id: string) {
    setVisibleLayers((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div>
      {/* Map container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Base layer — always visible */}
        <img
          src={siteMap}
          alt="Site map"
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
                  ? "bg-accent text-bg shadow-sm"
                  : "border border-border text-text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {layer.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
