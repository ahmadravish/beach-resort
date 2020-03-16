import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';


import{Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/rooms/' component={Rooms}/>
      <Route exact path='/rooms/:slug' component={SingleRoom}/>
      <Route component={Error} />
      </Switch> 
      <footer>
           <div class="footer">
             <p>© 2020 Developed By:<a href="www.linkedin.com/in/ravish-ahmad-1a9519111">Ravish Ahmad</a></p>
           </div>
      </footer>
    </>
  );
}

export default App;
  