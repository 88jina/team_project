package com.farmers.register.controller;

import java.io.*;
import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;
@CrossOrigin
@RestController
public class ItemController {
	@Autowired
	ItemPostService service;

	// 내가 등록한 상품 목록 불러오기(판매자기능)
	@RequestMapping(value = "/seller/callItemList", method = RequestMethod.GET)
	public Map<String, Object> myItemList(UserBean userBean) {
		System.out.println("controller started");
		Map<String, Object> map = service.myItemList(userBean);
		System.out.println("service done");
		return map;
	}

//	@RequestMapping(value="/seller/callItemList", method=RequestMethod.GET)
//	public ResultDto test123(UserBean userBean){
//		return service.test123(userBean);
//	}
	
	// 상품등록
	@RequestMapping(value = "/seller/postItem", method = RequestMethod.POST)
	public ItemBean postItem(MultipartHttpServletRequest mr, ItemDto itemDto) throws UnsupportedEncodingException {
		ItemBean itemBean = new ItemBean();
		itemBean=service.postItem(itemDto, mr);
		System.out.println(itemBean.getThumbNail());
		return itemBean;
	}

	// 상품수정페이지 불러오기
	@RequestMapping(value = "/seller/callItem", method = RequestMethod.GET)
	public ItemDto callItem(ItemBean itemBean) {
		System.out.println("controller starts");
		ItemDto itemDto = new ItemDto();
		itemDto = service.callItem(itemBean);
		System.out.println("service done");
		return itemDto;
	}

	// 상품수정완료
	@RequestMapping(value = "/seller/modifyItem", method = RequestMethod.PUT)
	public void modifyItem(ItemDto itemDto, MultipartHttpServletRequest req) throws UnsupportedEncodingException {
		service.modifyItem(req,itemDto);
	}

	// 상품 삭제
	@RequestMapping(value = "/seller/delItem", method = RequestMethod.DELETE)
	public void delItem(ItemBean itemBean) {
		service.delItem(itemBean);
	}
}
