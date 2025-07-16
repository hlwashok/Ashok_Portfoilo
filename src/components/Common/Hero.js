import { FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ActiveComponent from "./ActiveComponent";
import BackgroundCircles from "./BackgroundCircles";
import SliderText from "../Slider/SliderText";
import { useEffect, useState } from "react";
import ProfPic from "../../assets/yellow/profile picture (5).png";

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Hero = () => {
  const [sliderTextLoader, setSliderTextLoader] = useState(false);

  // Start slider text loader after delay
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderTextLoader(true);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Hide scroll arrow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const downArrow = document.querySelector(".down-arrow");
      if (window.scrollY >= 1200) {
        downArrow?.classList.add("hide-down-arrow");
      } else {
        downArrow?.classList.remove("hide-down-arrow");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-32 text-center z-10 overflow-hidden max-w-screen-xl mx-auto"
    >
      {/* 🔽 Image for mobile and medium screens (top) */}
      <div className="block xl:hidden mb-6 z-20">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-amber-500 shadow-lg">
          <img
            src={ProfPic}
            alt="Ashok Kumar Sahoo"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* 🖥️ Image for large screens (left side) */}
      <div className="absolute top-1/2 xl:left-20 left-6 transform -translate-y-1/2 hidden xl:block z-20">
        <div className="w-64 h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg">
          <img
            src={ProfPic}
            alt="Ashok Kumar Sahoo"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Background or slider */}
      {!sliderTextLoader && <BackgroundCircles />}
      {sliderTextLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SliderText />
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="text-sm pt-3 md:text-xl text-amber-500 font-bold z-10"
      >
        Frontend Developer
      </motion.h2>

      {/* Animated Name */}
      <motion.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="py-3 text-xl md:text-3xl lg:text-5xl font-bold leading-[1] z-10"
      >
        <span className="text-slate-700 dark:text-slate-200">
          <TypeAnimation
            sequence={["Welcome👋", 2000, "Ashok Kumar Sahoo"]}
            speed={30}
            wrapper="span"
            repeat={Infinity}
          />
        </span>
      </motion.div>

      {/* Active Status */}
      <motion.div className="z-10">
        <ActiveComponent />
      </motion.div>

      {/* Resume Section */}
      <div className="mt-12 text-center z-10">
        <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300 mb-2">
          Here is My Resume
        </p>
        <a
          href="https://drive.google.com/file/d/1MKTinybVKlomufgpxBe5VmLW9pyaZZt5/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition duration-300"
        >
          Download
        </a>
      </div>

      {/* Scroll Down Arrow */}
      <div className="mt-20 mb-0 down-arrow z-10">
        <FaArrowDown className="text-amber-500 text-2xl md:text-3xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
