package com.farmers.register.controller;

import javax.validation.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.ui.*;
import org.springframework.validation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;
@CrossOrigin
@RestController
public class RestSignUpController {
	@Autowired
	SignUpService service;

	@RequestMapping(value = "/api/join", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public SignUpBean doSignUp(@Valid UserBean userBean, BindingResult result, Model model) {

		SignUpBean signUpBean = new SignUpBean();

		String msg = null;
		if (result.hasErrors()) {
			msg = result.getAllErrors().get(0).getDefaultMessage();
			signUpBean.setErrorMsg(msg);
		}
		
		System.out.println("아이디: "+userBean.getLoginId());
		System.out.println("비밀번호: "+userBean.getUserPw());
		System.out.println("이메일: "+userBean.getUserEmail());
		
		service.doJoin(userBean);

		msg = "가입완료되었습니다.";
		signUpBean.setErrorMsg(msg);
		signUpBean.setJoined(true);
		System.out.println("가입완료");
		return signUpBean;

	}
}
