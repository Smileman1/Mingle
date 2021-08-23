//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './signup.css';
import SignUpFuntion from './f_signup.js';
import LogoImg from "../img/tmp.png";
import classNames from "classnames";

class SignUpPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new SignUpFuntion();
        // // //동적으로 변하는 데이터를 담는 Object(memory heap)
        // // 왠만하면 사용하지 않도록 모든 함수는 f_signup.js의 class에 선언하는 것이 규칙(추후 유지보수 및 변경 작업에서 힘들어짐)
        //맨 위의 문단은 input값에 입력된 값들이다.
        //두번째 문단은 각 input값의 현재가지고 있는 type이다.
        //마지막 문단은 현재 비밀번호 확인이 끝마친 상태인지 확인해 이메일 부분의 입력을 받을지 결정하는 부분이다.
        this.state = {
            signup_nickname : "",
            signup_id : "",
            signup_pw : "",
            signup_pwCheck : "",
            signup_email : "",

            signup_nickname_type : "hover",
            signup_id_type : "hover",
            signup_pw_type : "hover",
            signup_pwCheck_type : "hover",
            signup_email_type : "hover",

            signup_email_disable : true
        }
    }

    //render(html) // 항상 모든 html은 class='main' 안에 componet들을 넣는 방향으
    render() {
        return (
            <div className='main'>
                <div className='signup_content'>
                    <div className="signup_logo_area">
                        <img
                            src={LogoImg}
                            alt='testA'/>
                    </div>

                    <div>
                        <div>
                            <div className='font-24b signup_margin_bottom'>
                                회원가입
                            </div>

                            <div className= {this.state.signup_nickname_type==="active" ? classNames('font-14b','font-color-bu') : classNames('font-14n','font-color-b')}>
                                닉네임
                                <input
                                    className= {classNames ('public_model_search_bar', 'font-14n')}
                                    type={this.state.signup_nickname_type}
                                    onChange={this.function.signup_Nickname_Change.bind(this)}
                                    onFocus={this.function.signup_Nickname_Focus.bind(this)}
                                    onBlur={this.function.signup_Check_Input.bind(this)}
                                />
                            </div>

                            <div className= {this.state.signup_id_type==="active" ? classNames('font-14b','font-color-bu','signup_margin_top') : classNames('font-14n','font-color-b','signup_margin_top')}>
                                아이디
                                <input
                                    className={classNames('public_model_search_bar', 'font-14n')}
                                    type={this.state.signup_id_type}
                                    onChange={this.function.signup_Id_Change.bind(this)}
                                    onFocus={this.function.signup_Id_Focus.bind(this)}
                                    onBlur={this.function.signup_Check_Input.bind(this)}
                                />
                            </div>

                            <div className= {this.state.signup_pw_type==="active" ? classNames('font-14b','font-color-bu','signup_margin_top') : classNames('font-14n','font-color-b','signup_margin_top')}>
                                비밀번호
                                <input

                                    className={classNames( 'public_model_search_bar', 'font-14n','signup_password')}
                                    type={this.state.signup_pw_type}
                                    onChange={this.function.signup_Pw_Change.bind(this)}
                                    onFocus={this.function.signup_Pw_Focus.bind(this)}
                                    onBlur={this.function.signup_Check_Input.bind(this)}
                                />
                            </div>

                            <div className= {this.state.signup_pwCheck_type==="active" ? classNames('font-14b','font-color-bu','signup_margin_top_3') : classNames('font-14n','font-color-b','signup_margin_top_3')}>
                                비밀번호 확인
                                <input
                                    className={classNames('public_model_search_bar', 'font-14n','signup_password')}
                                    type={this.state.signup_pwCheck_type}
                                    onChange={this.function.signup_PwCheck_Change.bind(this)}
                                    onFocus={this.function.signup_PwCheck_Focus.bind(this)}
                                    onBlur={this.function.signup_pwcheck_Checksum.bind(this,this.state.signup_pw, this.state.signup_pwCheck, this)}
                                />
                            </div>
                            {this.state.signup_pwCheck_type === "error" ?
                                <div className={classNames('font-10n', 'font-color-r', 'login_margin_error')}>
                                    다시 확인해 주세요.
                                </div> :
                                <div>

                                </div> }

                            <div className= {this.state.signup_email_disable ? classNames('font-14n', 'font-color-g', 'signup_margin_top') : this.state.signup_email_type==="active" ?
                                classNames('font-14b','font-color-bu','signup_margin_top') : classNames('font-14n','font-color-b','signup_margin_top')}>
                                이메일
                                <input
                                    className={classNames('public_model_search_bar', 'font-14n')}
                                    type={this.state.signup_email_type}
                                    disabled={this.state.signup_email_disable}
                                    onChange={this.function.signup_Email_Change.bind(this)}
                                    onFocus={this.function.signup_Email_Focus.bind(this)}
                                    onBlur={this.function.signup_Check_Input.bind(this)}
                                />
                            </div>
                            <div >
                                <button
                                    className={classNames('public_brandblue_btn', 'font-14n', 'font-color-w',"signup_submit_area")}
                                    type="bigBtn"
                                    onClick={this.function.signup_submit.bind(this)}
                                >확인</button>&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // // render를 하면 호출되는 Life Cycle Method
    // // 왠만하면 사용하지 않도록 모든 함수는 f_signup.js의 class에 선언하는 것이 규칙(추후 유지보수 및 변경 작업에서 힘들어짐)
    // componentDidMount() {
    //     let target = this;
    //     document.getElementById('plus').addEventListener('click',function(){
    //         // signup.first(target);
    //         target.http.fetch(`/network`, {
    //             method: 'POST',
    //             body: JSON.stringify({username: 'raccoon', name: 'dongwook'}),
    //         }).then(result => {
    //             console.log('프론트 결과값:',result);
    //         });
    //     })
    // }
    //
    //render가 update(갱신)된 후 작동하는 함수
    // 왠만하면 사용하지 않도록 모든 함수는 f_signup.js의 class에 선언하는 것이 규칙(추후 유지보수 및 변경 작업에서 힘들어짐)
    // 비밀번호 확인 부분에서 한글자 한글자 칠때마다 입력한 비밀번호와 동일한지 판별하게 하였다.
    componentDidUpdate(prevProps, prevState) {
        if(prevState.signup_pwCheck !== this.state.signup_pwCheck){
            this.function.signup_pwcheck_Checksum(this.state.signup_pw, this.state.signup_pwCheck, this)
        }
    }
}

export default SignUpPage;
