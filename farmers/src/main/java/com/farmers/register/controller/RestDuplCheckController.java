package com.farmers.register.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@RestController
public class RestDuplCheckController {
	@Autowired
	DuplCheckService service;

	@RequestMapping(value = "/api/join/duplicateCheck", method = RequestMethod.GET)
	public boolean checkDupl(UserBean userBean) {
		boolean check = service.isDupl(userBean);
		System.out.println(userBean.getUserEmail());
		System.out.println(check);
//		JoinBean joinBean = new JoinBean();
		String msg =  "사용가능한 아이디입니다.";
		if (check == true) {
			msg = "사용중인 아이디입니다. 다른 아이디를 입력하세요";
		} 
//		joinBean.setDupl(check);
		System.out.println(msg);
		return check;

	}
}
