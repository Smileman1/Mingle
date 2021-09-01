import HttpClient from "../public/javascripts/http";
const serverURl = process.env.REACT_APP_SERVER_URL;
//ajax 통신을 위해 http 모듈을 담아서 클래스를 불러오기
const http=new HttpClient(serverURl);



export default class NoteFuntion {
    //function 작성하기

    note_delete_action(){

    }

    note_pdf_action(){

    }

    note_edit_action(){

    }

    note_like_action(){

    }

    note_comments_action(){

    }

}
