const About = ({ onScrollTo }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center text-center max-w-xl">
          <h1
            className="text-shadow-grey-50 font-bold text-2xl md:text-3xl mb-4"
            data-aos="fade-right"
          >
            Welcome to my Portfolio
          </h1>
          <p
            data-aos="fade-left"
            className="text-base text-gray-700 leading-relaxed mb-6 px-2"
          >
            I'm Vishnu Anil, a passionate web developer based in India.
            <br />
            Here, you'll get a glimpse of my journey in the world of web
            development,
            <br />
            where creativity meets functionality.
          </p>
          <button
            onClick={() => onScrollTo("contacts")}
            data-aos="fade-up"
            className="text-white bg-black px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Contact Me
          </button>
        </div>
        <div
          data-aos="fade-down"
          className="w-full max-w-md rounded-[32px] shadow-[0px_4px_12px_4px_rgba(0,0,0,0.1)]"
        >
          <img
            className="p-7 rounded-[42px] w-full"
            src="/images/portfolioImage.jpg"
            alt="User"
          />
        </div>
      </div>
    </>
  );
};

export default About;
