import '../styles/App.scss';
import Footer from "./Footer";
import Header from './Header';
import Main from './Main';
import SectionAboutMe from "./SectionAboutMe";

function App() {

  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <SectionAboutMe />
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
