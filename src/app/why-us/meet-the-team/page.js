import MeetTheTeam from "./MeetTheTeam";

export const metadata = {
  title: "Meet the Team | ServiceMaster by Compass | Spokane & Coeur d’Alene",

  description:
    "Get to know the ServiceMaster by Compass leadership and restoration pros serving Spokane, Spokane Valley, and Coeur d’Alene. Experienced, IICRC-trained teams for water, fire, and mold restoration.",

  keywords: [
    "mold remediation and removal Spokane WA",
    "mold removal services Coeur d’Alene ID",
    "fire damage restoration Spokane WA",
    "mold abatement service Coeur d’Alene ID",
    "water damage clean up Spokane Valley WA",
    "fire damage restoration service near me Spokane",
    "restoration mold removal CDA Idaho",
    "fire damage restoration companies Spokane WA",
    "emergency flood cleanup Coeur d’Alene ID",
    "ServiceMaster team Spokane",
  ],

  alternates: {
    canonical: "https://smcfireandwater.com/why-us/meet-the-team",
  },

  openGraph: {
    title: "Meet the Team | ServiceMaster by Compass | Spokane & Coeur d’Alene",

    description:
      "Local leadership and restoration experts serving Spokane, Spokane Valley, and Coeur d’Alene.",

    url: "https://smcfireandwater.com/why-us/meet-the-team",

    siteName: "ServiceMaster by Compass",

    images: [
      {
        url: "https://smcfireandwater.com/sandra.jpeg",
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass team",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  twitter: {
    card: "summary_large_image",

    title: "Meet the Team | ServiceMaster by Compass | Spokane & Coeur d’Alene",

    description:
      "Get to know our local restoration professionals serving Spokane and Coeur d’Alene.",

    images: ["https://smcfireandwater.com/sandra.jpeg"],
  },
};

export default function Page() {
  return <MeetTheTeam />;
}
