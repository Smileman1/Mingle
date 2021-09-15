import React from 'react';
import { Link } from 'react-router-dom'
import './myclass.css';
import MainFuntion from './f_myclass';
import Header from '../public/javascripts/header.js';
import classNames from 'classnames';

import T1 from '../img/t1.png';
import T2 from '../img/t2.png';
import T3 from '../img/t3.png';
import T4 from '../img/t4.png';

import like from '../img/like.png';
import view from '../img/view.png';

import check from '../public/icon/24px/24px check transparent.png';
import detail from '../public/icon/etc..px/detail icon.png';
import icon_link from '../public/icon/etc..px/lecture site.png';

import search from '../img/search.png';
import img_filter from '../public/icon/etc..px/filter icon.png';

class MainPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new MainFuntion();
    }

    render() {
        return (
            <div className='myclass'>
                <Header />
                {/* l-o-l */}
                <div className="myclass_body">


                    <div className="myclass_head">
                        <div className="myclass_head_title">나의 강의실</div>
                        <div className="myclass_head_myclass">나의 강의</div>
                        <div className="myclass_head_enrollment">강의 등록</div>
                    </div>

                    <div className='myclass_today'>
                        <div className='myclass_today_head'>
                            <div className="myclass_today_title"><span>오늘의 강의</span></div>
                            <div className="myclass_today_save"><span>저장</span></div>
                        </div>
                        <div className='myclass_today_detail'>
                            <span className="myclass_today_name">강의명</span>
                            <span className="myclass_today_time">시작시간</span>
                            <span className="myclass_today_note">강의노트</span>
                            <span className="myclass_today_check">수강체크</span>
                        </div>
                        <div className="myclass_today_content_form">
                            <div className="myclass_today_content">
                                <span className="myclass_today_content_title">React를 이용한 To do list 만들기</span>
                                <span className="myclass_today_content_time">18:00</span>
                                <div className="myclass_today_content_note"><span>작성하기</span></div>
                                <div className="myclass_today_content_check"><img src={check}/></div>
                                
                                
                            </div>
                            <div className="myclass_today_content">
                                <span className="myclass_today_content_title">vpn을 이용한 네트워크 구축</span>
                                <span className="myclass_today_content_time">17:00</span>
                                <div className="myclass_today_content_note"><span>작성하기</span></div>
                                <div className="myclass_today_content_check"><img src={check}/></div>
                                
                            </div>
                        </div>
                    </div>

                    <div className='myclass_contents'>
                        <div className="myclass_contents_title">
                            <div className="myclass_contents_popular"><span>강의 목록</span></div>
                            <div className='myclass_filter_contain'>
                                <div className='myclass_search'>
                                    <div className={classNames('myclass_search_div', 'font-14n')}>
                                        
                                        <input className={classNames('myclass_search_bar', 'font-14n')} placeholder="검색어를 입력하세요"/>
                                    </div>
                                    <div className={'myclass_searchBox_icon_area'}>
                                        <div className={classNames('margin-l-13', 'margin-l-40')}>
                                        <img
                                            className={classNames('margin-lr-16')}
                                            src={search}
                                        />
                                        </div>
                                    </div>
                                </div>    
                                <div className={classNames('myclass_filter_area')}>
                                    <div className={classNames('font-14n', 'margin-l-16','margin-r-100')}>
                                        전체
                                    </div>
                                    <div className="myclass_filter_area_img">
                                        <img
                                            className={classNames('margin-b-2')}
                                            src={img_filter}
                                        />
                                    </div>
                                </div>                    
                            </div>
                            
                        </div>
                        <div className="myclass_contents_post">
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T1}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T2}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T3}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T4}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                        </div>
                        <div className="myclass_contents_post">
                        <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T3}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T1}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T4}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T2}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>

                        </div>
                        <div className="myclass_contents_post">
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T1}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T3}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T1}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
                                </div>
                            </div>
                            <div className="myclass_post">
                                <div className="myclass_post_picture">
                                    <img src={T2}/>
                                    <progress value="20" max="100"></progress>
                                </div>
                                <div className="myclass_post_title_div">
                                    <span className="myclass_post_title">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail">
                                    <span>D-100</span> <label><img className="myclass_detail_icon" src={detail}/><img src={icon_link}/></label>
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
