import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Фото профиля */}
        <div className="profile-photo">
          <img src="/path-to-your-photo.jpg" alt="Profile" />
        </div>

        {/* Текстовая информация */}
        <div className="about-text">
          <h1>Hello! I'm Kirill</h1>
          <p>
            I'm a software developer specializing in creating plugins for
            construction software. With over five years of experience in the AEC
            (Architecture, Engineering, and Construction) industry, I help
            professionals enhance their workflows by developing efficient and
            user-friendly automation tools.
          </p>

          {/* Раздел "Интересы" */}
          <h2>Interests</h2>
          <div className="interests">
            <div className="interest-item">
              <img src="/path-to-icon-cooking.png" alt="Cooking" />
              <span>cooking</span>
            </div>
            <div className="interest-item">
              <img src="/path-to-icon-programming.png" alt="Programming" />
              <span>programming</span>
            </div>
            <div className="interest-item">
              <img src="/path-to-icon-boxing.png" alt="Boxing" />
              <span>boxing</span>
            </div>
            <div className="interest-item">
              <img src="/path-to-icon-rowing.png" alt="Rowing" />
              <span>rowing</span>
            </div>
            <div className="interest-item">
              <img src="/path-to-icon-courses.png" alt="Courses" />
              <span>courses</span>
            </div>
            <div className="interest-item">
              <img src="/path-to-icon-reading.png" alt="Reading" />
              <span>reading</span>
            </div>
          </div>

          {/* Раздел "Навыки" */}
          <h2>Skills</h2>
          <div className="skills">
            <div className="skill-item">
              <img src="/path-to-icon-autodesk.png" alt="AutoDesk API" />
              <span>AutoDesk API</span>
            </div>
            <div className="skill-item">
              <img src="/path-to-icon-archicad.png" alt="ArchiCAD API" />
              <span>ArchiCAD API</span>
            </div>
            <div className="skill-item">
              <img src="/path-to-icon-bim.png" alt="BIM" />
              <span>BIM</span>
            </div>
            <div className="skill-item">
              <img src="/path-to-icon-python.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <img src="/path-to-icon-javascript.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <img src="/path-to-icon-takeoff.png" alt="On Screen Takeoff API" />
              <span>On Screen Takeoff API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
