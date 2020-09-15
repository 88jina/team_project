<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="<c:url value="/resources/client/default.css" />" rel="stylesheet"/>

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