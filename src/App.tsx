import { Router, Route } from './router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Catering from './pages/Catering';
import Order from './pages/Order';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/catering">
            <Catering />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
