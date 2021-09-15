//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './find_pw_detail.css';
import FindPwDetailFuntion from './f_find_pw_detail';

//css class를 여러개 수용할수 있게 도와주는 classNames
import classNames from 'classnames';

//Logo 이미지가 들어올 부분
import LogoImg from '../img/tmp.png';


class FindPwDetailPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new FindPwDetailFuntion();
    }

    render() {
        return (
            <div className='main'>
                <div className='findpw_detail_content'>
                        <img
                            className='findpw_detail_logo_size'
                            src={ LogoImg }
                            alt='testA' />
                    <div>
                        <div>
                            <div className={classNames('font-24b', 'findpw_margin_bottom')}>
                                비밀번호 찾기
                            </div>

                            <div className={classNames('font-14n', 'font-color-g', 'findpw_margin_top')}>
                                회원가입 시 입력한 이메일
                                <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>
                                <button className="findpw_sendCode">인증번호 발송</button>
                            </div>

                            <div className={classNames('font-14n', 'font-color-g', 'findpw_margin_top')}>
                                인증번호
                                <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>
                            </div>
                            <div className='findpw_detail_confirmcode'>
                                <div>잘못된 인증번호입니다.</div><span>제한시간 3분</span>
                            </div>



                            <div className={classNames('font-14n', 'font-color-g', 'findpw_margin_top')}>
                                변경할 비밀번호
                                <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>
                            </div>

                            <div className={classNames('font-14n', 'font-color-g', 'findpw_margin_top')}>
                                비밀번호 확인
                                <input className={classNames('public_model_search_bar', 'font-14n')}type="hover"/>
                            </div>
                            <div className='findpw_detail_confirmPw'>
                                <div>다시 확인해 주세요.</div>
                            </div>

                            <div>
                                <button className={classNames('public_brandblue_btn', 'font-14n', 'font-color-w',"findpw_detail_submit")}type="bigBtn">확인</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}

export default FindPwDetailPage;
