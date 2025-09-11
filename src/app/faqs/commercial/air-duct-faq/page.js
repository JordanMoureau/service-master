"use client";

import FAQAccordion from "@/app/components/FAQAccordion";
import RestorePeace from "@/app/components/RestoringPeace";
import SideBarBox from "@/app/components/SideBarBox";
import UncertainTo from "@/app/components/UncertaintyTo";
import GetHelpNow from "@/app/components/GetHelpNow";

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
    question: "Is air duct cleaning expensive?",
    answer:
      "The cost of the service varies and depends on factors such as the location of your business, how dirty your system is, how easy it is for the contractor to access the ducts and what your ducts are made of. However, our expertise, training, and satisfaction guarantee are built into the price of service.",
  },
  {
    question: "How long will it take to have my air ducts cleaned?",
    answer:
      "The amount of time it takes to clean a commercial HVAC system can vary depending on the complexity of the system. Once a skilled and trained technician arrives, he should be able to give you an estimate of how long it will take. For standard purposes, we ask for at least several hours to get the job done right and to your satisfaction.",
  },
  {
    question: "Will air duct cleaning be disruptive to my business?",
    answer:
      "The local ServiceMaster franchise owner can work to schedule a time that is most convenient for your business during non-business hours to complete the job. Depending on the magnitude of the job, we should have you up and running by the next business day if the job is completed during non-work hours.",
  },
  {
    question: "How often do I need to get my air ducts cleaned?",
    answer:
      "Most facilities may require air duct cleaning every three to five years. According to the National Air Duct Cleaners Association (NADCA), it is recommended to have your HVAC system inspected annually.",
  },
  {
    question:
      "Do I need to do anything prior to the technician arriving for my scheduled service?",
    answer:
      "For safety, the technician should be shown where the fire extinguisher and first aid kit is located. Also, it is best to provide them with any emergency contact information. Duct cleaning can be noisy. It is best to do it during non-work hours.<br>Clear work areas. Ask your technician how much space is needed around the furnace, the air-conditioner, and each air vent register. It is best to have these areas cleared beforehand.<br>Make sure all personnel are aware that the ducts are going to be cleaned and that all offices and rooms that are serviced remain open and unlocked.<br>Perform a walk-through of the facility to go over where protective coverings such as drop cloths and corner guards will be placed. Also, it is necessary to go over the HVAC, how it will be cleaned, and the accessibility of it.<br>Coordinate with Building Engineer or Superintendent to go over specifics of building layout and safety.",
  },
  {
    question: "Why should I have my air ducts cleaned?",
    answer:
      "Air duct cleaning helps:<br>- Reduce energy costs in your business<br>- Reduce the potential for mold growth, bacteria, allergens, dirt, and debris<br>- Improve indoor air quality<br>- Increase air circulation and flow<br>- Increase your commercial system performance<br>- Lengthen the lifespan of your HVAC system",
  },
  {
    question: "Is there anything I can do to help maintain clean air ducts?",
    answer:
      "In a commercial facility, filter maintenance and replacement schedule should be established, based on the manufacturer’s recommendations, the environmental conditions of the facility, and the type of facility and industry. Regular vacuuming will also help reduce airborne dirt and debris.",
  },
];

export default function CommercialAirDuctFAQ() {
  return (
    <div>
      <div className="top-image">
        <img src="/air-duct.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Air Duct Cleaning FAQ</h1>
            <p>You've got questions, our experts have the answers</p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow
              text={
                "Have additional questions about our air duct cleaning services? Reach out to us today at"
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
