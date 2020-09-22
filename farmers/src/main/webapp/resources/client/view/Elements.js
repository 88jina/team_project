import _u from "../lib/Util.js";
import {
    __rstT,
    __pstT,
    __abT,
    __sbT,
    __fnT,
    __tnT,
    __stnT,
    __mpT,
    __hpT,
    __dpT,
    __ipT,
    __jpT,
    __lpT,
    __rpT,
    __ppT,
    __wpT,
    __cpT
} from "./Templates.js";

class SearchBox extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#s_b_t', __sbT, this);
        this.__pstT = __pstT;
        this.__rstT = __rstT;
    }
}

class FooterNav extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#f_n_t', __fnT, this);
    }
}

class TopNav extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#t_n_t', __tnT, this);
    }
}

class SubTopNav extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#s_t_n_t', __stnT, this);
    }
}

class AniButton extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#a_b_t', __abT, this);
    }

}

//--------------------PAGES-----------------------//
//homePageTemplate,
class HomePage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#h_p_t', __hpT, this);
    }
}
// myPageTemplate,
class MyPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#m_p_t', __mpT, this);
    }
}
// dealPageTemplate,
class DealPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#d_p_t', __dpT, this);
    }
}
// itemPageTemplate,
class ItemPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#i_p_t', __ipT, this);
    }
}
// joinPageTemplate,
class JoinPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#j_p_t', __jpT, this);
    }

}

// loginPageTemplate,
class LoginPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#l_p_t', __lpT, this);
    }
}

// reviewPageTemplate,
class ReviewPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#r_p_t', __rpT, this);
    }
}
// paymentPageTemplate,
class PaymentPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#p_p_t', __ppT, this);
    }
}
// wishlistPageTemplate,
class WishlistPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#w_p_t', __wpT, this);
    }
}
// categoryPageTemplate
class CategoryPage extends HTMLElement {
    constructor() {
        super();
        _u.mkElement('#c_p_t', __cpT, this);
    }
}


export {
    SearchBox as SB_,
    FooterNav as FN_,
    TopNav as TN_,
    SubTopNav as STN_,
    AniButton as AB_,
    //pages
    MyPage as MP_,
    HomePage as HP_,
    DealPage as DP_,
    ItemPage as IP_,
    JoinPage as JP_,
    LoginPage as LP_,
    ReviewPage as RP_,
    PaymentPage as PP_,
    WishlistPage as WP_,
    CategoryPage as CP_
};