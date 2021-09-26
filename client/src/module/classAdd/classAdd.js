import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./classAdd.css";
import classNames from "classnames";
import ClassAddFuntion from "./f_classAdd";

import img_x from "../../public/icon/16px/16px x .png"
import img_plus from "../../public/icon/etc..px/Plus icon.png"
import img_calender from "../../public/icon/etc..px/calender icon.png"
import img_time from "../../public/icon/etc..px/time icon.png"
import img_filter from "../../public/icon/etc..px/filter icon.png"

class ClassAddModule extends Component {

    constructor() {
        super(undefined);
        this.function=new ClassAddFuntion();
    }

    render() {
        const { isOpen, closeModal, page } = this.props;   //아까 버튼에서 props로 가져온것
        return (
            <>
                {isOpen ? (
                    <div className="modal">
                        <div >
                            <div className="classAdd_Modal">

                                <div className="classAdd_modalContents" >
                                    <div>
                                        <div className='classAdd_header'>
                                            <img
                                                className='classAdd_xIcon'
                                                src={img_x}
                                                onClick={()=>{closeModal(page)}}
                                            />
                                        </div>
                                    </div>

                                    <div className={classNames('classAdd_title_font','margin-b-17')}>강의명</div>
                                    <input
                                        className={'classAdd_big_search_bar'}
                                        placeholder='강의명을 입력해주세요.'
                                    />

                                    <div className={'classAdd_line_area'}>
                                        <div className={'classAdd_line_area_detail'}>
                                            <div className={classNames('classAdd_title_font','margin-b-17')}>Online site</div>
                                            <input
                                                className={'classAdd_small_search_bar'}
                                                placeholder='강의 사이트 주소를 입력해주세요.'
                                            />
                                        </div>

                                        <div className={'classAdd_two_area'}>
                                            <div className={classNames('classAdd_title_font', 'margin-b-17')}>URL 주소</div>
                                            <input
                                                className={'classAdd_small_search_bar'}
                                                placeholder='URL 주소를 입력해 주세요.'
                                            />
                                        </div>
                                    </div>

                                    <div className={'classAdd_line_area'}>
                                        <div className={'classAdd_line_area_detail'}>
                                            <div className={classNames('classAdd_title_font', 'margin-b-7')}>시작일</div>
                                            <div className='classAdd_big_select_box'>
                                                <img
                                                    className={classNames('classAdd_calender_img')}
                                                    src={img_calender}
                                                />
                                                <div className='classAdd_calender_text'>
                                                    2021-08-20
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'classAdd_line_area_detail'}>
                                            <div className={classNames('classAdd_title_font', 'margin-b-7')}>마감일</div>
                                            <div className='classAdd_big_select_box'>
                                                <img
                                                    className={classNames('classAdd_calender_img')}
                                                    src={img_calender}
                                                />
                                                <div className='classAdd_calender_text'>
                                                    2021-08-20
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classNames('classAdd_title_font', 'margin-b-7')}>수강시간</div>
                                    <div className={'classAdd_line_area'}>
                                        <div className={'classAdd_line_area_detail'}>
                                            <div className='classAdd_small_select_box'>
                                                <div className='classAdd_week_text'>
                                                    요일
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'classAdd_line_area_detail'}>
                                            <div className='classAdd_small_select_box'>
                                                <img
                                                    className={classNames('classAdd_time_img')}
                                                    src={img_time}
                                                />
                                                <div className='classAdd_time_text'>
                                                    시작
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'classAdd_line_area_detail'}>
                                            <div className='classAdd_small_select_box'>
                                                <img
                                                    className={classNames('classAdd_time_img')}
                                                    src={img_time}
                                                />
                                                <div className='classAdd_time_text'>
                                                    완료
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className={classNames('classAdd_title_font', 'margin-b-7', 'classAdd_text_button_line')}>
                                            분류
                                        </div>
                                        <div className='classAdd_plus_button_area'>
                                            <img
                                                className='classAdd_plus_img'
                                                src={img_plus}
                                            />
                                        </div>
                                    </div>
                                    <div className={'classAdd_line_area'}>
                                        <div className={'classAdd_line_area_detail'}>
                                            <div className='classAdd_big_select_box'>
                                                <div className='classAdd_filter_text'>
                                                    1차
                                                </div>
                                                <img
                                                    className='classAdd_filter_img'
                                                    src={img_filter}
                                                />
                                            </div>
                                        </div>

                                        <div className={'classAdd_line_area_detail'}>
                                            <div className='classAdd_big_select_box'>
                                                <div className='classAdd_filter_text'>
                                                    1차
                                                </div>
                                                <img
                                                    className='classAdd_filter_img'
                                                    src={img_filter}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className={classNames('classAdd_title_font', 'margin-b-17')}>강의요약</div>
                                        <textarea
                                            className='classAdd_summary_area'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}

export default ClassAddModule;
