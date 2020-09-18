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

	@Autowired
	UserBean userBean;

	@PostMapping("api/login")
	public LoginBean doLogin(@Valid UserBean userBean, BindingResult rs, HttpSession session, HttpServletResponse res) {
		LoginBean loginBean = new LoginBean();
		System.out.println(userBean.getLoginId());
		System.out.println(userBean.getUserPw());
		
		String msg=null;
		if (rs.hasErrors()) {
			msg = rs.getAllErrors().get(0).getDefaultMessage();
			loginBean.setErrorMsg(msg);
		}
		loginBean.setErrorMsg("no errors");
		System.out.println("에러 없음");

		boolean exist = service.checkUserExist(userBean);
		loginBean.setExist(exist);
		System.out.println("가입 여부 : " + exist);
		if (exist == false) {
			msg = "가입된 계정이 아닙니다";
			loginBean.setErrorMsg(msg);
			loginBean.setLoggedIn(false);
		} else {
			loginBean.setLoginId(userBean.getLoginId());
			loginBean.setUserPw(userBean.getUserPw());
			String userType = service.userType(userBean);
			loginBean.setLoggedIn(true);
			System.out.println("유저타입 : " + userType);
			if (userType != null) {
				switch (userType) {
				case "2":
					loginBean.setUserType("admin");
					break;
				case "1":
					loginBean.setUserType("seller");
					break;
				case "0":
					loginBean.setUserType("user");
					break;
				}

			} 
		
		else {
				loginBean.setUserType(null);
			}
		}
		Object login =session.getAttribute("login");
		Cookie loginCookie = new Cookie("loginCookie",(String)login);
		loginCookie.setPath("/");
		loginCookie.setValue(loginBean.getLoginId());
		res.addCookie(loginCookie);
		return loginBean;
	}

}
