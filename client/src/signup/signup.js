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
    }

    // // //동적으로 변하는 데이터를 담는 Object(memory heap)
    // // 왠만하면 사용하지 않도록 모든 함수는 f_signup.js의 class에 선언하는 것이 규칙(추후 유지보수 및 변경 작업에서 힘들어짐)
    // state = {
    //     count: 0,
    //     data: 1
    // }

    //render(html) // 항상 모든 html은 class='main' 안에 componet들을 넣는 방향으
    render() {
        return (
            <div className='main'>
                <div className="signup_logo_area">
                    <img
                        src={ LogoImg }
                        alt='testA' />
                </div>

                <div className='signup_content'>
                    <div>
                        <div className={classNames('font-24b', 'signup_margin_bottom')}>
                            회원가입
                        </div>

                        <div className={classNames('font-14b', 'font-color-bu')}>
                            닉네임
                            <input className={classNames('public_model_search_bar', 'font-14n')} type="active"/>
                        </div>

                        
                        <div className={classNames('font-14b', 'font-color-bu', 'signup_margin_top')}>
                            아이디
                            <input className={classNames('public_model_search_bar', 'font-14n')} type="active"/>
                        </div>

                        <div className={classNames('font-14n', 'font-color-b', 'signup_margin_top')}>
                            비밀번호
                            <input className={classNames('public_model_search_bar', 'font-14n')} type="password"/>
                        </div>

                        <div className={classNames('font-14n', 'font-color-b', 'signup_margin_top')}>
                            비밀번호 확인
                            <input className={classNames('public_model_search_bar', 'font-14n')} type="error"/>
                        </div>
                        <div className={classNames('font-10n', 'font-color-r', 'singup_margin_error')}>
                            다시 확인해 주세요.
                        </div>
                        <div className={classNames('font-14n', 'font-color-g', 'signup_margin_top')}>
                            이메일
                            <input className={classNames('public_model_search_bar', 'font-14n')} type="hover"/>
                        </div>
                        <div >
                            <button className={classNames('public_brandblue_btn', 'font-14n', 'font-color-w',"signup_submit_area")}type="bigBtn">확인</button>&nbsp;&nbsp;
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
    // //render가 update(갱신)된 후 작동하는 함수
    // // 왠만하면 사용하지 않도록 모든 함수는 f_signup.js의 class에 선언하는 것이 규칙(추후 유지보수 및 변경 작업에서 힘들어짐)
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    // }
}

export default SignUpPage;
