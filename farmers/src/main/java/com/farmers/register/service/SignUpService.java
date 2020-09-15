package com.farmers.register.service;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class SignUpService {
	@Autowired
	UserMapper userMapper;
	
	public void doJoin(UserBean userBean) {
		userMapper.doJoin(userBean);
	}
	
}
