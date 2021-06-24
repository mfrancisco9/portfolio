import './App.css';

// components
import Header from "./components/Header"
import MainBox from "./components/MainBox"
import Projects from "./components/Projects"
import ContactBox from './components/ContactBox';

function App() {

  return (

 <div>
<Header /> 
<MainBox 
  id="bio"
  Title="About" 
  Content="I am a Chicago-based full stack web developer and a recent graduate of Northwestern's Coding Bootcamp with a focus on the MERN stack. A graduate of Indiana University in Arabic and International Studies, I enjoy programming as a language and am eager to expand my knowledge. Prior to coding, I worked in coffee roasting and quality control with Intelligentsia Coffee. Before that, I was an educator in 'Asir, Saudi Arabia. I still like great coffee, but I also like cycling, music, and writing code. Take a look at my work and get in touch" />
<Projects />
<ContactBox />
</div>

);

}

export default App;
