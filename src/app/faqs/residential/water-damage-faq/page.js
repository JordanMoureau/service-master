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
    question: "How long will it take my property to dry?",
    answer:
      "Drying time is determined by a combination of factors, including the location, duration, and source of water, the types of building materials, the weather conditions, and how quickly emergency services begin. Through consistent monitoring and evaluation of the drying process, we can determine when the drying is complete. Your carpet may feel dry to the touch, but padding and subfloors may still be wet underneath. While there are no rules to determine how long your property will take to dry, we can tell you it may take between three and five days or more, depending on the conditions.",
  },
  {
    question: "How do I know when my property is completely dry?",
    answer:
      "Proper testing with our specialized equipment is the correct way to determine if things are completely dry. Touch alone may be a false indicator.",
  },
  {
    question: "Will turning up the heat help dry things out?",
    answer:
      "Not necessarily. We will adjust the temperature to its optimum setting for the proper drying conditions. Please do not change the setting or shut off the HVAC system; doing so may prolong the drying process.",
  },
  {
    question:
      "My wood floors are wet and buckling. Will they have to be replaced?",
    answer:
      "Wood flooring must be evaluated during the drying process. We utilize specialized drying systems and dehumidifiers to create an environment where wood floors can dry more efficiently and resume their original shape. Due to the density of hardwood flooring and urethane finishes, drying may take longer. If you filed a claim, your insurance adjuster will work with you to make the final decision as to whether floors will need to be refinished or replaced.",
  },
  {
    question: "Can you restore my wet furniture?",
    answer:
      "The extent of damage and the construction of the furniture will determine if your furniture can be restored. Your furniture must be dried before damage can be adequately assessed. Unsalvageable furniture will be documented for you, and if any items need to be discarded, a customer release form will need to be signed.",
  },
  {
    question: "Do I need to move out of my property during this process?",
    answer:
      "If you file an insurance claim, you may receive guidance from your insurance representative. However, this is a decision you must reach on your own. There are several factors to consider. Safety is paramount. Our equipment is as childproof as possible, but we require your supervision to make sure no children play with it. Air movers and dehumidifiers will create noise and make your property drafty for a few days. It is important that the equipment remains on, so if the noise is disruptive to you, you might want to consider an alternate place to stay.",
  },
  {
    question:
      "Will there be any lingering odors after your restoration services?",
    answer:
      "It is not unusual to smell odors during the drying process. Increased heat and humidity can also lead to increased odors that may be coming from the drying building materials, or dormant spill and accident areas. Do not confuse these normal odors with the odor of mold. As the drying process continues and humidity levels drop, you’ll notice these odors disappearing on their own. Deodorizers are often used to minimize these effects as well.",
  },
  {
    question: "Does everything need to be moved out during restoration?",
    answer:
      "Not usually. If items need to be moved out, we will let you know in advance.",
  },
  {
    question: "My ceilings are wet. What needs to be done?",
    answer:
      "Our technicians will evaluate moisture content, determine the severity of the damage, and may have to remove some of your ceiling for ventilation. Wet insulation can also be a hazard and may need to be removed.",
  },
  {
    question: "Should I open the windows to help the drying process?",
    answer:
      "Opening your windows to assist the drying process is not always recommended. Outside weather conditions may vary, so the technician will determine when and if the outside air is appropriate.",
  },
  {
    question: "Can I walk on the area during the drying process?",
    answer:
      "It is strongly suggested that you keep the traffic to a minimum. Wearing shoes is recommended for your safety.",
  },
  {
    question: "Can my carpet be restored or will it have to be replaced?",
    answer:
      "A few reasons your carpet may not be salvageable: - Delamination (occurs when the backing separates from the carpet fiber) - Loss of adhesion (may be caused by prolonged exposure to water or age of the carpet) - Permanent stains - Carpet covers wood flooring (to salvage the wood flooring) - Sewage contamination",
  },
  {
    question: "Why does my specialty floor need to be removed?",
    answer:
      "Non-porous flooring can trap water and prevent it from drying properly. Specialty floors are evaluated and efforts to restore them will be made.",
  },
  {
    question: "Why did the technician leave wet carpet on my stairs?",
    answer:
      "Carpet on the stairs is generally not removed for safety reasons. Exposed tack strips or staples, especially on steps, are dangerous. However, there are situations where removing carpet from stairs is necessary to prevent damage to hardwood steps, or in the case of sewage contamination. Removing tack strips is not advised, as this may damage the hardwood or the subfloor. Extreme caution must be used whenever the tack strip is exposed or when the carpeted stairs are damp. If carpet left on the stairs is unsalvageable, it will be removed when a new carpet is installed.",
  },
  {
    question: "How will you match my carpet pad?",
    answer:
      "A sample of your pad is brought to our office for a match. When available, an identical pad will be used. When your original pad is not available, we will provide a pad of the same quality, thickness, and density. A similar pad may differ in color based upon the time it was manufactured.",
  },
  {
    question: "What will you do with my area rugs?",
    answer:
      "Rugs are taken to our warehouse for special care. They need to be dried carefully to minimize the bleeding of colors and discoloration. Your rugs will be dried, cleaned, and returned.",
  },
  {
    question: "Why are air movers and dehumidifiers used?",
    answer:
      "When water damage has occurred, water can be absorbed into the drywall (sheetrock), baseboards, subflooring, etc. Drying these surfaces requires high-velocity air movers to accelerate the release of absorbed water into the air. Dehumidifiers are necessary for removing this excess moisture to help protect property and create conditions for efficient drying. Please do not turn off or move drying equipment without first calling ServiceMaster Restore.",
  },
  {
    question: "Who is responsible for monitoring the drying equipment?",
    answer:
      "Our water damage mitigation specialists will place and monitor equipment to achieve optimal results in the shortest amount of time. Please make sure no one turns the equipment off or moves it. Please notify our office immediately if the power goes off or if the equipment turns off.",
  },
  {
    question: "What will it cost to run the drying equipment?",
    answer:
      "Based on average electrical rates, it may cost less than $1 per day per piece of drying equipment to operate. Actual costs can vary depending on current rates from your local electricity provider.",
  },
  {
    question: "Can you restore items that have sewage contamination?",
    answer:
      "Hard surfaces can be cleaned and sanitized. Affected items that cannot be sanitized require disposal. Porous materials such as drywall, ceiling tiles, insulation, particleboard, paneling, etc., that have been directly affected should be removed during the emergency service visit.",
  },
  {
    question: "Who is responsible for paying for the service?",
    answer:
      "Ultimately you, the property owner, are responsible for payment. As the property owner, you will need to sign a form authorizing the work and payment. If this is an insurance claim, ServiceMaster Restore generally collects only the deductible amount and bills the balance to your insurance provider as a service to you. If you have a large loss, your mortgage company may be included as a payee on the payment from your insurance company, and you may need to obtain a signature from them as well. If your claim is not covered or you decide not to file a claim, you will be expected to pay in full at the time of service.",
  },
];

export default function WaterDamageFAQS() {
  return (
    <div>
      <div className="top-image">
        <img src="/residential-water-damage.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>RESIDENTIAL WATER DAMAGE RESTORATION FAQ</h1>
            <p>THE SERVICEMASTER RESTORE EXPERTS HAVE ALL THE ANSWERS</p>

            <FAQAccordion items={faqItems} />
            <GetHelpNow
              text={
                "If you still have lingering questions about our residential water restoration services, don’t hesitate to call us at"
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
