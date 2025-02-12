import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Фото профиля */}
        <div className="profile-photo">
          <img src="/images/photo.png" alt="Profile" />
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
              <img src="/images/cooking.svg" alt="Cooking" />
              <span>cooking</span>
            </div>
            <div className="interest-item">
              <img src="/images/programming.svg" alt="Programming" />
              <span>programming</span>
            </div>
            <div className="interest-item">
              <img src="/images/boxing.svg" alt="Boxing" />
              <span>boxing</span>
            </div>
            <div className="interest-item">
              <img src="/images/rowing.svg" alt="Rowing" />
              <span>rowing</span>
            </div>
            <div className="interest-item">
              <img src="/images/courses.svg" alt="Courses" />
              <span>courses</span>
            </div>
            <div className="interest-item">
              <img src="/images/reading.svg" alt="Reading" />
              <span>reading</span>
            </div>
          </div>

          {/* Раздел "Навыки" */}
          <h2>Skills</h2>
          <div className="skills">
            <div className="skill-item">
              <img src="/images/skills.svg" alt="AutoDesk API" />
              <span>AutoDesk API</span>
            </div>
            <div className="skill-item">
              <img src="/images/skills.svg" alt="ArchiCAD API" />
              <span>ArchiCAD API</span>
            </div>
            <div className="skill-item">
              <img src="/images/skills.svg" alt="BIM" />
              <span>BIM</span>
            </div>
            <div className="skill-item">
              <img src="/images/skills.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <img src="/images/skills.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <img src="/images/skills.svg" alt="On Screen Takeoff API" />
              <span>On Screen Takeoff API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
