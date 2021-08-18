//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';
import LoginFuntion from './f_login.js';

//css class를 여러개 수용할수 있게 도와주는 classNames
import classNames from 'classnames';

//Logo 이미지가 들어올 부분
import LogoImg from '../img/tmp.png';


class find_pw extends React.Component {

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

                    <div className='findpw_content'>
                        <div>
                            <div className={classNames('font-24b', 'findpw_margin_bottom')}>
                                비밀번호 찾기
                            </div>

                            <div className={classNames('font-14n', 'font-color-g', 'findpw_margin_top')}>
                                사용자 아이디
                                <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>

                            </div>

                            <div>
                                <button className={classNames('public_brandblue_btn', 'font-14n', 'font-color-w',"login_submit_area")}type="bigBtn"><Link to='/login/pw_detail'>확인</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default find_pw;
