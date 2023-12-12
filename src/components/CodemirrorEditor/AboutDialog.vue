<template>
  <el-dialog
    title="关于"
    class="about__dialog"
    :visible="visible"
    @close="$emit('close')"
    width="30%"
    center
  >
    <div style="text-align: center">
      <h3>一款高度简洁的微信 Markdown 编辑器</h3>
      <p>扫码关注公众号 京网文，原创技术文章第一时间推送！</p>
      <img
        src="http://cdn.qn.cdn.belme.cn/%E4%BA%AC%E7%BD%91%E6%96%87/qrcode_for_gh_cd04d4f6c875_258.jpg"
        style="width: 40%"
      />
    </div>
    <template slot="footer">
      
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onRedirect(url) {
      window.open(url)
    },
  },
}
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  min-width: 420px;
}
</style>
