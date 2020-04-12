import React from 'react';

import { Route ,BrowserRouter , Router, Switch } from 'react-router-dom';
import Main from './main';
import Appnew from '../components/New1';
import New1 from '../components/New1';
import New2 from '../components/New2';
import ThemeContextProvider from '../contexts/ThemeContext';
import {ThemeContext} from '../contexts/ThemeContext';
// import {value} from './main';
import '../App.css';

const Route2 = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Route exact path="/" component={()=>(<div><Main /></div>)} />
      <Route  path="/new" component={()=>(<div>
        <ThemeContextProvider> 
         <New1/>
        </ThemeContextProvider>
      </div>)} />
  <Route path="/admin" component={()=>(<div>
    <ThemeContextProvider>
       <New2 />
      </ThemeContextProvider>
  </div>)} />
      </BrowserRouter> 
      
    </div>
  );
}

export default Route2;