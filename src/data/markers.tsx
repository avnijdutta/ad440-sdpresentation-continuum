import type { ReactNode } from "react";
import { LayeredMap } from "../components/LayeredMap/LayeredMap";
import {
  gymBase,
  gymLayers,
  cafeBase,
  cafeLayers,
  receptionBase,
  receptionLayers,
  lobbyBase,
  lobbyLayers,
} from "./enlargedFloorPlanLayers";

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
    x: 38,
    y: 52,
    title: "Reception",
    fullScreen: true,
    content: [
      {
        type: "text",
        value:
          "The main reception area where visitors are greeted. Check in with the front desk upon arrival.",
      },
      {
        type: "component",
        render: () => (
          <LayeredMap
            baseImage={receptionBase}
            baseAlt="Reception floor plan"
            layers={receptionLayers}
            mode="radio"
          />
        ),
      },
    ],
  },
  {
    id: "kitchen",
    floor: 1,
    x: 53,
    y: 61,
    title: "Kitchen",
    content: [
      {
        type: "text",
        value:
          "Fully stocked kitchen with coffee, snacks, and a communal dining area. Please clean up after yourself.",
      },
    ],
  },
  {
    id: "mail-room",
    floor: 1,
    x: 17,
    y: 50,
    title: "Mail Room",
    content: [
      {
        type: "text",
        value:
          "All incoming and outgoing mail is processed here. Package pickup is available during business hours.",
      },
    ],
  },
  {
    id: "gym",
    floor: 1,
    x: 70,
    y: 50,
    title: "Gym",
    fullScreen: true,
    content: [
      {
        type: "text",
        value:
          "Multi-purpose fitness area with cardio equipment, free weights, and flexible open space for classes.",
      },
      {
        type: "component",
        render: () => (
          <LayeredMap
            baseImage={gymBase}
            baseAlt="Gym floor plan"
            layers={gymLayers}
            mode="radio"
          />
        ),
      },
    ],
  },
  {
    id: "printer-west",
    floor: 1,
    x: 18,
    y: 59,
    title: "Printer (West)",
    content: [
      {
        type: "text",
        value:
          "This machine allows you to print in black & white, color, and scan. Use your badge to authenticate.",
      },
    ],
  },
  {
    id: "cafe",
    floor: 1,
    x: 50,
    y: 40,
    title: "Cafe",
    fullScreen: true,
    content: [
      {
        type: "text",
        value:
          "On-site cafe and pantry area offering beverages, light meals, and a casual seating space.",
      },
      {
        type: "component",
        render: () => (
          <LayeredMap
            baseImage={cafeBase}
            baseAlt="Cafe floor plan"
            layers={cafeLayers}
            mode="radio"
          />
        ),
      },
    ],
  },
  {
    id: "lobby",
    floor: 1,
    x: 30,
    y: 40,
    title: "Lobby",
    fullScreen: true,
    content: [
      {
        type: "text",
        value:
          "The main lobby and elevator area providing access to all floors of the building.",
      },
      {
        type: "component",
        render: () => (
          <LayeredMap
            baseImage={lobbyBase}
            baseAlt="Lobby floor plan"
            layers={lobbyLayers}
            mode="radio"
          />
        ),
      },
    ],
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
