package com.farmers.register.controller;

import javax.validation.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.validation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@RestController
public class RestDuplCheckController {
	@Autowired
	DuplCheckService service;

	@RequestMapping(value = "/api/join/duplicateCheck", method = RequestMethod.GET)
	public DuplCheckBean checkDupl(@Valid UserBean userBean, BindingResult rs) { 
		DuplCheckBean bean = new DuplCheckBean();
		System.out.println(userBean.getLoginId());
		bean.setLoginId(userBean.getLoginId());
		String msg=null;
		if(rs.hasErrors()) {
			msg=rs.getAllErrors().get(0).getDefaultMessage();
			bean.setMsg(msg);
		}
		
		boolean check = service.isDupl(userBean);
		msg =  "사용가능한 아이디입니다.";
		if (check == true) {
			msg = "사용중인 아이디입니다. 다른 아이디를 입력하세요";
		} 
		bean.setMsg(msg);
		bean.setDupl(check);
		System.out.println(check);
		System.out.println(msg);
		return bean;

	}
}
