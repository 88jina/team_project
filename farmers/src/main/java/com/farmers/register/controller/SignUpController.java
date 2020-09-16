package com.farmers.register.controller;

import javax.validation.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.ui.*;
import org.springframework.validation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@Controller
public class SignUpController {
	@Autowired
	SignUpService service;

	@RequestMapping(value = "/api/join", method = RequestMethod.POST, produces="application/json; charset=utf8")
	public @ResponseBody String doSignUp(@Valid UserBean userBean, BindingResult result, Model model) {
		
		if (result.hasErrors()) {
			String msg = result.getAllErrors().get(0).getDefaultMessage();
			model.addAttribute("msg", msg);
			return "join/joinFail";
		}

		//TODO 아이디 중복 확인 했는지 검사하고 로그인 해주기
		//TODO 이메일 인증 했는지 확인하고 로그인 해주기
		
		service.doJoin(userBean);
		
		String msg = "가입완료되었습니다.";
		model.addAttribute("msg", msg);

		return "home/home";

	}
}
