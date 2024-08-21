import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History & Education</h1>
        <VerticalTimeline>
          {/* Career History */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2024 - Present"
            iconStyle={{ background: '#f78c84', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NeoXam, Tunisia</h4>
            <p>
              Developed a performance analysis and benchmarking dashboard for ADL to Python migration with AI integration.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#f78c84', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">BFI Group, Tunisia</h4>
            <p>
              Developed a model for extracting and classifying financial data, reducing report generation time from 1 hour to 2 minutes. Deployed a web solution.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: '#f78c84', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Technician Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tunisie Télécom, Tunisia</h4>
            <p>
              Provided technical support, resolved hardware and software issues, gaining hands-on experience in telecommunications.
            </p>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - Present"
            iconStyle={{ background: '#f78c84', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering in Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Private Higher School of Engineering and Technology (ESPRIT), Tunisia</h4>
            <p>
              Focused on data analysis, machine learning, and project management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2022"
            iconStyle={{ background: '#f78c84', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Preparatory Cycle in Engineering Studies</h3>
            <h4 className="vertical-timeline-element-subtitle">Preparatory Institute for Engineering Studies, Tunisia</h4>
            <p>
              Completed foundational courses in engineering studies, preparing for specialized education in data science.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020"
            iconStyle={{ background: '#f78c84', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Baccalaureate in Experimental Sciences</h3>
            <h4 className="vertical-timeline-element-subtitle">Ahmed Amara High School, Tunisia</h4>
            <p>
              Specialized in experimental sciences, laying the groundwork for future studies in engineering.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
