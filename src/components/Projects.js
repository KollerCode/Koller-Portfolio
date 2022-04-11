import React from "react";
import { form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import maybelline from "../images/maybelline.png"
import cortadito from "../images/cortadito1.png"

function Projects() {  
       
  return (
    <div>
      <div>
        <h3>I Can ADHD</h3>
        <a
          href="https://app.netlify.com/sites/i-can-adhd/overview"
          className="adhd-title"
        >
          I Can ADHD
        </a>
        <p>
          ADHD brains are tricky and often times we have different needs at
          different times. This app was made with those needs in mind.{" "}
          <b>
            Even the colors chosen are are meant to stimulate the ADHD brain!
          </b>
        </p>
        <h4>Let's look at some of the unique features!</h4>
        <ul>
          <li>
            <b>The fidget spinner</b> below the navigation bar is for those
            times when you forgot a thought and need a moment to pause and
            reflect. Or, just have a fidget moment and want to click something
            fun.
          </li>
          <li>
            <b>The brain dump feature</b> is SUPER important! It is for all
            those thoughts you have throughout the day that you don't want to
            forget. Whether it be an awesome insiration driven idea, or just a
            reminder.
          </li>
          <li>
            <b>Then of course we have our task lister</b>, which has two KEY
            parts:
            <ul>
              <li>
                One is the <b>star button</b> which, when clicked, is to{" "}
                <u>
                  remind us which tasks are the ones that MUST be prioritized.
                </u>{" "}
                Sometimes, by thinking about the consequences of not completeing
                these tasks we can put more weight on the task which increases
                the likelyhood of completing it.
              </li>
              <li>
                The other is the <b>calendar button</b>, which will then route
                the task to the "future tasks" tab. This is for tasks that are
                important, but that don't necessarily have to be completed
                today. <u>They can be left for tomorrow or even next week.</u>
              </li>
            </ul>
          </li>
        </ul>
        <li>
          In the future it is the hopes that there will be a community space for
          a all to communicate as well as a calendar and more advanced features.
        </li>
        <p>
          Technology used: Figma, Bootstrap, React Router v6, React.js,
          Javascript, HTML, custom CSS.
        </p>
      </div>
      <div>
        <h3>Task Lister</h3>
        <a href="https://koller-to-do.netlify.app/" className="tasks-title">
          Task Lister
        </a>
        <p>
          Simple tasklister made with ascending and descing svg buttons, popups, popovers,
          react-bootstrap elements etc.
        </p>
        <p>
          Technology used: Bootstrap, React Router v6, React.js, Javascript,
          HTML, custom CSS.
        </p>
      </div>
      <div>
        <h3>Cortadito</h3>
        <a href="https://github.com/tbenis/cortadito" className="tasks-title">
          Github
        </a>
        <a href="https://devpost.com/software/cortadito?fbclid=IwAR3mQLw9k4sQeb_4ldEzlUXAm6sVI4FXSGzwH36lyaSppZ1URBtHl5xRyi0">
          DevPost Hackathon Link
        </a>
        <img
          src={cortadito} />
        <p>
          Won the Microsoft challenge to help the people of Miami and solve a problem for the 
          TechTogether Miami Hackathon. 
        </p>
        <p>
          Technology used: Bootstrap, React Router v6, React.js, Javascript,
          HTML, custom CSS.
        </p>
      </div>
      <div>
        <h3>Maybelline Shopping Project</h3>
        <a
          href="https://github.com/KollerCode/Shopping-Project"
          className="tasks-title"
        >
          Github
        </a>
        <a href="https://devpost.com/software/cortadito?fbclid=IwAR3mQLw9k4sQeb_4ldEzlUXAm6sVI4FXSGzwH36lyaSppZ1URBtHl5xRyi0">
          DevPost Hackathon Link
        </a>
        <img
          className="cortadito"
          src={maybelline} />
        {/* <p>
          ADHD brains are tricky and often times we have different needs at
          different times. This app was made with those needs in mind.{" "}
        </p> */}
        <p>
          Technology used: Javascript,
          HTML, custom CSS.
        </p>
      </div>
    </div>
  );
}

export default Projects;