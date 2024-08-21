import React from "react";
import mock01 from '../assets/images/mock01.jpeg';
import mock02 from '../assets/images/mock02.jpg';
import mock03 from '../assets/images/mock03.jpeg';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.jpeg';
import image1 from '../assets/images/image1.jpg';  // Importing the image to be used after the video
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            {/* Certificates Section */}
            <h1>Certificates</h1>
            <div className="projects-grid">
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                </div>
            </div>

            {/* Extra Activities Section */}
            <h1>Activities</h1>
            <div className="activities-container">
                <div className="activity">
                    <h3>BALS DES PROJETS</h3>
                    <div className="activity-content">
                        <div className="video-container">
                            <video width="100%" controls>
                                <source src={require('../assets/video/firmai.mp4')} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="images-container">
                            <img src={image1} className="activity-image" alt="Bals des Projets" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
