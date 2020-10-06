package com.farmers.register.service;

public class ResultDto<T> {
	private int count;
	private T myItem;
	public ResultDto(T objects) {
		this.myItem = objects;
	}
	
	public ResultDto(T objects, int count) {
		this.myItem = objects;
		this.count = count;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public T getMyItem() {
		return myItem;
	}

	public void setMyItem(T objects) {
		this.myItem = objects;
	}
	
	
	

}
