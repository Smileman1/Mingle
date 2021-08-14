//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';
import LoginFuntion from './f_login.js';

//css class를 여러개 수용할수 있게 도와주는 classNames
import classNames from 'classnames';

//Logo 이미지가 들어올 부분
import LogoImg from '../img/tmp.png';


class LoginPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new LoginFuntion();
    }

    render() {
        return (
            <div className='main'>
                <div className="login_logo_area">
                    <img
                        src={ LogoImg }
                        alt='testA' />
                </div>

                <div className='login_content'>
                    <div>
                        <div className={classNames('font-24b', 'login_margin_bottom')}>
                            로그인
                        </div>

                        <div className={classNames('font-14n', 'font-color-g', 'login_margin_top')}>
                            아이디
                            <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>
                        </div>

                        <div className={classNames('font-14n', 'font-color-g', 'login_margin_top')}>
                            비밀번호
                            <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>
                        </div>

                        <div >
                            <button className={classNames('public_brandblue_btn', 'font-14n', 'font-color-w',"login_submit_area")}type="bigBtn">확인</button>&nbsp;&nbsp;
                        </div>
                    </div>

                    <div className="login_footer_group">
                        <button className={classNames('font-14b','font-color-bu','login_footer_submit')}>회원가입</button>
                        <button className="login_footer_findID"/>
                        <button className={classNames('font-14n','login_footer','login_footer_findID')}>아이디 찾기</button>
                        <button className={classNames('font-14n','login_footer','login_footer_findPW')}>비밀번호 찾기</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default LoginPage;
