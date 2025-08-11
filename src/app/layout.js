// src/app/layout.js
import "./styles.scss";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";

export const metadata = {
  title: "ServiceMaster by Compass",
  description: "Spokane and Coeur D'Alene based disaster restoration service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ External fonts go here, directly */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/rfq2kdc.css"
          precedence="default"
        />
      </head>
      <body>
        <Nav />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
