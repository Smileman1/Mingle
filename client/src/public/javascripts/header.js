import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(){
    return <header>
        <div>
            <div className='header_left'>
                <img src=""/>
                <label className='font-16n'>정리 노트 작성</label>
                <label className='font-16n'>오픈 채팅</label>
            </div>
            <div className='header_right'>
                <button className="public_grayline_btn margin-r-8"><Link className='font-14n font-color-g' to='/signup'>Sign Up</Link></button>
                <button className="public_brandblue_btn"><Link className='font-14n font-color-w' to='/login'>Log in</Link></button>
            </div>
        </div>
    </header>
}
