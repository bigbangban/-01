<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      //   this.$router.push('/login')
      //   格式已经处理 双引号会自动变成单引号  分号会自动清除
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
