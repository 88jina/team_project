package com.farmers.register.mapper;

import java.util.*;

import org.apache.ibatis.annotations.*;

import com.farmers.register.beans.*;

public interface ItemMapper {
	
	// 상품상세보기
	@Select("SELECT * FROM items WHERE itemId =#{itemId}")
	public List<ItemDto> concreteItem(ItemDto itemDto);
	
	// 상품 화면에서 딜불러오기
	@Select("SELECT FROM deals WEHRE itemId=#{itemId} AND complete=0")
	public List<DealBean> showDeals(DealBean dealBean);

	// 상품목록보기(구매자/관리자)
	@Select("SELECT * FROM items")
	public List<ItemDto> itemList();


	
	// 내상품목록보기(판매자)
	@Select("SELECT * FROM items WHERE sellerId=#{sellerId}")
	public List<ItemBean> myItemList(String sellerId);

	// 상품등록
	@Insert("INSERT INTO items (thumbNail,sellerId,itemName,category,sellingUnit,totalAmount,description,pricePerUnit,maxAmount,minAmount,discount) "
			+ "VALUES(#{thumbNail},#{sellerId},#{itemName},#{category},#{sellingUnit},#{totalAmount},#{description},#{pricePerUnit},#{maxAmount},#{minAmount},#{discount}) ")
	public void postItem(ItemBean itemBean);
	

	// 상품 정보 수정하기 위해 상품 정보 불러오기
	@Select("SELECT * FROM items WHERE itemId=#{itemId}")
	public List<ItemBean> callItem(ItemBean itemBean);


	// 수정된 상품 정보 저장
	@Update("UPDATE items SET itemName=#{itemName},category=#{category},"
			+ "sellingUnit=#{sellingUnit}, totalAmount=#{totalAmount}, "
			+ "description=#{description}, pricePerUnit=#{pricePerUnit},"
			+ "minAmount=#{minAmount}, maxAmount=#{maxAmount},discount=#{discount}" 
			+ "WHERE itemId=#{itemId}")
	public void modifyItem(ItemBean itemBean);
	

	// 상품 삭제
	@Delete("DELETE FROM items WHERE itemId=#{itemId}")
	public void delItem(ItemBean itemBean);
}
