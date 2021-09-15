import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../img/tmp.png';
import './head.css';

import * as headerFuntion from './f_header.js';

import Profile from '../icon/etc..px/48px my menu.png'

import Myclass from '../icon/12px/myclass.png'
import Mypage from '../icon/12px/mypage.png'
import Mypost from '../icon/12px/mypost.png'
import classNames from "classnames";



export default function Header({main_openModal, m_page}){
    // window.addEventListener('click', (e) => {
    //     headerFuntion.profile_detail();
    // })


    return <header>
        <div className='header_content'>

            <div className='header_left'>
                <Link to='/' ><img className='header_logo_size' src={LogoImg}/></Link>
                <label id="main_write_note"><Link className='font-16n' to='/writing'>정리 노트 작성</Link></label>
                <label id="main_open_chat" className='font-16n'>오픈 채팅</label>
            </div>

            <div className='header_right'>
                <button className={classNames("public_grayline_btn", "margin-r-8", "margin-t-4")} onClick={()=>main_openModal(m_page)}>Sign Up</button>
                <button className={classNames("public_brandblue_btn", "margin-t-4")}><Link className={classNames('font-14n', 'font-color-w')} to='/login'>Log in</Link></button>
                <button className="profile_button" onClick={()=>headerFuntion.profile_detail()}>
                    <img className={classNames('header_profile_menu_first','margin-l-14')} src={Profile}/>
                    <div id="profile_modal" className="profile_modal">
                        <div className="profile_modal_head">
                            <img className='header_profile_menu' src={Profile}/>
                            <div className='profile_head_who'>
                                <span className="profile_head_name">아무개</span>
                                <label className="profile_head_class">학생</label>
                            </div>
                        </div>
                        <div className="profile_modal_body">
                            <button className="profile_body_head">
                                <Link to='/myclass'>
                                <img className='header_body_img' src={Myclass}/>
                                <span className="header_body_span">나의 강의실</span>
                                </Link>
                            </button>
                            <button className="profile_body_body">
                                <img className='header_body_img' src={Mypost}/>
                                <span className="header_body_span">나의 게시글</span>
                            </button>
                            <button className="profile_body_foot">
                                <img className='header_body_img' src={Mypage}/>
                                <span className="header_body_span">마이 페이지</span>
                            </button>
                        </div>
                        <div className="profile_modal_foot">
                            <span>로그아웃</span>
                        </div>
                    </div>
                </button>
            </div>

        </div>

        <div className="gradient_bar">
        </div>
    </header>

}


