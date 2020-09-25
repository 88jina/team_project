package com.farmers.register.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;
@CrossOrigin
@RestController
public class DealController {
	@Autowired
	DealService service;

	// 딜 생성
	@PostMapping("/deal/create")
	public DealBean createDeal(DealBean dealBean, OrderBean orderBean) {
		System.out.println("controller Starts");
		service.createDeal(dealBean, orderBean);
		System.out.println("done");
		return dealBean;
	}

	// 딜 참여
	@PostMapping("/deal/join")
	public String joinDeal(DealBean dealBean, OrderBean orderBean) {
		String ordered = service.joinDeal(dealBean, orderBean);
		return ordered;
	}

	// 딜 취소
	@PostMapping("/deal/cancel")
	public String cancelDeal(DealBean dealBean, OrderBean orderBean) {
		String ordered = service.cancelDeal(dealBean, orderBean);
		return ordered;
	}

	// 딜 성사
	@PostMapping("/deal/complete")
	public void completeDeal(DealBean dealBean, OrderBean orderBean) {
		service.completeDeal(dealBean, orderBean);
	}
	
	
	//내가 참여한 딜 목록
	@GetMapping("/mypage/myOrder")
	public OrderBean myOrderList(OrderBean orderBean) {
		List<OrderBean>list = service.myOrderList(orderBean);
		OrderBean bean = new OrderBean();
		bean.setUserId(orderBean.getUserId());
		bean.setDealId(list.get(0).getDealId());
		bean.setOrdered(list.get(0).getOrdered());
		String delivery = list.get(0).getDelivery();
		switch (delivery) {
		case "0":
			bean.setDelivery("배송준비중");
			break;
		case "1":
			bean.setDelivery("배송중");
			break;
		case "2" :
			bean.setDelivery("배송완료");
			break;
		}
		String complete = list.get(0).getComplete();
		switch (complete) {
		case "0":
			bean.setComplete("오픈 딜");
			break;
		case "1":
			bean.setComplete("딜이 성사되었습니다!");
			break;
		}
		return bean;
		
	}
	
}
