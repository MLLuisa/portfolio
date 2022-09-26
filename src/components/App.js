import '../styles/App.scss';
import photo from '../images/image.jpg';

function App() {
  return (
    <div className="App">
      <header className='header-section'>
        <div className='wrapper-details'>
        <h2>Maria Luisa Lufrano</h2>
        <p>Junior developer</p>
        </div>
        <div className='image-wrapper'>
        <img src={photo} alt='profile' className='image-profile'>
        </img>
        </div>
        
      </header>
    </div>
  );
}

export default App;
