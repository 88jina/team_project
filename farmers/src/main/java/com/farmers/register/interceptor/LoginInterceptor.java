package com.farmers.register.interceptor;

import javax.servlet.http.*;

import org.springframework.web.servlet.*;

import com.farmers.register.beans.*;

public class LoginInterceptor implements HandlerInterceptor {
//
//	LoginBean loginBean;
//
//	public LoginInterceptor(LoginBean loginBean) {
//		this.loginBean = loginBean;
//	}
//
//	@Override
//	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
//			throws Exception {
//		if(!loginBean.isLoggedIn() && !loginBean.getLoginId().equals("admin")) {
//			response.sendRedirect("/farmers/");
//			return false;
//		}
//		return true;
//	}
}
