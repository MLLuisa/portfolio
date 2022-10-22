import React from "react";
import '../styles/App.scss';
import Footer from "./Footer";
import Header from './Header';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="main">
        <Main />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
