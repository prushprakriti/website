import React from 'react';
//import img1 from './images/Page_1_background_image.jpg'
import './App.css';

import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import WhoWeAre from './components/pages/WhoWeAre';
import WhatWeDo from './components/pages/WhatWeDo';
import HowWeDo from './components/pages/HowWeDo';
import Team from './components/pages/Team';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
  <>  
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/WhoWeAre'  component={WhoWeAre} />
        <Route path='/WhatWeDo' component={WhatWeDo} />
        <Route path='/HowWeDo' component={HowWeDo} />
        <Route path='/Team' component={Team} />
        <Route path='/ContactUs' component={ContactUs} />
      </Switch>
    </HashRouter>
  </>   
  );
}

export default App;
