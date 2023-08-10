import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import Typed from "react-typed";

const Hero = () => {     
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Saksham Gram Mahila"
            subtitle="Search jobs according to your need."
          />

          <h2 class="typed-text">
            <Typed
              className="text-red-600 typed-text text-4xl sm:text-7xl font-bold"
              strings={[
                "Empowering Rural Communities.",
                "Let's open doors of opportunities.",
                "Access to Education and Scholarships.",
                "Skill Development and Training.",
                "Diverse Job Opportunties.",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </h2>

        </div>
      </section>
    </>
  );
}

export default Hero
