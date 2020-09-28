package com.farmers.register.service;

import java.util.*;

import javax.servlet.http.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class MyPageService {
	@Autowired
	UserMapper userMapper;

	public UserBean getUserInfo(HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		List<UserBean> list = userMapper.getUserInfo(userId);
		UserBean bean = new UserBean();
		if (list.size() != 0) {

			bean.setUserId(list.get(0).getUserId());
			bean.setUserEmail(list.get(0).getUserEmail());
			bean.setDegree(list.get(0).getDegree());
			bean.setLoginId(list.get(0).getLoginId());
			bean.setAvailablePoint(list.get(0).getAvailablePoint());
			bean.setLoggedIn(true);
			String userType = list.get(0).getUserType();
			switch (userType) {
			case "0":
				bean.setUserType("user");
				break;
			case "1":
				bean.setUserType("seller");
				break;
			case "2":
				bean.setUserType("admin");
				break;

			}

		} else {
			bean.setLoggedIn(false);
		}

		return bean;
	}
}
