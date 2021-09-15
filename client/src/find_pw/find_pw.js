//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './find_pw.css';
import FindPwFuntion from './f_find_pw';

//css class를 여러개 수용할수 있게 도와주는 classNames
import classNames from 'classnames';

//Logo 이미지가 들어올 부분
import LogoImg from '../img/tmp.png';


class FindPwPage extends React.Component {

    constructor() {
        super(undefined);
        this.function=new FindPwFuntion();
    }

    render() {
        return (
            <div className='main'>
                <div className='findpw_content'>
                    <img
                        className='login_logo_size'
                        src={ LogoImg }
                        alt='testA' />

                    <div>
                        <div>
                            <div className={classNames('font-24b', 'findpw_margin_bottom')}>
                                비밀번호 찾기
                            </div>

                            <div className= {classNames('font-14n','font-color-g', 'login_margin_top')}>
                                아이디
                                <input
                                    className={classNames('public_model_search_bar', 'font-14n')}
                                />
                            </div>

                            <div>
                                <button className={classNames('public_brandblue_btn',"login_submit_area")}type="bigBtn"><Link to='/login/pw_detail' className={classNames( 'font-18 n', 'font-color-w',)}>확인</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default FindPwPage;
