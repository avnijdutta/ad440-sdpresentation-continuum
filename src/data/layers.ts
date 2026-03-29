import sunDiagram from "../assets/sun_diagram.png";
import meccaDirection from "../assets/mecca_direction.png";
import windPatterns from "../assets/wind_patterns.png";
import surroundingViews from "../assets/surrounding_views.png";
import siteLocation from "../assets/site_location.png";

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
      { color: "#6366f1", label: "Site" },
    ],
  },
  {
    id: "views",
    label: "Surrounding Views",
    src: surroundingViews,
    defaultVisible: true,
    legend: [
      { color: "#6b6b78", label: "Surrounding Buildings" },
      { color: "#1a7a2e", label: "Park" },
    ],
  },
  {
    id: "mecca",
    label: "Mecca Direction",
    src: meccaDirection,
    defaultVisible: false,
    legend: [
      { color: "#cc2b2b", label: "Qibla Direction" },
    ],
  },
  {
    id: "wind",
    label: "Wind Patterns",
    src: windPatterns,
    defaultVisible: false,
    legend: [
      { color: "#c87020", label: "Summer Prevailing Winds" },
      { color: "#7b2ea0", label: "Winter Prevailing Winds" },
      { color: "#e03a6e", label: "Winter Prevailing Winds" },
      { color: "#3a8c1e", label: "Spring Prevailing Winds" },
      { color: "#3b2080", label: "Shamal Wind Pattern" },
    ],
  },
  {
    id: "sun",
    label: "Sun Diagram",
    src: sunDiagram,
    defaultVisible: false,
    legend: [
      { color: "#dab040", label: "Summer Sun Path" },
      { color: "#b84a2a", label: "Equinox Sun Path" },
      { color: "#2d2a7a", label: "Winter Sun Path" },
    ],
  },
];
