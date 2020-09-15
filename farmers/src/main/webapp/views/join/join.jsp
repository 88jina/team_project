<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="api/join" method="post">
	id<input type="text" name="loginId"><br>
	pw<input type="password" name="userPw"><br>
	email <input type="text" name="userEmail"><br>

	<button type="submit" >sign up</button>
	</form>
</body>
</html>