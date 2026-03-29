import gymAcoustics from "../assets/gym/gym_acoustics.png";
import gymFlooringTypes from "../assets/gym/gym_flooring_types.png";
import gymLight from "../assets/gym/gym_light.png";
import gymViews from "../assets/gym/gym_views.png";

import type { LayerData } from "./layers";

export { default as gymBase } from "../assets/gym/gym_base.png";

export const gymLayers: LayerData[] = [
  {
    id: "gym-light",
    label: "Light",
    src: gymLight,
    defaultVisible: false,
    legend: [],
  },
  {
    id: "gym-views",
    label: "Views",
    src: gymViews,
    defaultVisible: false,
    legend: [],
  },
  {
    id: "gym-acoustics",
    label: "Acoustics",
    src: gymAcoustics,
    defaultVisible: false,
    legend: [],
  },
  {
    id: "gym-flooring-types",
    label: "Flooring Types",
    src: gymFlooringTypes,
    defaultVisible: false,
    legend: [],
  },
];
