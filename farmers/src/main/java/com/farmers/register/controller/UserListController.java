package com.farmers.register.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.ui.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@Controller
public class UserListController {

	@Autowired
	UserListService service;

	@RequestMapping(value = "/userList", method = RequestMethod.GET)
	public String userList(Model model) {
		List<UserBean> list = service.userList();
		model.addAttribute("list", list);
		return "admin/userList";
	}

	@RequestMapping(value = "/findUser", method = RequestMethod.GET)
	public String searchUser(UserBean userBean, Model model) {
		List<UserBean> list = service.searchUser(userBean);
		model.addAttribute("list", list);

		return "admin/findUser";
	}
	
	@RequestMapping(value="/seller", method=RequestMethod.GET)
	public String convertToSeller(UserBean userBean) {
		System.out.println(userBean.getLoginId());
		System.out.println("controller");
		service.convertToSeller(userBean);
		System.out.println("type changed");
		return "admin/adminHome";
	}
	
	@RequestMapping(value="/user", method=RequestMethod.GET)
	public String convertToUser(UserBean userBean) {
		System.out.println(userBean.getLoginId());
		service.convertToUser(userBean);
		System.out.println("type changed");
		return "admin/userList";
	}

}
