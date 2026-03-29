import gymAcoustics from "../assets/enlarged_floor_plan/gym/gym_acoustics.png";
import gymFlooringTypes from "../assets/enlarged_floor_plan/gym/gym_flooring_types.png";
import gymLight from "../assets/enlarged_floor_plan/gym/gym_light.png";
import gymViews from "../assets/enlarged_floor_plan/gym/gym_views.png";

import type { LayerData } from "./layers";

// Base images
export { default as gymBase } from "../assets/enlarged_floor_plan/gym/gym_base.png";
export { default as cafeBase } from "../assets/enlarged_floor_plan/pantry_cafe_base.png";
export { default as receptionBase } from "../assets/enlarged_floor_plan/reception_lobby_elevators_base.png";
export { default as lobbyBase } from "../assets/enlarged_floor_plan/reception_lobby_elevators_base.png";

// Gym layers
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

// Cafe layers (to be added)
export const cafeLayers: LayerData[] = [];

// Reception layers (to be added)
export const receptionLayers: LayerData[] = [];

// Lobby layers (to be added)
export const lobbyLayers: LayerData[] = [];
