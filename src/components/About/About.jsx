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
              A
              Passionate and dedicated Frontend Developer with a keen eye for
              detail and a strong foundation in web technologies like HTML, CSS,
              JavaScript and React with a deep understanding of responsive
              design and user experience. Committed to continuous learning and staying updated
              with the latest industry trends."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;