//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';
import LoginFuntion from './f_login.js';

//css class를 여러개 수용할수 있게 도와주는 classNames
import classNames from 'classnames';

//Logo 이미지가 들어올 부분
import LogoImg from '../img/tmp.png';


class terms extends React.Component {

    constructor() {
        super(undefined);
        this.function=new LoginFuntion();
    }

    render() {
        return (
            <div className='main'>
                <div className='login_main'>
                    <div className='terms_content'>
                        <div>
                            <div className='terms_term'>
                                약관
                            </div>

                            <div className='terms_titles'>
                                이용약관 동의(필수)
                            </div>
                            <div className='terms_contents'>
                                저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                            </div>
                            <div className={classNames('font-12n','terms_check_agreement')}>
                                <div>동의하시겠습니까?</div>
                                <input type='radio'name='firstTerms' value='yes'/>예
                                <input type='radio' name='firstTerms' value='no' defaultChecked/>아니오
                            </div>

                            <div className='terms_titles'>
                                개인정보 수집 및 이용동의(필수)
                            </div>
                            <div className='terms_contents'>
                                저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                            </div>
                            <div className={classNames('font-12n','terms_check_agreement')}>
                                <div>동의하시겠습니까?</div>
                                <input type='radio'name='secondTerms' value='yes'/>예
                                <input type='radio' name='secondTerms' value='no' defaultChecked/>아니오
                            </div>

                            <div className='terms_titles'>
                                머시기 저시기 이용동의(선택)
                            </div>
                            <div className='terms_contents'>
                                저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                            </div>
                            <div className={classNames('font-12n','terms_check_agreement')}>
                                <div>동의하시겠습니까?</div>
                                <input type='radio'name='thirdTerms' value='yes'/>예
                                <input type='radio' name='thirdTerms' value='no' defaultChecked/>아니오
                            </div>
                            <div className='terms_warning'>
                                필수 약관에 모두 동의해 주세요.
                            </div>
                            <div className='terms_foot'>
                                <span>전체 동의 하시겠습니까?</span>
                                <input type='radio'name='fourthTerms' value='yes'/><div className='terms_all_agreement'>예</div>
                                <input type='radio' name='fourthTerms' value='no' defaultChecked/><div className='terms_all_agreement'>아니오</div>
                                <button className={classNames('public_brandblue_btn', 'terms_submit')}><Link className='font-14n font-color-w' to='/signup'>확인</Link></button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default terms;
