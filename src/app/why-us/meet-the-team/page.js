"use client";

import { useEffect, useRef, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

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
