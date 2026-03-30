import sunDiagram from "../assets/site_map/sunpath.png";
import meccaDirection from "../assets/site_map/qibla_direction.png";
import windPatterns from "../assets/site_map/wind_direction.png";
import surroundingViews from "../assets/site_map/views.png";
import siteLocation from "../assets/site_map/site_location.png";

export interface LegendItem {
  color: string;
  label: string;
}

export interface LayerData {
  id: string;
  label: string;
  src: string;
  defaultVisible: boolean;
  legend: LegendItem[];
}

export const layers: LayerData[] = [
  {
    id: "location",
    label: "Site Location",
    src: siteLocation,
    defaultVisible: true,
    legend: [
      { color: "#7B8CDE", label: "Site" },
    ],
  },
  {
    id: "views",
    label: "Surrounding Views",
    src: surroundingViews,
    defaultVisible: true,
    legend: [
      { color: "#FFB6C1", label: "View Cones" },
      { color: "#8EA8DB", label: "Bodies of Water" },
      { color: "#808080", label: "Building" },
    ],
  },
  {
    id: "mecca",
    label: "Mecca Direction",
    src: meccaDirection,
    defaultVisible: false,
    legend: [
      { color: "#000000", label: "Qibla Direction" },
    ],
  },
  {
    id: "wind",
    label: "Wind Patterns",
    src: windPatterns,
    defaultVisible: false,
    legend: [
      { color: "#F28C4E", label: "Summer Prevailing Winds" },
      { color: "#7B72C8", label: "Shamal Wind Pattern" },
      { color: "#B5B814", label: "Spring Prevailing Winds" },
      { color: "#4A86E8", label: "Winter Prevailing Winds" },
    ],
  },
  {
    id: "sun",
    label: "Sun Diagram",
    src: sunDiagram,
    defaultVisible: false,
    legend: [
      { color: "#F5C542", label: "Summer Solstice Sun Path" },
      { color: "#4A3F8F", label: "Winter Solstice Sun Path" },
    ],
  },
];
