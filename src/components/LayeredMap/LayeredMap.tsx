import { useState } from "react";
import type { ReactNode } from "react";
import type { LayerData } from "../../data/layers";
import { Marker } from "../FloorPlan/Marker";

export interface LayeredMapMarker {
  id: string;
  x: number;
  y: number;
  label: string;
  type?: "location" | "elevation";
  content: () => ReactNode;
}

interface LayeredMapProps {
  baseImage: string;
  baseAlt: string;
  layers: LayerData[];
  mode?: "toggle" | "radio";
  markers?: LayeredMapMarker[];
}

export function LayeredMap({ baseImage, baseAlt, layers, mode = "toggle", markers = [] }: LayeredMapProps) {
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [visibleLayers, setVisibleLayers] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(layers.map((layer) => [layer.id, layer.defaultVisible]))
  );

  function handleSelect(id: string) {
    if (mode === "radio") {
      setVisibleLayers(
        Object.fromEntries(
          layers.map((l) => [l.id, l.id === id ? !visibleLayers[id] : false])
        )
      );
    } else {
      setVisibleLayers((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  }

  function clearAll() {
    setVisibleLayers(Object.fromEntries(layers.map((l) => [l.id, false])));
  }

  const anyActive = Object.values(visibleLayers).some(Boolean);

  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {/* Map container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Loading spinner */}
        {!loaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-accent" />
          </div>
        )}

        {/* Base layer — always visible */}
        <img
          src={baseImage}
          alt={baseAlt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
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

        {/* Markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            x={marker.x}
            y={marker.y}
            label={marker.label}
            type={marker.type}
            onClick={() => setActiveMarkerId(activeMarkerId === marker.id ? null : marker.id)}
          />
        ))}
      </div>

      {/* Active marker content */}
      {activeMarkerId && (() => {
        const marker = markers.find((m) => m.id === activeMarkerId);
        return marker ? (
          <div className="mt-4 border border-border rounded-sm overflow-hidden">
            {marker.content()}
          </div>
        ) : null;
      })()}

      {/* Layer toggle controls */}
      <div className="mt-4 flex flex-wrap gap-2">
        {layers.map((layer) => {
          const active = visibleLayers[layer.id];
          return (
            <button
              key={layer.id}
              onClick={() => handleSelect(layer.id)}
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
        {mode === "toggle" && anyActive && (
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
