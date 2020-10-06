import _m from '../model/Model.js';
import _u from '../lib/Util.js';
import * as _e from '../view/Elements.js';
//이벤트리스너가 발동되면 실행될 함수로 뭘 할건데?
//로직에 태울 데이터는?
//모델에서 가져온 res밸류가 참이면 무엇||무엇
//분기로 결정된 밸류를 뷰(템플릿)에 넣는다.(컨트롤러를 통해서)
//서비스 코드는 로직일 뿐이고 컨트롤러에 태워서 보낸다.

//어쨌든 모델에서 넘어온 데이터를 받아서 
//뷰 이벤트 리스너 콜백에 넘겨야 하니까
//돔 조작 함수라도 다 서비스에 담아야겠다.

//^ 그것은 아주 안좋은 생각...세시간을 버렸다.
//돔 조작은 뷰에만 맡기고 모델에 가까운 서비스 기능만 빌려오는 것으로...

//템플릿을 조작하려면
//템플릿에 변수를 넣으려면
//템플릿에 변수가 들어있는 상태로 뷰에 호출되어야 한다.
//그러려먼 뷰가 직접 템플릿을 호출해선 안되고
//컨트롤러를 거쳐서 밸류가 입력된 상태에서 전해져야 한다.
//그러면 로직이 더 단순해지는 듯
//템플릿 조작은 템플릿에서 직접 모델을 참고하는 것으로 했다.
//모델은 서버의 데이터.
//뷰에서 서버의 데이터를 조작한다고 해도
//서버의 데이터가 변경되면 
//엘리먼츠에서 돔을 생성할 때 변경이 반영되고 난 후 
//뷰에 전달된다. 
class Service {
    constructor(_m) {
        this._m = _m;
    }


    isPhone() {
        console.log(this.value);
        if (mkEvent.keyCode < 48 || mkEvent.keyCode > 57) {
            mkEvent.returnValue = false;
        }

        const fst = /^[\d]{3}$/;
        const snd = /^[\d]{3}-[\d]{4}$/;

        if (this.value.match(fst)) {
            this.value = this.value + '-';
        } else if (this.value.match(snd)) {
            this.value = this.value + '-';
        }
    }

    joinPostRequest() {

        const lId = document.querySelector('#joinId');
        const uPw = document.querySelector('#joinPw');
        const pwC = document.querySelector('#passwordChk');
        const uEm = document.querySelector('#email');

        const msg =
            (lId.value === "") ?
            "아이디를 입력해주세요" :
            (uPw.value === "") ?
            "패스워드를 입력해주세요" :
            (uPw.value !== pwC.value) ?
            "패스워드가 다르게 입력되었습니다." :
            (uEm.value === "") ?
            "메일 주소를 입력해주세요" :
            true;

        if (typeof (msg) === "string") {

            alert(msg);
            return false;
        }

        const param = `loginId=${lId.value}&userPw=${uPw.value}&userEmail=${uEm.value}`;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/join');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send(param);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        };
        console.log(param);
    }

    // api / auth / sendMail

    duplGetRequest() {
        const joinId = document.querySelector('#joinId').value;
        const param = `loginId=${joinId}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/join/duplicateCheck?' + 'loginId=' + joinId);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send('loginId=' + joinId);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        };
        console.log(param);
    }


    sendAjax() {
        let that = this;
        const loginId = document.getElementById('loginId');
        const userPw = document.getElementById('loginPw');

        var param = `loginId=${loginId.value}&userPw=${userPw.value}`;

        console.log(loginId, userPw);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'api/login');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                res = JSON.parse(xhr.responseText);
                switch (res.loggedIn) {
                    case true:
                        that.switchPage('#m_p_t');
                        break;
                    case false:
                        alert(res.errorMsg);
                        break;
                }
            }
        };

        xhr.send(param);
        console.log(param);

    }



}

// const _s = new Service(_m);
export default Service;