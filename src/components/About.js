import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import natasha from "../images/natasha.jpg"

function About() {
    return (
      <Row className="about justify-content-center">
        <Col lg="9" className="about-me">
          <h3>About the creator</h3>
          <h4>Natasha Koller aka @KollerCode</h4>
          <img className="aboutpic" src={natasha} alt="natasha"></img>
          <p>
            Hey there! People refer to me as a jack of all trades. Mostly
            because I have always excelled in anything I've set my mind to.I
            love a challenge and have traveled around the world picking up
            various languages along the way. My many years of experience working
            abroad have allowed me the opportunity to pick up a variety skills.
            I have worked in various industries and many skills that transfer.
            Most recently I have worked in the field of international education
            where I spent my time working with documents and assisting students
            making their dream of studying in America a reality. The one aspect
            of all of my careers that has always been vital has been working
            with computers. I have had to design, create, troubleshoot (even in
            Korean!), and I've never realized how central IT has become in my
            day- to-day life. I played with code during my WordPress travel
            blogging days, but never on a serious level to make a career out of
            it. Coding is my newest passion and I feel like I am finally where I
            belong.
          </p>
          <p>
            I am also a diversity champion and love to meet other latinx in tech
            as well as a big supporter of embracing mental health and knowing
            when to get help. I also love to teach and help others as it is a
            great way to learn as well. I teach Lua (video game dev) to children
            for Roblox on the weekends. However{" "}
            <strong>
              my biggest passion is UI design and I am looking for positions as a UI
              developer/Front-end Developer.
            </strong>
          </p>
          <p>
            Lifelong learning is important to me, and I believe that we should
            always be reinventing ourselves. I want to see how far I will go and
            just how much I can create with my new coding skills. I am currently
            #opentowork and contributing to projects and can be contacted at the
            links below.
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
        </Col>
      </Row>
    );  
}

export default About;