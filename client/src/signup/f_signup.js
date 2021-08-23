import HttpClient from "../public/javascripts/http";
const serverURl = process.env.REACT_APP_SERVER_URL;
//ajax 통신을 위해 http 모듈을 담아서 클래스를 불러오기
const http=new HttpClient(serverURl);

//sign up 페이지 기능들을 모아두는 파일

export default class SignUpFuntion {
    //nickname input값에 입력값이 있을때 마다 signup_nickname값이 업데이트 시키는 부분
    signup_Nickname_Change(e) {
        this.setState({
            signup_nickname: e.target.value
        })
    }

    //id input값에 입력값이 있을때 마다 signup_id값이 업데이트 시키는 부분
    signup_Id_Change(e) {
        this.setState({
            signup_id: e.target.value
        })
    }

    //pw input값에 입력값이 있을때 마다 signup_pw값이 업데이트 시키는 부분
    signup_Pw_Change(e) {
        this.setState({
            signup_pw: e.target.value
        })
    }

    //pwCheck input값에 입력값이 있을때 마다 signup_pwCheck값이 업데이트 시키는 부분
    signup_PwCheck_Change(e) {
        this.setState({
            signup_pwCheck: e.target.value
        })
    }

    //email input값에 입력값이 있을때 마다 signup_email값이 업데이트 시키는 부분
    signup_Email_Change(e) {
        this.setState({
            signup_email: e.target.value
        })
    }


    //각각의 input이 focus되면 실행되는 함수를 모아둔것 state에 저장된 각 type들을 focus로 바꾸어 화면의 input값을 파란색으로 바꾼다.
    signup_Nickname_Focus(e) {
        this.setState({
            signup_nickname_type: "focus"
        })
    }

    signup_Id_Focus(e) {
        this.setState({
            signup_id_type: "focus"
        })
    }

    signup_Pw_Focus(e) {
        this.setState({
            signup_pw_type: "focus"
        })
    }

    signup_PwCheck_Focus(e) {
        this.setState({
            signup_pwCheck_type: "focus"
        })
    }

    signup_Email_Focus(e) {
        this.setState({
            signup_email_type: "focus"
        })
    }


    //각각의 input값이 Blur 상태가 되면 이함수를 실행 시키도록 하였다. 모든 input값을 포함하여 정해진 규칙을 만족하는지 다시한번 확인한다.
    signup_Check_Input() {
        this.setState({
            signup_nickname_type: this.function.signup_nickname_Checksum(this.state.signup_nickname),
            signup_id_type: this.function.signup_id_Checksum(this.state.signup_id),
            signup_pw_type: this.function.signup_pw_Checksum(this.state.signup_pw),
            signup_email_type: this.function.signup_email_Checksum(this.state.signup_email)
        })

    }

    //각각의 ipnut값을 미리 설정해둔 규칙을 통해 올바른 값인지를 판별하는 함수들 "active"가 올바른값 "error"가 올바르지않는값 "hover"가 빈값을 나타낸다.
    signup_nickname_Checksum(signup_nickname) {
        if (signup_nickname.length === 0)
            return "hover"

        var patternSpecial = /[`~!@#$%^&*|\\'";:\/?. ]/gi

        if ((2 > signup_nickname.length || signup_nickname.length > 12) || patternSpecial.test(signup_nickname))
            return "error"
        else
            return "active"
    }

    signup_id_Checksum(signup_id) {
        if (signup_id.length === 0)
            return "hover"

        var patternEng = /[a-zA-Z]/
        var patternSpecial = /[`~!@#$%^&*|\\'";:\/?. ]/gi

        if ((6 > signup_id.length || signup_id.length > 32) || patternSpecial.test(signup_id) || !patternEng.test(signup_id))
            return "error"
        else
            return "active"
    }

    signup_pw_Checksum(signup_pw) {
        if (signup_pw.length === 0)
            return "hover"

        var patternSpecial = / /gi

        if ((6 > signup_pw.length || signup_pw.length > 32) || patternSpecial.test(signup_pw))
            return "error"
        else
            return "active"
    }

    signup_pwcheck_Checksum(signup_pw, signup_pwCheck, SignupPage) {

        var signup_pwCheck_type = "hover"
        var patternSpecial = / /gi

        SignupPage.setState({
            signup_email_disable: true
        })
        if ((6 > signup_pwCheck.length || signup_pwCheck.length > 32) || patternSpecial.test(signup_pwCheck) || signup_pwCheck !== signup_pw)
            signup_pwCheck_type = "error"
        else {
            signup_pwCheck_type = "active"
            SignupPage.setState({
                signup_email_disable: false
            })
        }

        if (signup_pwCheck.length === 0)
            signup_pwCheck_type = "hover"

        SignupPage.setState({
            signup_pwCheck_type: signup_pwCheck_type
        })
    }

    signup_email_Checksum(signup_email) {
        if (signup_email.length === 0)
            return "hover"

        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(signup_email))
            return "active"
        else
            return "error"
    }


    //확인 버튼을 눌렀을때 최종적으로 입력값에 문제가 없는지 db쪽에 접근하기 전에 1차적으로 검토하는 부분
    signup_submit() {
        if (this.state.signup_nickname_type === "active" &&
            this.state.signup_id_type === "active" &&
            this.state.signup_pw_type === "active" &&
            this.state.signup_pwCheck_type === "active" &&
            this.state.signup_email_type === "active") {
            alert("입력값에 문제가 없습니다.")
        }else{
            alert("다시 입력해주세요.")
        }
    }
}
