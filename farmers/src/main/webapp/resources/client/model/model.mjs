const carouselModel = `
<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>

<div class="carousel-inner container">
    <div class="carousel-item show">
      <img src="/FARMER/teamProject_frontend/app/client/img/cheese.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/redMeat-849360782-770x553.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/Instant-Pot-Oatmeal-007.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
</div>
`

const searchBoxModel = `
<div class="width-90 center flex-row just-between pd-tb-20px">
    <input class="pd-a-10px width-100" placeholder="검색어를 입력해주세요." type="text"></input>
    <span class="pd-a-10px width-70px fw-7 t-center c-wgrn bgc-lgrn" id="close">닫기</span>
</div>
<div class="width-90 center flex-row just-around search-nav">
    <nav class="c-lgrn width-100 t-center fw-7 pd-a-10px" id="popular">인기 검색어</nav>
    <nav class="c-lgrn width-100 t-center fw-7 pd-a-10px" id="recent">최근 검색어</nav>
</div>
<div class="width-90 center flex-row-wrap just-around" id="tags">
    <tags class="width-50 pd-a-10px"></tags>
    <tags class="width-50 pd-a-10px"></tags>
    <tags class="width-50 pd-a-10px"></tags>
    <tags class="width-50 pd-a-10px"></tags>
    <tags class="width-50 pd-a-10px"></tags>
    <tags class="width-50 pd-a-10px"></tags>
</div>
`;

const pSearchTags = ['양파', '마늘', '쪽파', '흑돼지', '부추', '치즈'];
const rSearchTags = ['배고파', '뭐먹지', '라면은', '이제', '그만', '김밥'];

const mainFooterModel = `

<div class="container flex-col pd-b-100px bgc-wgrn">
    <div class="pd-a-5px">
      <span class="pd-lr-10px">이용약관</span>
      <span>개인정보처리방침</span>
    </div>
    <div class="pd-a-5px">
      <div class="pd-lr-10px">대표자: 변지혜</div>
      <div class="pd-lr-10px">사업자등록번호: 11111111</div>
      <div class="pd-lr-10px">통신판매업: 제 1212-가나다-1111</div>
      <div class="pd-lr-10px">주소: 서울특별시 분당구 신의성실로 12</div>
    </div>
    <div class="pd-a-20px center">
      <a class="join-seller-btn mg-a-10px pd-a-10px round-10px fw-7 c-wgrn bgc-lgrn" href="https://forms.gle/nN4J8GJQA3RX5HHT9">입점 문의하기</a>
    </div>
</div>
`

const footerNavModel = `
<nav class="width-100">
    <a class="width-100 flex-col" href="./">
    <i class="fas fa-home fa-2x "></i>
    <div>
        홈
    </div>
    </a>
</nav>

<nav id="search">
    <i class="fas fa-search fa-2x"></i>
    <div>
        검색
    </div>
</nav>
<nav id="category">
    <i class="fas fa-bars fa-2x"></i>
    <div >
     카테고리
    </div>
</nav>
<nav id="mypage">
    <i class="fas fa-user fa-2x center"></i>
    <div>
      마이페이지
    </div>
</nav>
`

const itemSlideModel = `
<nav class="container">
    <div class="item-slider flex-row">
      <div class="item mg-a-10px flex-row"><img src="./img/redMeat-849360782-770x553.jpg" alt="" srcset=""></div>
      <div class="item mg-a-10px flex-row"><img src="./img/redMeat-849360782-770x553.jpg" alt="" srcset=""></div>
      <div class="item mg-a-10px flex-row"><img src="./img/redMeat-849360782-770x553.jpg" alt="" srcset=""></div>
      <div class="item mg-a-10px flex-row"><img src="./img/redMeat-849360782-770x553.jpg" alt="" srcset=""></div>
      <div class="item mg-a-10px flex-row"><img src="./img/redMeat-849360782-770x553.jpg" alt="" srcset=""></div>
    </div>
</nav>
`

const topNavModel = `
<div class="top-nav container flex-row">
    <h1 class="center pd-a-10px">
    #farmers 
    </h1>
    <span class="seedling z-top" id="wishlist">
        <i class="fas fa-seedling pd-a-10px"></i>
    </span>
</div>
`
const subTopNavModel = `

<nav id="homePage" class="nav-item pd-a-5px mg-a-1px t-center width-100">
    추천상품
</nav>
<nav id="dealPage" class="nav-item pd-a-5px mg-a-1px t-center width-100">
    진행중인 딜
</nav>

`


//----------------pages--------------------
const loginPageModel = `
<main class="bgc-wgrn page">
    <div class="flex-row width-90 pd-a-15px center just-between">
        <h2 class="pd-a-5px">로그인</h2>
        <h2 class="pd-a-5px" id="loginExit">
            <i class="fas fa-times"></i>
        </h2>
    </div>
    <div action="api/login" method="post" class="container flex-col bgc-wgrn pd-a-15px">
        <input class="fs-xl pd-a-15px mg-a-5px fcenter width-90" type="text" name="loginId" id="loginId" placeholder="아이디를 입력하세요">
        <input class="fs-xl pd-a-15px mg-a-5px fcenter width-90" type="password" name="userPw" id="loginPw" placeholder="비밀번호를 입력하세요">
        
        <div class="width-90 fcenter mg-a-5px flex-row just-between">
            <div>
                <input class="pd-a-15px" type="checkbox" name="saveIdCheckbox" id="saveId">
                <label class="pd-a-15px" for="saveId">아이디 저장</label>
            </div>
            <div>
                <input class="pd-a-15px" type="checkbox" name="autoLoginCheckbox" id="autoLogin">
                <label class="pd-a-15px" for="autoLogin">자동 로그인</label>
            </div>
        </div>
        <button id="loginBtn" class="fs-xl pd-a-5px width-90 fcenter mg-t-20px btns" type="submit">로그인</button>
    </div>
    <div class="contariner pd-a-15px flex-col">
        <div class="center width-90 flex-row just-between">
            <a class="c-lgrn" href="http://">아이디 찾기</a>
            <a class="c-lgrn" href="http://">비밀번호 찾기</a>
        </div>
        <input class="fs-xl pd-a-5px width-90 mg-t-10px fcenter btns" id="join" type="button" value="회원가입">
    </div>
</main>
`

const joinPageModel = `
<div class="width-90 center page">
    <div class="flex-row just-between pd-a-15px mg-a-5px">
        <h1 class="">회원가입</h1>
        <h2 class="" id="joinExit">
            <i class="fas fa-times"></i>
        </h2>
    </div>
    <div class="width-100 flex-col pd-a-15px">
    
        <div class="flex-row width-100">
            <input class="fs-xl pd-a-10px mg-a-10px width-100" type="text" name="loginId" id="joinId" placeholder="아이디를 입력해주세요">
            <input class="fs-xl mg-a-10px width-140px btns" id="duplicateCheck" type="button" value="중복확인">
        </div>
        <div class="join-pw flex-row width-100">
            <input class="width-100 fs-xl pd-a-10px mg-a-10px" type="password" name="userPw" id="joinPw" placeholder="비밀번호를 입력해주세요">
            <div class="open-eye">
                <i class="fas fa-eye fa-larger"></i>
            </div>
            <div class="closed-eye">
                <i class="fas fa-eye-slash fa-larger"></i>
            </div>
        </div>
        <div class="join-pw flex-row width-100">
            <input class="width-100 fs-xl pd-a-10px mg-a-10px" type="password" name="userPw" id="passwordChk" placeholder="비밀번호를 한번 더 입력해주세요">
            <div class="open-eye">
                <i class="fas fa-eye fa-larger"></i>
            </div>
            <div class="closed-eye">
                <i class="fas fa-eye-slash fa-larger"></i>
            </div>
        </div>
            <input class="fs-xl pd-a-10px mg-a-10px" type="text" name="userName" id="name" placeholder="이름을 입력해주세요">
            <input class="fs-xl pd-a-10px mg-a-10px" type="email" name="userEmail" id="email" placeholder="이메일 주소를 입력해주세요">
        <div class="flex-row">
            <input class="fs-xl pd-a-10px mg-a-10px width-100" type="tel" name="userPhoneNum" id="phone" maxlength="13" placeholder="핸드폰 번호를 입력해주세요">
            <input class="fs-xl mg-a-10px width-140px btns" id="certification" type="button" value="인증번호">
        </div>
        <div class="flex-row mg-a-10px">
            <input class="pd-a-10px mg-a-10px" type="checkbox" name="agreement" id="agrChk">
            <label class="fs-xl" for="agrChk">전체 동의합니다.</label>
        </div>
        <input class="fs-xl pd-a-10px mg-a-10px btns" id="postBtn" type="button" value="가입하기">
        
    </div>
</div>
`

const myPageModel = `
<div class="bgc-ggrn page">

    <div class="flex-col round-10px mg-a-11px bgc-wgrn">
        <div class="">
            <div class="left mg-a-10px bgc-pyel box-50px">회원등급</div>
            <div class="pd-a-15px">회원이름</div>
            <div class="">ex)적립 5% 적용</div>
        </div>

        <div class="mg-t-10px flex-row">

            <button class="mg-a-10px width-100">등급 정책</button>
            <button class="mg-a-10px width-100">다음 달 예상 등급</button>
        </div>
    </div>

    <div class="flex-col mg-a-10px">
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">적립금</div>
            <div class="right">0원></div>
        </div>
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">친구초대</div>
            <div class="right">5000원></div>
        </div>
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">상품후기</div>
            <div class="right">1000원</div>
        </div>
    </div>

    <div class="flex-col mg-a-10px">
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">상품 문의</div>
            <div class="right">></div>
        </div>
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">대량주문 문의</div>
            <div class="right">></div>
        </div>
    </div>
    <div class="flex-col mg-a-10px">
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">주문내역</div>
            <div class="right">></div>
        </div>
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">배송안내</div>
            <div class="right">></div>
        </div>
    </div>
    <div class="flex-col mg-a-10px">
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">개인정보 수정</div>
            <div class="right">></div>
        </div>
        <div class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
            <div class="left">로그아웃</div>
            <div class="right">></div>
        </div>
    </div>
</div>
`

const dealPageModel = `
<div class="page bgc-ggrn">

    <div class="container deal-item">
        <div class="width-90 center item">
            <img class="" id="dealPageItem1" src="./img/cheese.jpg" alt="상품 이미지">
            <div class="item-desc round-10px pd-a-3px mg-a-1px ap-l-1" id="time">남은 time</div>
            <div class="item-desc round-10px pd-a-3px mg-a-1px ap-l-2" id="count">참여중인 인원</div>
            <div class="item-desc round-10px pd-a-3px mg-a-1px ap-l-3" id="first-price">최초 가격</div>
            <div class="item-desc round-10px pd-a-3px mg-a-1px ap-l-4" id="last-price">만석시 가격</div>
            <div class="item-desc round-10px pd-a-3px mg-a-1px ap-r-1" id="location">배송지</div>
        </div>

        <div class="flex-row just-between bgc-wgrn width-90 center">
            <div class="flex-col width-100">
                <div class="mg-a-5px">
                    상품 이름
                </div>
                <div class="mg-a-5px">
                    상품 설명(소제목)
                </div>
                <div class="mg-a-5px just-between flex-row">
                    <div class="width-100">
                        현재 가격
                    </div>
                    <div class="width-100">
                        그램당 가격
                    </div>
                </div>
            </div>
            <div class="flex-col just-around box-50px">
                <div class="pd-a-15px">
                    찜
                </div>
                <div class="pd-a-15px">
                    딜참여
                </div>
            </div>
        </div>
    </div>

</div>
`

const itemPageModel = `
<div class="flex-col page bgc-lgrn">
    <img class="" src="./img/cheese.jpg" alt="상품 이미지">
    <div class="item-nav bgc-wgrn flex-row just-around">
        <nav class="bgc-wgrn width-100 t-center pd-a-10px"><i class="fas c-lgrn pd-a-5px fa-seedling"></i>찜</nav>
        <nav class="bgc-wgrn width-100 t-center pd-a-10px"><i class="fas c-lgrn pd-a-5px fa-share-square"></i>공유</nav>
        <nav class="bgc-wgrn width-100 t-center pd-a-10px"><i class="fas c-lgrn pd-a-5px fa-comment-alt"></i>문의</nav>
    </div>
    <div class="pd-a-20px bgc-ggrn">
        상품 설명
    </div>
    <div class="footer-nav z-top flex-row just-around">
        <nav class="bgc-pyel" id="join-deal">딜 참여</nav>
        <nav class="bgc-ggrn" id="open-deal">딜 오픈</nav>
    </div>
</div>
`

const reviewPageModel = `
<div class="page bgc-ggrn flex-col">
    <div class="flex-col bgc-wgrn">
        <div class="">
            <div class="left mg-a-10px bgc-pyel box-50px">회원등급</div>
            <div class="pd-a-15px">회원이름</div>
            <div class="">ex)적립 5% 적용</div>
        </div>
        
        <div class="item-nav bgc-wgrn flex-row just-around">
            <nav class="width-100 pd-a-10px t-center bgc-wgrn"><i class="fas fa-edit"></i> 상품평 쓰기</nav>
            <nav class="width-100 pd-a-10px t-center bgc-wgrn"><i class="fas fa-scroll"></i> 내 상품평</nav>
        </div>
    </div>
    <div class="flex-col bgc-wgrn mg-t-10px">
        <div class="flex-col">
            <div class="flex-row just-between">
                <div class="pd-a-5px">배송완료일: 2020.07.07</div>
                <div class="pd-a-5px" id="reviewExit">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="flex-row just-between">
                <div class="mg-a-10px img-box-140px">
                    <img src="./img/cheese.jpg" alt="item-image" class="item-img">
                </div>
                <div class="mleft">
                    <div class="mg-t-10px pd-a-10px">상품 이름</div>
                    <div class="stars pd-a-10px mg-t-10px">
                        <i class="c-dyel fas fa-star fa-3x"></i>
                        <i class="c-dyel fas fa-star fa-3x"></i>
                        <i class="c-dyel fas fa-star fa-3x"></i>
                        <i class="c-dyel fas fa-star fa-3x"></i>
                        <i class="c-dyel fas fa-star fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`

const paymentPageModel = `
<div class="flex-col center page bgc-ggrn">
    <div class="bgc-wgrn mg-a-5px pd-a-10px" id="item-name">상품명</div>
    <div class="bgc-wgrn mg-a-5px pd-a-10px" id="item-price">가격</div>
    <div class="bgc-wgrn mg-a-5px pd-a-10px" id="payment-phone">결제 방법</div>
    <div class="bgc-wgrn mg-a-5px pd-a-10px" id="phone-number">전화번호</div>
    <div class="bgc-wgrn mg-a-5px pd-a-10px" id="registration-number">주민번호</div>
    <button class="next">다음</button>
</div>
`

const wishlistPageModel = `
<div class="flex-col bgc-lgrn page">
    <div class="bgc-wgrn pd-a-15px">
        <div class="pd-a-15px item-nav">
            <input class="pd-a-15px" type="checkbox" name="" id="selectA">
            <label class=" pd-a-15px" for="selectA">전체선택 (2/2)</label>
            <input class="right" type="button" value="선택삭제">
        </div>
        <div class="pd-a-15px item-nav">
            <input type="checkbox" class="item-list" id="select">
            <label class=" width-100 pd-a-15px" for="select">상품 이름</label>
            <div class="right pd-a-5px" id="wishlistExit">
                <i class="fas fa-times"></i>
            </div>
        </div>

        <div class="pd-a-15px flex-row left">

            <div class="img-box-140px">
                <img src="./img/cheese.jpg" alt="" class="item-img">
            </div>

            <div class="pd-a-10px">
                <div class="pd-lr-10px">생산자:</div>
                <div class="pd-lr-10px">생산지:</div>
                <div class="pd-lr-10px">남은 수량:</div>
                <div class="pd-lr-10px">포장 단위:</div>
                <div class="pd-lr-10px">그램 당 가격:</div>
            </div>

        </div>
    </div>
</div>
`

const categoryPageModel = `
<main class="page">
    <div class="flex-col pd-a-10px">
      <div class="pd-tb-20px" id="vegi"><i class="fas fa-carrot c-lgrn width-50px pd-lr-10px"></i>야채 <i class="fas fa-angle-down right pd-lr-10px"></i> </div>
      <div class="pd-tb-20px" id="fruit"><i class="fas fa-apple-alt c-lgrn width-50px pd-lr-10px"></i>과일 <i class="fas fa-angle-down right pd-lr-10px"></i> </div>
      <div class="pd-tb-20px" id="meat"><i class="fas fa-drumstick-bite c-lgrn width-50px pd-lr-10px"></i>육류 <i class="fas fa-angle-down right pd-lr-10px"></i> </div>
      <div class="pd-tb-20px" id="fish"><i class="fas fa-fish c-lgrn width-50px pd-lr-10px"></i>수산물 <i class="fas fa-angle-down right pd-lr-10px"></i> </div>
      <div class="pd-tb-20px" id="milk"><i class="fas fa-cheese c-lgrn width-50px pd-lr-10px"></i>유제품 <i class="fas fa-angle-down right pd-lr-10px"></i> </div>
      <div class="pd-tb-20px" id="organic"><i class="fas fa-leaf c-lgrn width-50px pd-lr-10px"></i>유기농 <i class="fas fa-angle-down right padding-lr-10px"></i> </div>
    </div>
  </main>
`

export {
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
    //anchor
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
};