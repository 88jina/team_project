package com.farmers.register.service;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class ReviewService {
	@Autowired
	ReviewMapper reviewMapper;
	
	//상품 고유번호 얻기
	public String getItemId(ItemBean itemBean) {
		String itemId = reviewMapper.getItemId(itemBean);
		return itemId;
	}
	
	//상품평 쓰기
	public void postReview(ReviewBean reviewBean,String itemId) {
		reviewBean.setItemId(itemId);
		reviewMapper.postReview(reviewBean);
	}
	
	//상품평 수정화면 불러오기
	public String getReviewContents(ReviewBean reviewBean) {
		String contents = reviewMapper.getReviewContents(reviewBean);
		return contents;
	}//TODO 컨트롤러에서 해시맵으로 연결해서 클라이언트로 리턴해주기
	
	//상품평 수정내용 저장
	public void modifyReview(ReviewBean reviewBean) {
		reviewMapper.modifyReview(reviewBean);
	}
	
	//상품평 삭제
	public void delReview(ReviewBean reviewBean) {
		reviewMapper.delReview(reviewBean);
	}
}
