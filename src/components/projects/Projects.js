import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, UIOne, UITwo, UIThree, UIFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';


const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="w-full py-20 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO"
            des="My Projects"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Gas Agency Management System"
            des="Developed a web-based Gas Agency Management System using React.js to streamline operations such as customer management, order processing, inventory tracking, and billing. The application features a user-friendly interface for administrators and customers, enabling real-time order placement, delivery scheduling, automated invoice generation, and stock monitoring. Designed with responsive UI for seamless use across devices, the system integrates REST APIs and a backend database to ensure efficient and reliable performance."
            src={projectSix}
            githubLink="https://github.com/manavpanchall/Gas-Agency-System-host"
            projectLink="https://github.com/manavpanchall/Gas-Agency-System-host"
          />
          <ProjectsCard
            title="Weather App"
            des="Built a real-time weather forecasting web app using React.js, Axios, and OpenWeatherMap API, with a fully responsive UI. Optimized API calls, reducing data fetching time by 35%, ensuring faster user interaction. Implemented React hooks for state management, improving component reusability."
            src={projectOne}
            githubLink="https://github.com/manavpanchall/Weather-App-India"
            projectLink="https://weather-app-india.vercel.app/"
          />
          <ProjectsCard
            title="Behance-Clone"
            des="Developed a fully functional Behance-style portfolio platform with React.js, Tailwind CSS, and React Icons. Implemented dynamic search & filtering, improving navigation experience by 40%. Created a animated UI, enhancing accessibility and aesthetics."
            src={projectTwo}
            githubLink="https://github.com/manavpanchall/BehanceClone"
            projectLink="https://behance-clone-gamma.vercel.app/"
          />
          <ProjectsCard
            title="Car-Rental"
            des="Designed and deployed a React-based car rental platform with smooth animations and dark mode integration. Used React hooks & reusable components, making UI management 30% more efficient."
            src={projectThree}
            githubLink="https://github.com/manavpanchall/Car-rental"
            projectLink="https://car-rental-green.vercel.app/"
          />
          <ProjectsCard
            title="Automation of Database Optimization"
            des="Developed a database dashboard app using React, featuring interactive calendars (FullCalendar), data visualization (Nivo, Chart.js), and a responsive UI (Material-UI). Utilized Redux Toolkit for state management and Formik + Yup for form validation. Enhanced data management, user experience, and efficiency with modern frameworks and intuitive design."
            src={projectFour}
            githubLink="https://github.com/manavpanchall/Frontend_PU_CODE_HACKATHON"
            projectLink="https://frontend-pu-code-hackathon.vercel.app/"
          />
          <ProjectsCard
            title="Secure-Drive"
            des="Secure Drive is a React-based cloud storage application designed for securely managing files and folders. It integrates Firebase for user authentication and database management, and Cloudinary for file uploads and storage. Key features include user sign-up/login, file and folder creation, file uploads, and responsive design for both desktop and mobile devices. The app ensures a seamless and secure experience for users to organize and access their data efficiently."
            src={projectFive}
            githubLink="https://github.com/manavpanchall/Secure-Drive"
            projectLink="https://secure-drive.vercel.app/"
          />
        </div>
      </section>




      <section
        id="uiux-projects"
        className="w-full py-20 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY UI/UX PORTFOLIO"
            des="My UI/UX Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="UX-UI Case study - Velocity Cars"
            des="Web Design"
            src={UIOne}
            projectLink="https://www.behance.net/gallery/217441325/UX-UI-Case-study-Velocity-Cars"
          />
          <ProjectsCard
            title="Women Clothing Store"
            des="Web Design"
            src={UITwo}
            projectLink="https://www.behance.net/gallery/195147691/Women-Clothing-Store"
          />
          <ProjectsCard
            title="ZwigaTo Food Web Application"
            des="Web Design"
            src={UIThree}
            projectLink="https://www.behance.net/gallery/198393751/ZwigaTo-Food-Web-Application"
          />
          <ProjectsCard
            title="Mandar Clothing Website"
            des="Web Design"
            src={UIFour}
            projectLink="https://www.behance.net/gallery/195177303/Mandar-Clothing-Website"
          />
        </div>
      </section>
    </>
  );
}

export default Projects;