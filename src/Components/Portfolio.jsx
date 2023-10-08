/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/prog.jpg";

const imageAltText = "Programmer day";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Omdena Local Chapter Website",
    description:
      "Website made with react and deployed on vercel. It contains all the information about Omdena Local Chapter and its members.",
    url: "https://omdena-vitb.vercel.app/",
  },
  {
    title: "College Project Gesture2Text",
    description:
      "A life changing project for the deaf and dumb people. It converts the sign language into text and speech.",
    url: "https://gestrure2-text.vercel.app/",
  },
  {
    title: "SIH 2023 Project Suraksha Saathi",
    description:
      "SIH webiste made for recuse agencies to help them in their work. It is made with react and deployed on vercel",
    url: "https://github.com/Cyb3rGhoul/SurakshaSaathi-web",
  },
  {
    title: "VITB Threads",
    description:
      "A social media website made for VIT Bhopal students. It is made with NextJs and deployed on vercel",
    url: "https://vitb-threads.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
