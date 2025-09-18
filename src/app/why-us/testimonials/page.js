import { FaStar } from "react-icons/fa";
// imports

import JsonLd from "../../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/why-us/testimonials";
const title =
  "ServiceMaster by Compass Reviews | Spokane & Coeur d’Alene Restoration";
const description =
  "Read real customer reviews for water damage cleanup, fire & smoke restoration, and mold removal in Spokane, Spokane Valley & Coeur d’Alene. 24/7 trusted service.";
// app/why-us/testimonials/page.tsx

export const metadata = {
  title:
    "ServiceMaster by Compass Reviews | Spokane & Coeur d’Alene Restoration",
  description:
    "Read real customer reviews for water damage cleanup, fire & smoke restoration, and mold removal in Spokane, Spokane Valley & Coeur d’Alene. 24/7 trusted service.",
  keywords: [
    "fire damage restoration companies Spokane WA",
    "water damage clean up Spokane Valley WA",
    "mold remediation and removal Spokane WA",
    "mold removal services Coeur d’Alene ID",
    "mold abatement service Coeur d’Alene ID",
    "emergency flood cleanup Coeur d’Alene ID",
    "fire damage restoration service near me Spokane",
    "restoration mold removal CDA Idaho",
    "ServiceMaster reviews Spokane",
  ],
  alternates: {
    canonical: "https://smcfireandwater.com/why-us/testimonials",
  },
  openGraph: {
    title:
      "Customer Reviews — ServiceMaster by Compass | Spokane & Coeur d’Alene",
    description:
      "Read real customer reviews for water damage cleanup, fire & smoke restoration, and mold removal. 24/7 trusted service in Spokane & CDA.",
    url: "https://smcfireandwater.com/why-us/testimonials",
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass — Reviews",
      },
    ],
    type: "article",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ServiceMaster by Compass Reviews | Spokane & Coeur d’Alene Restoration",
    description:
      "Real customer feedback on water, fire & mold restoration. 24/7 trusted service.",
    images: ["https://smcfireandwater.com/sub-banner.jpg"],
  },
};

// Build review entities from your array (static here for SSR/SEO)
const reviewEntities = [
  {
    "@type": "Review",
    reviewBody:
      "We've used this company twice and both times I cannot express how helpful they were. Professional, knowledgeable, and didn’t seem at all out to get every nickel and dime. Just fantastic!",
    name: "Just fantastic!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Mandy R." },
  },
  {
    "@type": "Review",
    reviewBody:
      "Staff (Erika?) was sincerely understanding, knowledgeable, and resourceful. She kept me organized and helped schedule my emergency situation with ease. Huge thanks to Elli and Duncan too—great work and even better attitudes.",
    name: "Thanks!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Jennifer L." },
  },
  {
    "@type": "Review",
    reviewBody:
      "I was very pleased with the work that was done. The guys were respectful and answered all my questions. I’d highly recommend Compass for any job—they were efficient and very pleasant to have in my home.",
    name: "Very respectful",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "J. Gregory" },
  },
];

// JSON-LD
const jsonLd = [
  // WebPage
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Customer Reviews",
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    description,
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/sub-banner.jpg",
      width: 1200,
      height: 630,
    },
  },
  // Breadcrumb
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
        name: "Testimonials",
        item: canonical,
      },
    ],
  },
  // LocalBusiness with aggregateRating + reviews (eligible for review snippets)
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    image: "https://smcfireandwater.com/logo.png",
    logo: "https://smcfireandwater.com/logo.png",
    telephone: "+1-509-646-7488",
    areaServed: ["Spokane WA", "Spokane Valley WA", "Coeur d’Alene ID"],
    sameAs: [
      "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
      "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
      "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
      "https://www.instagram.com/servicemaster_by_compass",
      "https://g.co/kgs/PCuFHgp",
      "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
      bestRating: "5",
    },
    review: reviewEntities,
  },
  // Optional: ItemList of individual reviews (helps discovery)
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Customer Reviews",
    itemListElement: reviewEntities.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: r,
    })),
  },
];

const reviews = [
  {
    title: "Just fantastic!",
    content:
      "We've used this company twice and both times I cannot express how helpful they were. Professional, knowledgeable, and didn’t seem at all out to get every nickel and dime. Just fantastic!",
    name: "Mandy R.",
    location: "Spokane",
  },
  {
    title: "Thanks!",
    content:
      "Staff (Erika?) was sincerely understanding, knowledgeable, and resourceful. She kept me organized and helped schedule my emergency situation with ease. Huge thanks to Elli and Duncan too—great work and even better attitudes. Thank you, TEAM SERVICEMASTER Restore!!!!",
    name: "Jennifer L.",
    location: "Spokane Valley",
  },
  {
    title: "Very respectful",
    content:
      "I was very pleased with the work that was done. The guys were respectful and answered all my questions. I’d highly recommend Compass for any job—they were efficient and very pleasant to have in my home.",
    name: "J. Gregory",
    location: "Spokane",
  },
];

export default function Testimonials() {
  return (
    <div className="home-container">
      <JsonLd data={jsonLd} />
      <div className="home-section">
        <div className="column">
          <h1>Reviews for ServiceMaster by Compass from people like you</h1>
          <button className="btn">
            <a href="https://g.page/r/Cb6foyHZIv_9EBE/review">Leave a review</a>
          </button>

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
                <h2>{review.title}</h2>
                <p className="quote">"{review.content}"</p>
                <div className="footer">
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <p className="name">
                    — {review.name}, {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
