package com.farmers.register.mapper;

import java.util.*;

import org.apache.ibatis.annotations.*;

import com.farmers.register.beans.*;

public interface UserMapper {

	// 가입하기
	@Insert("INSERT INTO users(loginId, userPw, userEmail) VALUES(#{loginId},#{userPw},#{userEmail})")
	public void doJoin(UserBean userBean);

	// 아이디 중복 조회
	@Select("SELECT loginId FROM users WHERE loginId=#{loginId}")
	public List<String> duplId(UserBean userBean);

	// 로그인할때
	@Select("SELECT userType FROM users WHERE loginId=#{loginId} AND userPw=#{userPw}")
	public String checkUserInfo(UserBean userBean);

	// 모든 회원 정보 조회
	@Select("SELECT loginId, userType, degree, userEmail FROM users")
	public List<UserBean> userView();
	
	//특정 회원 정보 검색
	@Select("SELECT loginId, userType, degree, userEmail FROM users WHERE loginId=#{loginId}")
	public List<UserBean> searchUser(UserBean userBean);
	
	//판매자등록
	@Update("UPDATE users SET userType=1 WHERE loginId=#{loginId}")
	public void convertToSeller(UserBean userBean);
	
	//판매자삭제
	@Update("UPDATE users SET userType=0 WHERE loginId=#{loginId}")
	public void convertToUser(UserBean userBean);
}
