import React from "react";
import {
  FaDownload,
  FaQuestion,
  FaCoffee,
  FaTools,
  FaRegQuestionCircle,
  FaBookReader,
  FaReact,
} from "react-icons/fa";
import { FiCoffee, FiMap, FiUserPlus } from "react-icons/fi";
import clsx from "clsx";
import styles from "./styles.module.css";
import mainstyles from "../../pages/index.module.css";
import Link from "@docusaurus/Link";

const data = [
  {
    title: "Key Features",
    icon: <FiMap className="question-icon" />,
    link: "/introduction#features",
    isExternal: false,
    description: (
      <>
        Offering extensive support for various download clients and actions,
        autobrr is equipped for IRC, RSS and Usenet, ensuring a broad range of
        functionality.
      </>
    ),
  },
  {
    title: "Easy Installation",
    icon: <FiCoffee className="question-icon" />,
    link: "/installation/linux",
    isExternal: false,
    description: (
      <>
        autobrr supports multiple platforms, including Swizzin, Saltbox,
        QuickBox, shared seedboxes, Docker Compose, and Windows, ensuring easy
        setup across different environments.{" "}
      </>
    ),
  },
  {
    title: "User-Friendly Interface",
    icon: <FiUserPlus className="question-icon" />,
    isExternal: false,
    description: (
      <>
        The autobrr interface is designed for ease of use, offering both dark
        and light themes for a comfortable user experience.
      </>
    ),
  },
  {
    title: "Built with Go and React",
    icon: <FaReact className="question-icon" />,
    link: "https://github.com/autobrr/autobrr",
    isExternal: true,
    description: (
      <>
        autobrr is developed using the efficient and powerful Go programming
        language for backend operations, combined with React for a dynamic and
        responsive front-end user experience.
      </>
    ),
  },
];

const Question = ({ title, description, icon, link, isExternal }) => {
  const Content = (
    <div className={styles.question}>
      <h3 className={styles.title}>
        {icon} {title}
      </h3>
      <p>{description}</p>
    </div>
  );

  if (link) {
    if (isExternal) {
      return (
        <a
          href={link}
          className={styles.questionLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Content}
        </a>
      );
    } else {
      return (
        <Link to={link} className={styles.questionLink}>
          {Content}
        </Link>
      );
    }
  }

  return Content;
};

function About() {
  return (
    <section id="faq" className={clsx(styles.faq, mainstyles.pattern)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data[0] && <Question {...data[0]} />}
            {data[1] && <Question {...data[1]} />}
          </div>
          <div className="col col--6">
            {data[2] && <Question {...data[2]} />}
            {data[3] && <Question {...data[3]} />}
          </div>
          <div className="col col--6">
            {data[4] && <Question {...data[4]} />}
          </div>
          <div className="col col--6">
            {data[5] && <Question {...data[5]} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;