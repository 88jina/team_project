package com.farmers.register.mapper;

import java.util.*;

import org.apache.ibatis.annotations.*;

import com.farmers.register.beans.*;

public interface AdminMapper {
	// 모든 회원 정보 조회
	@Select("SELECT * FROM users")
	public List<AdminBean> userView();

	// (아이디로)특정 회원 정보 검색
	@Select("SELECT * FROM users WHERE loginId=#{loginId}")
	public List<AdminBean> searchUser(AdminBean adminBean);

	// 판매자인 회원만 검색
	@Select("SELECT * FROM users WHERE userType=1")
	public List<AdminBean> searchSeller();
	
	//판매자인지 아닌지 확인
	@Select("SELECT * FROM seller WHERE sellerId=#{sellerId}")
	public List<AdminBean> isSeller(AdminBean adminBean);

	// 판매자등록
	@Update("UPDATE users SET userType=1 WHERE userId=#{userId}")
	public void convertToSeller(AdminBean adminBean);
	@Insert("INSERT INTO seller(sellerId) VALUES(#{sellerId})")
	public void insertSeller(AdminBean adminBean);

	// 판매자삭제
	@Update("UPDATE users SET userType=0 WHERE userId=#{userId}")
	public void convertToUser(AdminBean adminBean);
	@Delete("DELETE FROM seller WHERE sellerId=#{sellerId}")
	public void delSeller(AdminBean adminBean);
}
