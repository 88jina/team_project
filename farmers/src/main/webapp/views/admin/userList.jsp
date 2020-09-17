<%@ page isELIgnored="false" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<c:set var="path" value="$pageContext.request.contextPath"/>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
회원목록 조회페이지입니다
<form action="findUser" method="get">아이디로 찾기<input type="text" name="loginId"/><br><button type="submit">검색</button></form>
<table>
<tr>
<td>아이디</td>
<td>유형</td>
<td>회원등급</td>
<td>이메일</td>
</tr>
<c:forEach var="row" items="${list}">
<tr>
<td>${row.loginId }</td>
<td>${row.userType}</td>
<td>${row.degree}</td>
<td>${row.userEmail}</td>
</tr>
</c:forEach>
</table>

</body>
</html>