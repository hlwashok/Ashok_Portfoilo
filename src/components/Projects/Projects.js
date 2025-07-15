import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./Motion";
import Featured from "./Featured";
import Section from "../Common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";
import BlinkitClone from "../../assets/yellow/Blinkit_clone.jpg";
import FlexUI from "../../assets/yellow/Flex_UI.jpg";
import DummyJSON from "../../assets/yellow/DummyJSON.png";

export const projectsData = [
  {
    id: 1,
    thumbnail: BlinkitClone,
    title: "Blinkit Clone Website ",
    description: "A fully responsive grocery delivery website inspired by Blinkit, featuring real-time cart, product filters, and localStorage integration.",
    live: "https://qlith-blikint-clone.vercel.app/",
    code: "https://github.com/Pradeep8118/Qlith--Blikint-Clone",
    tech: ["HTML, Tailwind CSS and Javascript"],
    featured: false,
  },
  {
    id: 2,
    thumbnail: DummyJSON,
    title: "DummyJSON Clone ",
    description: "A scroll-based landing page clone of DummyJSON with multiple interactive sections, API preview, and clean UI design using HTML, CSS, and JavaScript.",
    live: "https://github.com/hlwashok/MERN02M002/tree/main/june/week2/Task",
    code: "https://github.com/hlwashok/MERN02M002/tree/main/june/week2/Task",
    tech: ["HTML, CSS and Javascript"],
    featured: false,
  },
  {
    id: 3,
    thumbnail: FlexUI,
    title: "Flex UI ",
    description: "A simple and responsive webpage layout built using HTML and CSS Flexbox, showcasing clean structure and adaptable design.",
    live: "https://github.com/hlwashok/MERN02M002/blob/main/june/week1/day3",
    code: "https://github.com/hlwashok/MERN02M002/blob/main/june/week1/day3",
    tech: ["HTML and CSS"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
      <span>
        For More Projects and Other work visit my{" "}
        <a
          href="https://github.com/hlwashok"
          style={{ fontWeight: "bold", color: "red" }}
        >
          GitHub
        </a>
      </span>
    </Section>
  );
};

export default Projects;
