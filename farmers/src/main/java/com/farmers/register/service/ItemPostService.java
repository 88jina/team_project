package com.farmers.register.service;

import java.util.*;

import javax.servlet.http.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class ItemPostService {
	@Autowired
	ItemMapper mapper;
	@Autowired
	HttpSession session;

	// 상품등록
	public void postItem(ItemBean itemBean) {
		String sellerId = (String)session.getAttribute("userId");
		itemBean.setSellerId(sellerId);
		mapper.postItem(itemBean);
		itemBean.setItemId(mapper.getItemId(itemBean.getDescription()));
		
	}

	// 썸네일 업데이트
	public void updateThumbnail(ItemBean itemBean) {
		mapper.updateThumb(itemBean);
	}

//	public ResultDto test123(UserBean userBean) {
//		String sellerId = mapper.getUserId(userBean);
//		List<ItemBean> itemList = mapper.myItemList(sellerId);
//		ResultDto resultdto = new ResultDto(itemList, itemList.size());
//		return resultdto;
//	}

	// 판매자별 상품목록 불러오기
	public Map<String, Object> myItemList(UserBean userBean) {
		String sellerId = (String)session.getAttribute("userId");
		System.out.println("판매자 아이디 :" + sellerId);
		List<ItemBean> itemList = mapper.myItemList(sellerId);
		List<ItemBean> list = new ArrayList<ItemBean>();
		Map<String, Object> map = new HashMap<String, Object>();
		int count = 0;
		for (int i = 0; i < itemList.size(); i++) {
			ItemBean bean = new ItemBean();
			System.out.println(itemList.get(i).getItemName());
			bean.setItemId(itemList.get(i).getItemId());
			bean.setSellerId(itemList.get(i).getSellerId());
			bean.setCategory(itemList.get(i).getCategory());
			bean.setItemName(itemList.get(i).getItemName());
			bean.setSellingUnit(itemList.get(i).getSellingUnit());
			bean.setTotalAmount(itemList.get(i).getTotalAmount());
			bean.setDescription(itemList.get(i).getDescription());
			bean.setPricePerUnit(itemList.get(i).getPricePerUnit());
			bean.setMinAmount(itemList.get(i).getMinAmount());
			bean.setMaxAmount(itemList.get(i).getMaxAmount());
			bean.setThumbNail(itemList.get(i).getThumbNail());
			bean.setDiscount(itemList.get(i).getDiscount());
			bean.setMsg("상품정보를 성공적으로 불러왔습니다.");
			count++;
			list.add(bean);
			map.put("myItem" + Integer.toString(i), list.get(i));
		}
		map.put("count", (Object) count);
		return map;
	}

	// 상품수정페이지 불러오기
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
		} else {
			bean.setMsg("상품정보를 불러오는 데 실패했습니다.");
		}
		return bean;
	}

	// 상품수정정보 저장
	public void modifyItem(ItemBean itemBean) {
		mapper.modifyItem(itemBean);
	}

	// 상품 삭제
	public void delItem(ItemBean itemBean) {
		mapper.delItem(itemBean);
	}

}
