<template>
    <div id="topbar">
        <div class="logo">
            Resumer
        </div>
        <div class="actions">
            <el-button type="primary" href="#" @click.prevent="signUpDialogVisible = true">注册</el-button>
            <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                我就是 slot 内容
            </MyDialog>
            <el-button>登录</el-button>
            <el-button type="primary">保存</el-button>
            <el-button v-on:click="preview">预览</el-button>
        </div>
    </div>
</template>


<script>
import MyDialog from './MyDialog'
export default {
    name:'Topbar',
    data(){
        return {
            signUpDialogVisible:false
        }
    },
    components:{
        MyDialog
    },
    methods:{
        preview(){
            this.$emit('preview')
        }
    }
}
</script>

<style lang="scss">
#topbar {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    font-size: 20px;
    text-align: center;
}
.button{ // 由于加了 scoped， 所以这个 button 选择器只在本组件内有效，不会影响其他组件
      width:72px;
      height:32px;
      border: none;
      cursor: pointer;
      font-size: 18px; // 设计稿上是 20px，看起来太大，就改成 18px 了
      background:#ddd;
      color: #222;
     text-decoration: none;
     display: inline-flex;
     justify-content: center;
     align-items: center;
     vertical-align: middle;
      &:hover{
        box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
      }
}

</style>