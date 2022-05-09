import 'bootstrap/dist/css/bootstrap.min.css';
import img3 from './imageInSrc.png';
import './App.css';
function App() {
  return (
    <div className='App'>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}} className='App-header'>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={img3} className='img1-src' alt="img1"/>
        <br />
        <img src="./imageInPublic.png" className='img2-src' alt="img2" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
export default App;
