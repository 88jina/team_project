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
	@Select("SELECT * FROM users WHERE loginId=#{loginId} AND userPw=#{userPw}")
	public List<LoginBean> checkUserInfo(LoginBean loginBean);
	
	//마이페이지
	@Select("SELECT * FROM users WHERE userId=#{userId}")
	public List<UserBean> getUserInfo(String userId);


}
