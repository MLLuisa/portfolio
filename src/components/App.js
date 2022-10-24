import React from "react";
import '../styles/App.scss';
import Footer from "./Footer";
import Header from './Header';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
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
