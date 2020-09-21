package com.farmers.register.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

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

}
