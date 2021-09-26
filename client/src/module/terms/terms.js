import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./terms.css";
import classNames from "classnames";
import TermsFuntion from "./f_terms";

import img_x from "../../public/icon/16px/16px x .png"

class TermsModal extends Component {

    constructor() {
        super(undefined);
        this.function=new TermsFuntion();
    }

    render() {
        const { isOpen, closeModal, page } = this.props;   //아까 버튼에서 props로 가져온것
        return (
            <>
                {isOpen ? (
                    <div className="modal">
                        <div >
                            <div className="terms_Modal">

                                <div className="terms_modalContents" >
                                    <div>
                                        <div className='terms_header'>
                                            <div className='terms_term'>
                                                약관
                                                <img
                                                    className='terms_xIcon'
                                                    src={img_x}
                                                    onClick={()=>{closeModal(page)}}
                                                />
                                            </div>
                                        </div>
                                        <div className='terms_titles2'>
                                            이용약관 동의(필수)
                                        </div>
                                        <div className='terms_contents'>
                                            저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                            저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                            저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                        </div>
                                        <div className={classNames('font-12n','terms_check_agreement')}>
                                            <div className='margin-t-2'>동의하시겠습니까?</div>
                                            <input type='radio'name='firstTerms' value='yes'/><span className='margin-t-2'>예</span>
                                            <input type='radio' name='firstTerms' value='no' defaultChecked/><span className='margin-t-2'>아니요</span>
                                        </div>

                                        <div className='terms_titles'>
                                            개인정보 수집 및 이용동의(필수)
                                        </div>
                                        <div className='terms_contents'>
                                            저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                            저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                        </div>
                                        <div className={classNames('font-12n','terms_check_agreement')}>
                                            <div className='margin-t-2'>동의하시겠습니까?</div>
                                            <input type='radio'name='secondTerms' value='yes'/><span className='margin-t-2'>예</span>
                                            <input type='radio' name='secondTerms' value='no' defaultChecked/><span className='margin-t-2'>아니요</span>
                                        </div>

                                        <div className='terms_titles'>
                                            머시기 저시기 이용동의(선택)
                                        </div>
                                        <div className='terms_contents'>
                                            저희 Mingle은 이용자의 개인정보를 보호하고 이와 관련한 고층을 신속하고 원할하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개하며.......이용약관 머시기.......
                                        </div>
                                        <div className={classNames('font-12n','terms_check_agreement')}>
                                            <div className='margin-t-2'>동의하시겠습니까?</div>
                                            <input type='radio'name='thirdTerms' value='yes'/><span className='margin-t-2'>예</span>
                                            <input type='radio' name='thirdTerms' value='no' defaultChecked/><span className='margin-t-2'>아니요</span>
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
                    </div>
                ) : null}
            </>
        );
    }
}

export default TermsModal;
