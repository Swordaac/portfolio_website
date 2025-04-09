import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mocknew02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/copy04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://dislmcgill.github.io/pandas-query-generator/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://dislmcgill.github.io/pandas-query-generator/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Synthetic Pandas Query Generator 🐼</h2>
          </a>
          <p>
            Led a development team to design and implement a synthetic Pandas
            query generator that automated data generation processes and
            delivered an 80% boost in operational efficiency.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.loom.com/share/9f4d752581e74058bd995e7638810d1a"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.loom.com/share/9f4d752581e74058bd995e7638810d1a"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Student Networking Platform</h2>
          </a>
          <p>
            Architected and developed a dynamic student networking platform
            using React, Express.js, NextJS, and MongoDB—leveraging user surveys
            and market research to optimize features and enhance connections
            between students and company representatives at networking events.
          </p>
        </div>
        <div className="project">
          <a
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
          >
            <h2>E-commerce Platform Onboarding Workflow</h2>
          </a>
          <p>
            Engineered a progressive onboarding workflow with ShadCN UI and
            React Router that streamlined the user experience and drove a 10%
            increase in paid user conversions.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.overleaf.com/read/whxhrqpfjjqh#7d4eee"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.overleaf.com/read/whxhrqpfjjqh#7d4eee"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Transformer-based Model on Emotion Detection</h2>
          </a>
          <p>
            Authored a research paper that fine-tuned a pre-trained BERT
            transformer model to capture nuanced emotions in tweets and
            developed a traditional Naïve Bayes baseline for comparative
            analysis, achieving consistent cross-validation test accuracies near
            94%.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
