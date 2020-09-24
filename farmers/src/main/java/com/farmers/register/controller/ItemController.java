package com.farmers.register.controller;


import java.util.*;

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

	//내가 등록한 상품 목록 불러오기(판매자기능)
	@RequestMapping(value="/seller/myItemList", method=RequestMethod.GET)
	public Map<String, Object> myItemList(UserBean userBean){
		System.out.println("controller started");
		Map<String, Object> map = service.myItemList(userBean);
		System.out.println("service done");
		return map;
	}
	
	// 상품등록
	@RequestMapping(value = "/seller/postItem", method = RequestMethod.POST)
	public ItemBean postItem(@Valid ItemBean itemBean, BindingResult rs) {
		String msg = null;
		System.out.println("controller starts");
		if (rs.hasErrors()) {
			msg = rs.getAllErrors().get(0).getDefaultMessage();
			itemBean.setMsg(msg);
		}
		System.out.println("no errors");
		service.postItem(itemBean);
		System.out.println("done");
		itemBean.setMsg("상품등록 완료되었습니다.");
		return itemBean;
	}
	@PostMapping("/seller/postImg")
	public Map<String,String> postThumbNail(ItemBean itemBean) {
		Map<String,String> map = new HashMap<String,String>();
		service.updateThumbnail(itemBean);
		String msg ="썸네일 등록 완료";
		map.put("msg", msg);
		return map;
	}

	// 상품수정페이지 불러오기
	@RequestMapping(value = "/seller/callItem", method = RequestMethod.GET)
	public ItemBean callItem(ItemBean itemBean) {
		System.out.println("controller starts");
		ItemBean bean = new ItemBean();
		bean= service.callItem(itemBean);
		System.out.println("service done");
		return bean;
	}

	// 상품수정완료
	@RequestMapping(value = "/seller/modifyItem", method = RequestMethod.PUT)
	public ItemBean modifyItem(@Valid ItemBean itemBean, BindingResult rs) {
		String msg = null;
		if (rs.hasErrors()) {
			msg = rs.getAllErrors().get(0).getDefaultMessage();
			itemBean.setMsg(msg);
		}
		service.modifyItem(itemBean);
		itemBean.setMsg("수정 완료 되었습니다.");
		return itemBean;
	}

	// 상품 삭제
	@RequestMapping(value = "/seller/delItem", method = RequestMethod.DELETE)
	public void delItem(ItemBean itemBean) {
		service.delItem(itemBean);
	}
}
