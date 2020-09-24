package com.farmers.register.controller;

import javax.servlet.http.*;
import javax.validation.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.validation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@RestController
public class RestLoginController {

	@Autowired
	LoginService service;

	@PostMapping("api/login")
	public LoginBean doLogin(@Valid LoginBean loginBean, BindingResult rs, HttpSession session,
			HttpServletResponse res) {
		LoginBean bean = new LoginBean();
		bean = service.getUserInfo(loginBean);
		String msg = null;
		if (rs.hasErrors()) {
			msg = rs.getAllErrors().get(0).getDefaultMessage();
			bean.setErrorMsg(msg);
		}
	
		
		System.out.println(bean.getLoginId());
		System.out.println("회원등급 : " + bean.getDegree());
		
	
		System.out.println("에러 없음");
		
		if(bean.getUserType()!=null) {
		session.setAttribute("userId", bean.getUserId());
		Cookie loginCookie = new Cookie("loginCookie",bean.getLoginId()); //세션값 쿠키저장
		loginCookie.setPath("/"); //쿠키 접근 범위
		loginCookie.setValue(bean.getLoginId()); //로그인한 아이디값을 쿠키에 넣어줌
		loginCookie.setMaxAge(-1); //브라우저 끄면 쿠키 소멸
		res.addCookie(loginCookie); //클라이언트에 쿠키 저장
		}
		return bean;
	}

}
