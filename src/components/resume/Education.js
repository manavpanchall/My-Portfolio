import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering with Specialization in Artificial Intelligence"
            subTitle="Parul University, Vadodara, Gujarat (2021 - 2025)"
            result="2025"
            des="Completed a comprehensive curriculum focused on Artificial Intelligence, including courses on machine learning, neural networks, and data science. Engaged in hands-on projects and research, achieving a CGPA of 7.16 out of 10"
          />
          <ResumeCard
            title="Science - PCM"
            subTitle="NEW LOOK SR SEC SCHOOL LODHA BANSWARA RAJ"
            result="2021"
            des="Studied Physics, Chemistry, and Mathematics, laying a strong foundation for engineering studies. Participated in various science fairs and competitions, demonstrating a keen interest in scientific exploration and innovation."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="NEW LOOK SR SEC SCHOOL LODHA BANSWARA RAJ"
            result="2019"
            des="Completed secondary education with a focus on core subjects, achieving excellent grades. Actively participated in extracurricular activities, including sports and cultural events, fostering a well-rounded development."
          />
        </div>
      </div>

      {/* part Two */}
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education