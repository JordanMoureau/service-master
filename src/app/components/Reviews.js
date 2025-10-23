"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const fallbackReviews = [
    {
      content:
        "We've used this company twice and both times I cannot express how helpful they were. Professional, knowledgeable, and didn’t seem at all out to get every nickel and dime. Just fantastic!",
      name: "Mandy R.",
      location: "Spokane",
    },
    {
      content:
        "Staff (Erika?) was sincerely understanding, knowledgeable, and resourceful. She kept me organized and helped schedule my emergency situation with ease. Huge thanks to Elli and Duncan too—great work and even better attitudes. Thank you, TEAM SERVICEMASTER Restore!!!!",
      name: "Jennifer L.",
      location: "Spokane Valley",
    },
    {
      content:
        "I was very pleased with the work that was done. The guys were respectful and answered all my questions. I’d highly recommend Compass for any job—they were efficient and very pleasant to have in my home.",
      name: "J. Gregory",
      location: "Spokane",
    },
  ];

  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        if (!res.ok) throw new Error("Bad response");
        const data = await res.json();

        // Filter out bad reviews (rating < 4, empty text)
        const filtered = (data.reviews || []).filter(
          (r) => r.rating >= 4 && r.text?.trim()
        );

        if (filtered.length) {
          setReviews(
            filtered.map((r) => ({
              content: r.text,
              name: r.author,
              location: r.location || "",
            }))
          );
        }
      } catch (e) {
        console.warn("Falling back to hardcoded reviews:", e.message);
        // fallbackReviews already set in state
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="testimonial-grid">
      {reviews.map((review, i) => (
        <div key={i} className="testimonial-card">
          <blockquote>
            <svg
              viewBox="0 0 24 24"
              data-use="/cms/svg/site/pk20m1f79ck.24.2507300935352.svg#review_quote"
            >
              <path d="M23.441 6.136C20.367 7.691 18.843 10.367 18.255 11.643C21.733 12.203 23.007 14.504 23.007 16.559C23.007 19.328 20.709 21.598 17.882 21.598L17.882 21.597C15.21 21.597 12.197 19.637 11.886 15.313C11.575 11.082 14.775 5.326 21.454 2.589L21.919 2.402L24 5.857L23.441 6.136ZM21.455 3.863C15.584 6.447 12.817 11.487 13.067 15.219L13.067 15.219C13.317 18.766 15.739 20.385 17.882 20.385C20.056 20.385 21.826 18.641 21.826 16.527C21.826 15.5 21.392 13.011 17.354 12.701L16.609 12.639L16.859 11.923C16.92 11.735 18.287 7.723 22.357 5.359L21.455 3.863ZM6.389 11.643C9.868 12.203 11.142 14.504 11.142 16.559C11.11 19.328 8.812 21.598 6.017 21.598L6.017 21.597C3.344 21.597 0.331 19.637 0.021 15.313C-0.29 11.082 2.909 5.326 9.589 2.589L10.054 2.402L12.136 5.857L11.575 6.136C8.5 7.691 6.977 10.367 6.389 11.643ZM9.59 3.863C3.686 6.447 0.922 11.487 1.201 15.219L1.201 15.219C1.45 18.766 3.873 20.385 6.017 20.385C8.191 20.385 9.961 18.641 9.961 16.527C9.961 15.5 9.526 13.011 5.489 12.701L4.743 12.639L4.992 11.923C5.054 11.735 6.422 7.723 10.489 5.359L9.59 3.863Z"></path>
            </svg>
          </blockquote>
          <p className="quote">"{review.content}"</p>
          <div className="footer">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <p className="name">
              — {review.name}
              {review.location ? `, ${review.location}` : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
