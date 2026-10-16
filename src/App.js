import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import BottomNav from "./components/navbar/BottomNav";
import Banner from "./components/banner/Banner";
import Workforce from "./components/workforce/Workforce";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-lightBody dark:bg-bodyColor text-blackText dark:text-lightText transition-colors duration-300 relative overflow-x-hidden">
        <Navbar />

        <main className="max-w-screen-xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 pb-24 sm:pb-28 md:pb-32">
          <Banner />
          <Workforce />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <FooterBottom />
        </main>

        <BottomNav />
      </div>
    </ThemeProvider>
  );
}

export default App;