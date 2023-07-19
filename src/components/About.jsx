import React, { Fragment } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I specialize in React.js, JavaScript, Next.js, and TypeScript for
        front-end web development. With React.js, I have a strong command in
        creating dynamic user interfaces and building robust single-page
        applications. My proficiency in JavaScript allows me to utilize the
        latest features and coding standards, ensuring efficient and clean code.
        I am experienced in using Next.js, a powerful React framework, to
        develop scalable and SEO-friendly applications. Additionally, I have
        expertise in TypeScript, which enhances code quality and provides static
        typing for increased reliability and maintainability. This combination
        of skills enables me to deliver high-performance web solutions with a
        focus on user experience and scalability.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(About, "about");
