import { useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { Marker } from "./Marker";
import { MarkerModal } from "./MarkerModal";
import { markers, type MarkerData } from "../../data/markers";
import siteMap from "../../assets/site_map.png";

const floors = [
  { id: 1, label: "Floor 1", image: siteMap },
  { id: 2, label: "Floor 2", image: siteMap },
];

export function FloorPlan() {
  const [activeFloor, setActiveFloor] = useState(1);
  const [activeMarker, setActiveMarker] = useState<MarkerData | null>(null);

  const floorMarkers = markers.filter((m) => m.floor === activeFloor);
  const currentFloor = floors.find((f) => f.id === activeFloor)!;

  return (
    <>
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

      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        wheel={{ step: 0.1 }}
        panning={{ velocityDisabled: true }}
        key={activeFloor}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <div className="relative aspect-video overflow-hidden rounded-sm rounded-tl-none border border-border bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Zoom controls — top right */}
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
                <img
                  src={currentFloor.image}
                  alt={currentFloor.label}
                  className="w-full"
                />

                {/* Markers for active floor */}
                {floorMarkers.map((marker) => (
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
