import {
    //searchbox,tags
    rSearchTags,
    pSearchTags,
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
} from "../model/model.mjs";


class View {
    constructor() {
        this.search_box = this.get('search-box');
        this.item_slide = this.get('item-slide');
        
    }
    get(selector) {
        return document.querySelector(selector);
    }
    show(selector) {
        this.get(selector).style.display = "block";
    }
    hide(selector) {
        this.get(selector).style.display = "none";
    }

}
const __v = new View();

class Carousel extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('main-carousel-template');
        template.innerHTML = carouselModel;
        this.appendChild(template.content.cloneNode(true));
        this.onload = setInterval(this.slider, 2000);
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
        this.pSearchTagArr = pSearchTags;
        this.rSearchTagArr = rSearchTags;

        const template = document.getElementById('search-box-template');
        template.innerHTML = searchBoxModel;
        this.appendChild(template.content.cloneNode(true));

        this.tagNodeList = document.querySelectorAll('tags');

        document.querySelector('#popular').addEventListener('click', this.pushPopularTags.bind(this));
        document.querySelector('#recent').addEventListener('click', this.pushRecentTags.bind(this));
        document.querySelector('#close').addEventListener('click', this.hideSearchBox.bind(this));

        this.searchbox = document.getElementById('search-box');

        this.hideSearchBox();
        this.pushPopularTags();
    }

    pushPopularTags() {
        console.log('this is:', this);
        for (let i = 0; i < this.tagNodeList.length; i++) {
            this.tagNodeList[i].innerText = pSearchTags[i];
        }
    }

    pushRecentTags() {
        for (let i = 0; i < this.tagNodeList.length; i++) {
            this.tagNodeList[i].innerText = rSearchTags[i];
        }
    }

    displaySearchBox() {
        document.querySelector('#mainTopNav').style.display = "none";
        document.querySelector('.shade').style.display = "block";
        document.getElementById('search-box').style.display = 'block';
    }

    hideSearchBox() {
        this.searchbox.style.display = 'none';
        document.querySelector('.shade').style.display = "none";
        document.querySelector('#mainTopNav').style.display = "block";
    }

}

class MainFooter extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#main-footer-template');
        this.template.innerHTML = mainFooterModel;
        this.appendChild(this.template.content.cloneNode(true));

    }
}

class FooterNav extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#footer-nav-template');
        this.template.innerHTML = footerNavModel;
        this.appendChild(this.template.content.cloneNode(true));
        this.querySelector('#search').addEventListener('click', SearchBox.prototype.displaySearchBox);
        this.querySelector('#mypage').addEventListener('click', LoginPage.prototype.showLoginPage);
        this.querySelector('#category').addEventListener('click', this.toCategory);
    }
    toCategory() {
        document.querySelector('main-carousel').style.display="none";
        document.querySelector('item-slide').style.display="none";
        document.querySelector('deal-page').style.display="none";
        document.querySelector('wishlist-page').style.display="none";
        document.querySelector('category-page').style.display="block";
        
    }
}

class ItemSlide extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#item-slide-template');
        this.template.innerHTML = itemSlideModel;
        this.appendChild(this.template.content.cloneNode(true));
    }
}

class TopNav extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#top-nav-template');
        this.template.innerHTML = topNavModel;
        this.appendChild(this.template.content.cloneNode(true));
        document.querySelector('h1').addEventListener('click', this.toHome);
        document.querySelector('.fa-seedling').addEventListener('click', this.toWish);
    }
    toHome() {
        location.href="./";
    }
    toWish() {
        document.querySelector('main-carousel').style.display="none";
        document.querySelector('item-slide').style.display="none";
        document.querySelector('deal-page').style.display="none";
        document.querySelector('category-page').style.display="none";
        document.querySelector('wishlist-page').style.display="block";
    }
}
class SubTopNav extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#top-nav-template');
        this.template.innerHTML = subTopNavModel;
        this.appendChild(this.template.content.cloneNode(true));
        document.querySelector('#homePage').addEventListener('click', this.toHome);
        document.querySelector('#dealPage').addEventListener('click', this.toDeal);
    }
    toHome() {
        location.href="./";
    }
    toDeal() {
        document.querySelector('main-carousel').style.display="none";
        document.querySelector('item-slide').style.display="none";
        document.querySelector('wishlist-page').style.display="none";
        document.querySelector('category-page').style.display="none";
        document.querySelector('deal-page').style.display="block";
    }
}

class AniButton extends HTMLButtonElement {
    constructor() {
        super();
        const aniBtn = document.querySelector('ani-button');
        console.log('this:'+this);
        // this.template = document.querySelector('#animated-anchor-template');
        // this.template.innerHTML = animatedAnchorModel;
        // this.appendChild(this.template.content.cloneNode(true));
        aniBtn.addEventListener('click', e => this.drawRipple(e.offsetX, e.offsetY));
    }

  //why it does not working?
    drawRipple(x, y) {
        console.log(this);
        location.href = "#body";
        this.style.display ="none";
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
        this.template = document.querySelector('#my-page-template');
        this.template.innerHTML = myPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        // this.querySelector('#myExit').addEventListener('click', this.hidePage.bind(this));
        this.hideMyPage();
    }
    hideMyPage() {
        document.querySelector('my-page').style.display = "none";
    }
}
// dealPageModel,
class DealPage extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#deal-page-template');
        this.template.innerHTML = dealPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        // this.querySelector('#dealExit').addEventListener('click', this.hidePage.bind(this));
        this.hideDealPage();
    }
    hideDealPage() {
        document.querySelector('deal-page').style.display = "none";
    }
}
// itemPageModel,
class ItemPage extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#item-page-template');
        this.template.innerHTML = itemPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        // this.querySelector('#itemExit').addEventListener('click', this.hidePage.bind(this));
        this.hideItemPage();
    }
    hideItemPage() {
        document.querySelector('item-page').style.display = "none";
    }
}
// joinPageModel,
class JoinPage extends HTMLElement {
    constructor() {
        super();

        this.template = document.querySelector('#join-page-template');
        this.template.innerHTML = joinPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        document.querySelector('#joinExit').addEventListener('click', this.hideJoinPage.bind(this));
        document.querySelector('#postBtn').addEventListener('click', this.joinPostRequest.bind(this));
        document.querySelector('#duplicateCheck').addEventListener('click', this.duplGetRequest.bind(this));
        document.querySelectorAll('.open-eye')[0].addEventListener('click', this.showPassword);
        document.querySelectorAll('.open-eye')[1].addEventListener('click', this.showPasswordChk);
        document.querySelectorAll('.closed-eye')[0].addEventListener('click', this.hidePassword);
        document.querySelectorAll('.closed-eye')[1].addEventListener('click', this.hidePasswordChk);

        // const phone = document.querySelector('#phone');
        // phone.onkeypress = this.isPhone;
        this.hideJoinPage();

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

    hideJoinPage() {
        // this
        document.querySelector('join-page').style.display = "none";
        document.querySelector('#main-page').style.display = "block";
    }
    showJoinPage() {
        document.querySelector('join-page').style.display = "block";
    }
    joinPostRequest() {

        const lId = document.querySelector('#joinId');
        const uPw = document.querySelector('#joinPw');
        const pwC = document.querySelector('#passwordChk');
        const uEm = document.querySelector('#email');

        const msg = 
            (lId.value === "")
        ?   "아이디를 입력해주세요"
        :   (uPw.value === "")
        ?   "패스워드를 입력해주세요"
        :   (uPw.value !== pwC.value)
        ?   "패스워드가 다르게 입력되었습니다."
        :   (uEm.value === "")
        ?   "메일 주소를 입력해주세요"
        :   true;

        if (typeof(msg) === "string") {

            alert(msg);
            return false;
        }

        const param = `loginId=${lId.value}&userPw=${uPw.value}&userEmail=${uEm.value}`;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/join');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send(param);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        };
        console.log(param);

    }
    
    duplGetRequest() {
        const joinId = document.querySelector('#joinId').value;
        const param = `loginId=${joinId}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', './api/join/duplicateCheck?'+'loginId='+joinId);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.send(param);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
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
        this.template = document.querySelector('#login-page-template');
        this.template.innerHTML = loginPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        this.loginPage = document.querySelector('login-page');
        document.querySelector('#loginExit').addEventListener('click', this.hideLoginPage.bind(this));
        document.querySelector('#join').addEventListener('click', this.showJoinPage.bind(this));
        document.getElementById('loginBtn').addEventListener('click', this.sendAjax.bind(this));
        this.hideLoginPage();
    }
//loginId=ads&userPw=asd
//loginId=asd&userPw=asd
    sendAjax() {
        const loginId = document.getElementById('loginId');
        const userPw = document.getElementById('loginPw');

        const param = `loginId=${loginId.value}&userPw=${userPw.value}`
        console.log(loginId, userPw);
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'api/login');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        }
        xhr.send(param);
        console.log(param);

    }
    
    showLoginPage() {
        //!할것: 인자로 선택해서 조작 가능한 메소드로 분할하기. 재사용 가능하게;
        document.querySelector('deal-page').style.display="none";
        document.querySelector('wishlist-page').style.display="none";
        document.querySelector('category-page').style.display="none";
        document.querySelector('#main-page').style.display = "none";
        document.querySelector('login-page').style.display = "block";
    }
    hideLoginPage() {
        this.loginPage.style.display = 'none';
        document.querySelector('#main-page').style.display = "block";
    }
    showJoinPage() {
        JoinPage.prototype.showJoinPage();
        this.loginPage.style.display = 'none';
    }
}

// reviewPageModel,
class ReviewPage extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#review-page-template');
        this.template.innerHTML = reviewPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        // this.querySelector('#reviewExit').addEventListener('click', this.hidePage.bind(this));
        this.hideReviewPage();
    }
    hideReviewPage() {
        document.querySelector('review-page').style.display = "none";
    }
}
// paymentPageModel,
class PaymentPage extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#payment-page-template');
        this.template.innerHTML = paymentPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        // this.shadowRoot.querySelector('#paymentExit').addEventListener('click', this.hidePage.bind(this));
        this.hidePaymentPage();
    }
    hidePaymentPage() {
        document.querySelector('payment-page').style.display = "none";
    }
}
// wishlistPageModel,
class WishlistPage extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#wishlist-page-template');
        this.template.innerHTML = wishlistPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        // this.shadowRoot.querySelector('#wishlistExit').addEventListener('click', this.hidePage.bind(this));
        // this.hideWishlisPage();
        __v.hide('wishlist-page');
    }
    hideWishlisPage() {
        document.querySelector('wishlist-page').style.display = "none";
    }
}
// categoryPageModel
class CategoryPage extends HTMLElement {
    constructor() {
        super();
        this.template = document.querySelector('#category-page-template');
        this.template.innerHTML = categoryPageModel;
        this.appendChild(this.template.content.cloneNode(true));
        // this.shadowRoot.querySelector('#categoryExit').addEventListener('click', this.hidePage.bind(this));
        this.hideCategoryPage();
    }
    hideCategoryPage() {
        document.querySelector('category-page').style.display = "none";
    }
}

window.customElements.define('search-box', SearchBox);
window.customElements.define('item-slide', ItemSlide);
window.customElements.define('main-footer', MainFooter);
window.customElements.define('main-carousel', Carousel);
window.customElements.define('footer-nav', FooterNav);
window.customElements.define('top-nav', TopNav);
window.customElements.define('sub-top-nav', SubTopNav);
window.customElements.define('ani-button', AniButton, {extends: 'button'});
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


