import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import "./about.css"

const About = () => {
  // const leftRowStyle = {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "rgba(255, 255, 255, 0.8)", // Light white color
  //   minHeight: "100vh",
  // };
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?"/>
        <div className="container flex mtop">
          <div className="left row" > 
            <Heading title="Meet Our Team" subtitle="We are Team - 54" />
            <p>
              <b>Umais Rifah</b> - B.Tech fourth year
            </p>
            <p>
              <b>Yashvi Singh</b> - B.Tech fourth year
            </p>
            <p>
              <b>Sandhya Rakhunde</b> - B.E. fourth year
            </p>
            <p>
              <b>Shreya Singh</b> - B.Tech third year
            </p>
            <p>
              <b>Kaveri Raut</b> - B.E. fourth year
            </p>
            <p>
              <b>Nikita Shitole</b> - B.Tech fourth year
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
