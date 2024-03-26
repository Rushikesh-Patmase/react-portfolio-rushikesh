
import backgroundImage from './background.jpg';
import Navbar from './Navbar';
import About from './About';
import Education from './Education';
import Footer from './Footer';
import Projects from './Projects';
import Certificates from './Certificates';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <Router>
        <div className="bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* How to Set Background Image =>
            <div className="bg-cover bg-center flex flex-col overflow-y-scroll" style={{ backgroundImage: `url(${backgroundImage})` }}> 
        */}
        <Navbar />
        <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/education" >  
                    <Education />
                </Route>
                <Route path="/projects">  
                    <Projects />
                </Route>
                <Route path="/certificates">
                    <Certificates />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
        </Switch>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
