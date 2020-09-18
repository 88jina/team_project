package com.farmers.register.beans;

import javax.servlet.http.*;

public class AuthBean {
	private boolean sendMail;
	private String authKey;
	private Cookie authCookie;

	public String getAuthKey() {
		return authKey;
	}

	public void setAuthKey(String authKey) {
		this.authKey = authKey;
	}

	public Cookie getAuthCookie() {
		return authCookie;
	}

	public void setAuthCookie(Cookie authCookie) {
		this.authCookie = authCookie;
	}

	public boolean isSendMail() {
		return sendMail;
	}

	public void setSendMail(boolean sendMail) {
		this.sendMail = sendMail;
	}

}
