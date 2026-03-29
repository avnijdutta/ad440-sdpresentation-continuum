import { useRef, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { Marker } from "./Marker";
import { MarkerModal } from "./MarkerModal";
import { markers, type MarkerData } from "../../data/markers";
import floor1Img from "../../assets/floor_1.png";
import floor2Img from "../../assets/floor_2.png";

const floors = [
  { id: 1, label: "Floor 1", image: floor1Img },
  { id: 2, label: "Floor 2", image: floor2Img },
];

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

export function FloorPlan() {
  const [activeFloor, setActiveFloor] = useState(1);
  const [activeMarker, setActiveMarker] = useState<MarkerData | null>(null);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  const floorMarkers = markers.filter((m) => m.floor === activeFloor);
  const currentFloor = floors[activeFloor - 1];

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

      <div className="relative aspect-video overflow-hidden rounded-sm rounded-tl-none border border-border bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Zoom controls — top right */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-1">
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
                    if (transformRef.current) fitToView(transformRef.current);
                  }}
                />

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
          </TransformWrapper>
        </div>
      </div>

      <MarkerModal
        marker={activeMarker}
        onClose={() => setActiveMarker(null)}
      />
    </>
  );
}
