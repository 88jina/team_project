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
	<form method="post" action="post" enctype="multipart/form-data">

	상품이미지<br>
       	<input type="file" name="file" /><br>
		<input type="submit" value="Submit" />

	</form>
</body>
</html>