import React from "react";
import Title from "../layouts/Title";
import Reveal from "../animations/Reveal";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  UIOne,
  UITwo,
  UIThree,
  UIFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="w-full py-10 sm:py-14 md:py-20 border-b border-slate-200 dark:border-darkBorder transition-colors duration-300"
      >
        <Reveal variant="fadeUp" className="flex justify-center text-center">
          <Title title="VISIT MY PORTFOLIO" des="My Projects" />
        </Reveal>

        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <ProjectsCard
            index={0}
            title="Foodee."
            des=""
            src={projectSeven}
            githubLink="https://github.com/manavpanchall/Foodee.app"
            projectLink="https://foodee-pied.vercel.app/"
          />
          <ProjectsCard
            index={1}
            title="Gas Agency Management System"
            des="Developed a web-based Gas Agency Management System using React.js to streamline operations such as customer management, order processing, inventory tracking, and billing. Features a user-friendly interface for administrators and customers, real-time order placement, delivery scheduling, automated invoice generation, and stock monitoring."
            src={projectSix}
            githubLink="https://github.com/manavpanchall/Gas-Agency-System-host"
            projectLink="https://github.com/manavpanchall/Gas-Agency-System-host"
          />
          <ProjectsCard
            index={2}
            title="Weather App"
            des="Built a real-time weather forecasting web app using React.js, Axios, and OpenWeatherMap API with a fully responsive UI. Optimized API calls reducing fetch time by 35%, and used React hooks for better component reusability."
            src={projectOne}
            githubLink="https://github.com/manavpanchall/Weather-App-India"
            projectLink="https://weather-app-india.vercel.app/"
          />
          <ProjectsCard
            index={3}
            title="Behance-Clone"
            des="Fully functional Behance-style portfolio platform with React.js, Tailwind CSS and React Icons. Includes dynamic search & filtering, animated UI, and improved navigation experience by 40%."
            src={projectTwo}
            githubLink="https://github.com/manavpanchall/BehanceClone"
            projectLink="https://behance-clone-gamma.vercel.app/"
          />
          <ProjectsCard
            index={4}
            title="Car-Rental"
            des="React-based car rental platform with smooth animations and dark mode. Uses reusable hooks and components, making UI management 30% more efficient."
            src={projectThree}
            githubLink="https://github.com/manavpanchall/Car-rental"
            projectLink="https://car-rental-green.vercel.app/"
          />
          <ProjectsCard
            index={5}
            title="Automation of Database Optimization"
            des="Database dashboard app using React with FullCalendar, Nivo, Chart.js and Material-UI. Uses Redux Toolkit for state management and Formik + Yup for validation."
            src={projectFour}
            githubLink="https://github.com/manavpanchall/Frontend_PU_CODE_HACKATHON"
            projectLink="https://frontend-pu-code-hackathon.vercel.app/"
          />
          <ProjectsCard
            index={7}
            title="Secure-Drive"
            des="Secure Drive is a React-based cloud storage app for securely managing files and folders. Integrates Firebase for auth and database, Cloudinary for uploads, with responsive design across devices."
            src={projectFive}
            githubLink="https://github.com/manavpanchall/Secure-Drive"
            projectLink="https://secure-drive.vercel.app/"
          />
        </div>
      </section>

      <section
        id="uiux-projects"
        className="w-full py-10 sm:py-14 md:py-20 border-b border-slate-200 dark:border-darkBorder transition-colors duration-300"
      >
        <Reveal variant="fadeUp" className="flex justify-center text-center">
          <Title title="VISIT MY UI/UX PORTFOLIO" des="My UI/UX Projects" />
        </Reveal>
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <ProjectsCard
            index={0}
            title="UX-UI Case study - Velocity Cars"
            des="A complete UX/UI case study for a car rental platform focused on clarity, motion and conversion."
            src={UIOne}
            projectLink="https://www.behance.net/gallery/217441325/UX-UI-Case-study-Velocity-Cars"
          />
          <ProjectsCard
            index={1}
            title="Women Clothing Store"
            des="Modern e-commerce web design concept for a women's clothing brand."
            src={UITwo}
            projectLink="https://www.behance.net/gallery/195147691/Women-Clothing-Store"
          />
          <ProjectsCard
            index={2}
            title="ZwigaTo Food Web Application"
            des="Food delivery web app design with a clean, appetizing visual language."
            src={UIThree}
            projectLink="https://www.behance.net/gallery/198393751/ZwigaTo-Food-Web-Application"
          />
          <ProjectsCard
            index={3}
            title="Mandar Clothing Website"
            des="Minimalist clothing brand website focused on typography and product storytelling."
            src={UIFour}
            projectLink="https://www.behance.net/gallery/195177303/Mandar-Clothing-Website"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;