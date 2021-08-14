import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import SignUpPage from './signup/signup.js';
import LoginPage from "./login/login";
import MainPage from './main/main.js';

//공통적으로 사용하는 css 모음
import './public/stylesheets/public.css';
import './public/stylesheets/blank.css';
import './public/stylesheets/font.css';
import './public/stylesheets/initialization.css';
import './public/stylesheets/palette.css';

function App() {
  return <HashRouter>
      <Route path='/' exact={true} component={MainPage}></Route>
      <Route path='/signup' exact={true} component={SignUpPage}></Route>
      <Route path='/login' exact={true} component={LoginPage}></Route>
  </HashRouter>
}

export default App;
