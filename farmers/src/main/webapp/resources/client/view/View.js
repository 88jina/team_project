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
        this.define('item-post-page', _e.IPP_);
        this.define('item-edit-page', _e.IEP_);
        this.define('item-edit-list-page', _e.IELP_);

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
            '.c_p_e',
            '.i_e_p_e',
            '.i_p_p_e',
            '.i_e_l_p_e'
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
        // const that = this;
        _u.addEvent('#homePage', 'click', () => {
            this.switchPage('#h_p_t');
        });
        //로컬테스트용
        // _u.addEvent('#myPage', 'click', () => {
        //     this.switchTo('#m_p_t', _t.__mpT(_m._loginSellerDummy()), this.myPage.bind(this));
        // });

        _u.addEvent('#myPage', 'click', () => {
            this.ifLoggedInMoveTo('#m_p_t', this.myPage.bind(this));
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
        _u.addEvent('#loginBtn', 'click', this.loginPostReq.bind(this));
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
        _u.$('#main').onload = setInterval(this.slider, 2000);
        _u.addEvent('.c-item1', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.c-item2', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.c-item3', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.c-item4', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.c-item5', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.s-item1', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.s-item2', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.s-item3', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.s-item4', 'click', () => {
            this.switchTo(p, d, e)
        });
        _u.addEvent('.s-item5', 'click', () => {
            this.switchTo(p, d, e)
        });
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
        const email = _u.$('#email').value;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './api/auth/sendMail?' + 'userEmail=' + email);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText);
                console.log(res);
                alert('메일이 발송되었습니다. 인증번호를 확인해주세요. 3분 안에 해주세요.');
            }
        };
        xhr.send(email);
    }

    mailAuth() {
        const mailCookie = document.cookie.split('authKey=')[1];
        const mailAuthCode = _u.$('#mailAuth');
        switch (mailCookie) {
            case mailAuthCode.value:
                alert('인증 완료되셨습니다.');
                _u.$('#postBtn').style.display = "block";
                _u.$('#mailAuthBtn').required = true;
                break;
            case undefined:
                alert('인증하기 버튼을 눌러주세요');
                break;
            default:
                alert('코드가 일치하지 않습니다.');
                break;
        }
    }

    slider() {
        if (_u.$('.carousel-inner') !== null) {
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
            _u.$('#main').removeEventListener('load', () => setInterval(this.slider, 2000));
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


    ifLoggedInMoveTo(thisPage, event) {
        let that = this;
        const loginId = sessionStorage.loginId;
        if (loginId) {
            const res = this.getUserData(loginId);
            if (res === "") {
                alert('res is null');
                that.switchPage('#l_p_t', that.loginPage.bind(this));
            } else {
                this.switchTo(thisPage, _t.__mpT(res), event);
            }
        } else if (loginId === undefined) {
            alert('로그인을 해주세요');
            this.switchPage('#l_p_t', this.loginPage.bind(this));
        }
    }

    myPage() {
        _u.addEvent('#myPageExit', 'click', () => this.switchPage('#h_p_t').bind(this));
        _u.addEvent('#degreePolicy', 'click', this.switchPage.bind(this));
        _u.addEvent('#expectedDegree', 'click', this.switchPage.bind(this));
        _u.addEvent('#availablePoint', 'click', this.switchPage.bind(this));
        _u.addEvent('#inviteFriend', 'click', this.switchPage.bind(this));
        _u.addEvent('#itemReview', 'click', this.switchPage.bind(this));
        _u.addEvent('#itemQuery', 'click', this.switchPage.bind(this));
        _u.addEvent('#bulkOrder', 'click', this.switchPage.bind(this));
        _u.addEvent('#dealHistory', 'click', this.switchPage.bind(this));
        _u.addEvent('#orderHistory', 'click', this.switchPage.bind(this));
        _u.addEvent('#deliveryPolicy', 'click', this.switchPage.bind(this));
        _u.addEvent('#editMyInfo', 'click', this.switchPage.bind(this));
        _u.addEvent('#logOut', 'click', this.logOut.bind(this));
        const userType = _u.$('#userType').innerText;
        switch (userType) {
            case "판매자":
                _u.addEvent('#itemPost', 'click', () => this.switchPage('#i_p_p_t', this.itemPostPage.bind(this)));
                _u.addEvent('#itemEditList', 'click', this.itemListGetRequest.bind(this));
                _u.addEvent('#destinationEdit', 'click', this.switchPage.bind(this));
                break;
            case "관리자":
                _u.addEvent('#toAdminPage', 'click', this.toAdmin.bind(this));
                break;
            default:
                break;
        }
    }

    deleteCookie(name) {
        if (this.getCookie(name)) {
            document.cookie = name + "=" +
                ((path) ? ";path=" + path : "") +
                ((domain) ? ";domain=" + domain : "") +
                ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    }

    getCookie(name) {
        return document.cookie.split(';').some(c => {
            return c.trim().startsWith(name + '=');
        });
    }

    logOut() {
        const that = this;
        fetch('./logOut', {
            method: 'get'
        }).then(function (response) {
        	sessionStorage.removeItem('loginId');
            that.switchPage('#h_p_t').bind(that);
            return response.text();
        }).then(function (text) {
            console.log(text);
        }).catch(function (error) {
            console.log(error);
        })
    }

    toAdmin() {
        location.href += 'admin/userView/';
    }


    itemPostPage() {
        _u.addEvent('#itemPostBtn', 'click', this.fetchItemPost.bind(this));
    }

    itemEditPage() {
        _u.addEvent('#itemPostBtn', 'click', this.itemEditRequest.bind(this));
    }

    itemEditListPage() {
        _u.addEvent('#itemThumb1', 'click', () => this.switchPage('#i_p_p_t', this.itemPostPage.bind(this)));
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


    switchTo(page, data, event) {
        const currentPage = _u.$('main').firstElementChild;
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
            case _u.$('.i_p_p_e'):
                _u.rmElements('.i_p_p_e');
                break;
            case _u.$('.i_e_p_e'):
                _u.rmElements('.i_e_p_e');
                break;
            case _u.$('.i_e_l_p_e'):
                _u.rmElements('.i_e_l_p_e');
                break;
            default:
                break;
        }
        _u.showMainPage(page, data, _u.$('main'), event);
    }

    aniBtn() {
        _u.addEvent('ani-button', 'click', () => {
            location.href = "#body";
            _u.$('ani-button').style.display = "none";
        });
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
                that.switchPage('#l_p_t');
            }
        };
        xhr.send(userId);
        console.log("getUserData:res:" + typeof (that.res));
        console.log("getUserData:res:" + that.res);
        return that.res;
    }

    setResData(data) {
        that.res = data;
    }

    getResData() {
        return this.responseText;
    }

    itemPostRequest() {
        const iName = document.querySelector('#itemName');
        const iCategory = document.querySelector('#category');
        const sUnit = document.querySelector('#sellingUnit');
        const pPerUnit = document.querySelector('#pricePerUnit');
        const tAmount = document.querySelector('#totalAmount');
        const minAmount = document.querySelector('#minAmount');
        const maxAmount = document.querySelector('#maxAmount');
        const disc = document.querySelector('#discount');
        const desc = document.querySelector('#description');
        const thumbNail = document.querySelector('#thumbNail');

        const msg =
            (iName.value === "") ?
            "상품 이름을 입력해주세요" :
            (pPerUnit.value === "") ?
            "단위 당 판매 가격을 입력해주세요" :
            (tAmount.value === "") ?
            "판매 가능한 총량을 입력해주세요" :
            (minAmount.value === "") ?
            "최소 단위를 입력해주세요" :
            (maxAmount.value === "") ?
            "최대 단위를 입력해주세요" :
            (desc.value === "") ?
            "상품 설명을 입력해주세요" :
            (thumbNail.value === "") ?
            "이미지를 업로드 해주세요" :
            true;

        if (typeof (msg) === "string") {
            alert(msg);
            return false;
        }
        const formElement = _u.$('#itemPostForm');
        const formData = new FormData(formElement);
        formData.append('itemName', encodeURIComponent(iName.value));

        for (let value of formData.values()) {
            console.log("value:" + value)
        }
        const xhr = new XMLHttpRequest();

        xhr.open('POST', './seller/postItem', false);
        xhr.send(formData);
        xhr.setRequestHeader('Accept-Language', '*');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // let res = JSON.parse(xhr.responseText);
                alert(xhr.responseText);
            }
        };
    }

    fetchItemPost() {
        const iN_ = document.querySelector('#itemName');
        const C_ = document.querySelector('#category');
        const sU_ = document.querySelector('#sellingUnit');
        const pPU_ = document.querySelector('#pricePerUnit');
        const tA_ = document.querySelector('#totalAmount');
        const minA_ = document.querySelector('#minAmount');
        const maxA_ = document.querySelector('#maxAmount');
        const dc_ = document.querySelector('#discount');
        const dp_ = document.querySelector('#description');
        const tN_ = document.querySelector('#thumbNail');


        const form = _u.$('#itemPostForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // const encoded = encodeURIComponent(myImg.name);
            const formData = new FormData();
            formData.append('itemName', encodeURIComponent(iN_.value))
            formData.append('category', C_.value)
            formData.append('sellingUnit', sU_.value)
            formData.append('pricePerUnit', pPU_.value)
            formData.append('totalAmount', tA_.value)
            formData.append('minAmount', minA_.value)
            formData.append('maxAmount', maxA_.value)
            formData.append('discount', dc_.value)
            formData.append('description', encodeURIComponent(dp_.value))

            for (let i = 0, f = tN_.files; i < f.length; i++) {
                formData.append('thumbNail', f[i]);
            }

            fetch('./seller/postItem', {
                method: 'post',
                body: formData
            }).then(function (response) {
                return response.text();
            }).then(function (text) {
                console.log(text);
            }).catch(function (error) {
                console.log(error);
            })
        })
    }


    // action="./seller/postItem" method="post"
    itemEditRequest() {
        const iName = document.querySelector('#itemName');
        const iCategory = document.querySelector('#itemCategory');
        const sUnit = document.querySelector('#sellingUnit');
        const pPerUnit = document.querySelector('#pricePerUnit');
        const tAmount = document.querySelector('#totalAmount');
        const minAmount = document.querySelector('#minAmount');
        const maxAmount = document.querySelector('#maxAmount');
        const disc = document.querySelector('#discount');
        const desc = document.querySelector('#description');
        const imgPostBtn = document.querySelector('#imgPostBtn');
        const thumbNail = document.querySelector('#thumbNail');
        const thumbNailLabel = document.querySelector('#thumbNailLabel');

        const msg =
            (iName.value === "") ?
            "상품 이름을 입력해주세요" :
            (pPerUnit.value === "") ?
            "단위 당 판매 가격을 입력해주세요" :
            (tAmount.value === "") ?
            "판매 가능한 총량을 입력해주세요" :
            (minAmount.value === "") ?
            "최소 단위를 입력해주세요" :
            (maxAmount.value === "") ?
            "최대 단위를 입력해주세요" :
            (desc.value === "") ?
            "상품 설명을 입력해주세요" :
            (thumbNail.value === "") ?
            "이미지를 업로드 해주세요" :
            true;

        if (typeof (msg) === "string") {
            alert(msg);
            return false;
        }

        const param = `itemName=${iName.value}&itemCategory=${iCategory.value}&sellingUnit=${sUnit.value}&pricePerUnit=${pPerUnit.value}&totalAmount=${tAmount.value}&minAmount=${minAmount.value}&maxAmount=${maxAmount.value}&discount=${disc.value}&description=${desc.value}`;
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', './seller/modifyItem');
        xhr.setRequestHeader('Accept-Language', '*');
        xhr.send(param);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText);
                alert(res);
            }
        };
    }

    joinPostRequest() {
        let that = this;
        const lId = document.querySelector('#joinId');
        const uPw = document.querySelector('#joinPw');
        const dCB = document.querySelector('#duplicateCheck');
        const mAth = document.querySelector('#mailAuthBtn');
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
                alert(res.errorMsg);
                that.switchTo('#m_p_t', _t.__mpT(res), this.myPage.bind(this));
            }
        };

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
            } else if (xhr.readyState == 4 && xhr.status == 404) {
                alert('404 에러');
            }
        };
        console.log(param);
    }

    itemListGetRequest() {
        let that = this;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './seller/callItemList');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText);
                let resArr = Object.values(res)
                if (resArr[1] === undefined) {
                    alert('등록하신 상품이 없습니다.');
                } else {
                    that.switchTo('#i_e_l_p_t', _t.__ielpT(res), that.itemEditListPage.bind(that))
                    alert(resArr[1].msg);
                }
            } else if (xhr.readyState == 4 && xhr.status == 404) {
                alert('404 에러');
            }
        };
    }

    //ItemEdit
    itemEditGetRequest() {
        let that = this;
        //itemId 
        // const req = document.cookie.split('loginCookie=')[1];
        // if (req !== undefined) {
        //     const res = getReq(req);
        //     if (res === "") {
        //         alert('res is null f getReq err');
        //         that.switchPage('#l_p_t', that.loginPage.bind(this));
        //     } else {
        //         this.switchTo('#m_p_t', _t.__ielpT(res), that.itemEditListPage.bind(this));
        //     }
        // } else if (req === undefined) {
        //     alert('로그인을 해주세요');
        //     this.switchPage('#l_p_t', this.loginPage.bind(this));
        // }

        // function getReq() {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', './seller/callItem');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText);
                alert(res);
                that.switchTo('#i_e_l_p_t', _t.__ielpT(res), that.itemEditListPage.bind(this))
            } else if (xhr.readyState == 4 && xhr.status == 404) {
                alert('404 에러');
            }
        };
        // }
    }

    duplChk(value) {
        const input = _u.$('#joinId').value
        if (value === input) {
            input = "";
        }
    }

    loginPostReq() {
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
                        sessionStorage.setItem('loginId', res.loginId);
                        that.switchTo('#m_p_t', _t.__mpT(res), that.myPage.bind(that));
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