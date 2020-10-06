package com.farmers.register.mapper;


import java.util.*;

import org.apache.ibatis.annotations.*;

import com.farmers.register.beans.*;

public interface DealMapper {
	
	
	//딜 생성시
	@Insert("INSERT INTO deals(userId,itemId,destination,totalOrder) VALUES(#{userId},#{itemId},#{destination},#{totalOrder})")
	public void createDeal(DealBean dealBean);
	@Select("SELECT dealId FROM deals WHERE userId=#{userId} AND itemId=#{itemId}")
	public String callDealId(DealBean dealBean);
	//딜 생성,참여시 딜 관련 유저 정보 저장(order)
	@Insert("INSERT INTO orders(userId,dealId,ordered) VALUES(#{userId},#{dealId},#{ordered})")
	public void createOrder(OrderBean orderBean);
	
	//딜 참여시,취소시
	@Update("UPDATE deals SET totalOrder=#{totalOrder} WHERE dealId=#{dealId}")
	public void updateDeal(DealBean dealBean);
	
	//딜 취소시(order)
	@Delete("DELETE FROM orders WHERE userId=#{userId} AND dealId=#{dealId}")
	public void cancelOrder(OrderBean orderBean);
	
	//딜 소멸시
	@Delete("DELETE FROM deals WHERE dealId=#{dealId}")
	public void vanishDeal(DealBean dealBean);
	@Delete("DELETE FROM orders WHERE dealId=#{dealId}")
	public void vanishOrder(OrderBean orderBean);
	
	
	//딜 달성시
	@Update("UPDATE orders SET complete=1 WHERE dealId=#{dealId}")
	public void completeOrder(OrderBean orderBean);
	@Update("UPDATE deals SET complete=1 WHERE dealId=#{dealId}")
	public void completeDeal(DealBean dealBean);
	
	
	//내가 참여,생성한 딜 보기
	@Select("SELECT * FROM orders WHERE userId=#{userId}")
	public List<OrderBean> myOrderList(OrderBean orderBean);
	
}
