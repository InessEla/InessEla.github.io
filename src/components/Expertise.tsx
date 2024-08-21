import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faAngular } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "JavaScript",
    "R",
    "C",
    "C++",
    "C#",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "SciPy",
    "NumPy",
    "Pandas",
    "Scikit-Learn"
];

const labelsSecond = [
    "SQL",
    "PL/SQL",
    "MongoDB",
    "MySQL",
    "NoSQL",
    "Spark",
    "Hadoop",
    "Git",
    "GitHub",
    "GitLab",
    "Angular",
    "Flask",
    "Power BI"
];

const labelsThird = [
    "Deep Learning",
    "Natural Language Processing",
    "Optical Character Recognition",
    "Data Analysis",
    "Geospatial Object Detection",
    "Anomaly Detection",
    "Smart City Traffic Forecasting",
    "Data Visualization",
    "CRISP-DM"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x"/>
                        <h3>Data Science & Machine Learning</h3>
                        <p>I have worked extensively in data science and machine learning, developing models and solutions using Python and related libraries. My experience includes deep learning, NLP, and AI integration for complex projects.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faAngular} size="3x"/>
                        <h3>Web Development & Big Data</h3>
                        <p>I have a strong background in web development using Angular and Flask, combined with big data technologies such as Spark and Hadoop. My projects often involve complex data processing and database management.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faJs} size="3x"/>
                        <h3>AI & Advanced Analytics</h3>
                        <p>I specialize in advanced analytics, leveraging AI models to provide actionable insights. My experience includes building models for geospatial detection, traffic forecasting, and anomaly detection using state-of-the-art techniques.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
