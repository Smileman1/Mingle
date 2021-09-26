import HttpClient from "../public/javascripts/http";
const serverURl = process.env.REACT_APP_SERVER_URL;
//ajax 통신을 위해 http 모듈을 담아서 클래스를 불러오기
const http=new HttpClient(serverURl);

//sign up 페이지 기능들을 모아두는 파일

export default function MainFuntion() {
    //function 작성하기
    let classList = document.getElementsByClassName("myclass_today_content_title");
    for(let i=0; i<classList.length; i++){
        classList[i].addEventListener("click",moveDetailPage(i,classList))
    }

    function moveDetailPage(index,classList){

    }
}
