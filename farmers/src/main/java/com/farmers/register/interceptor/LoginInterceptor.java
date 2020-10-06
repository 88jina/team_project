package com.farmers.register.interceptor;

import javax.servlet.http.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.servlet.*;

import com.farmers.register.beans.*;

public class LoginInterceptor implements HandlerInterceptor {

	
	@Autowired
	LoginBean loginBean;
	@Autowired
	HttpSession session;
	
	public LoginInterceptor(LoginBean loginBean) {
		this.loginBean = loginBean;
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		session=request.getSession();
		if(!session.getAttribute("userId").equals("1")) {
			response.sendRedirect("/farmers/");
			return false;
		}
		return true;
	}
}
