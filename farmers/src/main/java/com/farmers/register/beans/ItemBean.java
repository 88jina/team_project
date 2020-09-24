package com.farmers.register.beans;

import javax.validation.constraints.*;

public class ItemBean {
	@NotEmpty(message = "빈칸이 있습니다")
	private String sellerId;
	private String itemId;
	@NotEmpty
	private String itemName;
	@NotEmpty
	private String category;
	@NotEmpty
	private String sellingUnit;
	private String totalAmount;
	@NotEmpty
	private String description;
	@NotEmpty
	private String pricePerUnit;
	private String minAmount;
	private String maxAmount;
	private String thumbNail;
	private String discount;
	private String msg;
	


	public String getDiscount() {
		return discount;
	}

	public void setDiscount(String discount) {
		this.discount = discount;
	}

	public String getThumbNail() {
		return thumbNail;
	}

	public void setThumbNail(String thumbNail) {
		this.thumbNail = thumbNail;
	}

	public String getMinAmount() {
		return minAmount;
	}

	public void setMinAmount(String minAmount) {
		this.minAmount = minAmount;
	}

	public String getMaxAmount() {
		return maxAmount;
	}

	public void setMaxAmount(String maxAmount) {
		this.maxAmount = maxAmount;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getSellerId() {
		return sellerId;
	}

	public void setSellerId(String sellerId) {
		this.sellerId = sellerId;
	}

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSellingUnit() {
		return sellingUnit;
	}

	public void setSellingUnit(String sellingUnit) {
		this.sellingUnit = sellingUnit;
	}

	public String getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(String totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPricePerUnit() {
		return pricePerUnit;
	}

	public void setPricePerUnit(String pricePerUnit) {
		this.pricePerUnit = pricePerUnit;
	}
}
