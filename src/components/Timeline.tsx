import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Full-Stack Developer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Oct 2024 – Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Developer (Self-Employed)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
            <p>
            Full Stack Development, Product Management, Entrepreneurship, Market Research, User Experience
            </p>
          </VerticalTimelineElement>

          {/* Software Development Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Nov 2024 – Feb 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Development Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              InterInter, Montreal, QC
            </h4>
            <p>
            Front-End Development, API Development, User Experience, UI Library Development
            </p>
          </VerticalTimelineElement>

          {/* Lead Software Developer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="May 2023 – Aug 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Lead Software Developer – Automatic Query Generator for ML
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              McGill University, Montreal, QC
            </h4>
            <p>
              Software Development, Algorithm Optimization, Team Leading, Data & AI, Product Management
            </p>
          </VerticalTimelineElement>

          {/* Artificial Intelligence Research Assistant */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Oct 2022 – Dec 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Artificial Intelligence Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              McGill University, Montreal, QC
            </h4>
            <p>
              AI, Transformer-based Model, Research
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
