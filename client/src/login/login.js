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
        this.state = {
            id_error : false,
            pw_error : false,
        }
    }

    // input에 입력한 값이 올바른 값인지 확인하는 함수 (이걸 f_login.js에 넣을려고 했는데 현재 state값을 변동시켜야해서 잠시 보류)
    login_Checksum(){
        this.setState({
            id_error : this.function.login_id_Checksum(),
            pw_error : this.function.login_pw_Checksum()
        })
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
                    <div className='login_content'>
                        <div>
                            <div>
                                <div className={classNames('font-24b', 'login_margin_bottom')}>
                                    로그인
                                </div>

                                <div className={classNames('font-14n', 'font-color-g', 'login_margin_top')}>
                                    아이디
                                    <input
                                        className={classNames('public_model_search_bar', 'font-14n')}
                                        type={this.state.id_error ? "error" : "hover"}
                                        id="login_userId"
                                        onChange={this.function.idChange}
                                    />
                                </div>

                                {/*아이디 부분에서 checksum error가 일어났을 경우 경고창을 표시하는 부분*/}
                                {this.state.id_error ?
                                    <div className={classNames('font-10n', 'font-color-r', 'login_margin_error')}>
                                        다시 확인해 주세요.
                                    </div> :
                                    <div>

                                    </div> }


                                <div className={classNames('font-14n', 'font-color-g', 'login_margin_top')}>
                                    비밀번호
                                    <input
                                        className={this.state.pw_error? classNames('login_input_error', 'font-14n') : classNames('login_input_hover', 'font-14n')}
                                        type="password"
                                        id="login_userPw"
                                        onChange={this.function.pwChange}
                                    />
                                </div>

                                {/*비밀번호 부분에서 checksum error가 일어났을 경우 경고창을 표시하는 부분*/}
                                {this.state.pw_error ?
                                    <div className={classNames('font-10n', 'font-color-r', 'login_margin_error')}>
                                        다시 확인해 주세요.
                                    </div> :
                                    <div>

                                    </div> }

                                <div >
                                    <button
                                        className={classNames('public_brandblue_btn', 'font-14n', 'font-color-w',"login_submit_area")}
                                        type="bigBtn"
                                        onClick={this.login_Checksum.bind(this)}
                                    >확인</button>&nbsp;&nbsp;
                                </div>

                                <div className="login_footer_group">
                                <button className={classNames('font-14b','font-color-bu','login_footer_submit')}><Link to='/login/terms'>회원가입</Link></button>
                                <button className="login_footer_findID"/>
                                <button className={classNames('font-14n','login_footer','login_footer_findID')}><Link to='/login/id'>아이디 찾기</Link></button>
                                <button className={classNames('font-14n','login_footer','login_footer_findPW')}><Link to='/login/pw'>비밀번호 찾기</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LoginPage;
