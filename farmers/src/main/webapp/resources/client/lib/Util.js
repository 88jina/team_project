class Util {
    $(selector) {
        return document.querySelector(selector);
    }


    showMyPage(selector, result, that) {
        const self = this;
        const template = self.$(selector);
        template.innerHTML = result;
        that.appendChild(template.content.cloneNode(true));
    }

    mkElement(selector, Template, that) {
        const self = this;
        const template = self.$(selector);
        template.innerHTML = Template;
        that.appendChild(template.content.cloneNode(true));
        return that;
    }

    addElement(selector1, selector2) {
        const self = this;
        const template = self.$(selector1);
        const parent = self.$(selector2);
        parent.appendChild(template.content.cloneNode(true));
        return parent.firstElementChild;
    }

    addElements(template, parent, ...selectors) {
        const self = this;
        const tem = self.$(template);
        parent.appendChild(tem.content.cloneNode(true));

        for (let i = 0, s_l = selectors.length; i < s_l; i++) {
            console.log("selectors[i]:" + selectors[i]);
            parent.$(selectors[i]).appendChild(self.$(selectors[i]));
        }
    }

    addElement_withEvent(selector1, selector2, func = () => {
        return;
    }) {
        const self = this;
        self.addElement(selector1, selector2).onload = func();
    }


    rmElements() {
        console.log(arguments);
        const self = this;
        for (let arg of arguments) {
            console.log("arg:" + arg);
            console.log("arguments:" + arguments);
            self.$(arg).parentNode.removeChild(self.$(arg));
        }
    }

    addEvent(selector, trigger, callback) {
        const self = this;
        self.$(selector).addEventListener(trigger, callback);
    }

    rmEvent(selector, trigger, callback) {
        const self = this;
        self.$(selector).removeEventListener(trigger, callback);
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