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
    question: "How long will the restoration process take?",
    answer:
      "Because there are many variables and many services involved in fire and smoke restoration, it is difficult to predict exactly how long the complete restoration will take. Consult with your ServiceMaster Restore Restoration Technician on the estimated dates and phases of your restoration project.",
  },
  {
    question: "Can I clean up from fire damage myself?",
    answer:
      "We suggest that you do not attempt any “do-it-yourself” cleaning methods without consulting your ServiceMaster Restore Restoration Technician. Pretesting, using the right cleaning agent for the particular item, mixing deodorizing agents with cleaning solutions, and using correct dilution rates are just some of the ways a fire restoration technician expertly controls the results. Professional cleaning systems and products used by experienced, trained ServiceMaster Restore Restoration Technicians give you the best chance for complete restoration of your belongings.",
  },
  {
    question: "What are some safety concerns?",
    answer:
      "At ServiceMaster Restore, occupant and worker safety is a top priority. During the initial inspection, safety hazards are identified and addressed, including debris removal, air quality, electrical hazards, slip and trip hazards, etc. Burnt electrical cords and appliances are separated out for disposal, and questionable electrical appliances are unplugged and tagged for evaluation of safe operation. Electrical power may be turned off and kept off until evaluation by a licensed electrician.",
  },
  {
    question: "Can I turn on my heating and air conditioning unit?",
    answer:
      "We recommend that you not turn on your furnace or air conditioning unit without clearance from the HVAC contractor.",
  },
  {
    question:
      "What items do I keep in my possession during the restoration process?",
    answer:
      "- Cash<br>- Medications<br>- Valuable Jewelry<br>- Checkbooks<br>- Personal Documents<br>- Valuable Paintings<br>- Flammables<br>- Pets<br>- Weapons/ammunition<br>- Gasoline cans<br>- Stamp/coin collections",
  },
  {
    question: "How do I keep track of non-restorable items?",
    answer:
      "We recommend you make a list of items (including food items) deemed nonrestorable. Make a copy for your insurance company and keep one for yourself.",
  },
  {
    question: "Do I need to move out of my property during this process?",
    answer:
      "This is ultimately your decision. Some things you may want to consider are safety concerns, odors, electricity, noise from equipment, etc. If vacating your premises for any length of time, consider the following: forward your mail to your temporary residence; stop newspaper and other deliveries; notify utility company, cable company, etc., of temporary suspension of services.",
  },
  {
    question: "Do I need general contractors?",
    answer:
      "There are some items that may require general contractors such as drywall/painting; electrical; plumbing; roofing; framing/finish carpentry; flooring/carpet; installation of doors, windows, cabinets, post-construction cleanup, etc.",
  },
  {
    question: "Do my belongings need to be moved away from the premises?",
    answer:
      "Depending on the source, nature, and extent of the fire, it may be best to move all belongings to a secure facility for cleaning, storage and to make room for restoration or construction. ServiceMaster Restore will work with you and your insurance claims representative to manage this process.",
  },
  {
    question: "Will I have access to my belongings while they are in storage?",
    answer:
      "Yes, with advance notice we can schedule a time for a ServiceMaster Restore Restoration Technician to meet with you and provide access to your requested items. A service charge may apply.",
  },
  {
    question: "What about special items? Artwork, china, heirlooms, etc.",
    answer:
      "Some high-value items require restoration by a specialist. Working with your insurance claims representative, we can help you identify these and locate a qualified restorer.",
  },
  {
    question: "Who is responsible for paying for the service?",
    answer:
      "Ultimately you, the property owner, are responsible for payment and will need to sign a form authorizing payment for the reconstruction services.<br><br>If this is an insurance claim, ServiceMaster Restore generally collects only the deductible amount from you before work begins and bills the balance to your insurance provider as a service to you. If your project is not covered by insurance or you decide not to file a claim, a payment schedule must be agreed upon prior to the start of any non-insured work.<br><br><b>IMPORTANT NOTE:</b> To avoid confusion, please direct any insurance-related questions to your Insurance Agent or Claims Representative.",
  },
];

export default function FireDamageFAQ() {
  return (
    <div>
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>
              RESIDENTIAL FIRE DAMAGE RESTORATION & CONTENT MANAGEMENT FAQ
            </h1>
            <p>OUR EXPERTS ARE HERE TO ANSWER ALL OF YOUR QUESTIONS</p>

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
