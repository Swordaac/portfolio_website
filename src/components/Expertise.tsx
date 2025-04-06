import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/Expertise.scss";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"; // New icon import
import Chip from "@mui/material/Chip";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "Snowflake",
  "Pandas",
  "Selenium",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React and Flask. I have a strong
              proficiency in the SDLC process and frontend + backend
              development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faLightbulb} size="3x" />
            <h3>Product Management &amp; Entrepreneurship</h3>
            <p>
              I am keen on understanding user pain points and always work back
              from the real problems users face, creating best-quality solutions
              to improve user experience. I am passionate about bringing cool
              ideas to life and committed to serving the community.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
              {[
                "Agile",
                "Product Management",
                "User Survey",
                "Product Case Study",
                "Market Research",
              ].map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>

            <p>
              Stay relevant in the market by leveraging the latest AI models in
              my projects. I have built transformer-based models and I am actively
              exploring how to leverage GenAI to tackle real-world challenges,
              such as reducing workload and burnout among doctors.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
