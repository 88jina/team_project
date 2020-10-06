package com.farmers.register.controller;

import javax.servlet.http.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;
@CrossOrigin
@RestController
public class MyPageController {
	
	@Autowired
	MyPageService service;
	
	@RequestMapping(value="/api/myPage", method=RequestMethod.POST)
	public UserBean getMyPage(HttpSession session) {
		System.out.println("controller started");
		UserBean bean = new UserBean();
		bean = service.getUserInfo(session);
		System.out.println("mypage service done");
		return bean;
	}
}
