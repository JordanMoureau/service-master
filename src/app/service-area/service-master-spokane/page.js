import CityServiceArea, { buildMetadata } from "../CityServiceArea";

const content = {
  "city": "Spokane",
  "state": "WA",
  "stateName": "Washington",
  "intro": "From older homes with aging supply lines to commercial buildings dealing with unexpected leaks, water intrusion can interrupt daily life across Spokane. ServiceMaster by Compass helps property owners address the source of the damage, remove standing water, and plan the drying and restoration process.",
  "context": "Spokane properties can experience water intrusion from burst plumbing, appliance failures, heavy rainfall, and water used to extinguish fires. The right response depends on where the water came from, how far it traveled, and which building materials were affected.",
  "commercial": "For offices, retail spaces, and other Spokane facilities, downtime can be as disruptive as the damage itself. Our commercial restoration services help businesses assess the damage and work toward reopening.",
  "faq": "What should I do after discovering water damage in my Spokane home?",
  "answer": "If safe, stop the water source and avoid electrical hazards. Document visible damage, then contact a restoration professional to assess extraction and drying needs.",
  "slug": "service-master-spokane"
};

export const metadata = buildMetadata(content);

export default function Page() {
  return <CityServiceArea {...content} />;
}
