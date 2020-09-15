package com.farmers.register.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@Controller
public class DuplCheckController {

//	@Autowired
//	DuplCheckService service;
//
//	@RequestMapping(value = "/api/duplCheck", method = RequestMethod.GET)
//	public ModelAndView checkDupl(UserBean userBean, ModelAndView mv) {
//		boolean check = service.isDupl(userBean);
//		
//		System.out.println(check);
//		
//		String msg =  "사용가능한 아이디입니다.";
//		if (check == false) {
//			msg = "사용중인 아이디입니다. 다른 아이디를 입력하세요";
//		} 
//		System.out.println(msg);
//		mv.addObject("msg", msg);
//		mv.setViewName("join/joinFail");
//		return mv;
//
//	}
}
