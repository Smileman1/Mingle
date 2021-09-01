import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import SignUpPage from './signup/signup.js';
import LoginPage from "./login/login";
import NotePage from './note/note.js'

import findIdPage from "./login/find_id";
import findPwPage from "./login/find_pw_1";
import findPwPageDetail from "./login/find_pw_2";
import termsPage from "./login/terms";

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
      <Route path='/login/id' exact={true} component={findIdPage}></Route>
      <Route path='/login/pw' exact={true} component={findPwPage}></Route>
      <Route path='/login/pw_detail' exact={true} component={findPwPageDetail}></Route>
      <Route path='/login/terms' exact={true} component={termsPage}></Route>
      <Route path='/note' exact={true} component={NotePage}></Route>
  </HashRouter>
}

export default App;
