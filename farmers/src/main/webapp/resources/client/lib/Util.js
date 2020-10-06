//나중에 유틸함수들 클래스 떼고 개별 함수로 나눠서 익스포트하기!

class Util {
    $(selector) {
        return document.querySelector(selector);
    }


    showMainPage(selector, result, main, event = () => {return;}) {
        const template = _u.$(selector);
        template.innerHTML = result;
        main.appendChild(template.content.cloneNode(true)).onload = event();

    }

    mkElement(selector, Template, that) {
        const template = _u.$(selector);
        template.innerHTML = Template;
        that.appendChild(template.content.cloneNode(true));
        return that;
    }

    addElement(selector1, selector2) {
        const template = _u.$(selector1);
        const parent = _u.$(selector2);
        parent.appendChild(template.content.cloneNode(true));
        return parent.firstElementChild;
    }

    addElements(template, parent, ...selectors) {
        const tem = _u.$(template);
        parent.appendChild(tem.content.cloneNode(true));
        for (let i = 0, s_l = selectors.length; i < s_l; i++) {
            console.log("selectors[i]:" + selectors[i]);
            parent.$(selectors[i]).appendChild(_u.$(selectors[i]));
        }
    }

    addElement_withEvent(selector1, selector2, func = () => {
        return;
    }) {
        _u.addElement(selector1, selector2).onload = func();
    }


    rmElements() {
        console.log(arguments);
        for (let arg of arguments) {
            console.log("arg:" + arg);
            console.log("arguments:" + arguments);
            _u.$(arg).parentNode.removeChild(_u.$(arg));
        }
    }

    addEvent(selector, trigger, callback) {
        _u.$(selector).addEventListener(trigger, callback);
    }

    rmEvent(selector, trigger, callback) {
        _u.$(selector).removeEventListener(trigger, callback);
    }


    // rmElements(...selectors) {
    //     let that = this;
    //     console.log(selectors);
    //     for (let i = 0, s_l = selectors.length; i < s_l ; i++) {
    //         console.log("selectors[i]:"+selectors[i]);
    //         that.$(selectors[i]).parentNode.removeChild(that.$(selectors[i]));
    //     }
    // }


}

const _u = new Util();

export default _u;