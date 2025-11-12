"use client";
import { FaStar } from "react-icons/fa";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=ef29957d23e94eec&sxsrf=AE3TifO6YtXosAYGa-FdHehtl3-g_dkUYQ%3A1761758644793&q=ServiceMaster%20by%20Compass&stick=H4sIAAAAAAAAAONgU1I1qDA1sUw1tEg0NrAwNEyzMLK0MqhIS0lLMzJKsTQyTDS2TEtKXcQqEZxaVJaZnOqbWFySWqSQVKngnJ9bkFhcDAA1TSeeRAAAAA&mat=CaG_rLXPPIyZ&ved=2ahUKEwi8vc-x9smQAxXaEzQIHVoMMwMQrMcEegQILBAF#scso=_vU0CafKKFsOp0PEP1fvlgA4_81:263&mpd=~11064285247346360225/customers/reviews";

export default function LeadReviews() {
  const reviews = [
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
  ];

  return (
    <div className="lead-reviews">
      {reviews.map((r, i) => (
        <div key={i} className="testimonial-card">
          <div className="stars" aria-label="5 out of 5">
            {[...Array(5)].map((_, star) => (
              <FaStar key={star} className="star" />
            ))}
          </div>

          <p className="quote">“{r.content}”</p>

          <div className="footer">
            <a
              href={r.url || GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener nofollow"
              className="name-link"
            >
              — {r.name}
              {r.location && `, ${r.location}`}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
