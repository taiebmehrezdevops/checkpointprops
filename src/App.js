import logo from './logo.svg';
import './App.css';
import AppHeader from './component/Nav';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Copy from './component/Copy';
function App() {
  const name = "John Doe";

const navLinks = [
  {
    link: "About",
    href: "#about-me"
  },
  {
    link: "Project",
    href: "#projects"
  },
  {
    link: "Contact",
    href: "#about"
  }
];

  return (
    <div>
      <AppHeader  nm={name} nav={navLinks}/>
      <About> <img src="./proj1.jpg" alt="proj1"/>
      <p>Bonjour</p></About>
      <Project>
         <img src="./proj1.jpg" alt="proj1"/>
         </Project>
      <Contact />
      <Copy />
    </div>
    
    
  );
}

export default App;
