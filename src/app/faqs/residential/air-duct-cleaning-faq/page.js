"use client";

import FAQAccordion from "@/app/components/FAQAccordion";
import RestorePeace from "@/app/components/RestoringPeace";
import SideBarBox from "@/app/components/SideBarBox";
import UncertainTo from "@/app/components/UncertaintyTo";
import GetHelpNow from "@/app/components/GetHelpNow";

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
    question: "Is air duct cleaning expensive?",
    answer:
      "The cost of the service varies and depends on factors such as where you live, how dirty your system is, how easy it is for the contractor to access the ducts and what your ducts are made of, and what material is used in the construction of the ducts. However, our expertise, training, and satisfaction guarantee are built into the price of service.",
  },
  {
    question: "How long will it take to have my air ducts cleaned?",
    answer:
      "The amount of time it takes to clean a residential HVAC system can vary depending on the complexity of the system. Once a trained technician arrives, they should be able to give you an estimate of how long it will take. For standard purposes, we ask for at least 3-5 hours to get the job done right and to your satisfaction.",
  },
  {
    question: "Will air duct cleaning be disruptive to my family?",
    answer:
      "Your professionals at ServiceMaster Restore can schedule a time that is most convenient for your family and when most of the household is not present. Depending on the magnitude of the job, we should have your house back to normal operation in a matter of a few hours.",
  },
  {
    question: "How often do I need to get my air ducts cleaned?",
    answer:
      "We recommend air duct cleaning every three to five years. Customers should consider more frequent cleaning of their duct systems if their home has any of the following:\n- Pets that shed a lot\n- Recent water damage\n- Remodeling or renovations taking place\n- Residents with asthma or allergens\n- Humid or moist environmental conditions",
  },
  {
    question:
      "Do I need to do anything prior to the technician arriving for my scheduled service?",
    answer:
      "Duct cleaning can be noisy. It is best to do it when most family members are not present. Clear work areas. Ask your technician how much space is needed around each air vent register and how much space they will need around the furnace and air conditioner. It is best to have these areas cleared beforehand.\n\nPrior to cleaning, perform a walkthrough of your home to go over where protective coverings such as drop and corner guards will be placed. Also, it is necessary to go over the ducts, how they will be cleaned, and the accessibility of it.",
  },
  {
    question: "Why should I have my air ducts cleaned?",
    answer:
      "Air duct cleaning helps:\n- Reduce energy costs in your home\n- Reduce the potential for mold growth\n- Improve indoor air quality\n- Increase air circulation and flow\n- Increase your home system performance\n- Extend HVAC equipment life",
  },
  {
    question: "Is there anything I can do to help maintain clean air ducts?",
    answer:
      "To help maintain clean air ducts, change air filters based on the manufacturer’s recommendations. Regular vacuuming will also help reduce pet dander and airborne dirt and debris.",
  },
];

export default function AirDuctCleaningFAQ() {
  return (
    <div>
      <div className="top-image">
        <img src="/air-duct.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>RESIDENTIAL AIR DUCT CLEANING FAQ</h1>
            <p>TURN TO OUR RESTORATION EXPERTS FOR ALL THE ANSWERS</p>
            <FAQAccordion items={faqItems} />
            <GetHelpNow
              text={
                "If you still have lingering questions about our air duct cleaning services, don’t hesitate to call us at"
              }
            />
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
