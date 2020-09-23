const login = {
    "loginId": "gidoong",
    "userPw": "1234",
    "userType": "user",
    "degree": "0",
    "errorMsg": "no errors",
    "availablePoint": 0,
    "exist": true,
    "loggedIn": true
};
const loginSeller = {
    "loginId": "gidoong",
    "userPw": "1234",
    "userType": "seller",
    "degree": "0",
    "errorMsg": "no errors",
    "availablePoint": 0,
    "exist": true,
    "loggedIn": true
};
const loginManager = {
    "loginId": "gidoong",
    "userPw": "1234",
    "userType": "manager",
    "degree": "0",
    "errorMsg": "no errors",
    "availablePoint": 0,
    "exist": true,
    "loggedIn": true
};
const wishlist = {
    "itemName": "청정 횡성 한우",
    "category": "meat",
    "sellingUnit": "500",
    "totalAmount": "45",
    "currentAmount": "20",
    "description": "맛있어요",
    "location": "횡성",
    "img": "null",
    "sellerId": "12",
    "sellerName": "김이박",
    "pricePerUnit": "50000",
    "maxAmount": "10",
    "minAmount": "5"
}
const searchTags = {
    "p1":"asdasd",
    "p2":"2",
    "p3":"3",
    "p4":"4",
    "p5":"5",
    "p6":"6",
    "r1":"a",
    "r2":"a",
    "r3":"a",
    "r4":"a",
    "r5":"a",
    "r6":"a",
}

const cookie = {
    name: "loginCookie",
    value: "gidoong"
};

const joinComplete = {
    "errorMsg": "가입완료되었습니다.",
    "joined": true
};

const joinError = {
    "errorMsg": "빈칸이 있습니다.",
    "joined": false
};

const duplTrue = {
    "loginId": "gidoong",
    "msg": "사용중인 아이디입니다. 다른 아이디를 입력하세요",
    "dupl": true
};

const duplFalse = {
    "loginId": "banana",
    "msg": "사용가능한 아이디입니다",
    "dupl": false
};

const emailAuth = {
    "sendMail": true,
    "authKey": "84931",
    "authCookie": {
        "name": "authKey",
        "value": "84931",
        "version": 0,
        "comment": null,
        "domain": null,
        "maxAge": 180,
        "path": "/",
        "secure": false,
        "httpOnly": false
    }
};

const addItem = {

    "sellerId": "13", //판매자 개별번호
    "itemId": null, //아직 상품이 db에 저장되기 전에 나온 데이터라 itemId는 null이 맞습니다.
    "itemName": "Jeju Black Pig", //상품제목 (판매자가 직접입력)
    "category": "meat", //카테고리는 라디오버튼? select? 정하고 알려주세요
    "sellingUnit": "500g", // 판매단위
    "totalAmount": "500", //총 판매가능 수량, 여기서는 500g*500이란 의미
    "description": "perfect pork ever! ", //상품 상세설명
    "pricePerUnit": "3000", //판매단위별 가격 (500g에 3000원)
    "minAmount": "20", //딜 성사 최소수량 500g*20
    "maxAmount": "50", //딜 성사 최대수량 500g*50
    "msg": "상품등록 완료되었습니다." //상품등록이 아무 오류없이 진행되면 서버에서 보내는 메시지, 오류가 있으면 오류관련 메시지 담아 보냅니다
};

const itemEdit = {
    "sellerId": "13",
    "itemId": "2", //상품정보가 db에 저장된 후 불러온 상태라 itemId값이 있습니다.
    "itemName": "Jeju Black Pig",
    "category": "meat",
    "sellingUnit": "500g",
    "totalAmount": "500",
    "description": "perfect pork ever! ",
    "pricePerUnit": "3000",
    "minAmount": "20",
    "maxAmount": "50",
    "msg": "상품정보 불러옴"
};

const itemEditComplete = {

    "sellerId": "13",
    "itemId": "2", //상품정보가 db에 저장된 후 불러온 상태라 itemId값이 있습니다.
    "itemName": "Jeju Black Pig",
    "category": "meat",
    "sellingUnit": "500g",
    "totalAmount": "500",
    "description": "perfect pork ever! ",
    "pricePerUnit": "3000",
    "minAmount": "20",
    "maxAmount": "50",
    "msg": "상품정보 불러옴"
};

const dealInit = {
    "dealId": null, //딜 아이디 생성전
    "itemId": "3", 
    "destination": "cu gasan branch",
    "createDate": null, //딜 생성 일자, createDate 생성 전
    "totalOrder": "1", //딜 내 총 주문수량
    "userId": "18" //딜 오픈 유저아이디
};

const dealJoin = {
    "total":"3" //딜 내 총 주문 수량만 리턴
};

const myDeal = {
    "userId": "20", //db에서 꺼내오려고 가져온 값으로 사용자에게 안보이는 값
    "dealId": "19", //딜 고유번호
    "ordered": "1", //내가 해당 딜에서 주문한 수량
    "delivery": "배송준비중", //배송상태 (배송준비중,배송중,배송완료)
    "complete": "오픈 딜" //딜 마감여부(오픈 딜, 딜이 성사되었습니다!)
};

export {
    login,
    loginSeller,
    loginManager,
    searchTags,
    cookie,
    joinComplete,
    joinError,
    duplFalse,
    duplTrue,
    emailAuth,
    addItem,
    itemEdit,
    itemEditComplete,
    dealInit,
    dealJoin,
    myDeal,
    wishlist
};