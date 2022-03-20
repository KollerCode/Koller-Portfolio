import React from "react";
import natasha from "../images/natasha.jpg"

function About() {
    return (
      <div className="about">
        <div className="about-me">
          <h3>About the creator</h3>
          <h4>Natasha Koller aka @KollerCode</h4>
          <img className="aboutpic" src={natasha} alt="natasha"></img>
          <p>
            Natasha is a jack of all trades. Holding a Master's in International
            Education and an undergraduate degree in Anthropology and music. She
            is always looking for a challenge and has traveled around the world
            picking up various languages along the way. Coding is her newest
            passion and she feels like she is finally where she belongs. She has
            is a diversity champion and loves to meet other latinx in tech as
            well as a big supporter of embracing mental health and knowing when
            to get help. Natasha also loves to teach and help others as it is a
            great way to learn as well. She teaches Lua (video game dev) to
            children for Roblox on the weekends. Her biggest passion is UI
            design and she aspires to be a UI developer/Front-end Developer. She
            is currently #opentowork and contributing to projects and can be
            contacted at the links below.
          </p>
          <p>
            <a href="https://github.com/KollerCode" className="aboutlink">
              https://github.com/KollerCode
            </a>{" "}
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/kollernatasha/"
              className="aboutlink"
            >
              https://www.linkedin.com/in/kollernatasha/
            </a>{" "}
          </p>
          <a href="https://twitter.com/KollerCode" className="aboutlink">
            https://twitter.com/KollerCode
          </a>{" "}
          <a href="https://dev.to/kollercode" className="aboutlink">
            https://dev.to/kollercode
          </a>{" "}
        </div>
        <p>
          Sources:
          <a href="https://chadd.org/about-adhd/overview/">
            https://chadd.org/about-adhd/overview/
          </a>
          <a href="https://www.cdc.gov/ncbddd/adhd/facts.html">
            https://www.cdc.gov/ncbddd/adhd/facts.html
          </a>
        </p>
      </div>
    );  
}

export default About;