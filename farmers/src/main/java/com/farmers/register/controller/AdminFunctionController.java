package com.farmers.register.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.ui.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@Controller
public class AdminFunctionController {
	@Autowired
	AdminService service;

	// 전체 회원 목록 조회
	@RequestMapping(value = "/admin/userView", method = RequestMethod.GET)
	public String AdminList(Model model) {
		List<AdminBean> list = service.userList();
		model.addAttribute("userList", list);
		return "admin/userList";
	}

	// 아이디로 회원 검색
	@RequestMapping(value = "/admin/userView/selectById", method = RequestMethod.GET)
	public String searchAdmin(AdminBean adminBean, Model model) {
		List<AdminBean> list = service.searchUser(adminBean);
		model.addAttribute("selectById", list);
		return "admin/selectById";
	}

	// 판매자 등록하기
	@RequestMapping(value = "/admin/updateSeller")
	public String converToSeller(AdminBean adminBean, Model model) {
		boolean isSeller = service.isSeller(adminBean);
		if (!isSeller) {
			service.convertToSeller(adminBean);
			model.addAttribute("msg", "등록완료되었습니다.");
		} else {
			model.addAttribute("msg", "이미 판매자로 등록된 회원입니다.");
		}
		return "admin/result";
	}

	// 판매자 삭제하기
	@RequestMapping(value = "/admin/delSeller")
	public String convertToAdmin(AdminBean adminBean, Model model) {
		boolean isSeller = service.isSeller(adminBean);
		if (isSeller) {
			service.convertToUser(adminBean);
			model.addAttribute("msg", "삭제완료되었습니다.");
		} else {
			model.addAttribute("msg", "판매자가 아닙니다.");
		}
		return "admin/result";
	}

	// 판매자 목록 조회
	@RequestMapping(value = "/admin/sellerList", method = RequestMethod.GET)
	public String searchSeller(Model model) {
		List<AdminBean> list = service.searchSeller();
		model.addAttribute("sellerList", list);
		return "admin/sellerList";
	}
}
