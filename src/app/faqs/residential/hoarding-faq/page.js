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
    question: "Will you clean the home without the customer being present?",
    answer:
      "We prefer to work with the customer in the home, but under specific medical situations, we can do so with their input, even if they’re not present. We will never clean out a home without the customer’s knowledge, approval, and understanding.",
  },
  {
    question: "How involved must the customer be in the cleaning process?",
    answer:
      "While we do not ask the customer to physically move items, we do ask for their guidance when it comes to making decisions. After all, the more involved in the cleanup the customer is, the greater chance they’ll have a positive experience and outcome.",
  },
  {
    question: "How do you handle a resistant customer?",
    answer:
      "Our job is to help the customers clean up their homes. We focus on building trust first and teaching skill sets second. While the customer may get pushed beyond their original comfort zone as the cleaning advances, our teams are trained to identify and communicate with the customer when the cleanup becomes challenging.",
  },
  {
    question: "Can friends, neighbors, and church groups help?",
    answer:
      "Because homes are filled with highly emotional situations, our experience has shown that friends, neighbors, and church groups are best suited as post-cleanup support groups after the process has been completed.",
  },
  {
    question:
      "Can you help family members educate another family member on the cleaning process?",
    answer:
      "Absolutely. Our team will work with the customer and their family members to help them better understand the cleaning plan. We’ll invest the time to make sure all parties are fully informed.",
  },
  {
    question: "What does a hoarding cleanup cost?",
    answer:
      "Every job is unique, and pricing will vary in many situations, including the size of the home, type of items kept, ability to make decisions, and hazards found in the home.",
  },
  {
    question: "How long does the cleaning take?",
    answer:
      "Timing differs for each home depending upon volume, hazards, and more. An average home takes between 3 and 5 days. Preparing for the cleanup can take weeks, but the actual cleanup is usually less than a week.",
  },
  {
    question: "Does the customer get breaks during the cleanup?",
    answer:
      "Each job will be tailored to the customer’s ability to focus and make decisions. Whether that means we work half days or full days, we prioritize the customer’s well-being and encourage breaks as needed.",
  },
  {
    question: "What do you do with valuables found in the house?",
    answer:
      "Any valuables found in the home are the property of the customer. During a cleanup, finding valuables is an exciting event that we use to build confidence and momentum. Something of value (emotional or monetary) is brought to the customer immediately, and the story of the item is shared with the crew. Taking the time to acknowledge and appreciate these stories is an important part of the process.",
  },
  {
    question: "Can you help donate items?",
    answer:
      "Yes, our team will help assist with the details of donated items. Once the customer selects a preferred donation organization, our team will sort and document all items and can take them to the donation center. We will take a detailed inventory, fill out the donation receipt, and return it to the customer for tax purposes.",
  },
  {
    question: "Can you help sell items?",
    answer:
      "While we can connect the customer to partners specialized in selling specific items, our team does not personally sell the items. The sales partners will typically take a commission for selling the items, but our team does not share in any profits of sold items.",
  },
  {
    question: "Can you store items?",
    answer:
      "Many of our locations do have the ability to store items in their warehouses for an additional fee. If our location does not have internal storage, we have partners nationwide that can affordably store items. In all cases, our team will handle the logistics of getting the items to storage locations. However, long-term storage after a clean-out should only be used in special situations.",
  },
  {
    question: "Do you remove animals from hoarding situations?",
    answer:
      "Animal hoarding is a reality of our business, and we understand that our customers have the best intentions for their pets. Depending upon the severity of the situation, we will partner with local animal control, veterinarians, adoption agencies, shelters, and rescue teams to gain the healthiest and safest location for the animals. Please call with questions about your specific situation and know that all calls are confidential.",
  },
  {
    question: "Are you bonded/licensed/insured?",
    answer:
      "All of our teams nationwide are licensed, bonded, and insured. You can trust that anyone entering your home from our team will be trained, trustworthy, courteous, and compassionate.",
  },
  {
    question:
      "What if mold or other hazardous materials (feces, asbestos, etc.) are found in the house?",
    answer:
      "ServiceMaster Restore offers a full suite of services to clean and repair mold, water, fire, and smoke damage, as well as odor and hazardous materials. The services are an additional cost and will be discussed during the cleaning evaluation and again at the end of the cleanup.",
  },
  {
    question: "What if you find a dangerous situation in the house?",
    answer:
      "Our teams are highly trained to recognize any dangerous situations, from structural issues to mold and fecal matter and everything in between. After walking through the home, we will let the customer know if there are any dangerous situations and will discuss how it can best be handled.",
  },
  {
    question:
      "After the cleaning process, can you help the customer maintain the newly cleaned home?",
    answer:
      "We’ll help the customer and family create a plan to maintain a clean home. In addition, we’ll follow up by phone to see if the customer is doing well, or if help is necessary.",
  },
  {
    question: "How discreet will this process be? Will neighbors find out?",
    answer:
      "We understand that privacy is of extreme importance. We will work with the customer to be as discreet as possible.",
  },
];

export default function HoardingFAQ() {
  return (
    <div>
      <div className="top-image">
        <img src="/calloutreslong.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>HOARDING CLEAN-UP FAQ</h1>
            <p>ANSWERS TO YOUR MOST COMMON QUESTIONS</p>

            <FAQAccordion items={faqItems} />
            <GetHelpNow
              text={
                "Reach out to us today to schedule a hoarding clean-up service"
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
