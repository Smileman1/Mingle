import HttpClient from "../public/javascripts/http";
const serverURl = process.env.REACT_APP_SERVER_URL;

//ajax 통신을 위해 http 모듈을 담아서 클래스를 불러오기
const http=new HttpClient(serverURl);

//log in 페이지 기능들을 모아두는 파일


var login_id = ""
var login_pw = ""

export default class LoginFuntion {
    //function 작성하기

    //id input값에 입력값이 있을때 마다 login_id값이 업데이트 시키는 부분
    idChange = (e) => {
        login_id = e.target.value
    };

    //pw input값에 입력값이 있을때 마다 login_pw값이 업데이트 시키는 부분
    pwChange = (e) => {
        login_pw = e.target.value
    };

    //login_id 값이 db로 검색되기전에 1차적으로 검토를 하는 부분 (규칙은 5글자 이상이면서 문자와 숫자로 이루어진 문자열이여야한다.)
    login_id_Checksum(){
        var num = false
        var char = false
        var other = false

        for (var x = 0 ; x<login_id.length ; x++){
            if((login_id.charCodeAt(x)>=65 && login_id.charCodeAt(x)<=90) || (login_id.charCodeAt(x)>=97 && login_id.charCodeAt(x)<=122))
                char = true
            else if(login_id.charCodeAt(x)>=48 && login_id.charCodeAt(x)<=57)
                num = true
            else
                other = true
        }

        return login_id.length < 5 || other || (char && num) === false;
    }

    //login_pw 값이 db로 검색되기전에 1차적으로 검토를 하는 부분 (규칙은 5글자 이상이면서 문자와 숫자로 이루어진 문자열이여야한다.)
    login_pw_Checksum(){
        var num = false
        var char = false
        var other = false

        for (var x = 0 ; x<login_pw.length ; x++){
            if((login_pw.charCodeAt(x)>=65 && login_pw.charCodeAt(x)<=90) || (login_pw.charCodeAt(x)>=97 && login_pw.charCodeAt(x)<=122))
                char = true
            else if(login_pw.charCodeAt(x)>=48 && login_pw.charCodeAt(x)<=57)
                num = true
            else
                other = true
        }

        return login_pw.length < 5 || other || (char && num) === false;
    }
}
