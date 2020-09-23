package com.farmers.register.service;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class TestService {
	@Autowired
	ItemMapper mapper;
	
	public void imgUploadTest(TestBean test) {
		mapper.imgUploadTest(test);
	}
}
