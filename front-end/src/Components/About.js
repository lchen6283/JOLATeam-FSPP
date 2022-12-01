import React from "react";
import Aug from "../assets/Aug.jpeg";
import Law from "../assets/Law.jpeg";
import Jossy from "../assets/Jossy.jpeg";
import Oscar from "../assets/Oscar.jpeg";

export default function About() {
  return (
    <div>
      <h1>WHat is SMAK?</h1>
      <p>
        Smak is dutch for Taste. Smak is a web app that helps you order food
        faster by taking “choice” away and making the decision for you. On
        Average it takes about 10-20 mins to narrow down what you want to eat.
        On our app All you have to do is answer a simple set of questions and
        Our algorithm will make a delicious choice for you!
      </p>
      <br />
      <h1>The Team</h1>
      <img src={Aug} alt="" width={200} />
      <p>
        I am a software engineer with a passion for creativity and
        functionality. I incorporate these concepts into all my projects with
        the ultimate goal of creating a meaningful UX. As a life-long learner, I
        embrace challenges and enjoy learning different approaches to solving
        problems both personally and professionally.
      </p>
      <img src={Law} alt="" width={200} />
      <p>
        I am an aspiring software engineer and full stack web developer
        currently attending Pursuit, an intensive 12 - month software
        engineering fellowship with a 9% acceptance rate. I am pursuing software
        engineering because I have always had a passion for technology. As a
        creative, I wish to explore the vast array of opportunities with this
        field. When I'm not on a computer, you can find me in front of the
        television as I am a big fan of Marvel, DC, and enjoy watching shows or
        reading manga. Once I obtain the knowledge and skills necessary to
        succeed as a developer, I want to build a career at companies that are
        shifting the world.
      </p>
      <img src={Jossy} alt="" width={200} />
      <p>
        I am currently pursing my passion and training to become a software
        engineer/developer as a member of the Pursuit Fellowship. Pursuit is a
        12-month, Google-funded software engineering fellowship with a 9%
        acceptance rate whose graduates have been hired as developers at leading
        companies. My background as an administrative assistant is what inspired
        my shift into tech. I wanted to join an industry that allowed me to be
        creative and do what I love - which is gaming! After completing the
        Pursuit.
      </p>
      <img src={Oscar} alt="" width={200} />
      <p>
        I am a full-stack web developer currently enrolled in Pursuit, an
        intensive 12-month software engineering fellowship with a 9% acceptance
        rate. A goal-oriented person, open to acquiring knowledge in new
        technologies besides being willing to take on new challenges. Highly
        detailed-oriented and provided with a deep sense of responsibility and
        enthusiasm.
      </p>
    </div>
  );
}
