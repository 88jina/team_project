package com.farmers.register.beans;


import org.springframework.web.multipart.*;

public class ItemDto {
	
	private String sellerId;
	private String itemId;
	private String itemName;
	private String category;
	private String sellingUnit;
	private String totalAmount;
	private String description;
	private String pricePerUnit;
	private String minAmount;
	private String maxAmount;
	private MultipartFile thumbNail;
	private String discount;
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
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
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

	public MultipartFile getThumbNail() {
		return thumbNail;
	}
	public void setThumbNail(MultipartFile thumbNail) {
		this.thumbNail = thumbNail;
	}
	public String getDiscount() {
		return discount;
	}
	public void setDiscount(String discount) {
		this.discount = discount;
	}
	
	
	

}
