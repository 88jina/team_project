package com.farmers.register.service;


import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class LoginService {
	@Autowired
	UserMapper userMapper;

	public boolean checkUserExist(UserBean userBean) {
		boolean check = false;
		String userType = userMapper.checkUserInfo(userBean);
		if (userType != null) {
			check = true;
			userBean.setExist(true);
		} else {
			check = false;
		}

		return check;
	}

	public String userType(UserBean userBean) {
		String userType = userMapper.checkUserInfo(userBean);
		return userType;
	}

}
