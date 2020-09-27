package com.farmers.register.service;

import java.io.*;
import java.net.*;
import java.util.*;

import javax.servlet.http.*;

import org.apache.commons.io.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.multipart.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class ItemPostService {
	@Autowired
	ItemMapper mapper;
	@Autowired
	HttpSession session;
	
	
	//멀티파트파일-문자열 데이터타입 변환
	public String convertDataType(MultipartHttpServletRequest req) throws UnsupportedEncodingException {
		String userId = (String)session.getAttribute("userId");
		MultipartFile file = req.getFile("thumbNail");
		String path = "/home/jina01/eclipse-workspace/farmers/src/main/webapp/resources/client/img/";
		long fileSize = file.getSize();
		String originFileName =file.getOriginalFilename();
		System.out.println("fileSize : "+fileSize);
		String extension = FilenameUtils.getExtension(originFileName);
		String safeFile = path+System.currentTimeMillis()+"_"+userId+"."+extension;
		
		try {
			file.transferTo(new File(safeFile));
		} catch (IOException e) {
			e.printStackTrace();
		}catch(IllegalStateException e){
			e.printStackTrace();
		}
		return safeFile;
	}

	// 상품등록
	public ItemBean postItem(ItemDto itemDto, MultipartHttpServletRequest req) throws UnsupportedEncodingException {
		String sellerId = (String)session.getAttribute("userId");
		itemDto.setSellerId(sellerId);
		String thumbNail = convertDataType(req);
		String itemName = URLDecoder.decode(itemDto.getItemName(),"UTF-8");
		String description = URLDecoder.decode(itemDto.getDescription(), "UTF-8");
		ItemBean itemBean = new ItemBean();
		itemBean.setCategory(itemDto.getCategory());
		itemBean.setDescription(description);
		itemBean.setDiscount(itemDto.getDiscount());
		itemBean.setItemName(itemName);
		itemBean.setMaxAmount(itemDto.getMaxAmount());
		itemBean.setMinAmount(itemDto.getMinAmount());
		itemBean.setPricePerUnit(itemDto.getPricePerUnit());
		itemBean.setSellerId(sellerId);
		itemBean.setSellingUnit(itemDto.getSellingUnit());
		itemBean.setThumbNail(thumbNail);
		itemBean.setTotalAmount(itemDto.getTotalAmount());
		itemBean.setMsg("상품 등록이 완료되었습니다");
		mapper.postItem(itemBean);
		return itemBean;
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
			count++;
			list.add(bean);
			map.put("myItem" + Integer.toString(i), list.get(i));
		}
		map.put("count", (Object) count);
		return map;
	}

	// 상품수정페이지 불러오기
	public ItemDto callItem(ItemBean itemBean) {
		List<ItemBean> itemList = mapper.callItem(itemBean);
		ItemDto dto = new ItemDto();
		if (itemList.size() != 0) {
			dto.setItemId(itemList.get(0).getItemId());
			dto.setSellerId(itemList.get(0).getSellerId());
			dto.setCategory(itemList.get(0).getCategory());
			dto.setItemName(itemList.get(0).getItemName());
			dto.setSellingUnit(itemList.get(0).getSellingUnit());
			dto.setTotalAmount(itemList.get(0).getTotalAmount());
			dto.setDescription(itemList.get(0).getDescription());
			dto.setPricePerUnit(itemList.get(0).getPricePerUnit());
			dto.setMinAmount(itemList.get(0).getMinAmount());
			dto.setMaxAmount(itemList.get(0).getMaxAmount());
			dto.setDiscount(itemList.get(0).getDiscount());
		} 
		return dto;
	}

	// 상품수정정보 저장
	public void modifyItem(MultipartHttpServletRequest req,ItemDto itemDto) throws UnsupportedEncodingException {
		ItemBean itemBean = new ItemBean();
		String sellerId = (String)session.getAttribute("userId");
		itemDto.setSellerId(sellerId);
		String thumbNail = convertDataType(req);
		String itemName = URLDecoder.decode(itemDto.getItemName(),"UTF-8");
		String description = URLDecoder.decode(itemDto.getDescription(), "UTF-8");
		itemBean.setCategory(itemDto.getCategory());
		itemBean.setDescription(description);
		itemBean.setDiscount(itemDto.getDiscount());
		itemBean.setItemName(itemName);
		itemBean.setMaxAmount(itemDto.getMaxAmount());
		itemBean.setMinAmount(itemDto.getMinAmount());
		itemBean.setPricePerUnit(itemDto.getPricePerUnit());
		itemBean.setSellerId(sellerId);
		itemBean.setSellingUnit(itemDto.getSellingUnit());
		itemBean.setThumbNail(thumbNail);
		itemBean.setTotalAmount(itemDto.getTotalAmount());
		itemBean.setMsg("상품 등록이 완료되었습니다");
		mapper.modifyItem(itemBean);
	}

	// 상품 삭제
	public void delItem(ItemBean itemBean) {
		mapper.delItem(itemBean);
	}

}
