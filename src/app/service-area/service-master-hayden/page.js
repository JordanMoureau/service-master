import CityServiceArea, { buildMetadata } from "../CityServiceArea";

const content = {
  city: "Hayden",
  state: "ID",
  stateName: "Idaho",
  intro:
    "A broken pipe, overflowing appliance, or storm-related leak can leave Hayden homeowners facing damaged flooring, wet drywall, and uncertainty about what to do next. ServiceMaster by Compass helps residents and businesses evaluate water damage and move through cleanup and restoration.",
  context:
    "In Hayden, seasonal freezing temperatures can put plumbing at risk, while roof leaks, plumbing failures, and indoor flooding can affect homes throughout the year. Different water sources call for different safety and cleanup measures.",
  commercial:
    "Water damage at a Hayden business can affect equipment, inventory, and the spaces customers depend on. Our commercial team can help develop a restoration plan suited to the property.",
  faq: "Do I need professional drying after a pipe bursts in Hayden?",
  answer:
    "It depends on the extent of water intrusion. Moisture may remain under floors or inside walls even when surfaces appear dry, so a professional assessment can help identify hidden damage.",
  slug: "service-master-hayden",
};

export const metadata = buildMetadata(content);

export default function Page() {
  return <CityServiceArea {...content} />;
}
