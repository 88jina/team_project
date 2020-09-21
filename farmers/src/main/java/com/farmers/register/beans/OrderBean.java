package com.farmers.register.beans;

public class OrderBean {
	private String userId;
	private String dealId;
	private String ordered;
	private String delivery;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getDealId() {
		return dealId;
	}
	public void setDealId(String dealId) {
		this.dealId = dealId;
	}
	public String getOrdered() {
		return ordered;
	}
	public void setOrdered(String ordered) {
		this.ordered = ordered;
	}
	public String getDelivery() {
		return delivery;
	}
	public void setDelivery(String delivery) {
		this.delivery = delivery;
	}
}
