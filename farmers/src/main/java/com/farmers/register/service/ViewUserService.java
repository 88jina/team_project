package com.farmers.register.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class ViewUserService {
	@Autowired
	UserMapper userMapper;

	public Map<String, String> viewAll(UserBean userBean) {
		Map<String, String> map = userMapper.userView(userBean);
		map.put("loginId", userBean.getLoginId());
		map.put("userEmail", userBean.getUserEmail());
		map.put("userType", userBean.getUserType());
		System.out.println(map);

		return map;
	}
}
