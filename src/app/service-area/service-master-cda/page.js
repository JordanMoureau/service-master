import CityServiceArea, { buildMetadata } from "../CityServiceArea";

const content = {
  "city": "Coeur d’Alene",
  "state": "ID",
  "stateName": "Idaho",
  "intro": "Water damage in a Coeur d’Alene home can spread beneath flooring, behind walls, and into insulation before the full extent becomes visible. ServiceMaster by Compass provides residential and commercial restoration support for local property owners dealing with sudden leaks, flooding, and moisture-related damage.",
  "context": "Coeur d’Alene homeowners may encounter frozen or burst pipes during cold weather, basement moisture, appliance leaks, and storm-related water intrusion. Addressing trapped moisture promptly helps limit damage to building materials.",
  "commercial": "Whether water affects a storefront, professional office, or another commercial property in Coeur d’Alene, a coordinated cleanup and drying plan can help reduce disruption.",
  "faq": "Can water damage lead to mold in Coeur d’Alene homes?",
  "answer": "Yes. Persistent moisture can create conditions that support mold growth. Proper drying and moisture assessment are important after a leak or flood.",
  "slug": "service-master-cda"
};

export const metadata = buildMetadata(content);

export default function Page() {
  return <CityServiceArea {...content} />;
}
