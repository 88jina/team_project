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

	public void postItem(ItemBean itemBean) {
		mapper.postItem(itemBean);
	}

	public List<ItemBean> callItem(ItemBean itemBean) {
		List<ItemBean> list = mapper.callItem(itemBean);
		return list;
	}
	public List<ItemBean> modifyItem(ItemBean itemBean){
		List<ItemBean> list = mapper.modifyItem(itemBean);
		return list;
	}
	public void delItem(ItemBean itemBean) {
		mapper.delItem(itemBean);
	}

}
