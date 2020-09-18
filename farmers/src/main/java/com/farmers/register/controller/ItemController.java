package com.farmers.register.controller;

import javax.validation.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.validation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@RestController
public class ItemController {
	@Autowired 
	ItemPostService service;
	
	@RequestMapping(value="/seller/postItem", method=RequestMethod.POST)
	public ItemBean postItem(@Valid ItemBean itemBean, BindingResult rs) {
		String msg = null;
		System.out.println("controller starts");
		if(rs.hasErrors()) {
			msg=rs.getAllErrors().get(0).getDefaultMessage();
			itemBean.setMsg(msg);
		}
		System.out.println("no errors");
		service.postItem(itemBean);
		System.out.println("done");
		itemBean.setMsg("상품등록 완료되었습니다.");
		return itemBean;
	}
	@RequestMapping(value="/seller/callItem", method=RequestMethod.POST)
	public ItemBean callItem(ItemBean itemBean) {
		return itemBean;
	}
}