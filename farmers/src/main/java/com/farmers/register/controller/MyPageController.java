package com.farmers.register.controller;

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
	public UserBean getMyPage(UserBean userBean) {
		
		System.out.println(userBean.getLoginId());
		UserBean bean = new UserBean();
		
		bean = service.getUserInfo(userBean);
		System.out.println("mypage service done");
		return bean;
	}
}
