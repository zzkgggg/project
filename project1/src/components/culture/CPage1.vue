<template>
  <div class="content">
    <div class="px1200">
      <div class="nimen_nimen_Ge nimen_nimen_Ge_ziy">
        <ul>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
          <li><a href="chanp_xq.html">
            <img src="../../images2/cp_img5.jpg" alt="">
            <p>文化</p>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="pagination">
    <el-pagination background layout="prev, pager, next" :total="100" />
  </div>


</template>

<script>
export default {
  name: "CPage1"
}
</script>

<style scoped>

.pagination{
  margin:0 auto;
  width:400px;
  height: 100px;

}





.content{
  position: relative;
  background: url(../../images2/ziybj.jpg) no-repeat top center;
  padding-bottom: 50px;
}

.content .jinajie_kuang{
  text-align: justify;
  line-height: 35px;
  color: #454545;
  padding-bottom: 50px;
}
.content .jinajie_kuang h2{
  text-align: center;
}
.content .jinajie_kuang img{
  max-width:1200px;
  text-align: center;
  margin: auto;
  display: block;
  padding:10px 0;
}


.dangq_luj{
  color: #505050;
  padding:  10px 0;
  padding: 10px;
}
.dangq_luj a{
  color: #505050;
}

.title{

  text-align: center;
}
.title h2{
  color: #000;
  font-weight: normal;
  font-size: 24px;
}
.title p{
  color: #454545;
}

.px1200{
  margin: auto;
  width: 1200px;
  position: relative;
}

.yao_meng{
  height:initial;

}
.yao_meng>div{
  right: 0;
  left: 0;
  margin: auto;
  width: 95%;
  text-align: center;
  position: relative;
  top: 0;
  padding: 10px 0;
}
.yao_meng>div a{
  margin-bottom: .1rem;
}

.yao_meng>div a.no{
  border: solid 1px #e60202;
  background: #e60202;
  color: #ffff;
}

.yao_meng_ziye{
  margin-top: 1px;
  height: initial;
  margin-bottom: 2px;
}
.yao_meng_ziye>div{
  position: relative;
  top: 0;
}

.yao_meng_ziye{
  margin-top: 1px;
  height: initial;
  margin-bottom: 2px;
}
.yao_meng_ziye>div{
  position: relative;
  top: 0;
}

.nimen_nimen_Ge{
  padding-top: 30px;
}
.nimen_nimen_Ge ul{
  padding: 0;
  overflow: hidden;
  margin: 0;
}
.nimen_nimen_Ge ul li{
  width: 385px;
  float: left;
  border-bottom: solid 1px #e3e3e3;
  margin-bottom: 20px;
  margin-right: 22px;
}
.nimen_nimen_Ge ul li img{
  width: 385px;
  height:285px;
  object-fit: cover;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  filter:brightness(1);
}
.nimen_nimen_Ge ul li img:hover{
  filter:brightness(1.2);

}
.nimen_nimen_Ge ul li:nth-child(3n){
  margin-right: 0;
}

.nimen_nimen_Ge ul li p{
  line-height:30px;
  font-size: 18px;
  color: #404040;
  padding-top:8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>