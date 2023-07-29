<template>
  <Banner url="/images/index-bg.jpg">
    <section class="section-box">
      <h2 class="index-title">M的个人博客</h2>
      <p class="introduce">自律使我自由。</p>
      <svg class="icon" aria-hidden="true" style="color: #fff" >
        <use xlink:href="#icon-iconfonti2"></use>
      </svg>
    </section>
  </Banner>
  <div class="page-content">
    <div class="article-content">
      <div class="article-list">
        <div class="article-item flex">
          <img src="" alt="" />
          <div class="article-detail">
            <div class="title flex-sb">
              <h3></h3>
              <div class="category"></div>
            </div>
            <div class="date flex-center">
              <svg class="icon" aria-hidden="true" style="color: #fff">
                <use xlink:href="#icon-riqi"></use>
              </svg>
              <span></span>
            </div>
            <div class="content"></div>
          </div>
        </div>
      </div>
    </div>
    <div :class="['mine-content',]">
      <div class="container">
        <img
            src="https://static.gohipet.com/merchant/images/13735560-ec43-4a08-8ca3-1f8464e1b964.png"
            alt=""
            class="head-img"
        />
        <div class="name">M</div>
        <div class="desc">努力努力再努力!</div>
        <ul class="web-data flex-sb">
          <li>
            <h4>文章</h4>
            <span class="num">15</span>
          </li>
          <li>
            <h4>分类</h4>
            <span class="num">15</span>
          </li>
          <li>
            <h4>留言</h4>
            <span class="num">99+</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less">
@import "./index.less";
</style>