package com.farmers.register.mapper;

import org.apache.ibatis.annotations.*;

import com.farmers.register.beans.*;

public interface ReviewMapper {

	//상품평 쓸 때 상품고유번호 가져오기
	@Select("SELECT itemId FROM deals JOIN orders ON deals.#{dealId}=orders.#{dealId}")
	public String getItemId(ItemBean itemBean);
	
	//상품평 작성
	@Insert("INSERT INTO review (itemId,userId,contents) VALUES(#{itemId},#{userId},#{contents}")
	public void postReview(ReviewBean reviewBean);
	
	//상품평 수정화면 불러오기
	@Select("SELECT contents FROM review WHERE reviewId=#{reviewId}")
	public String getReviewContents(ReviewBean reviewBean);
	
	//상품평 수정 내용 저장
	@Update("UPDATE review SET contents=#{contents} WHERE reviewId=#{reviewId}")
	public void modifyReview(ReviewBean reviewBean);
	
	//상품평 삭제
	@Delete("DELETE FROM review WHERE reviewId=#{reviewId}")
	public void delReview(ReviewBean reviewBean);
	
}
