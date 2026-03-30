import type { ReactNode } from "react";
import gymElevationWaterstation from "../assets/enlarged_floor_plan/gym/gym_elevation_waterstation.png";
import gymMirrorWallcovering from "../assets/enlarged_floor_plan/gym/materials/gym_mirror_wallcovering.jpg";
import gymPolishedConcrete from "../assets/enlarged_floor_plan/gym/materials/gym_polishedconcrete_flooring.jpg";
import gymRecycledRubber from "../assets/enlarged_floor_plan/gym/materials/gym_recycledrubber_flooring.jpg";
import gymWoodgrainLVT from "../assets/enlarged_floor_plan/gym/materials/gym_woodgrainLVT_flooring.jpg";
import lobbyRender from "../assets/enlarged_floor_plan/reception_lobby/lobby_render.png";
import receptionLobbyRCP from "../assets/enlarged_floor_plan/reception_lobby/reception_lobby_RCPsketch.png";
import receptionRender from "../assets/enlarged_floor_plan/reception_lobby/reception_render.png";
import receptionAshwood from "../assets/enlarged_floor_plan/reception_lobby/materials/reception_ashwoodengineered_flooring.jpg";
import receptionLinen from "../assets/enlarged_floor_plan/reception_lobby/materials/reception_linen_ceiling.jpg";
import receptionOmaniMarble from "../assets/enlarged_floor_plan/reception_lobby/materials/reception_omanimarble_wallcovering.jpg";
import receptionTeakwood from "../assets/enlarged_floor_plan/reception_lobby/materials/reception_teakwood_millwork.jpg";
import { LayeredMap } from "../components/LayeredMap/LayeredMap";
import { MaterialDescription } from "../components/ui/MaterialDescription";
import { gymBase, gymLayers, receptionLobbyBase, receptionLayers, lobbyLayers } from "./enlargedFloorPlanLayers";

export type MarkerContentBlock =
  | { type: "text"; value: string }
  | { type: "image"; src: string; alt?: string }
  | { type: "component"; render: () => ReactNode };

export interface MarkerData {
  id: string;
  floor: number;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  title: string;
  content: MarkerContentBlock[];
  fullScreen?: boolean;
}

export interface FloorData {
  id: number;
  label: string;
  image: string;
}

export const markers: MarkerData[] = [
  // Ground Floor
  {
    id: "reception",
    floor: 1,
    x: 23,
    y: 26,
    title: "Reception",
    fullScreen: true,
    content: [
      { type: "text", value: "Sensory Overlay Map" },
      {
        type: "component",
        render: () => (
          <LayeredMap
            baseImage={receptionLobbyBase}
            baseAlt="Reception floor plan"
            layers={receptionLayers}
            mode="radio"
          />
        ),
      },
      { type: "image", src: receptionRender, alt: "Reception render" },
      { type: "image", src: receptionLobbyRCP, alt: "Reception and lobby RCP sketch" },
      {
        type: "component",
        render: () => (
          <MaterialDescription
            materials={[
              { image: receptionAshwood, alt: "Ash wood engineered flooring", title: "Ash Wood Engineered Flooring", description: "Ash Wood Engineered Flooring" },
              { image: receptionLinen, alt: "Linen ceiling", title: "Linen Ceiling", description: "Linen Ceiling" },
              { image: receptionOmaniMarble, alt: "Omani marble wall covering", title: "Omani Marble Wall Covering", description: "Omani Marble Wall Covering" },
              { image: receptionTeakwood, alt: "Teakwood millwork", title: "Teakwood Millwork", description: "Teakwood Millwork" },
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "gallery",
    floor: 1,
    x: 42,
    y: 22,
    title: "Gallery",
    content: [{ type: "text", value: "Open gallery space able to adapt to any use." }],
  },
  {
    id: "pantry",
    floor: 1,
    x: 51,
    y: 23,
    title: "Pantry",
    content: [{ type: "text", value: "Storage for gallery and cafe spaces." }],
  },
  {
    id: "cafe",
    floor: 1,
    x: 58,
    y: 25,
    title: "Cafe",
    content: [{ type: "text", value: "Cafe" }],
  },
  {
    id: "lobby",
    floor: 1,
    x: 29,
    y: 35,
    title: "Lobby",
    fullScreen: true,
    content: [
      { type: "text", value: "Sensory Overlay Map" },
      {
        type: "component",
        render: () => (
          <LayeredMap
            baseImage={receptionLobbyBase}
            baseAlt="Lobby floor plan"
            layers={lobbyLayers}
            mode="radio"
          />
        ),
      },
      { type: "image", src: lobbyRender, alt: "Lobby render" },
      { type: "image", src: receptionLobbyRCP, alt: "Reception and lobby RCP sketch" },
      {
        type: "component",
        render: () => (
          <MaterialDescription
            materials={[
              { image: receptionAshwood, alt: "Ash wood engineered flooring", title: "Ash Wood Engineered Flooring", description: "Ash Wood Engineered Flooring" },
              { image: receptionLinen, alt: "Linen ceiling", title: "Linen Ceiling", description: "Linen Ceiling" },
              { image: receptionOmaniMarble, alt: "Omani marble wall covering", title: "Omani Marble Wall Covering", description: "Omani Marble Wall Covering" },
              { image: receptionTeakwood, alt: "Teakwood millwork", title: "Teakwood Millwork", description: "Teakwood Millwork" },
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "restrooms",
    floor: 1,
    x: 41,
    y: 32,
    title: "Restrooms",
    content: [{ type: "text", value: "Private but accessible restrooms." }],
  },
  {
    id: "elevator-lobby",
    floor: 1,
    x: 19,
    y: 48,
    title: "Elevator\nLobby",
    content: [{ type: "text", value: "Secure and private vertical circulation for residents." }],
  },
  {
    id: "nic",
    floor: 1,
    x: 41,
    y: 43,
    title: "N.I.C.",
    content: [{ type: "text", value: "Not in contract space suitable for any use." }],
  },
  {
    id: "indoor-outdoor-connection",
    floor: 1,
    x: 56,
    y: 42,
    title: "Indoor/Outdoor\nConnection",
    content: [{ type: "text", value: "Indoor/Outdoor Connection" }],
  },
  {
    id: "lockers-1",
    floor: 1,
    x: 37,
    y: 52,
    title: "Lockers",
    content: [{ type: "text", value: "Private locker rooms away from the open areas of the gym." }],
  },
  {
    id: "lockers-2",
    floor: 1,
    x: 37,
    y: 60,
    title: "Lockers",
    content: [{ type: "text", value: "Private locker rooms away from the open areas of the gym." }],
  },
  {
    id: "mail",
    floor: 1,
    x: 18,
    y: 61,
    title: "Mail",
    content: [{ type: "text", value: "Mail room for residents and delivery personnel." }],
  },
  {
    id: "staff",
    floor: 1,
    x: 26,
    y: 61,
    title: "Staff",
    content: [{ type: "text", value: "Break room and office for complex staff." }],
  },
  {
    id: "equipment-storage",
    floor: 1,
    x: 37,
    y: 66,
    title: "Storage",
    content: [{ type: "text", value: "Storage room for gym equipment." }],
  },
  {
    id: "group-fitness-1",
    floor: 1,
    x: 47,
    y: 56,
    title: "Group Fitness",
    content: [{ type: "text", value: "Smaller but inclusive spaces for group fitness sessions." }],
  },
  {
    id: "group-fitness-2",
    floor: 1,
    x: 47,
    y: 64,
    title: "Group Fitness",
    content: [{ type: "text", value: "Smaller but inclusive spaces for group fitness sessions." }],
  },
  {
    id: "gym-reception",
    floor: 1,
    x: 61,
    y: 52,
    title: "Reception",
    content: [{ type: "text", value: "Secure reception for gym members." }],
  },
  {
    id: "gym",
    floor: 1,
    x: 59,
    y: 65,
    title: "Gym",
    fullScreen: true,
    content: [
      { type: "text", value: "Sensory Overlay Map" },
      {
        type: "component",
        render: () => (
          <LayeredMap
            baseImage={gymBase}
            baseAlt="Gym floor plan"
            layers={gymLayers}
            mode="radio"
            markers={[
              {
                id: "gym-elevation-1",
                x: 59,
                y: 20,
                label: "Elevation A",
                type: "elevation",
                content: () => <img src={gymElevationWaterstation} alt="Gym elevation — water station" className="w-full h-auto" />,
              },
            ]}
          />
        ),
      },
      {
        type: "component",
        render: () => (
          <MaterialDescription
            materials={[
              { image: gymPolishedConcrete, alt: "Polished concrete flooring", title: "Flooring: Polished Cement", description: "Extremely durable for commercial use. Stays cool underfoot. Minimal material layering for sustainability. Reflects light softly, enhancing daylight." },
              { image: gymRecycledRubber, alt: "Recycled rubber flooring", title: "Flooring: Recycled Rubber Gym Flooring", description: "Shock absorption. Acoustic dampening. Slip-resistant. Durable under heavy equipment. Sustainable. Heat resistant." },
              { image: gymWoodgrainLVT, alt: "Engineered wood flooring", title: "Flooring: Engineered Wood Flooring Wide Plank Ash", description: "Comfortable for floor-based exercises. Easy to maintain. Elegant design appeal." },
              { image: gymMirrorWallcovering, alt: "Mirror wallcovering", title: "Mirror", description: "Allows for visibility on the workout equipment and in group fitness rooms." },
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "gym-staff-offices",
    floor: 1,
    x: 42,
    y: 76,
    title: "Staff Offices",
    content: [{ type: "text", value: "Gym staff offices and first aid room." }],
  },
  // First Floor
  {
    id: "printer-east",
    floor: 2,
    x: 83,
    y: 61,
    title: "Printer (East)",
    content: [
      {
        type: "text",
        value:
          "Secondary printing station. Supports large format printing and scanning.",
      },
    ],
  },
  {
    id: "conference-a",
    floor: 2,
    x: 70,
    y: 30,
    title: "Conference Room A",
    content: [
      {
        type: "text",
        value:
          "Large conference room seating up to 12 people. Equipped with video conferencing and whiteboard.",
      },
    ],
  },
  {
    id: "conference-b",
    floor: 2,
    x: 30,
    y: 30,
    title: "Conference Room B",
    content: [
      {
        type: "text",
        value:
          "Medium meeting room for 6 people. Book via the scheduling system on the door display.",
      },
    ],
  },
];
