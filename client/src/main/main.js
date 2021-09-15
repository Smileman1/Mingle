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
import img_filter from '../public/icon/etc..px/filter icon.png';
import TermsModal from "../terms/terms";


class MainPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new MainFuntion();
        this.state = {
            isModalOpen: false,
        };
    }

    render() {
        return (
            <div className='main'>
                <Header main_openModal={this.function.main_openModal.bind(this)} m_page={this} />
                {/* l-o-l */}
                <div className="main_body">

                    <div className='main_search'>
                        <div className={classNames('main_search_div', 'font-14n')}>
                            <img
                                className={classNames('margin-l-15')}
                                src={search}
                            />
                            <input className={classNames('main_search_bar', 'font-14n')} placeholder="검색어를 입력하세요"/>
                        </div>
                        <div className={'main_searchBox_icon_area'}>
                            <div className={classNames('margin-l-13', 'margin-r-100')}>
                                전체
                            </div>
                            <img
                                src={img_filter}
                            />
                        </div>
                    </div>

                    <div className='main_contents'>
                        <div className="main_contents_title">
                            <div className="main_contents_popular"><span>인기 게시글</span></div>
                            <div className='main_filter_contain'>
                                <div className={classNames('main_filter_area', 'margin-r-21')}>
                                    <div className={classNames('font-14n', 'margin-l-16','margin-r-100')}>
                                        전체
                                    </div>
                                    <div>
                                        <img
                                            className={classNames('margin-b-2')}
                                            src={img_filter}
                                        />
                                    </div>
                                </div>

                                <div className={classNames('main_filter_area')}>
                                    <div className={classNames('font-14n', 'margin-l-16','margin-r-100')}>
                                        전체
                                    </div>
                                    <div>
                                        <img
                                            className={classNames('margin-b-2')}
                                            src={img_filter}
                                        />
                                    </div>
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
                <TermsModal isOpen={this.state.isModalOpen} closeModal={this.function.main_closeModal.bind(this)} page={this} />
            </div>
        )
    }
}

export default MainPage;
