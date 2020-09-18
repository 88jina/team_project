package com.farmers.register.service;

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
	
	public void callItem(ItemBean itemBean) {
		mapper.callItem(itemBean);;
		
	}
	
}
