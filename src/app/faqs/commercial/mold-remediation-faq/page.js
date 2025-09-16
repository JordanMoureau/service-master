"use client";

import FAQAccordion from "../../../components/FAQAccordion";
import GetHelpNow from "../../../components/GetHelpNow";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";

const Links = [
  "/faqs/commercial/water-restoration-faq",
  "/faqs/commercial/mold-remediation-faq",
  "/faqs/commercial/fire-restoration-faq",
  "/faqs/commercial/air-duct-faq",
];

const List = [
  "Water Damage FAQ",
  "Mold Remediation FAQ",
  "Fire Damage FAQ",
  "Air Duct Cleaning FAQ",
];

const faqItems = [
  {
    question: "What is mold?",
    answer:
      "Mold is a microscopic fungus that is part of the natural environment and necessary for our ecosystem. While it is necessary in the outdoor world, too much mold inside a structure can be dangerous and unsanitary. Mold produces spores as part of its lifecycle, and these spores float through the air both inside and outside.",
  },
  {
    question: "Why is mold a problem?",
    answer:
      "Many people aren’t aware that mold can cause structural damage to homes and businesses, which, if left undetected, can cause a property to lose value and/or require significant repairs. And if you have ever suffered from allergies, exposure to molds can often cause nasal stuffiness, eye irritation, wheezing, skin irritation, or even more severe reactions.",
  },
  {
    question: "What does mold need in order to grow?",
    answer:
      "Mold needs a moist environment, temperatures above freezing, and a food source, which can be leaves, paper, dirt, wood, or other building materials. Mold is more likely to be found in damp, dusty spaces or areas with stagnant air.",
  },
  {
    question: "How can I tell if I have mold?",
    answer:
      "If you see mold growth or water stains, a mold test can help identify related microbial activity. You can also look for areas where water leakage has occurred, such as roofs, pipes, ceilings, or walls. Musty smells may also indicate the presence of mold.",
  },
  {
    question:
      "When does mold need to be handled by a professional remediation company?",
    answer:
      "Most experts recommend a professional remediation company when elevated mold levels are detected. Remediation professionals are specially trained to isolate and treat mold-affected areas to avoid contaminating adjacent spaces.",
  },
  {
    question:
      "Some molds have the reputation of being more dangerous than others. Is identifying the mold important?",
    answer:
      'Sometimes you will hear terms like “toxic mold” or “black mold” used to refer to molds. While identifying the type of fungus or mold may be interesting, it doesn’t affect the course of action. If mold is present, the CDC strongly recommends that it be removed, no matter the type. <br><br><em>Source:</em> <a class="underline-link" href="https://www.cdc.gov/mold/dampness_facts.htm" target="_blank" rel="noopener">CDC — Facts about Mold and Dampness (2012)</a>.',
  },
];

export default function CommericalMoldRemediationFAQ() {
  return (
    <div>
      <div className="top-image">
        <img src="/commercialmold.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Mold Remediation FAQ</h1>
            <p>You've got questions, our experts have the answers</p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow
              text={
                "Contact us today to learn more about our commercial mold remediation services."
              }
            />
          </div>

          <div className="column-two">
            <SideBarBox title={"Commercial"} links={Links} list={List} />

            <UncertainTo />
          </div>
        </div>
      </div>

      <RestorePeace />
    </div>
  );
}
