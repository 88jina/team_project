import _m from "../model/Model.js";

//-------------utility templates--------------

const popularSearchTagsTemplate = [`${_m._searchDummy().p1}`, `${_m._searchDummy().p2}`, `${_m._searchDummy().p3}`, `${_m._searchDummy().p4}`, `${_m._searchDummy().p5}`, `${_m._searchDummy().p6}`];
const recentSearchTagsTemplate = [`${_m._searchDummy().r1}`, `${_m._searchDummy().r2}`, `${_m._searchDummy().r3}`, `${_m._searchDummy().r4}`, `${_m._searchDummy().r5}`, `${_m._searchDummy().r6}`];

const searchBoxTemplate = `
<div class="s_b_e container">
<div class="fixed search-box center bgc-wgrn z-toppiest width-100 flex-col">
    <div class="width-90 center flex-row just-between pd-tb-20px">
        <input class="pd-a-10px width-100" placeholder="검색어를 입력해주세요." type="text"></input>
        <span class="pd-a-10px width-70px fw-7 t-center c-wgrn bgc-lgrn" id="close">닫기</span>
    </div>
    <div class="rel z-toppiest width-90 center flex-row just-around search-nav">
        <nav class="c-lgrn width-100 t-center fw-7 pd-a-10px" id="popular">인기 검색어</nav>
        <nav class="c-lgrn width-100 t-center fw-7 pd-a-10px" id="recent">최근 검색어</nav>
    </div>
    <ul class="rel z-toppiest width-90 center flex-row-wrap just-around" id="tags">
        <li class="width-50 pd-a-10px"></li>
        <li class="width-50 pd-a-10px"></li>
        <li class="width-50 pd-a-10px"></li>
        <li class="width-50 pd-a-10px"></li>
        <li class="width-50 pd-a-10px"></li>
        <li class="width-50 pd-a-10px"></li>
    </ul>
</div>

<div class="shade z-mid center width-100"></div>
</div>
`;


const footerNavTemplate = `
<div class="f_n_e container z-tom bgc-wgrn footer-nav flex-row justify-content-around">
    <nav id="homePage">
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
        <div>
         카테고리
        </div>
    </nav>
    <nav id="myPage">
        <i class="fas fa-user fa-2x center"></i>
        <div>
          마이페이지
        </div>
    </nav>
</div>
`


const topNavTemplate = `
<div class="t_n_e containerH flex-col">
    <div class="top-nav containerH flex-row">
        <h1 class="center pd-a-10px">
        #farmers 
        </h1>
        <span class="seedling z-top" id="wishlist">
            <i class="fas fa-seedling pd-a-10px"></i>
        </span>
    </div>
</div>
`
const subTopNavTemplate = `
<div class="s_t_n_e flex-row">
    <nav id="homePage" class="nav-item pd-a-5px mg-a-1px t-center width-100">
        추천상품
    </nav>
    <nav id="dealPage" class="nav-item pd-a-5px mg-a-1px t-center width-100">
        진행중인 딜
    </nav>
</div>
`


//----------------page templates--------------------

const homePageTemplate = `
<div class="h_p_e page bgc-ggrn container">
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>

    <div class="carousel-inner containerH">
        <div class="carousel-item c-item1 show">
          <img src="/farmers/resources/client/img/vegij1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4 class="fw-7">청정 오이</h4>
            <p class="">이것은 오이입니다.</p>
          </div>
        </div>
        <div class="carousel-item c-item2">
          <img src="/farmers/resources/client/img/vegij2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4 class="fw-7">청정 풋고추</h4>
            <p class="">이것은 풋고추입니다.</p>
          </div>
        </div>
        <div class="carousel-item c-item3">
          <img src="/farmers/resources/client/img/vegij3.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4 class="fw-7">청정 무농약 상추</h4>
            <p class="">이것은 농약을 사용 안한 상추입니다.</p>
          </div>
        </div>
        <div class="carousel-item c-item4">
          <img src="/farmers/resources/client/img/vegij4.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4 class="fw-7">청정 해남 마늘</h4>
            <p class="">이것은 마늘입니다. 마늘.</p>
          </div>
        </div>
        <div class="carousel-item c-item5">
          <img src="/farmers/resources/client/img/vegij5.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4 class="fw-7">청정 구워 먹는 대파</h4>
            <p class="">이것은 고기랑 구워 먹으면 맛있습니다.</p>
          </div>
        </div>
    </div>

    <nav class="width-90 center parent">
        <div class="item-slider flex-row child">
          <div class="s-item1 item mg-a-10px flex-row"><img src="/farmers/resources/client/img/vegij1.jpg" alt="" srcset=""></div>
          <div class="s-item2 item mg-a-10px flex-row"><img src="/farmers/resources/client/img/vegij2.jpg" alt="" srcset=""></div>
          <div class="s-item3 item mg-a-10px flex-row"><img src="/farmers/resources/client/img/vegij3.jpg" alt="" srcset=""></div>
          <div class="s-item4 item mg-a-10px flex-row"><img src="/farmers/resources/client/img/vegij4.jpg" alt="" srcset=""></div>
          <div class="s-item5 item mg-a-10px flex-row"><img src="/farmers/resources/client/img/vegij5.jpg" alt="" srcset=""></div>
        </div>
    </nav>

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
</div>
`

const loginPageTemplate = `
<div class="l_p_e container">
    <div class="page">
        <div class="flex-row width-90 pd-a-15px center just-between">
            <h2 class="pd-a-5px">로그인</h2>
            <h2 class="pd-a-5px" id="loginExit">
                <i class="fas fa-times"></i>
            </h2>
        </div>
        <div action="api/login" method="post" class="container flex-col pd-a-15px">
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
            <button id="loginBtn" class="fs-xl pd-a-10px width-90 fcenter mg-t-10px btns" type="submit">로그인</button>
        </div>
        <div class="contariner pd-a-15px flex-col">
            <div class="center width-90 flex-row just-between">
                <a class="c-lgrn" href="http://">아이디 찾기</a>
                <a class="c-lgrn" href="http://">비밀번호 찾기</a>
            </div>
            <input class="fs-xl pd-a-10px mg-t-20px btns width-90 fcenter btns" id="join" type="button" value="회원가입">
        </div>
    </div>
</div>
`

const joinPageTemplate = `
<div class="j_p_e container">
    <div class="width-90 center page">
        <div class="flex-row just-between pd-a-15px mg-a-5px">
            <h2 class="">회원가입</h1>
            <h2 class="" id="joinExit">
                <i class="fas fa-times"></i>
            </h2>
        </div>
        <div class="width-100 pd-t-15px flex-col">

            <div class="flex-row width-100">
                <input class="fs-xl pd-a-15px mg-a-5px fcenter width-100" type="text" name="loginId" id="joinId" placeholder="아이디를 입력해주세요">
                <input class="fs-xl pd-a-10px mg-a-5px width-140px btns" id="duplicateCheck" type="button" value="중복확인">
            </div>
            <div class="join-pw flex-row width-100">
                <input class="width-100 fs-xl pd-a-15px mg-a-5px" type="password" name="userPw" id="joinPw" placeholder="비밀번호를 입력해주세요">
                <div id="oEye1" class="open-eye">
                    <i class="fas fa-eye fa-larger"></i>
                </div>
                <div id="cEye1" class="closed-eye">
                    <i class="fas fa-eye-slash fa-larger"></i>
                </div>
            </div>
            <div class="join-pw flex-row width-100">
                <input class="width-100 fs-xl pd-a-15px mg-a-5px" type="password" name="userPw" id="passwordChk" placeholder="비밀번호를 한번 더 입력해주세요">
                <div id="oEye2" class="open-eye">
                    <i class="fas fa-eye fa-larger"></i>
                </div>
                <div id="cEye2" class="closed-eye">
                    <i class="fas fa-eye-slash fa-larger"></i>
                </div>
            </div>
            <div class="flex-row width-100">
                <input class="fs-xl pd-a-15px mg-a-5px width-100" type="email" name="userEmail" id="email" placeholder="이메일 주소를 입력해주세요">
                <input class="fs-xl pd-a-10px mg-a-5px width-140px btns" id="mailSendBtn" type="button" value="인증하기">
            </div>
            <div class="flex-row width-100">
                <input class="fs-xl pd-a-15px mg-a-5px width-100" type="text" "name="mailAuth" id="mailAuth" placeholder="인증번호를 입력해주세요">
                <input class="fs-xl pd-a-10px mg-a-5px width-140px btns" id="mailAuthBtn" type="button" value="인증확인">
            </div>

            <input class="fs-xl pd-a-10px mg-a-5px btns" id="postBtn" type="button" value="가입하기">

        </div>
    </div>
</div>
`

const mailAuthTemplate = `
<div class="m_a_e container page">
    <div class="flex-row width-100">
        <input class="fs-xl pd-a-15px mg-a-5px fcenter width-100" type="text" name="mailAuth" id="mailAuth" placeholder="인증번호를 입력해주세요">
        <input class="fs-xl pd-a-10px mg-a-5px width-140px btns" id="mailAuthBtn" type="button" value="인증하기">
    </div>
</div>
`
const myPageTemplate = (data = true) => {
    let res = data;

    function rate(res) {
        switch (res.degree) {
            case "0":
                return "일반 등급 5% 적립";
            case "1":
                return "와우 등급 10% 적립";
            case undefined:
                break;
        }
    }

    let userType = res.userType;
    switch (userType) {
        case "user":
            return `
                <div class="m_p_e container">
                    <div class="bgc-ggrn page">
                        <div class="flex-row just-between mg-a-10px">
                            <h2 class="pd-a-5px">
                                마이페이지
                            </h2>
                            <h2 class="pd-a-5px" id="myPageExit">
                                <i class="fas fa-times"></i>
                            </h2>
                        </div>
                        <div class="">
                            <div id="userType" class="left mg-a-10px bgc-pyel box-50px">일반</div>
                            <div class="pd-a-15px">${res.loginId}님</div>
                            <div class="">${rate(res)}</div>
                        </div>

                        <div class="mg-t-10px flex-row">
                            <button id="degreePolicy" class="mg-a-10px width-100">등급 정책</button>
                            <button id="expectedDegree" class="mg-a-10px width-100">다음 달 예상 등급</button>
                        </div>
                        <div class="flex-col mg-a-10px">

                            <div id="availablePoint" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">적립금</div>
                                <div class="right">${res.availablePoint}원></div>
                            </div>
                            <div id="inviteFriend" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">친구초대</div>
                                <div class="right">5000원></div>
                            </div>
                            <div id="itemReview" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">상품후기</div>
                                <div class="right">1000원</div>
                            </div>
                        </div>
                
                        <div class="flex-col mg-a-10px">
                            <div id="itemQuery" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">상품문의</div>
                                <div class="right">></div>
                            </div>
                            <div id="bulkOrder" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">대량주문</div>
                                <div class="right">></div>
                            </div>
                        </div>
                        <div class="flex-col mg-a-10px">
                            <div id="dealHistory" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">참여한 딜</div>
                                <div class="right">></div>
                            </div>
                                <div id="dealHistory" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">참여한 딜</div>
                                <div class="right">></div>
                            </div>
                            <div id="orderHistory" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">주문내역</div>
                                <div class="right">></div>
                            </div>
                            <div id="deliveryPolicy" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">배송안내</div>
                                <div class="right">></div>
                            </div>
                        </div>
                        <div class="flex-col mg-a-10px">
                            <div id="editMyInfo" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">개인정보 수정</div>
                                <div class="right">></div>
                            </div>
                            <div id="logOut" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">로그아웃</div>
                                <div class="right">></div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        case "seller":
            return `
                <div class="m_p_e container">
                    <div class="bgc-ggrn page">
                        <div class="flex-row just-between mg-a-10px">
                            <h2 class="pd-a-5px">
                                마이페이지
                            </h2>
                            <h2 class="pd-a-5px" id="myPageExit">
                                <i class="fas fa-times"></i>
                            </h2>
                        </div>
                        <div class="">
                            <div id="userType" class="left t-center mg-a-10px bgc-pyel box-50px">판매자</div>
                            <div class="pd-a-15px">${res.loginId}님</div>
                            <div class="">${rate(res)}</div>
                        </div>
                        <div class="mg-t-10px flex-row">
                            <button id="degreePolicy" class="mg-a-10px width-100">등급 정책</button>
                            <button id="expectedDegree" class="mg-a-10px width-100">다음 달 예상 등급</button>
                        </div>
                        <div class="flex-col mg-a-10px">
                        <div id="itemPost" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                            <div class="left">상품 등록</div>
                            <div class="right">></div>
                        </div>
                        <div id="itemEditList" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                            <div class="left">상품 수정</div>
                            <div class="right">></div>
                        </div>
                        <div id="destinationEdit" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                            <div class="left">배송지 수정</div>
                            <div class="right">></div>
                        </div>
                     </div>
                        <div class="flex-col mg-a-10px">
                            <div id="availablePoint" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">적립금</div>
                                <div class="right">${res.availablePoint}원></div>
                            </div>
                            <div id="inviteFriend" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">친구초대</div>
                                <div class="right">5000원></div>
                            </div>
                            <div id="itemReview" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">상품후기</div>
                                <div class="right">1000원</div>
                            </div>
                        </div>
                
                        <div class="flex-col mg-a-10px">
                            <div id="itemQuery" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">상품문의</div>
                                <div class="right">></div>
                            </div>
                            <div id="bulkOrder" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">대량주문</div>
                                <div class="right">></div>
                            </div>
                        </div>
                        <div class="flex-col mg-a-10px">
                            <div id="dealHistory" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">참여한 딜</div>
                                <div class="right">></div>
                            </div>
                            <div id="orderHistory" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">주문내역</div>
                                <div class="right">></div>
                            </div>
                            <div id="deliveryPolicy" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">배송안내</div>
                                <div class="right">></div>
                            </div>
                        </div>
                        <div class="flex-col mg-a-10px">
                            <div id="editMyInfo" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">개인정보 수정</div>
                                <div class="right">></div>
                            </div>
                            <div id="logOut" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">로그아웃</div>
                                <div class="right">></div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        case "admin":
            return `
                <div class="m_p_e container">
                    <div class="bgc-ggrn page">
                        <div class="flex-row just-between mg-a-10px">
                            <h2 class="pd-a-5px">
                                마이페이지
                            </h2>
                            <h2 class="pd-a-5px" id="myPageExit">
                                <i class="fas fa-times"></i>
                            </h2>
                        </div>
                        <div class="">
                            <div id="userType" class="left mg-a-10px bgc-pyel box-50px">관리자</div>
                            <div class="pd-a-15px">${res.loginId}님</div>
                            <div class="">${rate(res)}</div>
                        </div>
                        <div class="mg-t-10px flex-row">
                            <button id="degreePolicy" class="mg-a-10px width-100">등급 정책</button>
                            <button id="expectedDegree" class="mg-a-10px width-100">다음 달 예상 등급</button>
                        </div>
                        <div class="flex-col mg-a-10px">
                        <div id="toAdminPage" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                            <div class="left">관리자 페이지로</div>
                            <div class="right">></div>
                        </div>
                     </div>
                        <div class="flex-col mg-a-10px">
                            <div id="availablePoint" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">적립금</div>
                                <div class="right">${res.availablePoint}원></div>
                            </div>
                            <div id="inviteFriend" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">친구초대</div>
                                <div class="right">5000원></div>
                            </div>
                            <div id="itemReview" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">상품후기</div>
                                <div class="right">1000원</div>
                            </div>
                        </div>
                
                        <div class="flex-col mg-a-10px">
                            <div id="itemQuery" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">상품문의</div>
                                <div class="right">></div>
                            </div>
                            <div id="bulkOrder" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">대량주문</div>
                                <div class="right">></div>
                            </div>
                        </div>
                        <div class="flex-col mg-a-10px">
                            <div id="dealHistory" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">참여한 딜</div>
                                <div class="right">></div>
                            </div>
                            <div id="orderHistory" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">주문내역</div>
                                <div class="right">></div>
                            </div>
                            <div id="deliveryPolicy" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">배송안내</div>
                                <div class="right">></div>
                            </div>
                        </div>
                        <div class="flex-col mg-a-10px">
                            <div id="editMyInfo" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">개인정보 수정</div>
                                <div class="right">></div>
                            </div>
                            <div id="logOut" class="bgc-wgrn mg-a-1px round-10px pd-a-15px">
                                <div class="left">로그아웃</div>
                                <div class="right">></div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        default:
            return `<div class="m_p_e">템플릿 에러</div>`;
    }
};


const itemPostPageTemplate = `
<div class="i_p_p_e page center">
    <div class="width-90 center">
        <h2>
            상품 등록
        </h2>
        <div class="flex-col">
            <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="itemName">상품 이름:</label>
            <input class="pd-a-10px fs-xl width-100" type="text" name="itemName" id="itemName">
        </div>
        <div class="flex-col">
            <label  class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="category">상품 종류:</label>
            <select class="pd-a-10px fs-xl width-100" name="category" id="category" required>
                <option value="vegi">야채</option>
                <option value="fruit">과일</option>
                <option value="meat">육류</option>
                <option value="seaFood">수산물</option>
                <option value="dairy">유제품</option>
            </select>
        </div>
        <div class="flex-col">
            <label  class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="sellingUnit">판매 단위:</label>
            <select class="pd-a-10px fs-xl width-100" name="sellingUnit" id="sellingUnit" required>
                <option value="100">100g</option>
                <option value="200">200g</option>
                <option value="500">500g</option>
                <option value="1000">1kg</option>
                <option value="2000">2kg</option>
                <option value="5000">5kg</option>
                <option value="10000">10kg</option>
                <option value="100000">100kg</option>
            </select>
        </div>
        <div class="flex-col">
            <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="pricePerUnit">단위 당 판매 가격:</label>
            <input class="pd-a-10px fs-xl width-100 t-right" type="text" name="pricePerUnit" id="pricePerUnit" placeholder="원" required>
        </div>
        <div class="flex-col">
            <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="totalAmount">판매 가능한 총량:</label>
            <input class="pd-a-10px fs-xl width-100" type="text" name="totalAmount" id="totalAmount" required>
        </div>
        <div class="flex-col">
            <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="minAmount">딜 체결 가능한 최소 단위:</label>
            <input class="pd-a-10px fs-xl width-100" type="number" name="minAmount" id="minAmount" required>
        </div>
        <div class="flex-col">
            <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="maxAmount">판매 가능한 최대 단위:</label>
            <input class="pd-a-10px fs-xl width-100" type="number" name="maxAmount" id="maxAmount" required>
        </div>
        <div class="flex-col">
            <label  class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="discount">판매 단위 당 할인율:</label>
            <select class="pd-a-10px fs-xl width-100"  name="discount" id="discount" required>
                <option value="2">2단위 당 5%</option>
                <option value="3">3단위 당 5%</option>
                <option value="4">4단위 당 5%</option>
                <option value="5">5단위 당 5%</option>
            </select>
        </div>
        <div class="flex-col">
            <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="description">상품 설명:</label>
            <textarea class="pd-a-10px fs-xl width-100" height-200px" name="description" id="description" placeholder="상품 설명을 입력해주세요" required></textarea>
        </div>
        <div>
            <form id="itemPostForm">
                <div class="flex-col ">
                    <label class=" mg-t-10px pd-a-10px fs-xl width-350px t-center" for="thumbNail" id="thumbNailLabel">상품 사진:</label>
                    <input class=" pd-a-10px fs-xl width-100" type="file" name="thumbNail" id="thumbNail" accept=".png, .jpg, .jpeg" multiple required>
                </div>
                <input class="pd-a-10px fs-xl width-100" id="itemPostBtn" type="submit" value="상품 등록">
            </form>
        </div>
    </div>
</div>
`;


const itemEditListPageTemplate = (data = true) => {
    console.log("itemEditListData = " + data)
    const main = document.getElementById('main');
    main.innerHTML = `<div class="i_e_l_p_e page container"></div>`;
    const _ielpe = document.querySelector('.i_e_l_p_e');

    switch (data) {
        case true:
            _ielpe.innerHTML =
                `<div class="i_e_l_c_e">아이템에딧리스트페이지에러 담긴 데이터가 없습니다.</div>`;
            return _ielpe.parentNode.innerHTML;
        case undefined:
            _ielpe.innerHTML =
                `<div class="i_e_l_c_e">아이템에딧리스트페이지에러 담긴 데이터가 없습니다.</div>`;
            return _ielpe.parentNode.innerHTML;
        default:
            const list = Object.values(data);
            let i = data.count;
            do {
                let imgRoot = list[i].thumbNail;

                img: switch (imgRoot) {
                    case null:
                        imgRoot = '/img/noItem.jpg'
                        break img;
                    default:
                        break img;
                };
                const origin = location.origin;
                const imgPath = imgRoot.split('webapp')[1];
                const template = document.getElementById('i_e_l_p_t')
                template.innerHTML =
                    `<ul class="i_e_l_c_e">
                        <div class="">
                        </div>
                        <li class="flex-col center ">
                            <div id="itemThumb${i}" class="mg-a-10px pd-a-10px width-100">
                                <img src="${origin}/farmers${imgPath}" alt="이미지가 로드되지 않았습니다." srcset="">
                            </div>
                            <div id="itemDescBox${i}" class="mg-a-10px pd-a-10px width-100 flex-col">
                                <div id="itemName${i}" class="mg-a-10px pd-a-10px width-100">${list[i].itemName}</div>
                                <div id="category${i}" class="mg-a-10px pd-a-10px width-100">${list[i].category}</div>
                                <div id="sellingUnit${i}" class="mg-a-10px pd-a-10px width-100">${list[i].sellingUnit}</div>
                                <div id="totalAmount${i}" class="mg-a-10px pd-a-10px width-100">${list[i].totalAmount}</div>
                                <div id="description${i}" class="mg-a-10px pd-a-10px width-100">${list[i].description}</div>
                                <div id="pricePerUnit${i}" class="mg-a-10px pd-a-10px width-100">${list[i].pricePerUnit}</div>
                                <div id="discount${i}" class="mg-a-10px pd-a-10px width-100">${list[i].discount}</div>
                            </div>
                            <button id="editThisBtn${i}" type="submit">수정하기</button>
                        </li>
                    </ul>`
                window.localStorage.setItem(`itemId${i}`, `${list[i].itemId}`);
                window.localStorage.setItem(`sellerId${i}`, `${list[i].sellerId}`);
                _ielpe.appendChild(template.content.cloneNode(true));
                --i;
            } while (i > 0);
            return _ielpe.parentNode.innerHTML;
    }
};

const itemEditPageTemplate = `
<div class="i_e_p_e page center">
<div class="width-90 center">
    <h2>
        상품 수정
    </h2>
    <div class="flex-col">
        <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="itemName">상품 이름:</label>
        <input class="pd-a-10px fs-xl width-100" type="text" name="itemName" id="itemName">
    </div>
    <div class="flex-col">
        <label  class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="itemCategory">상품 종류:</label>
        <select class="pd-a-10px fs-xl width-100" name="itemCategory" id="itemCategory" required>
            <option value="vegi">야채</option>
            <option value="fruit">과일</option>
            <option value="meat">육류</option>
            <option value="seaFood">수산물</option>
            <option value="dairy">유제품</option>
        </select>
    </div>
    <div class="flex-col">
        <label  class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="sellingUnit">판매 단위:</label>
        <select class="pd-a-10px fs-xl width-100" name="sellingUnit" id="sellingUnit" required>
            <option value="100">100g</option>
            <option value="200">200g</option>
            <option value="500">500g</option>
            <option value="1000">1kg</option>
            <option value="2000">2kg</option>
            <option value="5000">5kg</option>
            <option value="10000">10kg</option>
            <option value="100000">100kg</option>
        </select>
    </div>
    <div class="flex-col">
        <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="pricePerUnit">단위 당 판매 가격:</label>
        <input class="pd-a-10px fs-xl width-100 t-right" type="text" name="pricePerUnit" id="pricePerUnit" placeholder="원" required>
    </div>
    <div class="flex-col">
        <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="totalAmount">판매 가능한 총량:</label>
        <input class="pd-a-10px fs-xl width-100" type="text" name="totalAmount" id="totalAmount" required>
    </div>
    <div class="flex-col">
        <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="minAmount">딜 체결 가능한 최소 단위:</label>
        <input class="pd-a-10px fs-xl width-100" type="number" name="minAmount" id="minAmount" required>
    </div>
    <div class="flex-col">
        <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="maxAmount">배송 가능한 최대 단위:</label>
        <input class="pd-a-10px fs-xl width-100" type="number" name="maxAmount" id="maxAmount" required>
    </div>
    <div class="flex-col">
        <label  class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="discount">판매 단위 당 할인율:</label>
        <select class="pd-a-10px fs-xl width-100"  name="discount" id="discount" required>
            <option value="2">2단위 당 5%</option>
            <option value="3">3단위 당 5%</option>
            <option value="4">4단위 당 5%</option>
            <option value="5">5단위 당 5%</option>
        </select>
    </div>
    <div class="flex-col">
        <label class="mg-t-10px pd-a-10px fs-xl width-350px t-center" for="description">상품 설명:</label>
        <textarea class="pd-a-10px fs-xl width-100 height-200px" name="description" id="description" placeholder="상품 설명을 입력해주세요" required></textarea>
    </div>
    <div class="flex-col">
        <label class=" mg-t-10px pd-a-10px fs-xl width-350px t-center" for="thumbNail">상품 사진:</label>
        <input class=" pd-a-10px fs-xl width-100" type="file" name="thumbNail" id="thumbNail" accept=".png, .jpg, .jpeg" multiple required>
    </div>
    <div>
    <input class="pd-a-10px fs-xl width-100" id="itemPostBtn" type="submit" value="상품 등록">
</div>
</div>
</div>
`


const dealPageTemplate =
    `<div class="d_p_e container">
    <div class="page bgc-ggrn">
        <div class="container deal-item">
            <div class="width-90 center item">
                <img class="" id="dealPageItem1" src="/farmers/resources/client/img/vegij1.jpg" alt="상품 이미지">
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
</div>`

const itemPageTemplate = `
<div class="i_p_e container">
    <div class="flex-col page bgc-lgrn">
        <img class="" src="/farmers/resources/client/img/vegij1.jpg" alt="상품 이미지">
        <div class="item-nav bgc-wgrn flex-row just-around">
            <nav class="bgc-wgrn width-100 t-center pd-a-10px"><i class="fas c-lgrn pd-a-5px fa-seedling"></i>찜</nav>
            <nav class="bgc-wgrn width-100 t-center pd-a-10px"><i class="fas c-lgrn pd-a-5px fa-share-square"></i>공유</nav>
            <nav class="bgc-wgrn width-100 t-center pd-a-10px"><i class="fas c-lgrn pd-a-5px fa-comment-alt"></i>문의</nav>
        </div>
        <div class="pd-a-20px bgc-ggrn">
            상품 설명
        </div>
        <div class="footer-nav container z-top flex-row just-around">
            <nav class="width-100 bgc-pyel" id="join-deal">딜 참여</nav>
            <nav class="width-100 bgc-ggrn" id="open-deal">딜 오픈</nav>
        </div>
    </div>
</div>
`

const reviewPageTemplate = `
<div class="r_p_e container">
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
                        <img src="/farmers/resources/client/img/vegij1.jpg" alt="item-image" class="item-img">
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
</div>
`


const paymentPageTemplate = `
<div class="p_p_e container">    
    <div class="flex-col center page bgc-ggrn">
        <div class="bgc-wgrn mg-a-5px pd-a-10px" id="item-name">상품명</div>
        <div class="bgc-wgrn mg-a-5px pd-a-10px" id="item-price">가격</div>
        <div class="bgc-wgrn mg-a-5px pd-a-10px" id="payment-phone">결제 방법</div>
        <div class="bgc-wgrn mg-a-5px pd-a-10px" id="phone-number">전화번호</div>
        <div class="bgc-wgrn mg-a-5px pd-a-10px" id="registration-number">주민번호</div>
        <button class="next">다음</button>
    </div>
</div>
`

const wishlistPageTemplate = (callback = function () {
    return "null"
}) => {
    let res = callback();
    let leftAmount = parseInt(res.totalAmount) - parseInt(res.currentAmount);
    let pricePerGram = parseInt(res.pricePerUnit) / parseInt(res.sellingUnit);
    return `
<div class="w_p_e container">
    <div class="flex-col bgc-lgrn page">

        <div class="bgc-wgrn pd-a-15px">
            <div class="pd-a-15px item-nav">
                <input class="pd-a-15px" type="checkbox" name="" id="selectA">
                <label class=" pd-a-15px" for="selectA">전체선택 (2/2)</label>
                <input class="right" type="button" value="선택삭제">
            </div>
            <div class="pd-a-15px item-nav">
                <input type="checkbox" class="item-list" id="select">
                <label class=" width-100 pd-a-15px" for="select">${res.itemName}</label>
                <div class="right pd-a-5px" id="wishlistExit">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="pd-a-15px flex-row left">
                <div class="img-box-140px">
                    <img src="/farmers/resources/client/img/vegij1.jpg" alt="" class="item-img">
                </div>
                <div class="pd-a-10px">
                    <div class="pd-lr-10px">생산자: ${res.sellerName}</div>
                    <div class="pd-lr-10px">생산지: ${res.location}</div>
                    <div class="pd-lr-10px">남은 수량: ${leftAmount}개</div>
                    <div class="pd-lr-10px">포장 단위: ${res.sellingUnit}g</div>
                    <div class="pd-lr-10px">그램 당 가격: ${pricePerGram}원</div>
                </div>
            </div>
        </div>

    </div>
</div>`
};

const categoryPageTemplate =
    `<div class="c_p_e container">
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
</div>`

const aniButtonTemplate =
    `<div class="a_b_e container">
    <i class="fas fa-arrow-circle-up fa-2x c-ggrn round"></i>
</div>`

export {
    recentSearchTagsTemplate as __rstT,
    popularSearchTagsTemplate as __pstT,
    aniButtonTemplate as __abT,
    searchBoxTemplate as __sbT,
    footerNavTemplate as __fnT,
    topNavTemplate as __tnT,
    subTopNavTemplate as __stnT,
    myPageTemplate as __mpT,
    homePageTemplate as __hpT,
    dealPageTemplate as __dpT,
    itemPageTemplate as __ipT,
    joinPageTemplate as __jpT,
    loginPageTemplate as __lpT,
    reviewPageTemplate as __rpT,
    paymentPageTemplate as __ppT,
    wishlistPageTemplate as __wpT,
    categoryPageTemplate as __cpT,
    mailAuthTemplate as __maT,
    itemPostPageTemplate as __ippT,
    itemEditPageTemplate as __iepT,
    itemEditListPageTemplate as __ielpT
};