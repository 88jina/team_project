<%@ page language="java" contentType="text/html; application/javascript; text/css; charset=UTF-8"
    pageEncoding="UTF-8"%>
   <!DOCTYPE html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
  <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"> -->
  <link type="text/css"rel="stylesheet" href="src/main/resources/client/style.min.css">
</head>
<!-- component templates -->
<template id="main-carousel-template"></template>
<template id="main-footer-template"></template>
<template id="search-box-template"></template>
<template id="footer-nav-template"></template>
<template id="item-slide-template"></template>
<template id="top-nav-template"></template>
<template id="sub-top-nav-template"></template>
<template id="my-page-template"></template>
<template id="deal-page-template"></template>
<template id="item-page-template"></template>
<template id="join-page-template"></template>
<template id="login-page-template"></template>
<template id="review-page-template"></template>
<template id="payment-page-template"></template>
<template id="wishlist-page-template"></template>
<template id="category-page-template"></template>

<body id="body" class="container">

  <!-- page customElements -->
  <my-page class="container"></my-page>
  <deal-page class="container"></deal-page>
  <item-page class="container"></item-page>
  <join-page class="container bgc-lgrn page"></join-page>
  <login-page class="container"></login-page>
  <review-page class="container"></review-page>
  <payment-page class="container"></payment-page>
  <wishlist-page class="container"></wishlist-page>
  <category-page class="container"></category-page>

  <search-box id="search-box" class="container z-tom ap-top center bgc-wgrn"></search-box>

  <div id="main-page" class="pd-t-100px container">

    <header id="main-header" class="container">
      <nav id="mainTopNav" class="container top-nav flex-col c-lgrn bgc-wgrn">
        <top-nav class="flex-col container"></top-nav>
        <sub-top-nav class="flex-row justify-content-around"></sub-top-nav>
      </nav>
    </header>

    <main class="container">
      <div class="shade z-mid center"></div>
      <main-carousel class="container"></main-carousel>
      <item-slide></item-slide>
      <main-footer></main-footer>
    </main>

    <footer-nav class="container z-mid bgc-wgrn footer-nav flex-row justify-content-around">

    </footer-nav>
    <!-- onclick="location.href='#body'"  -->

    <ani-button 
    class="to-top-anchor">
      <i class="fas fa-arrow-circle-up fa-2x c-ggrn round"></i>
    </ani-button>

  </div>
</body>


<script type="text/javascript" src="src/main/resources/client/view/view.js" type="module"></script>

</html>