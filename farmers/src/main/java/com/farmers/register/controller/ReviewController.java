package com.farmers.register.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@RestController
public class ReviewController {
	@Autowired
	ReviewService service;
	
	//상품평 등록
	@RequestMapping(value="/user/postReview", method=RequestMethod.POST)
	public void postReview(ReviewBean reviewBean) {
		service.postReview(reviewBean);
	}
	
	//상품평 수정 화면 불러오기
	@GetMapping("/user/getReview")
	public Map<String,String> getReviewContents(ReviewBean reviewBean){
		Map<String,String> map = new HashMap<String,String>();
		
		String contents = service.getReviewContents(reviewBean);
		map.put("contents",contents);
		
		return map;
	}
	
	//상품평 수정내용 저장
	@PostMapping("/user/updateReview")
	public void modifyReview(ReviewBean reviewBean) {
		service.modifyReview(reviewBean);
	}
	
	//상품평 삭제
	@GetMapping("/user/delReview")
	public void delReview(ReviewBean reviewBean) {
		service.delReview(reviewBean);
	}
}
