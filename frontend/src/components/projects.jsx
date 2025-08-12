import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projectList = [
  {
    image: "/images/electric-car-charging-station.png",
    name: "EV-Bunk",
    features:
      "EV charging station booking, location tracking, admin panel, wallet, payment gateway.",
    link: "https://evbunk-git-main-vishnu-anils-projects.vercel.app/",
  },
  {
    image: "/images/shopping-bags-in-3d-illustration-png.webp",
    name: "E-commerce",
    features:
      "Product listing, filtering, cart, wishlist, orders, coupon system, payment integration.",
    link: "https://github.com/6234vishnu/timeaZone",
  },
  {
    image: "/images/hotelMangement.png",
    name: "Hotel Management",
    features:
      "Room booking, admin control, check-in/check-out, billing, reservation system.",
    link: "https://github.com/6234vishnu/GrandBudapest",
  },
  {
    image: "/images/pngtree-cruise-ship.png",
    name: "Cruise Ship Management",
    features:
      "Passenger and cabin management, staff and food services, onboard bookings for salons, hotels, movies, appointments, and event halls.",
    link: "https://github.com/6234vishnu/shipManagement",
  },
  {
    image: "/images/hospital-clinic-.webp",
    name: "Clinic Management",
    features:
      "Patient registration, appointment system, token generation, billing, medical history.",
    link: "https://github.com/6234vishnu/Clinic-Management",
  },
  {
    image: "/images/security-icon.webp",
    name: "Privacy-Preserving Location Query",
    features:
      "Searching special places and institutions without exposing the user location to get the distance",
    link: "https://github.com/6234vishnu/EPQL-privacy-preservingSystem",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold mb-4">My Projects</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Whether you have a website idea that needs to come to life or a
          website that requires a facelift, <br />
          I'm here to turn your digital dreams into reality.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-4"
            data-aos="fade-left"
          >
            <div className="h-40 bg-gray-100 flex items-center justify-center mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full max-h-40 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-700 text-sm mb-4">{project.features}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-black border border-black rounded-[25px] hover:bg-black hover:text-white transition-colors duration-300"
            >
              {project.link.includes("github.com") ? "GitHub" : "Live"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
