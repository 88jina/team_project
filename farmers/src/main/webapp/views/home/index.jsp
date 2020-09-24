<%@ page isELIgnored="false" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Farmers</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
  <link id="style" rel="stylesheet" href="/farmers/resources/client/style.min.css">

</head>
<template id="s_b_t"></template>
<template id="a_b_t"></template>
<template id="f_n_t"></template>
<template id="t_n_t"></template>
<template id="s_t_n_t"></template>
<template id="m_p_t"></template>
<template id="h_p_t"></template>
<template id="d_p_t"></template>
<template id="i_p_t"></template>
<template id="j_p_t"></template>
<template id="l_p_t"></template>
<template id="r_p_t"></template>
<template id="p_p_t"></template>
<template id="w_p_t"></template>
<template id="c_p_t"></template>
<template id="m_a_t"></template>
<template id="i_p_p_t"></template>
<template id="i_e_p_t"></template>
<template id="i_e_l_p_t"></template>
<!-- <template id="i_e_l_c_t"></template> -->

<body id="body" class="container">
  <!-- page customElements -->
  <my-page class="container"></my-page>
  <home-page class="container"></home-page>
  <deal-page class="container"></deal-page>
  <item-page class="container"></item-page>
  <join-page class="container"></join-page>
  <login-page class="container"></login-page>
  <review-page class="container"></review-page>
  <payment-page class="container"></payment-page>
  <wishlist-page class="container"></wishlist-page>
  <category-page class="container"></category-page>
  <item-post-page class="container"></item-post-page>
  <item-edit-page class="container"></item-edit-page>
  <item-edit-list-page class="container"></item-edit-list-page>

  <search-box id="searchBox" class="container center bgc-wgrn"></search-box>
  <div id="mainPage" class=" container">

    <header id="mainHeader" class="container">
      <nav id="mainTopNav" class="container top-nav-wrapper flex-col c-lgrn bgc-wgrn">
        <top-nav class="container"></top-nav>
        <sub-top-nav></sub-top-nav>
      </nav>
    </header>

    <main id="main" class="container">
    </main>

    <footer-nav class="container">
    </footer-nav>
    
    <ani-button class="to-top-anchor">
    </ani-button>

  </div>
</body>

<script id="app" src="/farmers/resources/client/app.js" type="module">
</script>
</html>