import React from 'react';
import { Link } from 'react-router-dom'
import './myclassDetail.css';
import MainFuntion from '../myclass/f_myclass';
import Header from '../public/javascripts/header.js';
import classNames from 'classnames';
import ClassAddModal from "../module/classAdd/classAdd";

import T1 from '../img/t1.png';
import T2 from '../img/t2.png';
import T3 from '../img/t3.png';
import T4 from '../img/t4.png';

import check from '../public/icon/24px/24px check transparent.png';
import detail from '../public/icon/etc..px/detail icon.png';
import icon_link from '../public/icon/etc..px/lecture site.png';

import search from '../img/search.png';
import img_filter from '../public/icon/etc..px/filter icon.png';

import like from '../img/like.png';
import view from '../img/view.png';

import wednesday from '../public/icon/etc..px/30px su.png';
import thursday from '../public/icon/etc..px/30px mok.png';

class MainPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new MainFuntion();

        this.state = {
            classAddModalOpen: false,
        }
    }

    render() {
        return (
            <div className='myclass'>
                <Header />
                {/* l-o-l */}
                <div className="myclass_body_detail">


                    <div className="myclass_head_detail">
                        <div className="myclass_head_title_detail">나의 강의실</div>
                        <div className="myclass_head_myclass_detail">나의 강의</div>
                        <div><button className={classNames('myclass_head_enrollment', 'font-16n')} onClick={()=>{this.setState({classAddModalOpen : true})}}>강의 등록</button></div>
                    </div>

                    <div className='myclass_details'>
                        <div className='myclass_head_details'>
                            <div className="myclass_title_detail"><span>VPN을 이용한 네트워크 구축</span></div>  {/* JS로 변경 뒤 수정예정 */}
                            <div>
                                <div className="myclass_edit_detail"><span>편집</span></div>
                                <div className="myclass_delete_detail"><span>삭제</span></div>
                            </div>
                        </div>
                        <div className='myclass_detail_details'>
                            <div className="myclass_class_names">
                                <span className="myclass_name_detail">인프런</span>
                                <span className="myclass_tcontent_detail">"네트워크의 기초적인 내용을 배우고 VPN을 이용한 가상 사설망을 구축해보자."</span>
                            </div>
                            <div className="myclass_days">
                                <span className="myclass_note_detail">2020.08.07 - <span>2020.09.07</span></span>
                                <span className="myclass_check_detail">D-11</span>
                            </div>
                        </div>
                        <div className='myclass_schedule_de'>
                            <div className="myclass_schedule_time">
                                <div className="myclass_schedule_week">
                                    <img src={wednesday}/>
                                    <span>10:00 - 11:00</span>
                                </div>
                                <div className="myclass_schedule_week">
                                    <img src={thursday}/>
                                    <span>11:00 - 12:00</span>
                                </div>
                            </div>
                            <div className="myclass_details_schedule_per">
                                <span>진도율</span>
                                <progress value="60" max="100"></progress>
                                <span>60%</span>
                            </div>

                        </div>

                    </div>

                    <div className='myclass_contents_details'>
                        <div className="myclass_contents_title_detail">
                            <div>
                                <div className="myclass_contents_detail_header"><span>해당 강의노트</span></div>
                                <span className='myclass_contents_warning'>(해당 강의를 삭제하더라도 노트는 지워지지 않습니다.)</span>
                            </div>
                            <div className='myclass_filter_contain_detail'>
                                <div className='myclass_search_detail'>
                                    <div className={classNames('myclass_search_div_detail', 'font-14n')}>

                                        <input className={classNames('myclass_search_bar_detail', 'font-14n')} placeholder="검색어를 입력하세요"/>
                                    </div>
                                    <div className={'myclass_searchBox_icon_area_detail'}>
                                        <div className={classNames('margin-l-13', 'margin-l-40')}>
                                        <img
                                            className={classNames('margin-lr-16')}
                                            src={search}
                                        />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="myclass_contents_post_details">
                            <div className="myclass_post_details">
                                <div className="myclass_post_picture_detail">
                                    <img src={T1}/>
                                </div>
                                <div className="myclass_post_title_div_detail">
                                    <span className="myclass_post_title_detail">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail_details">
                                    <span>userName</span> <label><img src={like}/><span>45</span><img src={view}/><span>5</span></label>
                                </div>
                            </div>
                            <div className="myclass_post_details">
                                <div className="myclass_post_picture_detail">
                                    <img src={T2}/>
                                </div>
                                <div className="myclass_post_title_div_detail">
                                    <span className="myclass_post_title_detail">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail_details">
                                    <span>userName</span> <label><img src={like}/><span>5</span><img src={view}/><span>25</span></label>
                                </div>
                            </div>
                            <div className="myclass_post_details">
                                <div className="myclass_post_picture_detail">
                                    <img src={T3}/>
                                </div>
                                <div className="myclass_post_title_div_detail">
                                    <span className="myclass_post_title_detail">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail_details">
                                    <span>userName</span> <label><img src={like}/><span>45</span><img src={view}/><span>23</span></label>
                                </div>
                            </div>
                            <div className="myclass_post_details">
                                <div className="myclass_post_picture_detail">
                                    <img src={T4}/>
                                </div>
                                <div className="myclass_post_title_div_detail">
                                    <span className="myclass_post_title_detail">유학 기초부터 실전까지</span>
                                </div>
                                <div className="myclass_post_detail_details">
                                    <span>userName</span> <label><img src={like}/><span>46</span><img src={view}/><span>4</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ClassAddModal isOpen={this.state.classAddModalOpen} closeModal={()=>{this.setState({classAddModalOpen : false})}} page={this} />
            </div>
        )
    }
}

export default MainPage;
