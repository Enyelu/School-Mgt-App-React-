import './style.css';
import Home from './pages/Home';
import TopBar from './components/layout/TopBar';
import NavBar from './components/homepage/NavBar';
import Footer from './components/layout/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <>
          <TopBar />
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
