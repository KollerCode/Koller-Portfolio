import React from "react";
import { form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Projects() {  
       
  return (
      <div>
         <h3>What makes this app different</h3>
          <p>
            This app was made by someone, <em>aka me</em>, who has struggled
            with ADHD and knows what works and what doesn't when it comes to
            trying to manage tasks. Everyone is different, which is why what
            works for me may not work for everyone. Therefore multiple sources
            were researched and persons with ADHD were approached. After all of
            the feedback and data was collected we were left with this app "I
            Can ADHD!"
            <p>
              ADHD brains are tricky and often times we have different needs at
              different times. This app was made with those needs in mind.{" "}
              <b>
                Even the colors chosen are are meant to stimulate the ADHD
                brain!
              </b>
            </p>
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
                  Sometimes, by thinking about the consequences of not
                  completeing these tasks we can put more weight on the task
                  which increases the likelyhood of completing it.
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
            In the future it is the hopes that there will be a community space
            for a all to communicate as well as a calendar and more advanced
            features.
          </li>
    </div> 
  )
}

export default Projects;