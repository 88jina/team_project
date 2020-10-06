package com.farmers.register.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.farmers.register.beans.*;
import com.farmers.register.mapper.*;

@Service
public class AdminService {
	@Autowired
	AdminMapper adminMapper;
	
	
	//전체 회원 목록 조회
	public List<AdminBean> userList(){
		List<AdminBean> list = adminMapper.userView();
		return list;
	}
	//아이디로 회원 조회
	public List<AdminBean> searchUser(AdminBean adminBean) {
		List<AdminBean> list = adminMapper.searchUser(adminBean);
		return list;
	}
	//판매자만 조회
	public List<AdminBean> searchSeller(){
		List<AdminBean>list = adminMapper.searchSeller();
		return list;
	}
	
	//판매자 등록 (userType update, insert into seller)
	public void convertToSeller(AdminBean adminBean) {
		adminMapper.convertToSeller(adminBean);
		adminMapper.insertSeller(adminBean);
	}
	
	//판매자 삭제 (userType update, delete from seller)
	public void convertToUser(AdminBean adminBean) {
		adminMapper.convertToUser(adminBean);
		adminMapper.delSeller(adminBean);
	}
	
	//판매자인지 아닌지 확인
	public boolean isSeller(AdminBean adminBean) {
		List<AdminBean> list = adminMapper.isSeller(adminBean);
		if(list.size()!=0) {
			return true;
		}else {
			return false;
		}
	}
	
}
