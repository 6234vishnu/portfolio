import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // animation happens only once
    });
  }, []);

  const skills = [
    {
      logo: "/images/web-development.svg",
      title: "Web Development:",
      description:
        "Designing seamless and engaging web experiences is my strength. With modern technologies and proven practices, I craft websites that attract, captivate, and keep users engaged.",
    },
    {
      logo: "/images/technologysSack.jpg",
      title: "Technology Stack",
      description:
        "I'm skilled in <strong>JavaScript</strong>, <strong>TypeScript</strong>, and the <strong>MERN stack</strong>. I also use <strong>Redux</strong> ,<strong>Figma</strong> , and work with databases to build user-friendly and efficient web applications.",
    },
    {
      logo: "/images/centric-consumer-icon-set-client-focus-.avif",
      title: "User Centric Design",
      description:
        "I focus on both  <strong>development</strong> and <strong>design</strong> . I build user interfaces that are easy to use and look great, making the user experience smooth and enjoyable.",
    },
    {
      logo: "/images/code-optimization-icon-set-web-development-coding-vector-symbol-black.avif",
      title: "Performance Optimization",
      description:
        "I ensure websites and applications run <strong>smoothly</strong>  and load <strong>fast</strong>  by optimizing code, images, and resources—enhancing both <strong>user experience</strong> and <strong>SEO...</strong>",
    },
    {
      logo: "/images/test.avif",
      title: "Testing and Quality Assurance",
      description:
        "I carefully test and fix bugs to make sure everything <strong>works smoothly and stays secure</strong> . I care about your peace of mind as much as your project’s performance.",
    },
    {
      logo: "/images/GitHub-Background-PNG-Clip-Art.png",
      title: "Version Control (Git)",
      description:
        "I use <strong>Git</strong> to manage code efficiently, collaborate smoothly, and keep projects well-organized.",
    },
  ];

  return (
    <>
      <h5
        className="font-bold text-lg text-gray-600 mb-2"
        data-aos="fade-right"
      >
        My Skills
      </h5>
      <h3
        className="text-3xl font-bold mb-4"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        What I Do
      </h3>
      <p
        className="text-center max-w-3xl text-base text-gray-700 leading-relaxed mb-8"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        I’m more than just a developer; I’m a digital creator. Building engaging
        online experiences isn’t just what I do, it’s what I’m passionate about.
        <br />
        Explore below to see how I can bring your vision to life.
      </p>

      <div>
        <div className="px-4 py-16 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 max-w-7xl">
            {skills.map((data, index) => (
              <div
                className="p-6  rounded-xl shadow-lg text-center"
                key={index}
                data-aos="fade-up" // AOS animation
              >
                <img
                  className="w-20 mx-auto mb-4"
                  src={data?.logo}
                  alt="logo"
                  data-aos="zoom-in" // Optional animation for image
                />
                <h3 className="font-bold mb-2">{data?.title}</h3>
                <p
                  className="text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
