package com.farmers.register.controller;

import javax.servlet.http.*;
import javax.validation.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.validation.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@Controller
public class LoginController {

	@Autowired
	LoginService service;
	
//	@Autowired
//	UserBean loginUserBean;
//
//	@PostMapping("/login")
//	public ModelAndView doLogin(@Valid UserBean userBean, BindingResult rs, ModelAndView mv) {
//
//		if (rs.hasErrors()) {
//			String msg = rs.getAllErrors().get(0).getDefaultMessage();
//			mv.addObject("msg", msg);
//			mv.setViewName("join/joinFail");
//		}
//		System.out.println("에러 없음");
//		boolean exist = service.checkUserExist(userBean);
//		System.out.println("가입 여부 : " + exist);
//		if (exist == false) {
//			String msg = "가입된 계정이 아닙니다";
//			mv.addObject("msg", msg);
//			mv.setViewName("join/joinFail");
//		} else {
//
//			String userType = service.userType(userBean);
//
//			System.out.println("유저타입 : " + userType);
//			if (userType != null) {
//				if (userType.equals("2")) {
//					loginUserBean.setLoggedIn(true);
//					mv.setViewName("admin/adminHome");
//				} else if (userType.equals("1")) {
//					loginUserBean.setLoggedIn(true);
//					mv.setViewName("users/sellerHome");
//				} else {
//					loginUserBean.setLoggedIn(true);
//					mv.setViewName("users/userHome");
//				}
//			}
//		}
//		return mv;
//	}

}
