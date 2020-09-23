package com.farmers.register.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@RestController
public class MyPageController {
	
	@Autowired
	MyPageService service;
	
	@RequestMapping(value="/api/myPage", method=RequestMethod.GET)
	public UserBean getMyPage(UserBean userBean) {
		UserBean bean = new UserBean();
		
		bean = service.getUserInfo(userBean);
		
		return bean;
	}
}
