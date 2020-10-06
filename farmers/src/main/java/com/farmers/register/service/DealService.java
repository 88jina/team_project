package com.farmers.register.service;


import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class DealService {
	@Autowired
	DealMapper dealMapper;
	
	
	//딜 생성
	public void createDeal(DealBean dealBean,OrderBean orderBean){
		dealMapper.createDeal(dealBean);
		String dealId =dealMapper.callDealId(dealBean);
		orderBean.setDealId(dealId);
		dealMapper.createOrder(orderBean);
	}
	
	//딜 참여
	public String joinDeal(DealBean dealBean,OrderBean orderBean) {
		dealMapper.updateDeal(dealBean);
		dealMapper.createOrder(orderBean);
		String ordered = dealBean.getTotalOrder();
		return ordered;
	}
	
	//딜 취소
	public String cancelDeal(DealBean dealBean, OrderBean orderBean	) {
		dealMapper.cancelOrder(orderBean);
		dealMapper.updateDeal(dealBean);
		String ordered=dealBean.getTotalOrder();
		return ordered;
	}
	
	//딜 소멸
	public void vanishDeal(DealBean dealBean,OrderBean orderBean) {
		dealMapper.vanishDeal(dealBean);
		dealMapper.vanishOrder(orderBean);
	}
	
	//딜 성사
	public void completeDeal(DealBean dealBean, OrderBean orderBean) {
		dealMapper.completeDeal(dealBean);
		dealMapper.completeOrder(orderBean);
	}
	
	//내가 참여한 딜 보기
	public List<OrderBean> myOrderList(OrderBean orderBean){
		List<OrderBean> list = dealMapper.myOrderList(orderBean);
		return list;
	}
	
	
}
