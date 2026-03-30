import { useState, useRef, useCallback, useEffect } from "react";
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

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
    <div ref={containerRef} className={isFullscreen ? "flex h-screen w-screen flex-col bg-white p-4 overflow-auto" : ""}>
      {/* Map container */}
      <div className={`relative w-full overflow-hidden rounded-sm border border-border bg-gradient-to-br from-gray-50 to-gray-100 ${isFullscreen ? "flex-1 min-h-0" : "aspect-video"}`}>
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

        {/* Fullscreen toggle */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 right-2 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-border bg-white/90 shadow-sm transition-colors hover:bg-border"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 14 10 14 10 20" />
              <polyline points="20 10 14 10 14 4" />
              <line x1="14" y1="10" x2="21" y2="3" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          )}
        </button>
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
