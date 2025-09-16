"use client";

import { useEffect, useRef, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
// imports
import { NextSeo } from "next-seo";
import JsonLd from "../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/why-us/meet-the-team";
const title =
  "Meet the Team | ServiceMaster by Compass | Spokane & Coeur d’Alene";
const description =
  "Get to know the ServiceMaster by Compass leadership and restoration pros serving Spokane, Spokane Valley & Coeur d’Alene. Experienced, IICRC-trained teams for water, fire & mold.";

const seo = {
  title,
  description,
  canonical,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "fire damage restoration companies Spokane WA, water damage clean up Spokane Valley WA, mold remediation and removal Spokane WA, mold removal services Coeur d’Alene ID, mold abatement service Coeur d’Alene ID, emergency flood cleanup Coeur d’Alene ID, fire damage restoration service near me Spokane, restoration mold removal CDA Idaho, servicemaster team Spokane",
    },
  ],
  openGraph: {
    url: canonical,
    siteName: "ServiceMaster by Compass",
    type: "article",
    title: "Meet the Team — ServiceMaster by Compass | Spokane & Coeur d’Alene",
    description,
    images: [
      {
        url: "https://smcfireandwater.com/sandra.jpeg",
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass team",
      },
    ],
  },
  twitter: { cardType: "summary_large_image" },
  robotsProps: {
    nosnippet: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

// JSON-LD (WebPage + Breadcrumbs + Organization + People)
const jsonLd = [
  // WebPage
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Meet the Team",
    description,
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/sandra.jpeg",
      width: 1200,
      height: 630,
    },
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
  },
  // Breadcrumbs
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smcfireandwater.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Why Us",
        item: "https://smcfireandwater.com/why-us",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Meet the Team",
        item: canonical,
      },
    ],
  },
  // Organization (anchor for worksFor)
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    logo: "https://smcfireandwater.com/logo.png",
    sameAs: [
      "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
      "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
      "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
      "https://www.instagram.com/servicemaster_by_compass",
      "https://g.co/kgs/PCuFHgp",
      "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
    ],
    areaServed: [
      { "@type": "Place", name: "Spokane, WA" },
      { "@type": "Place", name: "Spokane Valley, WA" },
      { "@type": "Place", name: "Coeur d’Alene, ID" },
    ],
  },
  // People (Persons) + an ItemList wrapper for topical discovery
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Team Members",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Person",
          name: "Sandra Teal",
          jobTitle: "Business Development Manager",
          image: "https://smcfireandwater.com/sandra.jpeg",
          worksFor: { "@id": "https://smcfireandwater.com/#organization" },
          description:
            "Business Development Manager serving Spokane & Coeur d’Alene; passionate about guiding clients through restoration.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Person",
          name: "Doug Paul",
          jobTitle: "General Manager",
          image: "https://smcfireandwater.com/doug.jpeg",
          worksFor: { "@id": "https://smcfireandwater.com/#organization" },
          description:
            "General Manager with deep expertise in water mitigation and mold remediation.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Person",
          name: "Jamie Streeter",
          jobTitle: "Fire Cleaning/Contents Department Manager",
          image: "https://smcfireandwater.com/jamie.jpeg",
          worksFor: { "@id": "https://smcfireandwater.com/#organization" },
          description:
            "Leads fire cleaning & contents; supports clients through difficult post-fire recoveries.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Person",
          name: "Fred Anderson",
          jobTitle: "President",
          image: "https://smcfireandwater.com/fred.jpeg",
          worksFor: { "@id": "https://smcfireandwater.com/#organization" },
          description:
            "President focused on community partnerships and outcomes for policyholders and businesses.",
        },
      },
    ],
  },
];

const meettheteam = [
  {
    name: "Sandra Teal",
    title: "Business Development Manager",
    bioone:
      "Sandra is the Business Development Manager for ServiceMaster by Compass, serving the Spokane and Coeur d'Alene area. She has built a career in the disaster restoration industry because she is passionate about helping people get through tough times and a facilitating successful outcomes.",
    biotwo:
      "When she's not helping our clients or networking with our referral partners, she'll be found with her sons (one human and one Yorkie) on a road trip in her cool conversion van, enjoying being by the water somewhere, and/or spending time with friends and family. ",
    image: "/sandra.jpeg",
  },
  {
    name: "Doug Paul",
    title: "General Manager",
    bioone:
      "Doug is leader of the pack... literally. He's our fearless leader, coach, teacher, mentor, and voice of reason. He's incredibly knowledgeable and experienced in every facet of water mitigation and mold remediation. ",
    biotwo:
      "Doug and his wife have many children and live in Post Falls Idaho where they enjoy investing in their community through their church and other means. Doug's hobbies include helping his children with projects, family adventures, and spending time with his wife. ",
    image: "/doug.jpeg",
  },
  {
    name: "Jamie Streeter",
    title: "Fire Cleaning/Contents Department Manager",
    bioone:
      "Jamie is our Fire Cleaning and Contents Department Manager. She has a great team that works with her and they take great care of our clients during some of their most difficult times following a fire.",
    biotwo:
      "Jamie and her husband have three children and live in Post Falls, Idaho. When Jamie isn't taking care of our clients, she'll be spending time with her family and friends doing something awesome. She's an automobile enthusiast and has a classic suburban she loves. ",
    image: "/jamie.jpeg",
  },
  {
    name: "Fred Anderson",
    title: "President",
    bioone:
      "Fred is very involved in the everyday operations of ServiceMaster by Compass and works diligently with insurance adjusters, agents, and countless others within our community to provide the best possible outcomes following a property damage. He has a huge heart for those who're struggling with loss & that's a big part of why he and his business partner, Steve Young, chose to build ServiceMaster by Compass. He's an exceptional leader and great to work for. .",
    biotwo:
      "JWhen Fred isn't helping us help everyone else, he's spending time with his wife and children. He enjoys doing meaningful and memorable family adventures and he finds great joy in his family. He's an exceptional friend to all of us and he's the reason.",
    image: "/fred.jpeg",
  },
];

export default function MeetTheTeam() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null); // {name, title, bioone, biotwo, image}

  const [closing, setClosing] = useState(false);
  const closeBtnRef = useRef(null);

  const openModal = (member) => {
    setActive(member);
    setClosing(false);
    setOpen(true);
  };
  const closeModal = () => {
    setClosing(true);
    // allow exit animation to finish before unmount
    setTimeout(() => {
      setOpen(false);
      setActive(null);
      setClosing(false);
    }, 260); // keep in sync with CSS durations
  };

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus close button when modal opens (simple focus management)
  useEffect(() => {
    if (open && closeBtnRef.current) closeBtnRef.current.focus();
  }, [open]);

  return (
    <div className="home-container">
      <NextSeo {...seo} />
      <JsonLd data={jsonLd} />
      <div className="home-section">
        <div className="column">
          <h1>Meet Our Spokane & Coeur d'Alene Team</h1>

          <div className="meet-the-team">
            {meettheteam.map((team, i) => (
              <div key={i} className="bio-card">
                <div className="meet-image">
                  <img
                    src={team.image}
                    onClick={() => openModal(team)}
                    aria-haspopup="dialog"
                    aria-controls="team-modal"
                  />
                </div>
                <h2>{team.name}</h2>
                <p>{team.title}</p>
                <div className="read-bio">
                  <button
                    onClick={() => openModal(team)}
                    aria-haspopup="dialog"
                    aria-controls="team-modal"
                  >
                    Read Bio{" "}
                  </button>
                  <IoIosArrowForward />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      {open && active && (
        <div
          className={`modal-backdrop ${closing ? "fade-out" : "fade-in"}`}
          onClick={(e) => {
            if (e.target.classList.contains("modal-backdrop")) closeModal();
          }}
        >
          <div
            id="team-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-title"
            className={`modal ${closing ? "slide-out" : "slide-in"}`}
          >
            <button
              ref={closeBtnRef}
              className="modal-close"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              ×
            </button>

            <div className="modal-media">
              <img src={active.image} alt={active.name} />
            </div>

            <div className="modal-body">
              <h2 id="team-modal-title">{active.name}</h2>
              <p className="modal-role">{active.title}</p>
              <p>{active.bioone}</p>
              <p>{active.biotwo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
