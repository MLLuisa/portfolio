import React from "react";
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <h1 className='title'>This is my portfolio</h1>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
