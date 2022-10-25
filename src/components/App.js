import React from "react";
import '../styles/App.scss';
import Footer from "./Footer";
import Header from './Header';
import Main from './Main';
import { Routes, Route } from "react-router-dom";
import SectionAboutMe from "./SectionAboutMe";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <Routes>
        <Route path="/aboutMe" element={<SectionAboutMe />} />
      </Routes>
      <AboutMe />
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
