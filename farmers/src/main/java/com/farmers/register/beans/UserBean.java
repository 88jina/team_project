package com.farmers.register.beans;

import javax.validation.constraints.*;

public class UserBean {
	private String userId;
	@NotEmpty(message = "빈칸이 있습니다")
	@Pattern(regexp="[a-zA-Z0-1]*")
	@Size(min=4, max=20)
	private String loginId;
	@NotEmpty(message = "빈칸이 있습니다")
	@Size(min=4, max=20)
	@Pattern(regexp="[a-zA-Z0-1]*")
	private String userPw;
	@NotEmpty(message = "빈칸이 있습니다")
	@Email(message = "이메일 형식으로 입력해주세요")
	private String userEmail;
	private String degree;
	private String userType;
	private int availablePoint;
	private boolean isLoggedIn;
	
	public boolean isLoggedIn() {
		return isLoggedIn;
	}

	public void setLoggedIn(boolean isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
	}

	public int getAvailablePoint() {
		return availablePoint;
	}

	public void setAvailablePoint(int availablePoint) {
		this.availablePoint = availablePoint;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getUserPw() {
		return userPw;
	}

	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
}
