"use client";
import Image from "next/image";

const services = [
  {
    title: "Water Damage",
    image: "/gridone.jpg",
    reslink: "/residential/specialty-services",
    comlink: "/commercial/specialty-services",
  },
  {
    title: "Fire and Smoke Damage",
    image: "/gridtwo.jpg",
    reslink: "/residential/specialty-services",
    comlink: "/commercial/specialty-services",
  },
  {
    title: "Mold",
    image: "/gridthree.jpg",
    reslink: "/residential/specialty-services",
  },
  {
    title: "Weather Damage",
    image: "/gridfour.jpg",
    reslink: "/residential/specialty-services",
    comlink: "/commercial/specialty-services",
  },
  {
    title: "Odor Damage",
    image: "/gridfive.jpg",
    reslink: "/residential/specialty-services",
    comlink: "/commercial/specialty-services",
  },
  {
    title: "Specialty Services",
    image: "/gridsix.jpg",
    reslink: "/residential/specialty-services",
    comlink: "/commercial/specialty-services",
  },
];

export default function HomeGrid() {
  return (
    <div className="grid-box">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority={index === 0}
            className="card-img"
          />
          <div className="inner-box">
            <div className="title">
              <h3>{service.title}</h3>
            </div>

            <div className="grid-hover">
              <button className="grid-link">
                {service.reslink && (
                  <a className="btn" href={service.reslink}>
                    Residential
                  </a>
                )}
              </button>
              <button className="grid-link">
                {service.comlink && (
                  <a className="btn" href={service.comlink}>
                    Commercial
                  </a>
                )}
              </button>

              <div className="grid-line"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
