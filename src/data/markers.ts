export interface MarkerData {
  id: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  title: string;
  description: string;
  image?: string;
}

export const markers: MarkerData[] = [
  {
    id: "reception",
    x: 38,
    y: 52,
    title: "Reception",
    description:
      "The main reception area where visitors are greeted. Check in with the front desk upon arrival.",
  },
  {
    id: "kitchen",
    x: 53,
    y: 61,
    title: "Kitchen",
    description:
      "Fully stocked kitchen with coffee, snacks, and a communal dining area. Please clean up after yourself.",
  },
  {
    id: "mail-room",
    x: 17,
    y: 50,
    title: "Mail Room",
    description:
      "All incoming and outgoing mail is processed here. Package pickup is available during business hours.",
  },
  {
    id: "printer-west",
    x: 18,
    y: 59,
    title: "Printer (West)",
    description:
      "This machine allows you to print in black & white, color, and scan. Use your badge to authenticate.",
  },
  {
    id: "printer-east",
    x: 83,
    y: 61,
    title: "Printer (East)",
    description:
      "Secondary printing station. Supports large format printing and scanning.",
  },
  {
    id: "conference-a",
    x: 70,
    y: 30,
    title: "Conference Room A",
    description:
      "Large conference room seating up to 12 people. Equipped with video conferencing and whiteboard.",
  },
  {
    id: "conference-b",
    x: 30,
    y: 30,
    title: "Conference Room B",
    description:
      "Medium meeting room for 6 people. Book via the scheduling system on the door display.",
  },
];
