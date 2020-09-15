package com.farmers.register.controller;

import javax.servlet.http.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@RestController
public class RestAuthController {
	@Autowired
	AuthService service;

	// 인증키 생성 후 쿠키에 저장하고 메일 보내기
	@RequestMapping(value = "/auth/sendMail", method = RequestMethod.GET)
	public AuthBean makeAuthKey(UserBean userBean, HttpServletResponse res) {
		AuthBean authBean = new AuthBean();
		
		String authKey = Integer.toString(service.authKeyMaker()); //난수로 인증키 생성
		System.out.println("인증키 생성");
		authBean.setAuthKey(authKey); //인증빈에 인증키 삽입
		

		String userEmail = userBean.getUserEmail();
		service.sendMail(userEmail, authKey); //메일전송
		System.out.println("메일 발송");
		authBean.setSendMail(true); //메일전송여부 인증빈에 삽입

		Cookie authCookie = new Cookie("authKey", authKey); //쿠키생성
		authBean.setAuthCookie(authCookie); //인증빈에 쿠키삽입
		authCookie.setValue(authKey); //쿠키에 쿠키값 삽입
		System.out.println("AuthKey : " + authKey);
		System.out.println("CookieValue: " + authCookie.getValue());
		authCookie.setMaxAge(60 * 3); //쿠키 지속시간 3분설정
		authCookie.setPath("/"); //모든 곳에서 접근 가능한 쿠키로 설정
		res.addCookie(authCookie); //클라이언트로 쿠키보냄
		System.out.println("쿠키 클라이언트로 보내줌");

		return authBean;
	}
}
