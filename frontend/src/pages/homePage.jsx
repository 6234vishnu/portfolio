import NavBar from "../components/navBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "../components/skills";
import Projects from "../components/projects";
import ExpirenceAndCertificates from "../components/expirenceAndCertificates";
import Contacts from "../components/contacts";
import About from "../components/about";

const HomePage = () => {

  const handleScroll=(id)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"})
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <NavBar onScrollTo={handleScroll} />
      <div className="bg-white text-black w-screen">
        <section id="about" className="bg-white text-black w-screen px-4 py-10 shadow-lg">
          <About onScrollTo={handleScroll}/>
        </section>

        <section id="skills" className="bg-white text-black w-screen flex flex-col items-center justify-center py-16 px-4">
           <Skills />
        </section>

        <section id="projects" className="px-4">
          <Projects />
        </section>

        <section id="certificates">
          <ExpirenceAndCertificates />
        </section>

        <section id="contacts">
          <Contacts />
        </section>
      </div>
    </>
  );
};

export default HomePage;
