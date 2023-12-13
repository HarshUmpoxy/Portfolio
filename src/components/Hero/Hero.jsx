import React from "react";
import "./Hero.css";
import myimage from "../../assets/myimg.jpg"
import githubimg from "../../assets/github.png"
import linkedinimg from "../../assets/linkedin.png"
import twitterimg from "../../assets/twitter.png"
import apiimg from "../../assets/api.png"
import htmlimg from "../../assets/html.png"
import tailwindimg from "../../assets/tailwindcss.png"
import reactimg from "../../assets/react.png"
import jsimg from "../../assets/js.png"
import pythonimg from "../../assets/python.png"
import linuximg from "../../assets/linux.png"
import mongoDbimg from "../../assets/mongoDb.png"
import mysqlimg from "../../assets/mySql.png"
import nodeJsimg from "../../assets/nodeJs.png"

const Hero = () => {
  return (
    <section className="m-16" id="Home"  >
      <div>
        <div className="md:flex md:justify-between p-2 items-center md:px-18 profile-innerContainer">
          {/* hero left side */}
          <div >
            <div>
              <h1 className="text-[32px] font-bold md:pb-10">
                Full-Stack <br /> Developer/SDE
              </h1>
            </div>
            <div className="text-xl p-1">
              <p >
                Hi, I'm Harsh Kumar. As a highly skilled IT consultant and Full Stack Developer, I excel in technologies such as React, JavaScript, Git, Python, and more. With a track record of solving complex problems, Handling and designing databases in MongoDB, MySQL and excelling in Coding Platforms, I am well-equipped for a Software Development Engineer role.
              </p>
            </div>
            <div className="flex  justify-start px-2 pt-6 pb-6 mx-auto">
              <a href="https://github.com/HarshUmpoxy" target="_blank" className="px-2">
                <img src={githubimg} alt="github" width={35} />
              </a>
              <a href="https://www.linkedin.com/in/harsh-kumar-24318b207/" target="_blank" className="px-2">
                <img src={linkedinimg} alt="linkedin" width={35} />
              </a>
              <a href="https://twitter.com/HarshUmpoxy" target="_blank" className="px-2">
                <img src={twitterimg} alt="twitter" width={35} />
              </a>
            </div>
            {/* tech stack beginning */}
            <div className="flex flex-wrap justify-evenly">
              <div className="flex flex-start px-4">
                <h4>
                  <span className="font-bold text-2xl">Stack </span>
                  <span>|</span>
                </h4>
              </div>
              <div className="gap-6 flex flex-wrap">
                <img src={apiimg} alt="html" width={50} />
                <img src={htmlimg} alt="html" width={50} />
                <img src={tailwindimg} alt="html" width={50} />
                <img src={pythonimg} alt="python" width={50} />
                <img src={jsimg} alt="html" width={50} />
                <img src={reactimg} alt="react" width={50} />
                <img src={linuximg} alt="html" width={50} />
                <img src={mongoDbimg} alt="html" width={50} />
                <img src={mysqlimg} alt="css" width={50} />
                <img src={nodeJsimg} alt="js" width={50} />               
                
              </div>
            </div>
          </div>

          {/* hero right side */}
          <div>
            <div className="flex justify-center rounded-full overflow-hidden border-4 border-yellow-500">
              <img src={myimage} alt="profilepic" width={650} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
