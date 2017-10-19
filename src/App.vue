<template>
  <div id="app" v-bind:class="{previewMode}">
    <Topbar class="topbar" v-on:preview="preview" />
    <main>
      <Editor v-bind:resume="resume" class="editor" />
      <Preview v-bind:resume="resume" class="preview" />
    </main>
    <el-button id="editPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
//局部组件
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  data(){
      return{
        previewMode: false,
        resume:{
          profile:{
                name: '',
                city: '',
                birth: ''
            },
            workHistory:[
                {
                    company:'',
                    content:''
                }
            ],
            studyHistory:[
                {school:'',duration:'',degree:''}
            ],
            projects:[
                {name:'',content:''}
            ],
            wards:[
                {name:''}
            ],
            contacts:[{
                qq:'',email:'',phone:''
            }]
        }
      }
    },
    methods:{
      exitPreview(){
        this.previewMode = false
      },
      preview(){
        this.previewMode = true
      }
    },
  components:{
    Topbar,Editor,Preview
  },
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.topbar {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px hsla(0, 0, 0, .5);
}

#editPreview {
  display: none;
}

.previewMode>#topbar {
  display: none;
}

.previewMode #editor {
  display: none;
}

.previewMode #preview {
  max-width: 800px;
  margin: 32px auto;
}

.previewMode #editPreview {
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

main {
  display: flex;
  flex: 1;
  background: #ddd;
  padding: 0 200px;
  >.editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: white;
    box-shadow: 0 0 3px hsla(0, 0, 0, .5);
    border-radius: 4px;
    overflow: hidden;
  }
  >.preview {
    width:800px;
    margin: 16px 8px 16px 16px;
    background: white;
    box-shadow: 0 0 3px hsla(0, 0, 0, .5);
    border-radius: 4px;
  }
}
</style>
