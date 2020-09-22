import {json as _j, form as _f} from '../lib/Ajax.js';
import _u from "../lib/Util.js";

//dummy
import {
    login,
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
    myDeal
} from '../dummydata.js';

//서버와 소통하는 객체.
//서버에서 전달되는 로우 데이터만 받는다.
class Model {

    _loginMDummy() {
        let res = login;
        return res;
    }
    _searchDummy() {
        let res = searchTags;
        return res;
    }

    _carousel() {
        let url = "/";
        let res = _j('GET', url);
        return res;
    }

    _searchBoxList() {
        let url = "/api/searchList";
        let res = _j("GET", url);
        return res;
    }

    _login() {
        let url = "/api/login";
        let data = `loginId=${_u.$('#loginId').value}&userPw=${_u.$('#loginPw').value}`;
        let res = _f('POST', url, data);
        return JSON.parse(res);
    }

}

const _m = new Model();
export default _m;