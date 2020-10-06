package com.farmers.register.beans;

public class SignUpBean {
	private String errorMsg;
	private boolean isJoined;
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	public boolean isJoined() {
		return isJoined;
	}
	public void setJoined(boolean isJoined) {
		this.isJoined = isJoined;
	}
}
