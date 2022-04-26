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
        <li>
          <router-link to="/qiwu">中医器物</router-link>

        </li>
        <li>
          <router-link to="/test" class="on">知识检测</router-link>

        </li>
        <li class="on">
          <router-link to="/login">个人中心</router-link>

        </li>
      </ul>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>


  <el-container
      class="layout-container-demo"
      style="height: 1000px; border: 1px solid #eee"
  >
    <el-aside width="200px" style="background-color: rgb(238, 241, 246) ">

      <div class="aside">
        <ul>
          <li>
            <router-link to="/users/:id/regular">常规设置</router-link>
          </li>

          <li>
            <router-link to="/users/:id/collection">收藏中心</router-link>
          </li>

          <li>
            <router-link to="/users/:id/feedback">问题反馈</router-link>
          </li>
        </ul>
      </div>


    </el-aside>

    <el-container>
      <el-header style="text-align: center; font-size: 12px; height: 80px">
        <div class="toolbar">
          <span class="span1">个人中心</span>

          <el-dropdown style="margin-right: 30px; margin-top: 1px">
            <el-icon size="30px">
              <setting/>
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-dropdown style="margin-right: 100px; margin-top: 1px">
            <el-icon size="30px">
              <bell/>
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="openhelp">帮助</el-dropdown-item>

              </el-dropdown-menu>
            </template>
          </el-dropdown>


        </div>


      </el-header>

      <el-main class="el-main-1">
        <router-view/>

      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import {Setting, Bell} from '@element-plus/icons-vue'
import {ElMessageBox} from 'element-plus'


export default {
  name: "Users_index",
  components: {
    Setting,
    Bell
  },
  methods: {
    openhelp() {
      ElMessageBox.alert('This is a message', 'Title', {
            confirmButtonText: 'OK',

          }
      )
    },
    tourl(name) {
      this.$router.push({path: name});
    }
  }
}

</script>

<style scoped>

.aside ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.aside li {
  display: block;
  width: 280px;
  height: 60px;

  background-position: 0 -61px;
  margin-bottom: 20px;
}

.aside a {
  text-align: center;
  display: block;
  font-size: 24px;
  font-family: "新宋体";
  line-height: 63px;
}

.aside li on,  .aside li:hover {
  background-position: 0 0;
}

.aside li on a,  .aside li:hover a {
  color: #cf4a53;
}



.el-main-1 {
  background: url(../../images2/ziybj.jpg) top center;
}


.span1 {
  margin-right: 980px;
  font-size: 40px;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: #b3c0d1 !important;
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  width: 319px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

</style>