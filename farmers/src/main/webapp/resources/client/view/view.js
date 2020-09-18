import {
    //searchbox,tags
    recentSearchTagsModel,
    popularSearchTagsModel,
    searchBoxModel,
    //main content
    carouselModel,
    mainFooterModel,
    itemSlideModel,
    //nav
    footerNavModel,
    topNavModel,
    subTopNavModel,
    // animatedAnchorModel,
    //page
    myPageModel,
    dealPageModel,
    itemPageModel,
    joinPageModel,
    loginPageModel,
    reviewPageModel,
    paymentPageModel,
    wishlistPageModel,
    categoryPageModel
} from "../model/model.js";

var json_req = (method, url, data = null) => {

    return new Promise(res => {

        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json');

        if (!data) {
            xhr.send(data);
        }
        xhr.addEventListener('load', (err, result) => {

            return err ? res(err) : res(result);
        });
    });
};

var form_req = (method, url, data = null) => {

    return new Promise(res => {

        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        if (!data) {
            xhr.send(data);
        }
        xhr.addEventListener('load', (err, result) => {

            return err ? res(err) : res(result);
        });
    });
};


class View {
    constructor() {
        this.search_box = this.$('search-box');
        this.item_slide = this.$('item-slide');

    }
    $(selector) {
        console.log('$=' + selector);
        return document.querySelector(selector);
    }
    $_all(selector) {
        return document.querySelectorAll(selector);
    }

    show(selector) {
        var that = this;
        var el = that.$(selector);
        el.style.display = "block";
    }

    hide(selector) {
        var that = this;
        var el = that.$(selector);
        el.style.display = "none";
    }

    hide_all() {
        var that = this;
        for (let selector of arguments) {
            var el = that.$(selector);
            el.style.display = "none";
        }
    }

    show_and_hide_rest(selector, ...selectors) {
        var that = this;
        that.show(selector);
        for (let i = 0; i < selectors.length; i++) {
            that.hide(selectors[i]);
        }
    }

    hide_and_show_rest(selector, ...selectors) {
        var that = this;
        that.hide(selector);
        console.log('hide-and-show' + selector);
        for (let i = 0; i < selectors.length; i++) {
            that.show(selectors[i]);
        }
    }

    make(selector, model, that) {
        const template = this.$(selector);
        template.innerHTML = model;
        that.appendChild(template.content.cloneNode(true));
        return that;
    }
    event(selector, e, callback) {
        const that = this;
        that.$(selector).addEventListener(e, callback);
    }
}

const _v = new View();

class Carousel extends HTMLElement {
    constructor() {
        super();
        _v.make('#main-carousel-template', carouselModel, this)
            .onload = setInterval(this.slider, 2000);
    }

    slider() {
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
    }
}


class SearchBox extends HTMLElement {
    constructor() {
        super();
        _v.make('#search-box-template', searchBoxModel, this)
            .tagNodeList = _v.$_all('tags');

        _v.event('#popular', 'click', this.add_popular_tags.bind(this));
        _v.event('#recent', 'click', this.add_recent_tags.bind(this));
        _v.event('#close', 'click', () => {
            _v.show_and_hide_rest('#mainTopNav', '#searchBox', '.shade');
        });

        _v.hide('#searchBox');
        this.add_popular_tags();
    }

    add_popular_tags() {
        for (let i = 0; i < this.tagNodeList.length; i++) {
            this.tagNodeList[i].innerText = popularSearchTagsModel[i];
        }
    }

    add_recent_tags() {
        for (let i = 0; i < this.tagNodeList.length; i++) {
            this.tagNodeList[i].innerText = recentSearchTagsModel[i];
        }
    }

}

class MainFooter extends HTMLElement {
    constructor() {
        super();
        _v.make('#main-footer-template', mainFooterModel, this);
    }
}

class FooterNav extends HTMLElement {
    constructor() {
        super();
        _v.make('#footer-nav-template', footerNavModel, this);
        _v.event('#search', 'click', () => {
            _v.hide_and_show_rest('#mainTopNav', '.shade', '#searchBox');
        });
        _v.event('#mypage', 'click', () => {
            this.isLogged();
        });
        _v.event('#category', 'click', () => {
            _v.show_and_hide_rest('category-page', 'wishlist-page', 'deal-page', 'item-slide', 'main-carousel');
        });
    }
    isLogged() {
        const cookie = document.cookie;
        switch (cookie) {
            case "":
                console.log(cookie);
                console.log("");
                _v.show_and_hide_rest('login-page', '#mainPage', 'category-page', 'wishlist-page', 'deal-page');
                break;
            default:
                console.log(cookie);
                _v.show_and_hide_rest('my-page', '#mainPage', 'category-page', 'wishlist-page', 'deal-page', 'login-page');
        }
    }
}

class ItemSlide extends HTMLElement {
    constructor() {
        super();
        _v.make('#item-slide-template', itemSlideModel, this);
    }
}

class TopNav extends HTMLElement {
    constructor() {
        super();
        _v.make('#top-nav-template', topNavModel, this);
        _v.event('h1', 'click', this.toHome);
        _v.event('#wishlist', 'click', () => {
            _v.show_and_hide_rest('wishlist-page', 'category-page', 'deal-page', 'item-slide', 'main-carousel');
        });

    }
    toHome() {
        location.href = "./";
    }

}
class SubTopNav extends HTMLElement {
    constructor() {
        super();
        _v.make('#top-nav-template', subTopNavModel, this);

        _v.event('#homePage', 'click', this.toHome);
        _v.event('#dealPage', 'click', () => {
            _v.show_and_hide_rest('deal-page', 'category-page', 'wishlist-page', 'item-slide', 'main-carousel');
        });

    }
    toHome() {
        location.href = "./";
    }
}

class AniButton extends HTMLButtonElement {
    constructor() {
        super();
        _v.event('ani-button', 'click', e => this.drawRipple(e.offsetX, e.offsetY));

    }

    //왜안돼
    drawRipple(x, y) {
        console.log(this);
        location.href = "#body";
        this.style.display = "none";
        let div = document.createElement('div');
        div.classList.add('ripple');
        this.appendChild(div);
        div.style.top = `${y - div.clientHeight/2}px`;
        div.style.left = `${x - div.clientWidth/2}px`;
        div.style.backgroundColor = '#000000';
        div.classList.add('run');
        div.addEventListener('transitionend', e => div.remove());
    }
}

//--------------------PAGES-----------------------//
// myPageModel,
class MyPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#my-page-template', myPageModel, this);
        _v.hide('my-page');
    }
}
// dealPageModel,
class DealPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#deal-page-template', dealPageModel, this);
        _v.hide('deal-page');
    }
}
// itemPageModel,
class ItemPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#item-page-template', itemPageModel, this);
        _v.hide('item-page');
    }
}
// joinPageModel,
class JoinPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#join-page-template', joinPageModel, this);

        _v.event('#joinExit', 'click', () => {
            _v.hide_and_show_rest('join-page', '#mainPage');
        });
        _v.event('#postBtn', 'click', this.joinPostRequest.bind(this));
        _v.event('#duplicateCheck', 'click', this.duplGetRequest.bind(this));

        _v.event('#oEye1', 'click', this.showPassword);
        _v.event('#oEye2', 'click', this.showPasswordChk);
        _v.event('#cEye1', 'click', this.hidePassword);
        _v.event('#cEye2', 'click', this.hidePasswordChk);

        _v.hide_and_show_rest('join-page', '#mainPage');

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

    // isPhone() {
    //     console.log(this.value);
    //     if (event.keyCode<48 || event.keyCode>57){
    //         event.returnValue=false;
    //     }

    //     const fst = /^[\d]{3}$/;
    //     const snd = /^[\d]{3}-[\d]{4}$/;

    //     if (this.value.match(fst)) {
    //         this.value = this.value+'-';
    //     }else if(this.value.match(snd)) {
    //         this.value = this.value+'-';
    //     }
    // }

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

    //api/auth/sendMail

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



}

// loginPageModel,
class LoginPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#login-page-template', loginPageModel, this);

        _v.event('#loginExit', 'click', () => _v.hide_and_show_rest('login-page', '#mainPage'));
        _v.event('#join', 'click', () => {
            _v.show_and_hide_rest('join-page', 'login-page');
        });
        _v.event('#loginBtn', 'click', this.sendAjax.bind(this))

        _v.hide_and_show_rest('login-page', '#mainPage')
    }

    sendAjax() {
        const loginId = document.getElementById('loginId');
        const userPw = document.getElementById('loginPw');

        const param = `loginId=${loginId.value}&userPw=${userPw.value}`
        console.log(loginId, userPw);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'api/login');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                res = JSON.parse(xhr.responseText);
                switch(res.loggedIn) {
                    case true:
                        _v.show_and_hide_rest('my-page', 'login-page');
                        break;
                    case false:
                        alert(res.errorMsg);
                        break;
                }
            }
        }
        xhr.send(param);
        console.log(param);

    }

}

// reviewPageModel,
class ReviewPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#review-page-template', reviewPageModel, this);
        _v.hide('review-page');
    }
}
// paymentPageModel,
class PaymentPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#payment-page-template', paymentPageModel, this);
        _v.hide('payment-page')
    }
}
// wishlistPageModel,
class WishlistPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#wishlist-page-template', wishlistPageModel, this);
        _v.hide('wishlist-page');
    }
}
// categoryPageModel
class CategoryPage extends HTMLElement {
    constructor() {
        super();
        _v.make('#category-page-template', categoryPageModel, this);
        _v.hide('category-page');
    }
}

window.customElements.define('search-box', SearchBox);
window.customElements.define('item-slide', ItemSlide);
window.customElements.define('main-footer', MainFooter);
window.customElements.define('main-carousel', Carousel);
window.customElements.define('footer-nav', FooterNav);
window.customElements.define('top-nav', TopNav);
window.customElements.define('sub-top-nav', SubTopNav);
window.customElements.define('ani-button', AniButton, {
    extends: 'button'
});
//pages
window.customElements.define('my-page', MyPage);
window.customElements.define('deal-page', DealPage);
window.customElements.define('item-page', ItemPage);
window.customElements.define('join-page', JoinPage);
window.customElements.define('login-page', LoginPage);
window.customElements.define('review-page', ReviewPage);
window.customElements.define('payment-page', PaymentPage);
window.customElements.define('wishlist-page', WishlistPage);
window.customElements.define('category-page', CategoryPage);