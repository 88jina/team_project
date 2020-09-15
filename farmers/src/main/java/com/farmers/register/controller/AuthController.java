package com.farmers.register.controller;

import javax.servlet.http.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;

import com.farmers.register.service.*;

@Controller
public class AuthController {

//	@Autowired
//	AuthService service;
//
//	// 인증키 생성 후 쿠키에 저장하고 메일 보내기
//	@RequestMapping(value = "/auth/sendMail", method = RequestMethod.GET)
//	public String makeAuthKey(HttpServletResponse res, HttpServletRequest req) {
//		String authKey = Integer.toString(service.authKeyMaker());
//		System.out.println("인증키 생성");
//
//		String userEmail = req.getParameter("userEmail");
//		service.sendMail(userEmail, authKey);
//		System.out.println("메일 발송");
//
//		Cookie authCookie = new Cookie("authKey", authKey);
//		authCookie.setValue(authKey);
//		System.out.println("AuthKey : " + authKey);
//		System.out.println("CookieValue: " + authCookie.getValue());
//		authCookie.setMaxAge(60 * 3);
//		authCookie.setPath("/");
//		res.addCookie(authCookie);
//		System.out.println("쿠키 클라이언트로 보내줌");
//
//		return "join/joinAuth";
//	}

	// 쿠키에 저장된 인증키와 입력값이 일치하면 쿠키삭제하고 인증 true값 리턴
//	@RequestMapping(value = "/auth/authKey", method = RequestMethod.GET)
//	public ModelAndView checkAuthKey(HttpServletRequest req, String authKey, String authCookie) {
//		System.out.println("controller starts");
//		ModelAndView mv = new ModelAndView();
//		String msg = null;
//		Cookie[] cookies = req.getCookies();
//		for (Cookie cookie : cookies) {
//			if (cookie.getName().equals("authCookie")) {
//				authCookie = cookie.getValue();
//			}
//		}
//		System.out.println(authCookie);
//		boolean check = service.checkAuthKey(authKey, authCookie);
//		System.out.println(check);
//		if (check == true) {
//			msg = "인증 완료";
//
//		} else {
//			msg = "인증 실패";
//		}
//		System.out.println(msg);
//		mv.addObject("msg", msg);
//		mv.setViewName("join/joinFail");
//		return mv;
//	}

}
