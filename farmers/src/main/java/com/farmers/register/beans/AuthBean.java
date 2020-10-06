package com.farmers.register.beans;


public class AuthBean {
	private boolean sendMail;
	private String userEmail;
	private String authKey;
	private String cookieName;

	public String getCookieName() {
		return cookieName;
	}

	public void setCookieName(String cookieName) {
		this.cookieName = cookieName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getAuthKey() {
		return authKey;
	}

	public void setAuthKey(String authKey) {
		this.authKey = authKey;
	}



	public boolean isSendMail() {
		return sendMail;
	}

	public void setSendMail(boolean sendMail) {
		this.sendMail = sendMail;
	}

}
