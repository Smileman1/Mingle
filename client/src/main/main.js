import React from 'react';
import { Link } from 'react-router-dom'
import './main.css';
import MainFuntion from './f_main.js';
import Header from '../public/javascripts/header.js';
import classNames from 'classnames';

import T1 from '../img/t1.png';
import T2 from '../img/t2.png';
import T3 from '../img/t3.png';
import T4 from '../img/t4.png';

import like from '../img/like.png';
import view from '../img/view.png';

import search from '../img/search.png';

class MainPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new MainFuntion();
    }
    
    render() {
        return (
            <div className='main'>
                <Header />
                {/* l-o-l */}
                <div className="main_body">
                    <div className='main_search'>
                        <div className={classNames('public_main_search_div', 'font-14n')}>
                            <img src={search}/>
                            <input className={classNames('public_main_search_bar', 'font-14n')} placeholder="검색어를 입력하세요"/>
                        </div>                
                    </div>
                    <div className='main_contents'>
                        <div className="main_contents_title">
                            <div className="main_contents_popular"><span>인기 게시글</span></div>
                            <input className="main_contents_search" placeholder="전체"></input>
                        </div>
                        <div className="main_contents_post">
                            <div className="main_post">
                                <div>
                                    <img src={T1}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>45</span><img src={view}/><span>5</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T2}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>12</span><img src={view}/><span>55</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T3}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>9</span><img src={view}/><span>32</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T4}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>34</span><img src={view}/><span>19</span></label>
                                </div>
                            </div>                
                        </div>
                        <div className="main_contents_post">
                            <div className="main_post">
                                <div>
                                    <img src={T2}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>45</span><img src={view}/><span>5</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T1}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>12</span><img src={view}/><span>55</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T4}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>9</span><img src={view}/><span>32</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T3}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>34</span><img src={view}/><span>19</span></label>
                                </div>
                            </div>
                           
                        </div>
                        <div className="main_contents_post">
                            <div className="main_post">
                                <div>
                                    <img src={T1}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>45</span><img src={view}/><span>5</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T2}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>12</span><img src={view}/><span>55</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T3}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>9</span><img src={view}/><span>32</span></label>
                                </div>
                            </div>
                            <div className="main_post">
                                <div>
                                    <img src={T4}/>
                                </div>
                                <div className="main_post_title_div">
                                    <span className="main_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="main_post_detail">
                                    <span>userName</span> <label><img src={like}/><span>34</span><img src={view}/><span>19</span></label>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;