export interface LayerData {
  id: string;
  label: string;
  src: string;
  defaultVisible: boolean;
}

// Placeholder src values — replace with real image paths
export const layers: LayerData[] = [
  { id: "sun", label: "Sun Diagram", src: "", defaultVisible: false },
  { id: "prayer", label: "Prayer Times", src: "", defaultVisible: false },
  { id: "wind", label: "Wind Patterns", src: "", defaultVisible: false },
  { id: "views", label: "Surrounding Views", src: "", defaultVisible: false },
  { id: "roads", label: "Main Roads", src: "", defaultVisible: true },
];
