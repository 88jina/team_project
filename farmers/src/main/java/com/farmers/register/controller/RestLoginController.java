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
	public LoginBean doLogin(@Valid LoginBean loginBean, BindingResult rs, HttpSession session, HttpServletResponse res) {
		LoginBean bean = new LoginBean();
		System.out.println(loginBean.getLoginId());
		System.out.println(loginBean.getUserPw());
		
		String msg=null;
		if (rs.hasErrors()) {
			msg = rs.getAllErrors().get(0).getDefaultMessage();
			bean.setErrorMsg(msg);
		}
		bean.setErrorMsg("no errors");
		System.out.println("에러 없음");

		boolean exist = service.checkUserExist(loginBean);
		bean.setExist(exist);
		System.out.println("가입 여부 : " + exist);
		if (exist == false) {
			msg = "가입된 계정이 아닙니다";
			bean.setErrorMsg(msg);
			bean.setLoggedIn(false);
		} else {
			bean.setLoginId(loginBean.getLoginId());
			bean.setUserPw(loginBean.getUserPw());
			bean.setDegree(loginBean.getDegree());
			String userType = service.userType(loginBean);
			bean.setLoggedIn(true);
			System.out.println("유저타입 : " + userType);
			if (userType != null) {
				Object login =session.getAttribute("login");
				Cookie loginCookie = new Cookie("loginCookie",(String)login);
				loginCookie.setPath("/");
				loginCookie.setValue(loginBean.getLoginId());
				loginCookie.setMaxAge(-1);
				res.addCookie(loginCookie);
				
				switch (userType) {
				case "2":
					bean.setUserType("admin");
					break;
				case "1":
					bean.setUserType("seller");
					break;
				case "0":
					bean.setUserType("user");
					break;
				}

			} 
		
		else {
				bean.setUserType(null);
			}
		
		}
		return bean;
	}

}
