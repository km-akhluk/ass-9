import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUS/AboutUs';
import Cources from './components/Cources/Cources'
import Pricing from './components/Pricing/Pricing';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div className="container mt-3">
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/cources'>
            <Cources></Cources>
          </Route>

          <Route exact path='/about'>
            <AboutUs></AboutUs>
          </Route>

          <Route exact path='/plans'>
            <Pricing></Pricing>
          </Route>

          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
