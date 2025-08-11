"use client";
import Image from "next/image";

const services = [
  {
    title: "Water Damage",
    image: "/gridone.jpg",
    link: "/residential/water-damage",
  },
  {
    title: "Fire and Smoke Damage",
    image: "/gridtwo.jpg",
    link: "/residential/fire-and-smoke",
  },
  { title: "Mold", image: "/gridthree.jpg", link: "/residential/mold" },
  {
    title: "Weather Damage",
    image: "/gridfour.jpg",
    link: "/residential/weather-damage",
  },
  {
    title: "Odor Damage",
    image: "/gridfive.jpg",
    link: "/residential/odor-damage",
  },
  {
    title: "Specialty Services",
    image: "/gridsix.jpg",
    link: "/residential/specialty-services",
  },
];

export default function HomeGrid() {
  return (
    <div className="gridContainer">
      {services.map((service, index) => (
        <a href={service.link} key={index} className="card">
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            quality={80}
            priority={index === 0} // prioritize first image load
          />
          <div className="overlay">
            <h3>{service.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}
