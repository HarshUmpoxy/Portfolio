import React from "react";
import "./ProjectPage.css";
import { FaGithub } from "react-icons/fa";
import {HiExternalLink} from "react-icons/hi"
import socialechoimg from "../../assets/SocialEcho.jpg"
import attendancetrackerimg from "../../assets/AttendanceTracker.jpg"
import smartshopimg from "../../assets/smartShop.png"

const Project = () => {
  const projectData = [
    {
      id: 1,
      title: "SocialEcho",
      image: socialechoimg,

      projectDescription:
        "A blogging application made using ReactJs, tailwind Css as front-end and Appwrite as a backend service. Extensive scalable application with micro-components has been hosted on Vercel",
      stack: [
        { id: 1, tech: "React" },
        { id: 2, tech: "Tailwind CSS" },
        { id: 2, tech: "Appwrite" },
      ],
      liveUrl: "https://social-echo-harshumpoxy.vercel.app/",
      githubUrl:
        "https://github.com/HarshUmpoxy/SocialEcho",
    },

    {
      id: 2,
      title: "Attendance Tracking System",
      image: attendancetrackerimg,
      projectDescription:
        "Built a website using ReactJs that tracks the attendance of students. Proper CRUD operations have been implemented and each student can track his/her login after successful login. Authentication, middleware, jws token, expiration of login and Google GeoLocation API has been integrated in the project.",
      stack: [
        { id: 1, tech: "MongoDB" },
        { id: 2, tech: "CSS" },
        { id: 2, tech: "NodeJs" },
        { id: 2, tech: "ReactJs" },
      ],
      liveUrl: "",
      githubUrl:
        "https://github.com/HarshUmpoxy/MERNattendance-cvTracker",
    },
    {
      id: 3,
      title: "Smart Shop Recommender",
      image: smartshopimg,
      projectDescription:
        "Integrated Smart Shop Recommender, merging Fashion, Electronics, and Books systems. Utilized collaborative and content-based filtering, plus TensorFlow for image analysis, achieving personalized recommendations. Expert data preprocessing ensured seamless handling of extensive datasets.",
      stack: [
        { id: 1, tech: "Flask" },
        { id: 2, tech: "MySQL" },
        { id: 2, tech: "Data Preprocessing" },
        { id: 2, tech: "ML" },
      ],
      liveUrl: "",
      githubUrl: "https://github.com/HarshUmpoxy/SmartShopRecommender",
    },
  ];
  return (
    <section className="project-wrapper" id="Projects">
      <div className="paddings innerWidth project-container">
        <h2 className="text-[#0775F0] text-2xl font-semibold Heading pt-8">PROJECTS</h2>
        {projectData.map((eachObj) => {
          return (
            <div className="innerContainer" key={eachObj.id}>
              <div className="project-image alignCenter">
                <img src={eachObj.image} alt={eachObj.title} width={350} />
              </div>
              <div className="project-details ">
                <div className="text-2xl font-semibold project-title">
                  <h4> {eachObj.title} </h4>
                </div>
                <div className="project-description secondaryText">
                  <p> {eachObj.projectDescription} </p>
                </div>
                <div className="stack ">
                  {eachObj.stack.map((eachItem) => {
                    return <div key={eachItem.id}>{eachItem.tech}</div>;
                  })}
                </div>
                <div className="innerWidth project-buttons">
                  <div className="githubButton">
                    <button>
                      {" "}
                      <a href={eachObj.githubUrl} target="_blank">
                        <div className="buttons-inside bg-yellow-500 p-2 rounded-l">
                          Github
                          <FaGithub />
                        </div>
                      </a>
                    </button>
                  </div>
                  <div className="liveButton">
                    <button>
                      {" "}
                      <a href={eachObj.liveUrl} target="_blank">
                        <div className="buttons-inside">
                          Preview
                          <HiExternalLink />
                        </div>
                      </a>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
