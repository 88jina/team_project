package com.farmers.register.service;

import java.util.*;

import javax.annotation.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class LoginService {
	@Autowired
	UserMapper userMapper;

	@Resource
	private LoginBean loginBean;

	public boolean checkUserExist(UserBean userBean) {
		boolean check = false;
		List<String> list = userMapper.checkUserInfo(userBean);
		if (list.size() != 0) {
			check = true;
			loginBean.setExist(true);
		} else {
			check = false;
		}

		return check;
	}

	public String userType(UserBean userBean) {
		List<String> list = userMapper.checkUserInfo(userBean);
		String userType=null;
		if(list.size()!=0) {
		 userType = list.get(0);}

		return userType;
	}

}
