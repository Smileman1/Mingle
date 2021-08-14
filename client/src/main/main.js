import React from 'react';
import { Link } from 'react-router-dom'
import './main.css';
import MainFuntion from './f_main.js';
import Header from '../public/javascripts/header.js'

class MainPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new MainFuntion();
    }

    render() {
        return (
            <div className='main'>
                <Header />
                <div className='content'>
                    메인 페이지입니다.
                </div>
            </div>
        )
    }
}

export default MainPage;