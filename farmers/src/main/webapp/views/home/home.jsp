<%@ page isELIgnored="false" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/default.css"/>

</head>
<body>
Main Page
<form action="login" method=post>
id <input type="text" name ="loginId"><br>
pw<input type="password" name="userPw"><br>
<button type="submit">LOGIN</button>
</form>
<form action="api">
<button type="submit">회원가입</button>
</form>
<form action="auth"><button type="submit">메일인증</button></form>
<form action="dupl" method="get"><button type="submit">id dupl check</button></form>
</html>