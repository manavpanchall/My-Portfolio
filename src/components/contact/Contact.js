import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setErrMsg("");
      setSuccessMsg(
        `Thank you dear ${username}, your message has been sent successfully!`
      );
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSuccessMsg(""), 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-20 border-b border-slate-200 dark:border-darkBorder transition-colors duration-300"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-br from-white to-blue-50 dark:from-darkCard dark:to-darkCardAlt border border-lightBorder dark:border-darkBorder flex flex-col gap-8 p-4 lgl:p-8 rounded-2xl shadow-md dark:shadow-xl transition-colors duration-300">
            <form
              onSubmit={sendEmail}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              {errMsg && (
                <p className="py-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 rounded-lg text-center text-redAccent dark:text-darkRed text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/40 rounded-lg text-center text-green-600 dark:text-green-400 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-grayText dark:text-mutedText uppercase tracking-wide font-medium">
                    Your Name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="contactInput"
                    type="text"
                    value={username}
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-grayText dark:text-mutedText uppercase tracking-wide font-medium">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="contactInput"
                    type="text"
                    value={phoneNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-grayText dark:text-mutedText uppercase tracking-wide font-medium">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="contactInput"
                  type="email"
                  value={email}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-grayText dark:text-mutedText uppercase tracking-wide font-medium">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  className="contactInput"
                  type="text"
                  value={subject}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-grayText dark:text-mutedText uppercase tracking-wide font-medium">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="contactTextArea"
                  rows="6"
                  value={message}
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-blueAccent dark:bg-designColor rounded-xl text-base text-white font-semibold tracking-wide hover:bg-redAccent dark:hover:bg-darkRed transition-all duration-300 shadow-md dark:shadow-xl hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;