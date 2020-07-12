<template>
  <div class="index">
    <div class="darkblue-container">
      <a class="darkblue" href="https://github.com/yilihjy/AnimeScheduleSearch">
        <img
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
          class="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        >
      </a>
    </div>
    <div class="main-container">
      <div class="scan-contienr">
        <h1>番剧放送速查</h1>
        <img class="scan-img" src="scan.jpg" alt="微信小程序二维码">
        <p>微信扫码使用小程序</p>
      </div>
    </div>
  </div>
</template>

<style>
html,body{
 margin: 0;
 padding: 0;
 color: #F09199;
}
.index{
  width: 100%;
}
.darkblue-container{
  width: 100%;
  height: 149px;
}
.darkblue {
  float: right;
}
.main-container {
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
}

@media screen and (max-width: 430px) {
    .scan-contienr{
      width: 100%;
      text-align: center;
    }
    .scan-img{
      width: 80%;
    }

}
.scan-contienr{
  width: 430px;
  text-align: center;
}

</style>

<script>

export default {
    mounted () {
    }
};
</script>
