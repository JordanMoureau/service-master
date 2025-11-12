"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=ef29957d23e94eec&sxsrf=AE3TifO6YtXosAYGa-FdHehtl3-g_dkUYQ%3A1761758644793&q=ServiceMaster%20by%20Compass&stick=H4sIAAAAAAAAAONgU1I1qDA1sUw1tEg0NrAwNEyzMLK0MqhIS0lLMzJKsTQyTDS2TEtKXcQqEZxaVJaZnOqbWFySWqSQVKngnJ9bkFhcDAA1TSeeRAAAAA&mat=CaG_rLXPPIyZ&ved=2ahUKEwi8vc-x9smQAxXaEzQIHVoMMwMQrMcEegQILBAF#scso=_vU0CafKKFsOp0PEP1fvlgA4_81:263&mpd=~11064285247346360225/customers/reviews";

export const reviews = [
  {
    name: "jen cooper",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Service Master in Spokane, Washington was extremely helpful, very professional and worked hard to clean up all the water damage at our family home. They packed up the house and moved it out to a waiting POD, helped out with all the water damaged items and took care of our family heirlooms. ... A huge shout out to Sky, Dylan, Johnathan, Aiden, Cole, Devin and Cody.",
  },
  {
    name: "Genie James",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "They’re great—very professional—took great care in boxing up my items.",
  },
  {
    name: "Jacque Taylor",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Cheryl W., Yana, Tanya, and Cheryl F. are an awesome cleaning crew! They meticulously cleaned every bit of our main floor from smoke, smell and stickiness damage over 5 days. Sweet, cheerful, and wonderful to have in our home!",
  },
  {
    name: "Cis Hyndman",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "We found a water leak ruining our new flooring. ServiceMaster responded immediately. Matt and Jonathan were professional, thorough, great communicators and on time every day. Warren kept close communication. Movers Kayla W., Russel and Doug were careful, friendly and professional. Highly recommend.",
  },
  {
    name: "Eric Jahrling",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Brandi, Tyler, and Doug got my apartment cleaned up and sanitized and moved my furniture to my new apartment in no time!",
  },
  {
    name: "Lindsay Kondo",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Had to fire another company; ServiceMaster came quickly, explained what needed to be done, worked fast, called before arriving, and worked around kids/dog/schedule. Special thanks to Doug, Cody, Hayden, Justin, Sky and Devin. UPDATE: Shout-outs to Shelby’s team, Keith Young, Joe Ellis, and Frank Stopar—transparent, patient, and respectful.",
  },
  {
    name: "Kathy Solberg",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Cole and Gustavo are excellent and considerate. After my apartment flooded, they handled my glass items carefully, communicated progress and next steps, and were thorough with cleanup and mold mitigation.",
  },
  {
    name: "Trudy Maples",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "After losing our lake home to a fire, ServiceMaster helped restore my grandmother’s heirloom quilt and spent countless hours trying to save other items. Theresa and her crew were compassionate and went above and beyond. Forever grateful.",
  },
  {
    name: "Ryan Doree",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Sewer backup in basement; Nathan and Jose contacted me minutes later and got started right away. Professional, thorough, and kept me included each step.",
  },
  {
    name: "J H",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "We had a leak and were referred to ServiceMaster. Matt and Jonathan did a fantastic job, explained everything well, and guided us through the whole process. Highly recommend.",
  },
  {
    name: "Mercedis Treadwell",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Nate and Jose came out on an emergency call on a Friday night. Courteous and respectful—would ask for them again.",
  },
  {
    name: "Shellie Kafton",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Kind and courteous during a stressful situation—they eased my mind.",
  },
  {
    name: "Patricia Radcliffe",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Fantastic job after our flood. Sandra was wonderful and there right away; her crew did a great job.",
  },
  {
    name: "David Hogberg",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Skyler and team did an amazing job. Great communication and support during a stressful time. They deserve a raise!",
  },
  {
    name: "Luke Woods (Nexis)",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Sewer backup caused major damage. Sky and Devin led cleanup/demolition with outstanding skill and kindness. Skyler and Dylan set up drying efficiently. Constant communication, 15-minute arrival calls, and true professionalism. Highly recommend.",
  },
  {
    name: "Savannah Brien",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Dishwasher flood—Jose, Skyler and Dylan were kind, punctual, communicative, and thorough. Kept us informed and answered questions. We will recommend!",
  },
  {
    name: "Catherine Sugimura",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Entire team was professional, respectful, and compassionate. Stryker and Shayden were organized and hardworking. Would recommend ServiceMaster.",
  },
  {
    name: "Ginger JeVon",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Jose, Skyler and team did a fabulous job on the restoration of my home. Highly recommend.",
  },
  {
    name: "Deborah Child",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Skyler, Gustavo, & Cody were fantastic—informative, professional, and efficient. Made things stress-free; deconstruction of my kitchen went smoothly.",
  },
  {
    name: "Eric Robertson",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Skyler, Gus, Justin and Alex were efficient, hardworking, and great to be around. Job done correctly. Can’t say enough good.",
  },
  {
    name: "Mark Jones",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Cole and Joey were awesome on cleanup from a water leak—polite, professional, and thorough.",
  },
  {
    name: "sabrina denton",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Cody, Reschel, & Ethan were fantastic—quick, prompt, courteous, and informative. Fred was great too. Thank you for emptying my flooded basement!",
  },
  {
    name: "Luann Petersen",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content: "Excellent. Derek and Russel.",
  },
  {
    name: "David Hogberg",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Joel and his crew did an outstanding job—long hours to get my house back in order. GREAT JOB!",
  },
  {
    name: "Elsa Bro",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Jose (project manager), Derek, and Ethan were efficient, communicative, and had great energy. Made our first experience with ServiceMaster painless. Highly recommend.",
  },
  {
    name: "Momma Bear",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Major sewage backup & flood. They did a good job over a couple weeks—hooked up washer/dryer, made walkway to pantry, disinfected what they could and removed what they couldn’t.",
  },
  {
    name: "Tim Devlin",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "After a major basement flood: courteous, professional, ethical, and high-quality work. Shout-outs to Rachell, Cody, Justin, Cole, Shayden.",
  },
  {
    name: "Craig",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Large remediation project—flexible, transparent process. Doug answered questions and walked me through. Reschel communicated and led a thorough job ending with an all-clear test. They cared about the result.",
  },
  {
    name: "Mark Kelly",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Doug, Rochelle, Skylar, Derrick and Gustavo were a great team drying out our flooded basement.",
  },
  {
    name: "Patti Smith",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Very efficient, worked clean and concise. Very good, clear communication.",
  },
  {
    name: "Rachel Lawson",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Water loss in my home. Doug was incredibly helpful; Rachelle and Skyler were knowledgeable and friendly, set up proper barriers, and protected the rest of my home. Highly recommend.",
  },
  {
    name: "vicki roberts",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "They really care and have the best people! Made a tough situation much easier. Thank you everyone.",
  },
  {
    name: "Mackenzie Draper",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Skyler and Shayden explained everything clearly, provided pictures, were professional and kind, and watched for our kitty as they came and went. We’ll recommend to friends and family!",
  },
  {
    name: "Brittany Buckner",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "They worked with me through every question and step of the process—highly recommend.",
  },
  {
    name: "Cheryl shoff",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Josh and Derek handled extensive water damage from a refrigerator leak, upstairs to downstairs. Daily work over a month with equipment to get everything dry so repairs could proceed. Excellent, time-consuming job—A-plus.",
  },
  {
    name: "Bob Hammond",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Garage fire cleanup and restoration with ServiceMaster by Compass & Compass Construction—tremendous job beyond expectations. Everyone from owner to workers was a pleasure. Highly recommend.",
  },
  {
    name: "Alan Bell",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Skyler, Brian, Ethan J., Isadore, and Jacob mitigated water issues from a deep freeze—attention to detail and good communication. Highly recommend.",
  },
  {
    name: "Rene Westbrook",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Showed up within an hour of my call. Complete professionals who answered all my questions. Thank you Jacob and Derek.",
  },
  {
    name: "Shawn Thurman",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Washer malfunction caused water damage. Matthew, Kole, and Shayden made the process easy—empathetic, professional, and top-tier people. Would use again.",
  },
  {
    name: "Wendy stevens",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Josh, Derek, and Gabe were thorough, respectful, and polite on mop up and cleanup of a water leak. Great communicators. Highly recommend.",
  },
  {
    name: "Scott Laird",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Kept me informed on status and progress. Positive: responsiveness, professionalism. Water damage cleanup & repair.",
  },
  {
    name: "Kelly Burns",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Josh and Derek were prompt, courteous, timely, and great communicators—kept us informed and left no trace. Highly recommend for cleanup jobs.",
  },
  {
    name: "Adina Brown",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Quick response, polite employees, timely work. Positive: responsiveness, punctuality, quality, professionalism, value.",
  },
  {
    name: "Jason Falk",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Highly recommend Jacob and Sandra for mold remediation—professional, courteous, worked around my situation, and cleared my basement of mold issues.",
  },
  {
    name: "Mike A",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Burst pipe at work on Sunday morning—Tanya and Haiden arrived within 2 hours and handled it quickly. Daily check-ins for 10 days. Professional and efficient.",
  },
  {
    name: "Amanda Guthmueller",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Professional and quick! Thankful for Travis’s hard work and dedication. Highly recommend.",
  },
  {
    name: "Judy Cofer",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Yeah to Tonya and Taylor—they were the best and made this experience fun.",
  },
  {
    name: "Becky Wilson",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Tanya and Reschel were caring and listened to our needs dealing with water damage. Pleasant, thorough, and attentive to what mattered to us.",
  },
  {
    name: "jean doherty",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Jeremy and his crew were wonderful—stressful and complex situation handled great from start to finish. Would recommend to anyone with restoration needs.",
  },
  {
    name: "Antonio Rosas",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Really fast response. Positive: responsiveness, punctuality, quality, professionalism.",
  },
  {
    name: "Tori “T” Russell",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Extremely helpful and easy to work with—knowledgeable and willing to explain the project. Water damage cleanup & repair.",
  },
  {
    name: "Claire Ghering",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Travis mitigated water damage from a dishwasher leak—worked quickly, kept area clean, and communicated well. Trustworthy on a chaotic day.",
  },
  {
    name: "Eva Zapata",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Craig and team provided a solution for our roof leak professionally and stress-free. Highly recommend.",
  },
  {
    name: "DARKNESS 37",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Jeremy and William were quick—made the problem pain-free and easy. Positive: responsiveness, professionalism.",
  },
  {
    name: "Marianne Mack",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Colton and Blake treated water damage and mold—thorough, professional, respectful, and answered questions. Job well done.",
  },
  {
    name: "Jolene Fisher",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Sewer backup in my new home—quick response and crew out within an hour. Clean results; very grateful.",
  },
  {
    name: "Patty Hendrix",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Fantastic water damage cleanup. Kaleb (no longer there) was thorough, kind, and gave daily updates. Great customer service—made a stressful, emotional situation easier.",
  },
  {
    name: "Marsha Becker",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Almost instant response—cleaning up water within a few hours. Tonya and Jerome were professional and knowledgeable.",
  },
  {
    name: "City View Apartments",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Prompt technicians for a resident job—professional and quick. We will use them again.",
  },
  {
    name: "DRR Greystar",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Fantastic job repairing a managed home—professional and high quality. Highly recommend.",
  },
  {
    name: "Dezirea Blumig",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "After a front-yard accident left shattered glass and damage, Sandra Teal handled everything—insurance, construction, and disaster relief. Glass cleaned before bringing home our rescue pup; window replaced quickly. Knowledgeable, professional, friendly.",
  },
  {
    name: "Katy Potter",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "After a house fire right before having a baby, ServiceMaster’s customer service made the long restoration process much easier.",
  },
  {
    name: "Mandy Richardson",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Used this company twice; extremely helpful, professional, and not out to nickel-and-dime. Fantastic!",
  },
  {
    name: "Jennifer Lockwood",
    location: "Spokane, WA",
    url: GOOGLE_REVIEWS_URL,
    content:
      "Office staff (Erika?) was understanding, knowledgeable, and resourceful—kept me organized and scheduled my emergency with ease. Huge thanks to Elli and Duncan for excellent work and attitudes. Thanks TEAM SERVICE MASTER Restore!",
  },
];

export default function Reviews() {
  return (
    <div className="testimonial-grid">
      {reviews.map((review, idx) => {
        const content = review.content ?? "";
        const name = review.name ?? "Google User";
        const location = review.location ? `, ${review.location}` : "";
        const url = review.url ?? "";

        // Stable-ish key using a slice of content + idx fallback
        const key = `${name}-${content.slice(0, 24)}-${idx}`;

        const NameLine = (
          <p className="name">
            — {name}
            {location}
          </p>
        );

        return (
          <div key={key} className="testimonial-card">
            <blockquote>
              <svg
                viewBox="0 0 24 24"
                data-use="/cms/svg/site/pk20m1f79ck.24.2507300935352.svg#review_quote"
              >
                <path
                  fill="#fdf056"
                  d="M23.441 6.136C20.367 7.691 18.843 10.367 18.255 11.643C21.733 12.203 23.007 14.504 23.007 16.559C23.007 19.328 20.709 21.598 17.882 21.598L17.882 21.597C15.21 21.597 12.197 19.637 11.886 15.313C11.575 11.082 14.775 5.326 21.454 2.589L21.919 2.402L24 5.857L23.441 6.136ZM21.455 3.863C15.584 6.447 12.817 11.487 13.067 15.219L13.067 15.219C13.317 18.766 15.739 20.385 17.882 20.385C20.056 20.385 21.826 18.641 21.826 16.527C21.826 15.5 21.392 13.011 17.354 12.701L16.609 12.639L16.859 11.923C16.92 11.735 18.287 7.723 22.357 5.359L21.455 3.863ZM6.389 11.643C9.868 12.203 11.142 14.504 11.142 16.559C11.11 19.328 8.812 21.598 6.017 21.598L6.017 21.597C3.344 21.597 0.331 19.637 0.021 15.313C-0.29 11.082 2.909 5.326 9.589 2.589L10.054 2.402L12.136 5.857L11.575 6.136C8.5 7.691 6.977 10.367 6.389 11.643ZM9.59 3.863C3.686 6.447 0.922 11.487 1.201 15.219L1.201 15.219C1.45 18.766 3.873 20.385 6.017 20.385C8.191 20.385 9.961 18.641 9.961 16.527C9.961 15.5 9.526 13.011 5.489 12.701L4.743 12.639L4.992 11.923C5.054 11.735 6.422 7.723 10.489 5.359L9.59 3.863Z"
                />
              </svg>
            </blockquote>

            <p className="quote">"{content}"</p>

            <div className="footer">
              <div className="stars" aria-label="5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>

              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener nofollow"
                  className="name-link"
                >
                  {NameLine}
                </a>
              ) : (
                NameLine
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
