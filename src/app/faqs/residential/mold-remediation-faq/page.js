"use client";

import FAQAccordion from "@/app/components/FAQAccordion";
import RestorePeace from "@/app/components/RestoringPeace";
import SideBarBox from "@/app/components/SideBarBox";
import UncertainTo from "@/app/components/UncertaintyTo";

const Links = [
  "/faqs/residential/water-damage-faq",
  "/faqs/residential/mold-remediation-faq",
  "/faqs/residential/reconstruction-services-faq",
  "/faqs/residential/hoarding-faq",
  "/faqs/residential/air-duct-cleaning-faq",
  "/faqs/residential/fire-damage-faq",
];

const List = [
  "Water Damage FAQ",
  "Mold Remediation FAQ",
  "Reconstruction Services FAQ",
  "Hoarding FAQ",
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
      "Many people aren’t aware that mold can cause serious structural damage to homes and businesses, which, if left undetected, can cause a property to lose value and/or require significant repairs. And if you have ever suffered from allergies, exposure to molds can often cause nasal stuffiness, eye irritation, wheezing, skin irritation, or even more severe reactions.",
  },
  {
    question: "What does mold need in order to grow?",
    answer:
      "Mold needs a moist environment, temperatures above freezing, and a food source, which could be leaves, paper, dirt, wood, or other building materials. Mold is more likely to be found in damp, dusty spaces or areas with stagnant air.",
  },
  {
    question: "How can I tell if I have mold?",
    answer:
      "If you see mold growth or water stains, a mold test can help identify related microbial activity. You can also look for areas where water leakage has occurred, such as roofs, pipes, ceilings, or walls. Musty smells may also indicate the presence of mold.",
  },
  {
    question: "What can I do to prevent the growth of mold in my home?",
    answer:
      "The most effective means to keep mold in check include keeping the humidity level of your home at 40–60 percent, using an air conditioner and/or dehumidifier during humid months and in damp spaces like basements, and always utilizing exhaust fans in bathrooms and kitchens, along with dryer vents outside your home. Lastly, if there are leaks in your roof, walls, or plumbing, it is important to repair them as soon as possible.",
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
      "Sometimes you will hear terms like “toxic mold” and “black mold” used to refer to molds. While identifying the type of fungus or mold may be interesting, it doesn’t affect the course of action. If mold is present, the CDC has strongly recommended that it be removed, no matter the type. Source: “Facts about Mold and Dampness.” Centers for Disease Control and Prevention. 18 September 2012. http://www.cdc.gov/mold/dampness_facts.htm",
  },
];

export default function MoldRemediationFAQ() {
  return (
    <div>
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>RESIDENTIAL MOLD REMEDIATION FAQ</h1>
            <p>OUR RESTORATION EXPERTS HAVE ALL THE ANSWERS</p>

            <FAQAccordion items={faqItems} />
          </div>

          <div className="column-two">
            <SideBarBox title={"Residential"} links={Links} list={List} />

            <UncertainTo />
          </div>
        </div>
      </div>

      <RestorePeace />
    </div>
  );
}
