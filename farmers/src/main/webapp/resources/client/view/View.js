import _u from "../lib/Util.js";
import * as _e from "./Elements.js";
import _m from "../model/Model.js";
import * as _t from "./Templates.js";

//이벤트 리스너는 전부 뷰에 담아야해
//그래야 뷰의 이벤트를 구독중인 컨트롤러가 정보를 받을 수 있다.
//컨트롤러는 엘리먼트를 모르고
//뷰는 템플릿의 내용을 모르고
//템플릿의 내용 변경은 모델을 구독한 서비스에서
//엘리먼트에서는 템플릿엘리먼트에 템플릿을 담는 것 까지만.
//엘리먼트에서는 클래스가 이니시에이트 되지 않는다.
//엘리먼트들에 메소드를 추가해서 사용하는 것은 전부 뷰에서.

class View {
    constructor() {

        this.define('home-page', _e.HP_); //units
        this.define('search-box', _e.SB_);
        this.define('footer-nav', _e.FN_);
        this.define('top-nav', _e.TN_);
        this.define('sub-top-nav', _e.STN_);
        this.define('ani-button', _e.AB_);
        this.define('my-page', _e.MP_); //pages
        this.define('deal-page', _e.DP_);
        this.define('item-page', _e.IP_);
        this.define('join-page', _e.JP_);
        this.define('login-page', _e.LP_);
        this.define('review-page', _e.RP_);
        this.define('payment-page', _e.PP_);
        this.define('wishlist-page', _e.WP_);
        this.define('category-page', _e.CP_);

        _u.rmElements(
            '.h_p_e',
            '.s_b_e',
            '.f_n_e',
            '.t_n_e',
            '.s_t_n_e',
            '.a_b_e',
            '.m_p_e',
            '.d_p_e',
            '.i_p_e',
            '.j_p_e',
            '.l_p_e',
            '.r_p_e',
            '.p_p_e',
            '.w_p_e',
            '.c_p_e'
        );


        _u.addElement_withEvent('#h_p_t', 'main', this.homePage.bind(this));
        _u.addElement_withEvent('#f_n_t', 'footer-nav', this.footerNav.bind(this));
        _u.addElement_withEvent('#t_n_t', 'top-nav', this.topNav.bind(this));
        _u.addElement_withEvent('#s_t_n_t', 'sub-top-nav', this.subTopNav.bind(this));
        _u.addElement_withEvent('#a_b_t', 'ani-button', this.aniBtn.bind(this));
        // _u.addElement_withEvent('#s_b_t', 'search-box', this.searchBox.bind(this));
        // _u.addElement_withEvent('#m_p_t', 'my-page');
        // _u.addElement_withEvent('#d_p_t', 'deal-page');
        // _u.addElement_withEvent('#i_p_t', 'item-page');
        // _u.addElement_withEvent('#j_p_t', 'join-page');
        // _u.addElement_withEvent('#l_p_t', 'login-page');
        // _u.addElement_withEvent('#r_p_t', 'review-page');
        // _u.addElement_withEvent('#p_p_t', 'payment-page');
        // _u.addElement_withEvent('#w_p_t', 'wishlist-page');
        // _u.addElement_withEvent('#c_p_t', 'category-page');
    }

    define(selector, element) {
        return window.customElements.define(selector, element);
    }

    // searchBox(f1, f2, f3) {
    //     f1();
    //     _u.addEvent('#popular', 'click', f1);
    //     _u.addEvent('#recent', 'click', f2);
    //     _u.addEvent('#close', 'click', f3);
    //     _u.addEvent('.shade', 'click', f3);
    // }

    // footerNav(f1, f2, f3, f4) {
    //     _u.addEvent('#homePage', 'click', f1);
    //     _u.addEvent('#myPage', 'click', f2);
    //     _u.addEvent('#search', 'click', f3);
    //     _u.addEvent('#category', 'click', f4);
    // }

    // aniBtn(f) {
    //     _u.addEvent('ani-button', 'click', f);
    // }

    // topNav(f1, f2) {
    //     _u.addEvent('h1', 'click', f1);
    //     _u.addEvent('#wishlist', 'click', f2);
    // }

    // subTopNav(f1, f2) {
    //     _u.addEvent('#homePage', 'click', f1);
    //     _u.addEvent('#dealPage', 'click', f2);
    // }

    // loginPage(f1, f2, f3) {
    //     _u.addEvent('#loginExit', 'click', f1);
    //     _u.addEvent('#join', 'click', f2);
    //     _u.addEvent('#loginBtn', 'click', f3);
    // }

    // joinPage(f1, f2, f3, f4, f5, f6, f7) {
    //     _u.addEvent('#joinExit', 'click', f1);
    //     _u.addEvent('#postBtn', 'click', f2);
    //     _u.addEvent('#duplicateCheck', 'click', f3);
    //     _u.addEvent('#oEye1', 'click', f4);
    //     _u.addEvent('#oEye2', 'click', f5);
    //     _u.addEvent('#cEye1', 'click', f6);
    //     _u.addEvent('#cEye2', 'click', f7);
    // }

    // homePage(f) {
    //     const carouselSlider = setInterval(f, 2000);
    //     window.onload = carouselSlider;
    // }


    toHome() {
        location.href = "./";
    }


    searchBox() {
        this.add_popular_tags();
        _u.addEvent('#popular', 'click', this.add_popular_tags);
        _u.addEvent('#recent', 'click', this.add_recent_tags);
        _u.addEvent('#close', 'click', () => {
            _u.rmElements('.s_b_e');
        });
        _u.addEvent('.shade', 'click', () => {
            _u.rmElements('.s_b_e');
        });
    }

    footerNav() {
        _u.addEvent('#homePage', 'click', () => {
            this.switchPage('#h_p_t');
        });

        _u.addEvent('#myPage', 'click', () => {
            this.ifLoggedInMoveTo('#m_p_t');
        });

        _u.addEvent('#search', 'click', () => {
            this.switchUnit();
        });

        _u.addEvent('#category', 'click', () => {
            this.switchPage('#c_p_t');
        });
    }

    loginPage() {
        _u.addEvent('#loginExit', 'click', () => this.switchPage('#h_p_t'));
        _u.addEvent('#join', 'click', () => this.switchPage('#j_p_t', this.joinPage.bind(this)));
        _u.addEvent('#loginBtn', 'click', this.sendAjax.bind(this));
    }

    topNav() {
        _u.addEvent('h1', 'click', this.toHome);
        _u.addEvent('#wishlist', 'click', () => {
            this.switchTo('#w_p_t', _t.__wpT(_m._wishlistDummy));
        });
    }


    subTopNav() {
        _u.addEvent('#homePage', 'click', () => {
            this.switchPage('#h_p_t');
        });
        _u.addEvent('#dealPage', 'click', () => {
            this.switchPage('#d_p_t');
        });
    }

    homePage() {
        const carouselSlider = setInterval(this.slider, 2000);
        window.onload = carouselSlider;
    }

    joinPage() {
        _u.$('#postBtn').style.display = "hidden";
        _u.addEvent('#joinExit', 'click', () => {
            this.switchPage('#h_p_t');
        });
        _u.addEvent('#postBtn', 'click', this.joinPostRequest.bind(this));
        _u.addEvent('#duplicateCheck', 'click', this.duplGetRequest.bind(this));
        _u.addEvent('#mailSendBtn', 'click', this.sendMail.bind(this));
        _u.addEvent('#mailAuthBtn', 'click', this.mailAuth.bind(this));

        _u.addEvent('#oEye1', 'click', this.showPassword);
        _u.addEvent('#oEye2', 'click', this.showPasswordChk);
        _u.addEvent('#cEye1', 'click', this.hidePassword);
        _u.addEvent('#cEye2', 'click', this.hidePasswordChk);
    }

    sendMail() {
        const email = _u.$('#email');
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './api/auth/sendMail');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send(email);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText);
                console.log(res);
                alert('메일이 발송되었습니다. 인증번호를 확인해주세요');
            }
        };
    }

    mailAuth() {
        const mailCookie = document.cookie.split('authCookie=')[1];
        const mailAuthCode = _u.$('#mailAuth');
        switch (mailCookie) {
            case mailAuthCode.value:
                alert('인증 완료되셨습니다.');
                _u.$('#postBtn').style.display = "block";
                break;
            case undefined:
                alert('인증하기 버튼을 눌러주세요');
            default:
                alert('코드가 일치하지 않습니다.');
                break;
        }
    }

    slider() {
        if (_u.$('.h_p_e') !== null) {
            const firstSlide = document.querySelector('.carousel-item:first-child');
            const activeSlide = document.querySelector('.show');
            const nextSlide = activeSlide.nextElementSibling;
            const lastSlide = document.querySelector('.carousel-inner').lastElementChild;
            activeSlide
                ?
                nextSlide ?
                (activeSlide.classList.remove('show'), nextSlide.classList.add('show')) :
                (firstSlide.classList.add('show'), lastSlide.classList.remove('show')) :
                console.log('error');
        } else {
            return;
        }
    }

    add_popular_tags() {
        const sb = new _e.SB_();
        for (let i = 0, tags = _u.$('#tags'); i < tags.childElementCount; i++) {
            tags.children[i].innerText = sb.__pstT[i];
        }
    }

    add_recent_tags() {
        const sb = new _e.SB_();
        for (let i = 0, tags = _u.$('#tags'); i < tags.childElementCount; i++) {
            tags.children[i].innerText = sb.__rstT[i];
        }
    }


    ifLoggedInMoveTo(thisPage) {
        let that = this;
        const cookie = document.cookie.split('loginCookie=')[1];
        // const rgx = /([A-z]|[0-9])\w+/;
        if (cookie !== undefined) {
            console.log('cookie:' + cookie);
            const res = this.getUserData(cookie);
            if (res === "") {
                that.switchPage('#h_p_t');
            } else {
                this.switchTo(thisPage, res);
            }
        } else if (cookie === undefined) {
            alert('로그인을 해주세요');
            this.switchPage('#l_p_t', this.loginPage.bind(this));
        }
    }

    switchUnit() {
        const currentUnit = _u.$('search-box');
        switch (currentUnit.firstElementChild) {
            case null:
                _u.addElement_withEvent('#s_b_t', 'search-box', this.searchBox.bind(this));
                break;
            case _u.$('.s_b_e'):
                _u.rmElements('.s_b_e');
                _u.addElement_withEvent('#s_b_t', 'search-box', this.searchBox.bind(this));
                break;
        }
    }

    switchPage(pageTemplate, addEventFunction = () => {
        return;
    }) {
        const currentPage = _u.$('main').firstElementChild;
        console.log("currentPage:" + currentPage.className);
        switch (currentPage) {
            case _u.$('.l_p_e'):
                _u.rmElements('.l_p_e');
                break;
            case _u.$('.m_p_e'):
                _u.rmElements('.m_p_e');
                break;
            case _u.$('.h_p_e'):
                _u.rmElements('.h_p_e');
                break;
            case _u.$('.d_p_e'):
                _u.rmElements('.d_p_e');
                break;
            case _u.$('.i_p_e'):
                _u.rmElements('.i_p_e');
                break;
            case _u.$('.j_p_e'):
                _u.rmElements('.j_p_e');
                break;
            case _u.$('.r_p_e'):
                _u.rmElements('.r_p_e');
                break;
            case _u.$('.p_p_e'):
                _u.rmElements('.p_p_e');
                break;
            case _u.$('.w_p_e'):
                _u.rmElements('.w_p_e');
                break;
            case _u.$('.c_p_e'):
                _u.rmElements('.c_p_e');
                break;
            case _u.$('.m_a_e'):
                _u.rmElements('.m_a_e');
                break;
            default:
                break;
        }

        _u.addElement_withEvent(pageTemplate, 'main', addEventFunction);
    }

    switchTo(page, data) {
        const currentPage = _u.$('main').firstElementChild;
        console.log("currentPage:" + currentPage.className);
        switch (currentPage) {
            case _u.$('.l_p_e'):
                _u.rmElements('.l_p_e');
                break;
            case _u.$('.m_p_e'):
                _u.rmElements('.m_p_e');
                break;
            case _u.$('.h_p_e'):
                _u.rmElements('.h_p_e');
                break;
            case _u.$('.d_p_e'):
                _u.rmElements('.d_p_e');
                break;
            case _u.$('.i_p_e'):
                _u.rmElements('.i_p_e');
                break;
            case _u.$('.j_p_e'):
                _u.rmElements('.j_p_e');
                break;
            case _u.$('.r_p_e'):
                _u.rmElements('.r_p_e');
                break;
            case _u.$('.p_p_e'):
                _u.rmElements('.p_p_e');
                break;
            case _u.$('.w_p_e'):
                _u.rmElements('.w_p_e');
                break;
            case _u.$('.c_p_e'):
                _u.rmElements('.c_p_e');
                break;
            default:
                break;
        }
        _u.showMyPage(page, data, _u.$('main'));
    }

    moveTop() {
        location.href = "#body";
        _u.$('ani-button').style.display = "none";
    }

    showPassword() {
        document.getElementById('joinPw').type = "text";
        document.querySelectorAll('.open-eye')[0].style.display = "none";
        document.querySelectorAll('.closed-eye')[0].style.display = "block";
    }

    showPasswordChk() {
        document.getElementById('passwordChk').type = "text";
        document.querySelectorAll('.open-eye')[1].style.display = "none";
        document.querySelectorAll('.closed-eye')[1].style.display = "block";
    }

    hidePassword() {
        document.getElementById('joinPw').type = "password";
        document.querySelectorAll('.open-eye')[0].style.display = "block";
        document.querySelectorAll('.closed-eye')[0].style.display = "none";
    }

    hidePasswordChk() {
        document.getElementById('passwordChk').type = "password";
        document.querySelectorAll('.open-eye')[1].style.display = "block";
        document.querySelectorAll('.closed-eye')[1].style.display = "none";
    }

    getUserData(userId) {
        let that = this;
        that.res = "";
        const xhr = new XMLHttpRequest();
        xhr.open('POST', './api/myPage', false);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                that.res = JSON.parse(xhr.responseText);
            } else {
                alert('서버가 응답하지 않습니다.');
                that.switchPage('#h_p_t');
            }
        };
        xhr.send(userId);
        console.log("res::::" + typeof (that.res));
        console.log("res::::" + that.res);
        return that.res;
    }

    setResData(data) {
        that.res = data;
    }

    getResData() {
        return this.responseText;
    }

    joinPostRequest() {
        const lId = document.querySelector('#joinId');
        const uPw = document.querySelector('#joinPw');
        const dCB = document.querySelector('#duplicateCheck');
        const mAth = document.querySelector('#mailAuth');
        const pwC = document.querySelector('#passwordChk');
        const uEm = document.querySelector('#email');
        const ergx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        const msg =
            (lId.value === "") ?
            "아이디를 입력해주세요" :
            (uPw.value === "") ?
            "패스워드를 입력해주세요" :
            (uPw.value !== pwC.value) ?
            "패스워드가 다르게 입력되었습니다." :
            (uEm.value === "") ?
            "메일 주소를 입력해주세요" :
            (ergx.test(uEm.value) !== true) ?
            "메일 양식이 올바르지 않습니다." :
            (dCB.required === false) ?
            "중복확인 버튼을 눌러주세요." :
            (mAth.required === false) ?
            "인증확인 버튼을 눌러주세요." :
            (mAth.value === "") ?
            "인증번호를 입력해주세요." :
            true;

        if (typeof (msg) === "string") {
            alert(msg);
            return false;
        }

        const param = `loginId=${lId.value}&userPw=${uPw.value}&userEmail=${uEm.value}`;
        const xhr = new XMLHttpRequest();

        xhr.open('POST', './api/join');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send(param);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText);
                return res;
            }
        };

        let returnValue = xhr.onreadystatechange;
        console.log(returnValue);
        console.log(param);
        return returnValue;
    }

    duplGetRequest() {
        const duplBtn = document.querySelector('#duplicateCheck');
        duplBtn.required = true;
        const joinId = document.querySelector('#joinId').value;
        const param = `loginId=${joinId}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './api/join/duplicateCheck?' + 'loginId=' + joinId);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send('loginId=' + joinId);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText);
                console.log(res.msg);
                alert(res.msg);
                if (res.dupl === true) {
                    const duplValue = res.loginId;
                    _u.$('#joinId').value = "";
                    _u.addEvent('#joinId', 'keydown', this.duplChk(duplValue))
                };
            }else if (xhr.readyState == 4 && xhr.status == 404) {
                alert('404 에러');
            }
        };
        console.log(param);
    }

    duplChk(value) {
        const input = _u.$('#joinId').value
        if (value === input) {
            input = "";
        }
    }

    sendAjax() {
        let that = this;
        const loginId = document.getElementById('loginId');
        const userPw = document.getElementById('loginPw');

        var param = `loginId=${loginId.value}&userPw=${userPw.value}`;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', './api/login');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send(param);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText);
                switch (res.loggedIn) {
                    case true:
                        that.switchTo('#m_p_t', _t.__mpT(res));
                        break;
                    case false:
                        alert(res.errorMsg);
                        break;
                }
            }
        };
    }
}

// const _v = new View(_e);
export default View;