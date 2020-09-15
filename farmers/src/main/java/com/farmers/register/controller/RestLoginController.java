package com.farmers.register.controller;

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
	UserBean loginUserBean;

	@PostMapping("/login")
	public LoginBean doLogin(@Valid UserBean userBean, BindingResult rs) {
		LoginBean loginBean = new LoginBean();
		loginBean.setLoginId(userBean.getLoginId()); // 아이디 저장
		loginBean.setUserPw(userBean.getUserPw()); // 비밀번호 저장

		if (rs.hasErrors()) {
			String msg = rs.getAllErrors().get(0).getDefaultMessage();
			loginBean.setErrorMsg(msg); // 에러 메시지 저장
		}
		System.out.println("에러 없음");
		boolean exist = service.checkUserExist(userBean);
		loginBean.setExist(exist); // 가입 여부 저장
		System.out.println("가입 여부 : " + exist);
		if (exist == false) {
			String msg = "가입된 계정이 아닙니다";
			loginBean.setErrorMsg(msg);
			System.out.println(msg);
			loginBean.setLoggedIn(false);
		} else {
			loginBean.setLoggedIn(true);
			String userType = service.userType(userBean);
			
			System.out.println("유저타입 : " + userType);
			if (userType != null) {
				if (userType.equals("2")) {
					loginUserBean.setLoggedIn(true);
					loginBean.setUserType("admin");
				} else if (userType.equals("1")) {
					loginUserBean.setLoggedIn(true);
					loginBean.setUserType("seller");
				} else {
					loginUserBean.setLoggedIn(true);
					loginBean.setUserType("user");
				}
			}
		}
		return loginBean;
	}

}
