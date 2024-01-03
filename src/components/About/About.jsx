import React from 'react'
import './About.css'
import computeimg from '../../assets/computeLogic.jpg'

const About = () => {
  return (
    <section className="md:h-1/2" id="About">
      <div className="flex md:justify-between max-md:flex-col">
        {/* left side */}
        <div className="w-1/2 about-image max-md:hidden">
          <img src={computeimg} alt="frontend" width={400} />
        </div>
        {/* right side */}
        <div className="md:w-1/2 about">
          <div className="text-[#0775F0] text-2xl font-semibold">
            <h2>ABOUT</h2>
          </div>
          <div className="about-para flex items-center">
            <p className="text-xl p-1 pt-8">
              Hey Folks, I am an aspiring Software Developer with a passion for problem solving be it on Coding Platforms or even finding Bugs in a Code. I have a passion to contribute and make Projects. I am open to learning DevOps and combining it with my Full Stack Knowledge makes me an all-rounder to contribute to any SDE role.
              <br></br><br></br>
              Eager to contribute to the Industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;