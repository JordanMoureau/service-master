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
    question: "How long will the restoration process take?",
    answer:
      "Because there are many variables and many services involved in fire and smoke restoration, it is difficult to predict exactly how long the complete restoration will take. Consult with your ServiceMaster Restore restoration technician as to the estimated dates and phases of your restoration project.",
  },
  {
    question: "Can I clean it myself?",
    answer:
      'We suggest that you do not attempt any "do-it-yourself" cleaning methods without consulting your ServiceMaster Restore restoration technician. Pretesting, using the right cleaning agent for the particular item, mixing deodorizing agents with cleaning solutions, and using correct dilution rates are just some of the ways a fire restoration technician expertly controls the results. Professional cleaning systems and products used by experienced, trained ServiceMaster Restore Restoration Technicians give you the best chance for complete restoration of your belongings.',
  },
  {
    question: "What are some safety concerns?",
    answer:
      "At ServiceMaster Restore, occupant and worker safety are a top priority. During the initial inspection, safety hazards are identified and addressed, including debris removal, air quality, electrical hazards, slip and trip hazards, etc. Burnt electrical cords and appliances are separated out for disposal, and questionable electrical appliances are unplugged and tagged for evaluation of safe operation. Electrical power may be turned off and kept off until evaluation by a licensed electrician.",
  },
  {
    question: "May I turn on my heating and air conditioning unit?",
    answer:
      "We recommend that you not turn on your furnace or air conditioning unit without clearance from the HVAC contractor.",
  },
  {
    question: "How do I keep track of non-restorable items?",
    answer:
      "For insurance purposes, we recommend you make a list of items (including food items) deemed nonrestorable.",
  },
  {
    question: "Do I need general contractors?",
    answer:
      "Some items may require general contractors such as drywall/painting; electrical; plumbing; roofing; framing/finish carpentry; flooring/carpet; installation of doors, windows, cabinets, post-construction cleanup, etc.",
  },
  {
    question: "Do my belongings need to be moved away from the premises?",
    answer:
      "Depending on the source, nature, and extent of the fire, it may be best to remove all belongings to a secure facility for cleaning, storage and to make room for restoration or construction. ServiceMaster Restore will work with you and your insurance claims representative to manage this process.",
  },
  {
    question: "Will I have access to my belongings while they are in storage?",
    answer:
      "Yes, with advance notice we can schedule a time for a ServiceMaster Restore Restoration Technician to meet with you and provide access to your requested items. A service charge may apply.",
  },
  {
    question: "What about special items? Artwork, computers, electronics, etc.",
    answer:
      "Some high-value items require restoration by a specialist. Working with your insurance claims representative, we can help you identify these and locate a qualified restorer.",
  },
  {
    question: "Who is responsible for paying for the service?",
    answer:
      "Prior to work being started, all responsible parties will need to sign a form authorizing payment for the restoration services. If this is an insurance claim, ServiceMaster Restore generally collects only the deductible amount from you and bills the balance to your insurance provider as a service to you. If your claim is not covered or you decide not to file a claim, you will be expected to pay in full at the time of service.",
  },
];

export default function CommercialFireRestorationFAQ() {
  return (
    <div>
      <div className="top-image">
        <img src="/commercialfire.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Fire Restoration FAQ</h1>
            <p>Answers fom Our Restoration Experts</p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow
              text={
                "If you still have questions or concerns about our commerical fire restoration services, don't hesitate to call us at"
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
