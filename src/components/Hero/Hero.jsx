import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper " id="Home">
      <div className="profile-container innerWidth">
        <div className="paddings innerWidth profile-innerContainer ">
          {/* hero left side */}
          <div className="hero-left innerWidth">
            <div className="hero-title primaryText">
              <h1>
                Full-Stack <br /> Developer/SDE
              </h1>
            </div>
            <div className="hero-intro ">
              <p className="secondaryText">
                Hi, I'm Harsh Kumar. As a highly skilled IT consultant and Full Stack Developer, I excel in technologies such as React, JavaScript, Git, Python, and more. With a track record of solving complex problems, Handling and designing databases in MongoDB, MySQL and excelling in Coding Platforms, I am well-equipped for a Software Development Engineer role.
              </p>
            </div>
            <div className="social-links">
              <a href="https://github.com/HarshUmpoxy" target="_blank">
                <img src="../src/assets/github.png" alt="github" width={35} />
              </a>
              <a href="https://www.linkedin.com/in/sai-manikanta-andey/" target="_blank">
                <img src="../src/assets/linkedin.png" alt="linkedin" width={35} />
              </a>
            </div>
            {/* tech stack beginning */}
            <div className=" innerWidth tech-stack">
              <div className="techstack-title ">
                <h4 className="innerWidth">
                  <span className="font-bold text-2xl">Stack </span>
                  <span>|</span>
                </h4>
              </div>
              <div className="tech-stack-icons">
                <img src="./src/assets/api.png" alt="html" width={50} />
                <img src="./src/assets/html.png" alt="html" width={50} />
                <img src="./src/assets/tailwindcss.png" alt="html" width={50} />
                <img src="./src/assets/react.png" alt="python" width={50} />
                <img src="./src/assets/js.png" alt="html" width={50} />
                <img src="./src/assets/python.png" alt="react" width={50} />
                <img src="./src/assets/linux.png" alt="html" width={50} />
                <img src="./src/assets/mongoDb.png" alt="html" width={50} />
                <img src="./src/assets/mySql.png" alt="css" width={50} />
                <img src="./src/assets/nodeJs.png" alt="js" width={50} />               
                
              </div>
            </div>
          </div>

          {/* hero right side */}
          <div className="hero-right innerWidth">
            <div className=" flexCenter image-container">
              <img src="./src/assets/myimg.jpg" alt="profilepic" width={600} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
