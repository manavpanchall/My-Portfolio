import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaYoutube, FaGithub, FaBehance } from 'react-icons/fa';
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Manav Panchal</h3>
        <p className="text-base text-gray-400 tracking-wide">
          Results-driven Computer Science Engineer specializing in Web Development, UI/UX Design, and Software Engineering. Proficient in front-end and back-end development with expertise in React.js, JavaScript, C++, Python, SQL, and Agile methodologies. Designed and deployed multiple dynamic web applications, leveraging APIs and modern frameworks. Passionate about solving real-world challenges through efficient coding, responsive design, and optimized database solutions. Proven ability to collaborate in teams, enhance user experience, and drive innovative projects.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/manavpanchall/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@manavpanchall"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/manavpanchall/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/manavpanchall"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft