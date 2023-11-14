<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <el-avatar shape="square" :size="size" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
          </el-col>
          <el-col :span="20">
            <!-- hidden-xs-only - 当视口在 xs 尺寸时隐藏 -->
            <el-menu :default-active="activeIndex" class="el-menu-demo hidden-xs-only" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">Processing Center</el-menu-item>
              <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                  <template #title>item four</template>
                  <el-menu-item index="2-4-1">item one</el-menu-item>
                  <el-menu-item index="2-4-2">item two</el-menu-item>
                  <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="3" disabled>Info</el-menu-item>
              <el-menu-item index="4">Orders</el-menu-item>
            </el-menu>
            <!--  hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏-->
            <div class="hidden-sm-and-up">{{ userStore.name }}</div>
          </el-col>
          <el-col :span="2">
            <el-avatar shape="square" :fit="fit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          /></el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :xs="24" :sm="12" :lg="6"><div class="box">1</div></el-col>
          <el-col :xs="24" :sm="12" :lg="6"><div class="box">2</div></el-col>
          <el-col :xs="24" :sm="12" :lg="6"><div class="box">3</div></el-col>
          <el-col :xs="24" :sm="12" :lg="6"><div class="box">4</div></el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import { useUserStore } from 'store/user.js'
  const activeIndex = ref(`1`)
  const userStore = useUserStore()
  const handleSelect = (key, keyPath) => {}
</script>

<style scoped lang="scss">
  .el-header {
    padding: 0;
  }

  .el-main {
    padding: 0;
  }

  :deep(.el-menu--horizontal.el-menu) {
    border-bottom: none;
  }

  .box {
    border: 1px solid red;
    margin-left: 10px;
    padding: 10px;
    font-weight: bold;
    color: var(--el-text-color-regular);
    background: var(--el-bg-color-overlay);
    border-color: var(--el-border-color);
    box-shadow: var(--el-box-shadow-dark);
  }
</style>
