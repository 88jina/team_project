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

	// 상품수정페이지 불러오기
	@RequestMapping(value = "/seller/callItem", method = RequestMethod.POST)
	public ItemBean callItem(ItemBean itemBean) {
		System.out.println("controller starts");
		List<ItemBean> itemList = service.callItem(itemBean);
		ItemBean bean = new ItemBean();
		if (itemList.size() != 0) {
			bean.setItemId(itemList.get(0).getItemId());
			bean.setSellerId(itemList.get(0).getSellerId());
			bean.setCategory(itemList.get(0).getCategory());
			bean.setItemName(itemList.get(0).getItemName());
			bean.setSellingUnit(itemList.get(0).getSellingUnit());
			bean.setTotalAmount(itemList.get(0).getTotalAmount());
			bean.setDescription(itemList.get(0).getDescription());
			bean.setPricePerUnit(itemList.get(0).getPricePerUnit());
			bean.setMinAmount(itemList.get(0).getMinAmount());
			bean.setMaxAmount(itemList.get(0).getMaxAmount());
			bean.setMsg("상품정보 불러옴");
		}
		return bean;
	}

	// 상품수정완료
	@RequestMapping(value = "/seller/modifyItem", method = RequestMethod.POST)
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
	@RequestMapping(value = "/seller/delItem", method = RequestMethod.GET)
	public void delItem(ItemBean itemBean) {
		service.delItem(itemBean);
	}
}
