import { useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { Marker } from "./Marker";
import { MarkerModal } from "./MarkerModal";
import { markers, type MarkerData } from "../../data/markers";

export function FloorPlan() {
  const [activeMarker, setActiveMarker] = useState<MarkerData | null>(null);

  return (
    <>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        wheel={{ step: 0.1 }}
        panning={{ velocityDisabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <div className="relative">
            {/* Zoom controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1">
              <button
                onClick={() => zoomIn()}
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-bg text-text shadow-sm transition-colors hover:bg-border cursor-pointer"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                onClick={() => zoomOut()}
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-bg text-text shadow-sm transition-colors hover:bg-border cursor-pointer"
                aria-label="Zoom out"
              >
                &minus;
              </button>
              <button
                onClick={() => resetTransform()}
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-bg text-xs text-text shadow-sm transition-colors hover:bg-border cursor-pointer"
                aria-label="Reset zoom"
              >
                1:1
              </button>
            </div>

            <TransformComponent
              wrapperStyle={{ width: "100%", cursor: "grab" }}
              contentStyle={{ width: "100%", position: "relative" }}
            >
              {/* Floor plan image */}
              <div className="relative w-full">
                {/* Placeholder floor plan — replace with real image */}
                <div className="aspect-[16/9] w-full rounded-sm border border-border bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="flex h-full items-center justify-center text-text-muted">
                    <p className="text-sm tracking-wide uppercase">
                      Floor Plan Image
                    </p>
                  </div>
                </div>

                {/* Markers */}
                {markers.map((marker) => (
                  <Marker
                    key={marker.id}
                    x={marker.x}
                    y={marker.y}
                    label={marker.title}
                    onClick={() => setActiveMarker(marker)}
                  />
                ))}
              </div>
            </TransformComponent>
          </div>
        )}
      </TransformWrapper>

      <MarkerModal
        marker={activeMarker}
        onClose={() => setActiveMarker(null)}
      />
    </>
  );
}
