package com.farmers.register.service;


import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class LoginService {
	@Autowired
	UserMapper userMapper;

	public boolean checkUserExist(LoginBean loginBean) {
		boolean check = false;
		String userType = userMapper.checkUserInfo(loginBean);
		if (userType != null) {
			check = true;
			loginBean.setExist(true);
		} else {
			check = false;
		}

		return check;
	}

	public String userType(LoginBean loginBean) {
		String userType = userMapper.checkUserInfo(loginBean);
		return userType;
	}

}
