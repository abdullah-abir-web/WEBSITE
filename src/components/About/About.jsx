import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About ME</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src="/public/hero.png" width={250} height={250} alt="" /> */}
        </div>
        <div className="about-right">
          <div className="aboute-para">
            <p>
              {" "}
              I'm a skilled frontend developer with experience in JavaScript,
              and expertise in frameworks like React, Node.js, and Three.js.
            </p>
            <p>
              {" "}
              I'm a quick learner and collaborate closely with clients to create
              efficient, scalable, and user-friendly solutions that solve
              real-world problems. Let's work together to bring your ideas to
              life!
            </p>
          </div>
          <div className="about-skills ">
            <div className="about-skill">
              <p>HTML & CS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="aboute-achivements">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
