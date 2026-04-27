import { useRef, useState, useCallback, useEffect } from "react";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { Marker } from "./Marker";
import { MarkerModal } from "./MarkerModal";
import type { FloorData, MarkerData } from "../../data/markers";

interface FloorPlanProps {
  floors: FloorData[];
  markers: MarkerData[];
}

function fitToView(ref: ReactZoomPanPinchRef, animationMs = 0) {
  const wrapper = ref.instance.wrapperComponent;
  const content = ref.instance.contentComponent;
  if (!wrapper || !content || !content.offsetWidth) return;
  const scale = Math.min(
    wrapper.offsetWidth / content.offsetWidth,
    wrapper.offsetHeight / content.offsetHeight,
  );
  ref.centerView(scale, animationMs);
}

export function FloorPlan({ floors, markers }: FloorPlanProps) {
  const [activeFloor, setActiveFloor] = useState(floors[0]?.id ?? 1);
  const [activeMarker, setActiveMarker] = useState<MarkerData | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialFitDone = useRef(false);

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
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      // Re-fit the map after the browser finishes resizing
      setTimeout(() => {
        if (transformRef.current) fitToView(transformRef.current, 200);
      }, 100);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const floorMarkers = markers.filter((m) => m.floor === activeFloor);
  const currentFloor = floors.find((f) => f.id === activeFloor) ?? floors[0];

  return (
    <div ref={containerRef} className={isFullscreen ? "flex h-screen w-screen flex-col bg-white p-4" : ""}>
      {/* Floor tabs — above the plan box */}
      <div className="flex">
        {floors.map((floor) => (
          <button
            key={floor.id}
            onClick={() => setActiveFloor(floor.id)}
            className={`cursor-pointer px-4 py-1.5 text-xs font-medium tracking-wide transition-colors first:rounded-tl-sm last:rounded-tr-sm ${
              activeFloor === floor.id
                ? "bg-accent text-bg"
                : "border border-b-0 border-border bg-bg text-text-muted hover:text-text"
            }`}
          >
            {floor.label}
          </button>
        ))}
      </div>

      <div className={`relative overflow-hidden rounded-sm rounded-tl-none border border-border bg-white ${isFullscreen ? "flex-1 min-h-0" : "aspect-video"}`}>
        {/* Zoom controls — top right */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-1">
          <button
            onClick={toggleFullscreen}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-border bg-bg text-xs text-text shadow-sm transition-colors hover:bg-border"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" y1="10" x2="21" y2="3" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            )}
          </button>
          {([
            { label: "+", ariaLabel: "Zoom in", action: () => transformRef.current?.zoomIn() },
            { label: "\u2212", ariaLabel: "Zoom out", action: () => transformRef.current?.zoomOut() },
            { label: "1:1", ariaLabel: "Reset zoom", action: () => { if (transformRef.current) fitToView(transformRef.current, 200); } },
          ] as const).map(({ label, ariaLabel, action }) => (
            <button
              key={ariaLabel}
              onClick={action}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-border bg-bg text-xs text-text shadow-sm transition-colors hover:bg-border"
              aria-label={ariaLabel}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Fill the container so TransformWrapper's internal div inherits height */}
        <div className="absolute inset-0">
          <TransformWrapper
            ref={transformRef}
            minScale={0.1}
            maxScale={3}
            wheel={{ step: 0.1 }}
            panning={{ velocityDisabled: true }}
            onInit={(ref) => fitToView(ref)}
          >
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%", cursor: "grab" }}
            >
              <div className="relative">
                <img
                  src={currentFloor.image}
                  alt={currentFloor.label}
                  onLoad={() => {
                    if (transformRef.current && !initialFitDone.current) {
                      initialFitDone.current = true;
                      fitToView(transformRef.current);
                    }
                  }}
                />

                {floorMarkers.map((marker) => (
                  <Marker
                    key={marker.id}
                    x={marker.x}
                    y={marker.y}
                    label={marker.title}
                    type={marker.type}
                    onClick={() => setActiveMarker(marker)}
                  />
                ))}
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>

      <MarkerModal
        marker={activeMarker}
        onClose={() => setActiveMarker(null)}
        container={isFullscreen ? containerRef.current : undefined}
      />
    </div>
  );
}
