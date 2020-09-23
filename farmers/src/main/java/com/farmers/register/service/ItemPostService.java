package com.farmers.register.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class ItemPostService {
	@Autowired
	ItemMapper mapper;
	
	
	//상품등록
	public void postItem(ItemBean itemBean) {
		mapper.postItem(itemBean);
	}
	
	public void postImgItem(ItemBean itemBean) {
		mapper.postImgItem(itemBean);
	}
	
	
	//상품수정페이지 불러오기
	public List<ItemBean> callItem(ItemBean itemBean) {
		List<ItemBean> list = mapper.callItem(itemBean);
		return list;
	}
	
	//상품수정정보 저장
	public void modifyItem(ItemBean itemBean){
		mapper.modifyItem(itemBean);
	}
	
	//상품 삭제
	public void delItem(ItemBean itemBean) {
		mapper.delItem(itemBean);
	}

}
