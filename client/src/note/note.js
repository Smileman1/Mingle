import React from 'react';
import { Link } from 'react-router-dom'
import './note.css';
import MainFuntion from './f_note.js';
import Header from '../public/javascripts/header.js';
import classNames from 'classnames';

import img_delete from '../public/icon/24px/24px delete.png'
import img_pdf from '../public/icon/24px/24px pdf transform.png'
import img_edit from '../public/icon/24px/24px edit.png'
import img_like from'../public/icon/24px/24px like.png'
import img_comments from '../public/icon/24px/24px comments.png'
import img_handLike from '../public/icon/16px/16px like.png'
import img_handDislike from '../public/icon/16px/16px dislike.png'

import img_profile_B from '../public/icon/etc..px/40px my menu.png'
import img_profile_S from '../public/icon/etc..px/16px my menu.png'

import background_img_Dog from '../img/dog.jpg'

class MainPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new MainFuntion();
    }



    render() {
        return (
            <div className='main'>
                <Header />
                <div className='note_content'>
                    <div>
                        <div className={classNames('note_info', 'note_header_margin')}>

                            <img
                                src={img_pdf}
                                alt={'pdf'}
                                className={'margin-r-4'}
                                onClick={this.function.note_pdf_action.bind(this)}
                            />
                            <img
                                src={img_edit}
                                alt={'edit'}
                                className={'margin-r-4'}
                                onClick={this.function.note_edit_action.bind(this)}
                            />
                            <img
                                src={img_delete}
                                alt={'delete'}
                                onClick={this.function.note_delete_action.bind(this)}
                            />

                        </div>

                        <div className={classNames('note_title', 'margin-t-10')}>
                            <div className={classNames('note_title_text', 'font-18n', 'font-color-w')}>
                                VPN을 이용한 네트워크 구축 강의1일차
                            </div>
                            <div className={classNames('note_title_info', 'margin-b-6')}>
                                <span>
                                    <img
                                        src={img_profile_S}
                                        className={classNames('note_profileImage_margin','margin-r-8', 'margin-l-13')}
                                    />
                                    <span className={classNames('font-color-w', 'font-14n', 'margin-r-11')}>
                                        아무개
                                    </span>
                                    <span className={classNames('font-color-w', 'font-14n')}>
                                        2021.08.25
                                    </span>
                                </span>

                                <label>
                                    <span>공개</span>
                                </label>
                            </div>
                        </div>

                        <div className={classNames('note_writing', 'font-20n')}>
                            작성내용
                        </div>

                        <div className={classNames('note_info', 'margin-t-10')}>
                            <img
                                src={img_like}
                                alt={'like'}
                                onClick={this.function.note_like_action.bind(this)}
                            />
                            15
                            <img
                                src={img_comments}
                                alt={'comments'}
                                className={'margin-l-18'}
                                onClick={this.function.note_comments_action.bind(this)}
                            />
                            17
                        </div>

                        <div className={classNames('note_comments', 'margin-b-10')}>
                            <img
                                src={img_profile_B}
                                className={classNames('note_profileImage_margin','margin-r-13', 'margin-t-10')}
                            />
                            <input
                                className={classNames('public_comments_search_bar')}
                                placeholder= '댓글을작성해주세요'
                            />
                        </div>

                        <div className={classNames('note_comments', 'margin-t-40')}>
                            <div>
                                <img
                                    src={img_profile_B}
                                    className={classNames('note_profileImage_margin','margin-r-13', 'margin-t-10')}
                                />
                            </div>
                            <div className={'margin-t-10'}>
                                <div className={'margin-b-2'}>
                                    <span className={'font-14b'}>아무개</span><span className={'note_comments_user_time'}>10분전</span>
                                </div>
                                <div className={'font-14n'}>
                                    밍글 mingle 강의 노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다.
                                </div>
                                <label>
                                    <img
                                        src={img_handLike}
                                        alt={'handLike'}
                                        onClick={this.function.note_like_action.bind(this)}
                                    />
                                    <span className={'margin-r-20'}>
                                        1
                                    </span>
                                    <img
                                        src={img_handDislike}
                                        alt={'handDislike'}
                                        className={'margin-t-4'}
                                        onClick={this.function.note_like_action.bind(this)}
                                    />
                                    <span className={'margin-r-59'}>
                                        2
                                    </span>
                                    <span className={'font-14b'}>
                                        답글
                                    </span>
                                </label>
                            </div>
                        </div>


                        <div className={classNames('note_comments', 'margin-t-40')}>
                            <div>
                                <img
                                    src={img_profile_B}
                                    className={classNames('note_profileImage_margin','margin-r-13', 'margin-t-10')}
                                />
                            </div>
                            <div className={'margin-t-10'}>
                                <div className={'margin-b-2'}>
                                    <span className={'font-14b'}>아무개</span><span className={'note_comments_user_time'}>10분전</span>
                                </div>
                                <div className={'font-14n'}>
                                    밍글 mingle 강의 노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다. 밍글 mingle. 강의노트 댓글입니다.
                                </div>
                                <label>
                                    <img
                                        src={img_handLike}
                                        alt={'handLike'}
                                        onClick={this.function.note_like_action.bind(this)}
                                    />
                                    <span className={'margin-r-20'}>
                                        1
                                    </span>
                                    <img
                                        src={img_handDislike}
                                        alt={'handDislike'}
                                        className={'margin-t-4'}
                                        onClick={this.function.note_like_action.bind(this)}
                                    />
                                    <span className={'margin-r-59'}>
                                        5
                                    </span>
                                    <span className={'font-14b'}>
                                        답글
                                    </span>
                                </label>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
