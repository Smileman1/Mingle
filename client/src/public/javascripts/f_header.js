import HttpClient from "./http";
const serverURl = process.env.REACT_APP_SERVER_URL;
//ajax 통신을 위해 http 모듈을 담아서 클래스를 불러오기
const http=new HttpClient(serverURl);

//sign up 페이지 기능들을 모아두는 파일

export default class headerFuntion {
    //function 작성하기
}

export function profile_detail(e){
    console.log("aa");
    let profileModal = document.getElementsByClassName('profile_modal')[0];
    profileModal.classList.toggle("profile_modal_activation")
} 
