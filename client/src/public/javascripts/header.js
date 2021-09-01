import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../img/tmp.png';
import './head.css';

import Profile from '../../img/profile.png';


export default function Header(){
    return <header>
        <div id="header_top">
            <div className='header_left'>

                <img src={LogoImg}/>
                <label id="main_write_note" className='font-16n'>정리 노트 작성</label>
                <label id="main_open_chat" className='font-16n'>오픈 채팅</label>
            </div>
            <div className='header_right'>
                <button className="public_grayline_btn margin-r-8"><Link className='font-14n font-color-g' to='/login/terms'>Sign Up</Link></button>
                <button className="public_brandblue_btn"><Link className='font-14n font-color-w' to='/login'>Log in</Link></button>
                <img src={Profile}/>
            </div>
        </div>
        <div className="gradient_bar">
        </div>
    </header>
}
