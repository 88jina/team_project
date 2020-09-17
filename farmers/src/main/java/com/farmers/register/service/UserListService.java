package com.farmers.register.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class UserListService {
	@Autowired
	UserMapper userMapper;
	
	public List<UserBean> userList() {
		List<UserBean> list = userMapper.userView();
		return list;
	}
	
	public List<UserBean> searchUser(UserBean userBean){
		List<UserBean> list = userMapper.searchUser(userBean);
		return list;
	}
	
	public void convertToSeller(UserBean userBean) {
		userMapper.convertToSeller(userBean);
	}
	
	public void convertToUser(UserBean userBean) {
		userMapper.convertToUser(userBean);
	}
}
