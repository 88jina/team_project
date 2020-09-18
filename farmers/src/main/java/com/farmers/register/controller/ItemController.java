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
			bean.setMsg("상품정보 불러옴");
		}
		return bean;
	}

	@RequestMapping(value = "/seller/modifyItem", method = RequestMethod.POST)
	public ItemBean modifyItem(ItemBean itemBean) {
		List<ItemBean> itemList = service.modifyItem(itemBean);
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
			bean.setMsg("수정 완료");
		}
		return bean;
	}
	
	@RequestMapping(value="/seller/delItem", method=RequestMethod.GET)
	public void delItem(ItemBean itemBean) {
		service.delItem(itemBean);
	}
}
