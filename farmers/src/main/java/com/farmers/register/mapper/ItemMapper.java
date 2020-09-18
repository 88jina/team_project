package com.farmers.register.mapper;

import org.apache.ibatis.annotations.*;

import com.farmers.register.beans.*;

public interface ItemMapper {
	
	//상품등록
	@Insert("INSERT INTO items (sellerId,itemName,category,sellingUnit,totalAmount,description,pricePerUnit) "
			+ "VALUES(#{sellerId},#{itemName},#{category},#{sellingUnit},#{totalAmount},#{description},#{pricePerUnit}) ")
	public void postItem(ItemBean itemBean);
	
	//상품 정보 수정하기 위해 상품 정보 불러오기
	@Select("SELECT sellerId,itemName,category,sellingUnit,totalAmount,description,pricePerUnit "
			+ "FROM items WHERE itemId=#{itemId}")
	public void callItem(ItemBean itemBean);
	
	//수정된 상품 정보 저장
	@Update("UPDATE items SET itemName=#{itemName},category=#{category},"
			+ "sellingUnit=#{sellingUnit}, totalAmount=#{totalAmount}, "
			+ "description=#{description}, pricePerUnit=#{pricePerUnit} "
			+ "WHERE itemId=#{pricePerUnit}")
	public void modifyItem(ItemBean itemBean);
	
	//상품 삭제
	@Delete("DELETE FROM items WHERE itemId=#{itemId}")
	public void delItem(ItemBean itemBean);
}
