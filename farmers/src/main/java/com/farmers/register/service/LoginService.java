package com.farmers.register.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class LoginService {
	@Autowired
	UserMapper userMapper;

	public LoginBean getUserInfo(LoginBean loginBean) {
		List<LoginBean> list = userMapper.checkUserInfo(loginBean);
		LoginBean bean = new LoginBean();
		if (list.size() != 0) {
			bean.setLoggedIn(true);
			bean.setExist(true);
			bean.setAvailablePoint(list.get(0).getAvailablePoint());
			bean.setLoginId(list.get(0).getLoginId());
			bean.setDegree(list.get(0).getDegree());
			String userType = list.get(0).getUserType();
			switch (userType) {
			case "0":
				bean.setUserType("user");
				break;
			case "1":
				bean.setUserType("seller");
			case "2":
				bean.setUserType("admin");

			}

		}else {
			bean.setErrorMsg("가입된 계정이 아닙니다");
			bean.setExist(false);
			bean.setLoggedIn(false);
		}
		return bean;
	}


}
