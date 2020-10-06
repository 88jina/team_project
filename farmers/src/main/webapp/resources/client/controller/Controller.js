import _u from "../lib/Util.js";
//서비스는 모델을 물고 태어난다.
//뷰는 템플릿을 물고 태어난다.
//컨트롤러는 뷰와 서비스를 바인딩.
//라우터 역할만 한다.
//중앙에서 변경되는 밸류들을 전달한다.
class Controller {
    constructor(service, view) {
        this._s = service;
        this._v = view;
        console.log("this is" + this);

        this._v.loginPage(this.sendAjax);

    }

    sendAjax() {
        this._s.sendAjax();
    }

}

export default Controller;