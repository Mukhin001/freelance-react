import './styles/main.css';


import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';


function App() {
  return (
    <div className="App">
        
        <Navbar />
        {/* <Home /> */}
        {/* <Projects /> */}
        <Project />
        {/* <Contacts /> */}
        <Footer />

    </div>
  );
}

export default App;
