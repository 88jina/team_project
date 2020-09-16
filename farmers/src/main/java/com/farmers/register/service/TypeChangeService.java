package com.farmers.register.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class TypeChangeService {
	
	@Autowired
	UserMapper userMapper;
	
	public List<UserBean> userList(UserBean userBean){
		return userMapper.userView(userBean);
	}

	
}
