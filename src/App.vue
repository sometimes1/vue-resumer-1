<template>
  <div id="app">
    <Topbar />
    <Editor />
    <Preview />
  </div>
</template>

<script>
//局部组件
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  components:{
    Topbar,Editor,Preview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
