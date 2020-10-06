package com.farmers.register.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class DuplCheckService {
	@Autowired
	UserMapper userMapper;

	public boolean isDupl(UserBean userBean) {
		boolean check;
		List<String> list = userMapper.duplId(userBean);
		if (list.size() != 0) {
			check = true;
		} // 중복인 아이디가 있으면 true 리턴
		else {
			check =false; 
		}
		return check;
	}
}
