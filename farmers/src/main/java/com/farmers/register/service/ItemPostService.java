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
	public void updateThumbnail(ItemBean itemBean) {
		mapper.updateThumb(itemBean);
	}

	
	
	//상품수정페이지 불러오기
	public ItemBean callItem(ItemBean itemBean) {
		List<ItemBean> itemList = mapper.callItem(itemBean);
		ItemBean bean = new ItemBean();
		if (itemList.size() != 0) {
			bean.setItemId(itemList.get(0).getItemId());
			bean.setSellerId(itemList.get(0).getSellerId());
			bean.setCategory(itemList.get(0).getCategory());
			bean.setItemName(itemList.get(0).getItemName());
			bean.setSellingUnit(itemList.get(0).getSellingUnit());
			bean.setTotalAmount(itemList.get(0).getTotalAmount());
			bean.setDescription(itemList.get(0).getDescription());
			bean.setPricePerUnit(itemList.get(0).getPricePerUnit());
			bean.setMinAmount(itemList.get(0).getMinAmount());
			bean.setMaxAmount(itemList.get(0).getMaxAmount());
			bean.setDiscount(itemList.get(0).getDiscount());
			bean.setMsg("상품정보를 성공적으로 불러왔습니다.");
		}else {
			bean.setMsg("상품정보를 불러오는 데 실패했습니다.");
		}
		return bean;
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
