//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';
import LoginFuntion from './f_login.js';

//css class를 여러개 수용할수 있게 도와주는 classNames
import classNames from 'classnames';

//Logo 이미지가 들어올 부분
import LogoImg from '../img/tmp.png';


class find_id extends React.Component {

    constructor() {
        super(undefined);
        this.function=new LoginFuntion();
    }

    render() {
        return (
            <div className='main'>
                <div className='login_main'>
                    <div className="login_logo_area">
                        <img
                            src={ LogoImg }
                            alt='testA' />
                    </div>

                    <div className='findid_content'>
                        <div>
                            <div>
                                <div className={classNames('font-24b', 'findid_margin_bottom')}>
                                    아이디 찾기
                                </div>

                                <div className={classNames('font-14n', 'font-color-g', 'findid_margin_top')}>
                                    회원가입 시 입력한 이메일
                                    <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>
                                    <button className="findid_sendCode">인증번호 발송</button>
                                </div>

                                <div className={classNames('font-14n', 'font-color-g', 'findid_margin_top')}>
                                    인증번호
                                    <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>
                                </div>

                                <div>
                                    <button className={classNames('public_brandblue_btn', 'font-14n', 'font-color-w',"login_submit_area")}type="bigBtn">확인</button>
                                </div>
                            </div>

                            <div className="findid_footer_group">
                                <div>회원님의 아이디는 <span>00000</span> 입니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default find_id;
