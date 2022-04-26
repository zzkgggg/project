<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li>
          <router-link to="/index">网站首页</router-link>
        </li>
        <li>
          <router-link to="/books">中医资源库</router-link>
        </li>
        <li>
          <router-link to="/map">中医地图</router-link>
        </li>
        <li>
          <router-link to="/yangsheng">中医养生</router-link>

        </li>
      </ul>
      <!--      <a href="" class="logo"><img src="images/logo.png" /></a>-->
      <ul>
        <li>
          <router-link to="/culture">中医文化</router-link>

        </li>
        <li class="on">
          <router-link to="/qiwu">中医器物</router-link>

        </li>
        <li>
          <router-link to="/test">知识检测</router-link>

        </li>
        <li>
          <router-link to="/users/:id">个人中心</router-link>

        </li>
      </ul>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>

  <div class="news">
    <div class="tit">
      <h3>中医器物展示</h3>
      <p></p>
    </div>
    <div class="cont w1200">
      <ul class="ul1">
        <router-link to="/qiwudetail/1">
          <li>
            <figure>
              <img src="../../images_qw/zbyj.webp"/>
            </figure>
            <figcaption>
              <h3>针砭用具</h3>
              <p>针刺疗法历史悠久，是中国传统医学独创的一种治疗方法，在《黄帝内经》其理论体系已基本成形。</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
          </li>

        </router-link>



        <router-link to="/qiwudetail/2">
        <li>
            <figure>
              <img src="../../images_qw/aryj.jpg"/>
            </figure>
            <figcaption>
              <h3>灸焫用具</h3>
              <p>作为一种古老的治疗手段，灸法产生于人类掌握手工取火之术后，与“火”的应用密切相关</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
        </li>
        </router-link>

            <router-link to="/qiwudetail/3">
        <li>

            <figure>
              <img src="../../images_qw/sgyj.jpg"/>
            </figure>
            <figcaption>
              <h3>痧罐用具</h3>
              <p>刮痧疗法，在正式体系形成之前，作为一种单独散在的技术校验，长期以来流传民间，薪火相承。</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
        </li>
            </router-link>
      </ul>

      <ul class="ul1">
        <router-link to="/qiwudetail/4">
        <li>
            <figure>
              <img src="../../images_qw/pzyj.webp"/>
            </figure>
            <figcaption>
              <h3>炮制用具</h3>
              <p>炮制，又称炮炙、修事、修治、修制、修合、合药、合和、合治等，是对药材进行加工处
                理的一项传统制药技术。</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
        </li>
        </router-link>

          <router-link to="/qiwudetail/5">
        <li>
            <figure>
              <img src="../../images_qw/cl.webp"/>
            </figure>
            <figcaption>
              <h3>串铃与招幌</h3>
              <p>走方郎中游走于乡间为人治病，手持一个串铃，以铃响声招呼病家。药店的招幌是一种以实物模型为征象的药业坐商标记。</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
        </li>
          </router-link>


          <router-link to="/qiwudetail/6">
        <li>
            <figure>
              <img src="../../images_qw/hl.webp"/>
            </figure>
            <figcaption>
              <h3>葫芦与青囊</h3>
              <p>葫芦也叫壶，是古代盛酒水的器皿。青囊也是中医的代名词之一，讲的是华伦的故事。</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
        </li>
              </router-link>
      </ul>

      <ul class="ul1">
        <router-link to="/qiwudetail/7">
        <li>
            <figure>
              <img src="../../images_qw/xljj.webp"/>
            </figure>
            <figcaption>
              <h3>杏林与橘井</h3>
              <p>“杏林橘井园”，是中医界聚集园地的代称。医家每每以“杏林中人”自居。然而“杏林”一词典出汉末三国闽籍道医董奉。 “杏林园”即指历代医术高超医生聚集论坛的园地。</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
        </li>
        </router-link>

          <router-link to="/qiwudetail/8">
        <li>
            <figure>
              <img src="../../images_qw/jg.webp"/>
            </figure>
            <figcaption>
              <h3>甲骨</h3>
              <p>甲骨文，是刻在龟甲（主要是龟腹甲）和兽骨（主要是牛肩胛骨）上的商周古文字。</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
        </li>
          </router-link>

            <router-link to="/qiwudetail/9">
        <li>
            <figure>
              <img src="../../images_qw/cj.webp"/>
            </figure>
            <figcaption>
              <h3>缣帛</h3>
              <p>缭吊是古代的丝织品，《墨子》里多次提及“书之竹吊，钱之金石”以传后世子孙，
                西汉晚期刘向奉旨“校中秘书” 十余年，皆先书竹，改易刊定，然后“上素”，即以定本
                缮写于缭吊，则嫌吊不仅是一种与竹简并称的书写材料，而且是一种更为高级的书写
                材料。</p>
              <div><span>MORE</span><b></b></div>
            </figcaption>
        </li>
            </router-link>
<!--        <li>-->
<!--          <a href="">-->
<!--            <figure>-->
<!--              <img src="../../images/尚灸_90.png"/>-->
<!--            </figure>-->
<!--            <figcaption>-->
<!--              <h3>简牍</h3>-->
<!--              <p>说过的话富商大贾黄金分割京汉股份第三方健康斯蒂芬水稻阿萨黑石渡</p>-->
<!--              <div><span>MORE</span><b></b></div>-->
<!--            </figcaption>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="">-->
<!--            <figure>-->
<!--              <img src="../../images/尚灸_90.png"/>-->
<!--            </figure>-->
<!--            <figcaption>-->
<!--              <h3>金石</h3>-->
<!--              <p>说过的话富商大贾黄金分割京汉股份第三方健康斯蒂芬水稻阿萨黑石渡</p>-->
<!--              <div><span>MORE</span><b></b></div>-->
<!--            </figcaption>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="">-->
<!--            <figure>-->
<!--              <img src="../../images/尚灸_90.png"/>-->
<!--            </figure>-->
<!--            <figcaption>-->
<!--              <h3>纸张</h3>-->
<!--              <p>说过的话富商大贾黄金分割京汉股份第三方健康斯蒂芬水稻阿萨黑石渡</p>-->
<!--              <div><span>MORE</span><b></b></div>-->
<!--            </figcaption>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="">-->
<!--            <figure>-->
<!--              <img src="../../images/尚灸_90.png"/>-->
<!--            </figure>-->
<!--            <figcaption>-->
<!--              <h3>太医院及宫廷医药场所</h3>-->
<!--              <p>说过的话富商大贾黄金分割京汉股份第三方健康斯蒂芬水稻阿萨黑石渡</p>-->
<!--              <div><span>MORE</span><b></b></div>-->
<!--            </figcaption>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="">-->
<!--            <figure>-->
<!--              <img src="../../images/尚灸_90.png"/>-->
<!--            </figure>-->
<!--            <figcaption>-->
<!--              <h3>医堂和疾馆</h3>-->
<!--              <p>说过的话富商大贾黄金分割京汉股份第三方健康斯蒂芬水稻阿萨黑石渡</p>-->
<!--              <div><span>MORE</span><b></b></div>-->
<!--            </figcaption>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="">-->
<!--            <figure>-->
<!--              <img src="../../images/尚灸_90.png"/>-->
<!--            </figure>-->
<!--            <figcaption>-->
<!--              <h3>药肆与药局</h3>-->
<!--              <p>说过的话富商大贾黄金分割京汉股份第三方健康斯蒂芬水稻阿萨黑石渡</p>-->
<!--              <div><span>MORE</span><b></b></div>-->
<!--            </figcaption>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="">-->
<!--            <figure>-->
<!--              <img src="../../images/尚灸_90.png"/>-->
<!--            </figure>-->
<!--            <figcaption>-->
<!--              <h3>医馆与药肆环境</h3>-->
<!--              <p>说过的话富商大贾黄金分割京汉股份第三方健康斯蒂芬水稻阿萨黑石渡</p>-->
<!--              <div><span>MORE</span><b></b></div>-->
<!--            </figcaption>-->
<!--          </a>-->
<!--        </li>-->
      </ul>
    </div>
  </div>

  <div class="footer">
    <div class="cont w1200">
      <div class="div1 div">
        <h3>联系我们</h3>
        <h2>110</h2>

        <div class="code">
          <div>
            <img src="../../images/尚灸_99.png"/>
            <p>问题反馈</p>
          </div>

        </div>
      </div>
      <div class="div2 div">
        <h3>关于中医文化馆</h3><br>
        <h3>zzk 版权所有</h3>
        <p>

          <a href="">网站首页 </a> <a href="">关于我们 </a> <a href="">服务项目 </a>
          <a href="">康复案例 </a> <a href="">招商加盟 </a> <a href="">加盟商风采 </a>
          <a href="">新闻资讯 </a> <a href="">联系我们 </a>

        </p>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: "QWPage"
}
</script>

<style scoped>

.news ul {
  display: flex;
  justify-content: space-between;
  height: 450px;
}

.news li figure {
  width: 380px;
  height: 300px;
  overflow: hidden;
}

.news figcaption {
  border: 1px solid #000;
  width: 335px;
  margin: 0 auto;
  padding: 50px 20px 35px 20px;
  margin-top: -60px;
  position: relative;
  z-index: 33;
  transition: all 0.36s;
}

.news figcaption h3 {
  color: #000;
  font-size: 18px;
  padding: 20px 0;
}

.news figcaption h5 {
  color: #fff;;
  font-size: 12px;
  opacity: 0;
  transition: all 0.36s;
  margin-top: -20px;
}

.news figcaption p {
  line-height: 24px;
  height: 48px;
  overflow: hidden;
  transition: all 0.3s;
  color: #666;
  font-size: 13px;
}

.news figcaption div {
  padding-top: 20px;
}

.news figcaption b {
  display: inline-block;
  height: 1px;
  background: #e7452c;
  width: 225px;
  vertical-align: middle;
  margin-left: 10px;
}

.news figcaption span {
  color: #e7452c;
}

.news li:hover figcaption {
  background: #222222;
  color: #fff;
  padding-top: 20px;
}

.news li:hover h5 {
  opacity: 1;
  margin-top: 0;
  margin-bottom: 20px;
}

.news li:hover h3, .news li:hover p {
  color: #fff;
}

.news li:hover b {
  background: #fff;
}

.news li:hover span {
  color: #fff;
}


.ul1 {
  margin-bottom: 40px;
}
</style>