import HttpClient from "../public/javascripts/http";
const serverURl = process.env.REACT_APP_SERVER_URL;

//ajax 통신을 위해 http 모듈을 담아서 클래스를 불러오기
const http=new HttpClient(serverURl);

//log in 페이지 기능들을 모아두는 파일


export default class LoginFuntion {
    //function 작성하기


    //id input값에 입력값이 있을때 마다 login_id값이 업데이트 시키는 부분
    login_Id_Change(e) {
        this.setState({
            login_id: e.target.value
        })
    }

    //pw input값에 입력값이 있을때 마다 login_pw값이 업데이트 시키는 부분
    login_Pw_Change(e) {
        this.setState({
            login_pw: e.target.value
        })
    }

    //각각의 input이 focus되면 실행되는 함수를 모아둔것 state에 저장된 각 type들을 focus로 바꾸어 화면의 input값을 파란색으로 바꾼다.
    login_Id_Focus(e){
        this.setState({
            login_id_type : "focus"
        })
    }
    login_Pw_Focus(e){
        this.setState({
            login_pw_type : "focus"
        })
    }


    login_Checksum(){

        if (this.function.login_pw_Checksum(this.state.login_id) === "hover" &&
            this.function.login_pw_Checksum(this.state.login_pw) === "hover"){
            alert("입력값에 문제가 없습니다.")
        }else{
            alert("다시 입력해주세요.")
        }

        this.setState({
            login_id_type : this.function.login_id_Checksum(this.state.login_id),
            login_pw_type : this.function.login_pw_Checksum(this.state.login_pw)
        })

    }

    //login_id 값이 db로 검색되기전에 1차적으로 검토를 하는 부분
    login_id_Checksum(login_id){
        if(login_id.length < 3 || login_id.length >32)
            return "error"
        return "hover"
    }

    //login_pw 값이 db로 검색되기전에 1차적으로 검토를 하는 부분
    login_pw_Checksum(login_pw){
        if(login_pw.length < 3 || login_pw.length >32)
            return "error"
        return "hover"
    }
}
