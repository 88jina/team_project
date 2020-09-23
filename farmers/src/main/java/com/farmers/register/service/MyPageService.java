package com.farmers.register.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class MyPageService {
	@Autowired
	UserMapper userMapper;
	
	public UserBean getUserInfo(UserBean userBean){
		List<UserBean>list = userMapper.getUserInfo(userBean);
		UserBean bean = new UserBean();
		bean.setUserId(list.get(0).getUserId());
		bean.setUserEmail(list.get(0).getUserEmail());
		bean.setDegree(list.get(0).getDegree());
		bean.setLoginId(list.get(0).getLoginId());
		bean.setAvailablePoint(list.get(0).getAvailablePoint());
		bean.setUserType(list.get(0).getUserType());
		
		return bean;
	}
}
