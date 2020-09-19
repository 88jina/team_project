<%@ page isELIgnored="false" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<table>
<tr>
<td>회원번호</td>
<td>아이디</td>
<td>유형</td>
<td>회원등급</td>
<td>이메일</td>
<td>잔여포인트</td>
<td>비고</td>
</tr>
<c:forEach var="row" items="${sellerList}">
<tr>
<td>${row.userId }</td>
<td>${row.loginId }</td>
<td>${row.userType}</td>
<td>${row.degree}</td>
<td>${row.userEmail}</td>
<td>${row.availablePoint }</td>
<td><a href="http://localhost:8090/farmers/admin/delSeller?userId=${row.userId }&sellerId=+${row.userId}" >판매자 삭제</a></td>
</tr>
</c:forEach>
</table>
</body>
</html>