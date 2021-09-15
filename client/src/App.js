import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import SignUpPage from './signup/signup.js';
import LoginPage from "./login/login";
import NotePage from './note/note.js'
import WritingPage from './writing/writing.js'

import findIdPage from "./find_id/find_id";
import findPwPage from "./find_pw/find_pw";
import findPwPageDetail from "./find_pw_detail/find_pw_detail";

import MainPage from './main/main.js';

import MyClass from './myclass/myclass.js';


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
      <Route path='/note' exact={true} component={NotePage}></Route>
      <Route path='/writing' exact={true} component={WritingPage}></Route>
      <Route path='/myclass' exact={true} component={MyClass}></Route>
  </HashRouter>
}

export default App;
