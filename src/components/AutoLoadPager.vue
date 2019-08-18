<template>
    <!-- 这是一个继承了Pager的界面  包含分页参数 并且能够根据注入的api自动执行list分页方法-->
</template>

<script>
    import Pager from "./Pager";

    export default {
        name: "AutoLoadPager",
        extends: Pager,
        provide: function () {
            return {
                context: {}
            }
        },
        data() {
            return {
                context: {}
            }
        },
        methods:{
          init(){
              let params = this.context.params || {}
              this.context.api.list(params).then(res => {
                  this.items = res.data
                  // 执行callback
                  if (this.context.callback) {
                      this.context.callback()
                  }
                  // console.log("查询结果", this.items)
              })
          }
        },
        mounted() {
            this.init()


        }
    }
</script>

<style scoped>

</style>