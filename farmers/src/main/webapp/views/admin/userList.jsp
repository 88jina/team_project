<%@ page isELIgnored="false" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/index.css">
    <title>Document</title>
</head>
<body>
   <header><p>전체 회원 목록 조회</p></header>
    <div class="main">
    <div class="searchBox">
<form action="selectById" method="get"><p>아이디로 찾기</p><input type="text" name="loginId"/><button type="submit">검색</button></form></div>
<div class="table">
<a href=http://192.168.1.137:8090/farmers>메인페이지로</a>
<table>
<tr>
<td><p>회원번호</p></td>
<td><p>아이디</p></td>
<td><p>유형</p></td>
<td><p>회원등급</p></td>
<td><p>이메일</p></td>
<td><p>잔여포인트</p></td>
<td><p>비고</p></td>
</tr>
<c:forEach var="row" items="${userList}">
<tr>
<td><p>${row.userId}</p></td>
<td><p>${row.loginId}</p></td>
<td><p>${row.userType}</p></td>
<td><p>${row.degree}</p></td>
<td><p>${row.userEmail}</p></td>
<td><p>${row.availablePoint}</p></td>
<td><a href="http://192.168.1.137:8090/farmers/admin/updateSeller?userId=${row.userId }&sellerId=${row.userId}">판매자 등록</a>
<a href="http://192.168.1.137:8090/farmers/admin/delSeller?userId=${row.userId }&sellerId=${row.userId}">판매자 삭제</a></td>
</tr>
</c:forEach>
</table>
   </div>
    </div>
</body>
</html>