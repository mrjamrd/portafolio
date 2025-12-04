import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from  './components/Hero';
import Aboutme from './components/Aboutme';
import Hability from './components/Hability';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar title="Navbar"></Navbar>
      <Hero title="hero"></Hero>
      <Aboutme title="About"></Aboutme>
      <Hability title></Hability>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
