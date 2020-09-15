<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="auth/sendMail" method="get">
	email <input type="text" name="userEmail"><br>
	<button type="submit" >sendMail</button>
	</form>
	<form action="authKey" method="get">
	authKey <input type="text" name="authKey"><br>
	<button type="submit">authCheck</button>
	</form>
</body>
</html>