//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';
import LoginFuntion from './f_login.js';

//css class를 여러개 수용할수 있게 도와주는 classNames
import classNames from 'classnames';

//Logo 이미지가 들어올 부분
import LogoImg from '../img/tmp.png';
import TermsModal from "../terms/terms";


class LoginPage extends React.Component {
    constructor() {
        super(undefined);
        this.function=new LoginFuntion();
        //첫번째 문단은 input값에 입력된 값들
        //두번째 문단은 db를 거치기전 올바른 값인지 1차적으로 확인한 결과를 저장하는 부분이다.
        this.state = {
            login_id : "",
            login_pw : "",

            login_id_type : "hover",
            login_pw_type : "hover",

            isModalOpen: false,
        }
    }

    render() {
        return (
            <div className='main'>
                <div className='login_content'>
                    <div className="login_logo_area">
                        <img
                            className='login_logo_size'
                            src={ LogoImg }
                            alt='testA' />
                    </div>
                    <div>
                        <div>
                            <div>
                                <div className={classNames('font-24b')}>
                                    로그인
                                </div>
                                <div className= {this.state.login_id_type==="error" ? classNames('font-14b','font-color-r', 'login_margin_top') : classNames('font-14n','font-color-g', 'login_margin_top')}>
                                    아이디
                                    <input
                                        className={classNames('public_model_search_bar', 'font-14n')}
                                        type = {this.state.login_id_type}
                                        onFocus={this.function.login_Id_Focus.bind(this)}
                                        id="login_userId"
                                        onChange={this.function.login_Id_Change.bind(this)}
                                    />
                                </div>

                                {/*아이디 부분에서 checksum error가 일어났을 경우 경고창을 표시하는 부분*/}
                                {this.state.login_id_error ==="error" ?
                                    <div className={classNames('font-10n', 'font-color-r', 'login_margin_error')}>
                                        다시 확인해 주세요.
                                    </div> :
                                    <div>

                                    </div> }


                                <div className= {this.state.login_pw_type === "error" ? classNames('font-14b','font-color-r', 'login_margin_top') : classNames('font-14n','font-color-g', 'login_margin_top')}>
                                    비밀번호
                                    <input
                                        className={classNames('public_model_search_bar', 'font-14n', 'login_password')}
                                        type={this.state.login_pw_type}
                                        onFocus={this.function.login_Pw_Focus.bind(this)}
                                        id="login_userPw"
                                        onChange={this.function.login_Pw_Change.bind(this)}
                                    />
                                </div>

                                {/*비밀번호 부분에서 checksum error가 일어났을 경우 경고창을 표시하는 부분*/}
                                {this.state.login_pw_type === "error" ?
                                    <div className={classNames('font-10n', 'font-color-r', 'login_margin_error')}>
                                        다시 확인해 주세요.
                                    </div> :
                                    <div>

                                    </div> }

                                <div >
                                    <button
                                        className={classNames('public_brandblue_btn', 'font-14n', 'font-color-w',"login_submit_area")}
                                        type="bigBtn"
                                        onClick={this.function.login_Checksum.bind(this)}
                                    >확인</button>&nbsp;&nbsp;
                                </div>

                                <div className="login_footer_group">
                                <button className={classNames('font-14b','font-color-bu','login_footer_submit')} onClick={this.function.login_openModal.bind(this)}>회원가입</button>
                                <button className="login_footer_findID"/>
                                <button className={classNames('font-14n','login_footer','login_footer_findID')}><Link to='/login/id'>아이디 찾기</Link></button>
                                <button className={classNames('font-14n','login_footer','login_footer_findPW')}><Link to='/login/pw'>비밀번호 찾기</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TermsModal isOpen={this.state.isModalOpen} closeModal={this.function.login_closeModal.bind(this)} page={this} />
            </div>
        )
    }
}



export default LoginPage;
