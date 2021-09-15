//signup 페이지 즉 html를 렌더링 하는 파일

import React from 'react';
import { Link } from 'react-router-dom'
import './writing.css';
import WritingFuntion from './f_writing.js';
import classNames from "classnames";
import Header from "../public/javascripts/header";

import img_image from "../public/icon/16px/image_icon.png"
import img_video from "../public/icon/16px/video_icon.png"
import img_link from "../public/icon/16px/link_icon.png"
import img_file from "../public/icon/16px/file_icon.png"
import img_search from '../public/icon/etc..px/search icon.png';
import img_filter from '../public/icon/etc..px/filter icon.png';


import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';



class WritingPage extends React.Component {
    editorRef = React.createRef();
    constructor() {
        super(undefined);
        this.function=new WritingFuntion();

        this.state = {

        }
    }

    //render(html) // 항상 모든 html은 class='main' 안에 componet들을 넣는 방향으
    render() {
        return (
            <div className='main'>
                <Header />
                <div className='writing_content'>

                    <div className={classNames('writing_head_set','margin-b-12')}>
                        <div className={classNames('font-12n','writing_check_agreement')}>
                            <input type='radio'name='isPublic' value='yes'/>공개
                            <input type='radio' name='isPublic' value='no' defaultChecked/>비공개
                        </div>
                        <button className={classNames('writing_del_button', 'font-14b')}>삭제</button>
                        <button className={classNames('writing_add_button', 'margin-l-8','font-14b')}>등록</button>
                    </div>
                    <hr className={'writing_hr'}/>

                    <div className={classNames('writing_serve_area', 'margin-b-27')}>
                        <div className={classNames('writing_icon_area', 'margin-r-23', 'margin-l-42')}>
                            <img
                                src={img_file}
                                className={classNames('writing_file_icon')}
                            />
                            <div className={classNames('margin-t-6', 'font-12n')}>
                                파일 첨부
                            </div>
                        </div>

                        <div className={classNames('writing_icon_area','margin-r-40')}>
                            <img
                                src={img_link}
                                className={classNames('writing_link_icon')}
                            />
                            <div className={classNames('margin-t-5', 'font-12n')}>
                                링크
                            </div>
                        </div>

                        <div className={classNames('writing_icon_area', 'margin-r-40')}>
                            <img
                                src={img_image}
                                className={classNames('writing_image_icon')}
                            />
                            <div className={classNames('margin-t-7', 'font-12n')}>
                                사진
                            </div>
                        </div>

                        <div className={classNames('writing_icon_area', 'margin-r-58')}>
                            <img
                                src={img_video}
                                className={classNames('writing_video_icon')}
                            />
                            <div className={classNames('margin-t-7', 'font-12n')}>
                                동영상
                            </div>
                        </div>

                        <div className={classNames( 'font-14n', 'writing_searchBox_area', 'margin-r-21')}>
                            <input className={classNames('writing_searchBox_input', 'font-14n')} placeholder="검색어를 입력하세요"/>
                            <div className={'writing_searchBox_icon_area'}>
                                <img src={img_search} className={classNames('writing_search_icon','margin-r-20')}/>
                            </div>
                        </div>

                        <div className={classNames('writing_filter_area')}>
                            <div className={classNames('font-14n', 'margin-l-14')}>
                                전체
                            </div>
                            <div>
                                <img src={img_filter} className={classNames('writing_filter_icon', 'margin-b-4')}/>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Editor
                            initialValue="Mingle"
                            previewStyle="vertical"
                            height="600px"
                            initialEditType="markdown"
                            useCommandShortcut={true}
                            ref={this.editorRef}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default WritingPage;
