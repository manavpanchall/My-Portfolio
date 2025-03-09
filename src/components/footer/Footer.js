import React from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          manavpanchall
        </Link>
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
            href="https://www.youtube.com/@manavpanchall "
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

      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
          {["home", "features", "projects", "resume", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-full col-span-2 md:col-span-1">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Our Location
        </h3>
        <div className="w-full h-[250px] mt-4">
          <a
            href="https://www.google.com/maps/place/Vadodara,+Gujarat,+India"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              title="Vadodara Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58902.89204618856!2d73.14127577117526!3d22.307158538266415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8f16f4c7a5f%3A0x5c8b3f9e5f763e9b!2sVadodara,+Gujarat,+India!5e0!3m2!1sen!2sin!4v1647013456789!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
