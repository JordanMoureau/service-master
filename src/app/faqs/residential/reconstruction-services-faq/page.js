"use client";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../components/UncertaintyTo";
import GetHelpNow from "../../../components/GetHelpNow";

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
    question: "How long will the reconstruction project take?",
    answer:
      "Because of the many variables involved, it is difficult to predict exactly how long the reconstruction project will take. Consult with your ServiceMaster Restore Project Manager on the phases of your reconstruction project and estimated completion date.",
  },
  {
    question: "What does pre-loss condition mean?",
    answer:
      "ServiceMaster Restore is responsible for returning your home to its original state before the damage occurred, or its pre-loss condition. We use materials that are similar in type and quality. There may be some damage that existed prior to your loss. Therefore, these damages have not been included in the scope of repairs. At your request, ServiceMaster Restore will provide you with an estimate for any additional renovation projects, also called non-insured work.",
  },
  {
    question: "What is non-insured work?",
    answer:
      "Any renovation project unrelated to your loss is considered non-insured work. At your request, ServiceMaster Restore will provide a separate estimate for a non-insured renovation project, and we will require separate authorization and payment terms. If non-insured work will delay the completion of an insured portion, then the situation must be discussed with your Insurance Adjuster and the ServiceMaster Restore Project Manager.",
  },
  {
    question: "Do I need a permit?",
    answer:
      "When required, your ServiceMaster Restore Project Manager will take out the appropriate permit(s) on your behalf, identifying the ServiceMaster Restore Franchise Business as the general contractor. If applicable, permit fees are included in the estimate and may be covered by the insurance company.",
  },
  {
    question: "What is a code or by-law upgrade?",
    answer:
      "It is an upgrade that is made when your home’s pre-loss condition no longer meets legal building codes. Your insurance company may recognize code upgrades in the estimation process. Any questions regarding code upgrades should be directed to your Insurance Adjuster.",
  },
  {
    question: "Will I have to be home all the time?",
    answer:
      "No, we will do our best to make sure you may go about your daily routine. For site access, you can provide a key to your Project Manager or opt for a lockbox on the property.",
  },
  {
    question: "Do my belongings need to be moved away from the premises?",
    answer:
      "Depending on the scope of work, contents may remain on location. We will take appropriate measures to securely cover and protect contents. Any construction-related dust that collects will be addressed in the post-construction cleaning.",
  },
];

export default function ReconstructionFAQ() {
  return (
    <div>
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>RESIDENTIAL RECONSTRUCTION SERVICES FAQ</h1>
            <p>YOU’VE GOT QUESTIONS, OUR EXPERTS HAVE THE ANSWERS</p>

            <FAQAccordion items={faqItems} />
            <GetHelpNow
              text={
                "Contact us for any additional questions about our residential reconstruction services"
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
