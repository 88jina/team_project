<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form:form method="POST" action="post" enctype="multipart/form-data">
    판매자 고유번호<input type="text" name="sellerId" /><br>
    상품명<input type="text" name="itemName" /><br>
    카테고리<input type="text" name="category" /><br> 
    판매단위<input type="text" name="sellingUnit" /><br> 
    판매예정수량<input type="text" name="totalAmount" /><br> 
    상품설명<input type="text" name="description" /><br> 
    단위당가격<input type="text" name="pricePerUnit" /><br> 
    딜성사최소수량<input type="text" name="minAmount" /><br> 
    딜성사최대수량<input type="text" name="maxAmount" /><br>
	상품이미지<br>
       	<input type="file" name="file" /><br>
		<input type="submit" value="Submit" />

	</form:form>
</body>
</html>