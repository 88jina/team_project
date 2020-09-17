package com.farmers.register.beans;

import javax.validation.constraints.*;

public class DuplCheckBean {
	@NotEmpty(message = "빈칸이 있습니다")
	@Pattern(regexp="[a-zA-Z0-1]*")
	@Size(min=4, max=20)
	private String loginId;
	private String msg;
	private boolean isDupl;
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public boolean isDupl() {
		return isDupl;
	}
	public void setDupl(boolean isDupl) {
		this.isDupl = isDupl;
	}
	public String getLoginId() {
		return loginId;
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
}
