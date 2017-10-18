<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
                <!--笨写法
                            <li v-bind:class="{active: currentTab === 0}" v-on:click="currentTab = 0">
                            <svg class="icon">
                                <use xlink:href="#icon-shenfengzheng4"></use>
                            </svg>
                        </li>
                        <li v-bind:class="{active: currentTab === 1}" v-on:click="currentTab = 1">
                            <svg class="icon">
                                <use xlink:href="#icon-shubao"></use>
                            </svg>
                        </li>
                        <li v-bind:class="{active: currentTab === 2}" v-on:click="currentTab = 2">
                            <svg class="icon">
                                <use xlink:href="#icon-shu"></use>
                            </svg>
                        </li>
                        <li v-bind:class="{active: currentTab === 3}" v-on:click="currentTab = 3">
                            <svg class="icon">
                                <use xlink:href="#icon-xiangmu"></use>
                            </svg>
                        </li>
                        <li v-bind:class="{active: currentTab === 4}" v-on:click="currentTab = 4">
                            <svg class="icon">
                                <use xlink:href="#icon-jiangbei"></use>
                            </svg>
                        </li>
                        <li v-bind:class="{active: currentTab === 5}" v-on:click="currentTab = 5">
                            <svg class="icon">
                                <use xlink:href="#icon-dianhua"></use>
                            </svg>
                        </li>-->
            </ol>
        </nav>
        <ol class="panes">
            <!--<li v-for="i in [0,1,2,3,4,5]"  v-bind:class="{active: currentTab === i}">
                    Tab {{i+1}}
                    </li>-->
            <li v-bind:class="{active: currentTab === 0}">
                <h2>个人信息</h2>
                <el-form>
                    <el-form-item label="名称">
                        <el-input v-model="profile.name"></el-input>
                    </el-form-item>
                    <el-form-item label="城市">
                        <el-input v-model="profile.city"></el-input>
                    </el-form-item>
                    <el-form-item label="出生年月">
                        <el-input v-model="profile.birth"></el-input>
                    </el-form-item>
                </el-form>
            </li>
            <li v-bind:class="{active: currentTab === 1}">
                <h2>工作经历</h2>
                <el-form>
                    <div class="container" v-for="(work,index) in workHistory">
                        <el-form-item label="公司">
                            <el-input v-model="work.company"></el-input>
                        </el-form-item>
                        <el-form-item label="工作内容">
                            <el-input v-model="work.content"></el-input>
                        </el-form-item>
                        <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>
                        <hr>
                    </div>
                    <el-button class="button" style="margin-top:20px" type="primary" v-on:click="addWorkHistory">点击添加</el-button>
                </el-form>
            </li>
            <li v-bind:class="{active: currentTab === 2}">
                <h2>学习经历</h2>
            </li>
            <li v-bind:class="{active: currentTab === 3}">
                <h2>项目经历</h2>
            </li>
            <li v-bind:class="{active: currentTab === 4}">
                <h2>获奖情况</h2>
            </li>
            <li v-bind:class="{active: currentTab === 5}">
                <h2>联系方式</h2>
            </li>
        </ol>
    </div>
</template>

<script>
/*笨写法
export default {
  data(){
      return {
          currentTab:0
      }
  }
}*/
export default {
    data(){
        return {
            currentTab:0,
            icons:['shenfengzheng4','shubao','shu','xiangmu','jiangbei','dianhua'],
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
            ]
        }
    },
    methods:{
        addWorkHistory(){
            this.workHistory.push({company:'',content:''})
        },
        removeWorkHistory(index){
            this.workHistory.splice(index,1)
        }
    },
}
</script>

<style lang="scss">
#editor {
    min-height: 100px;
    display: flex;
    >nav {
        background: black;
        width: 80px;
    }
    nav>ol>li {
        padding: 16px 0;
        text-align: center;
        border: 1px solid white;
        >.icon {
            width: 24px;
            height: 24px;
            fill: white;
        }
        &.active {
            background: white;
            >.icon {
                fill: black;
            }
        }
    }
    >.panes {
        flex: 1;
        .container {
            position: relative;
            .el-icon-circle-close {
                position: absolute;
                top: 0;
                right: 0;
            }
        }
        >li {
            display: none;
            padding: 32px;
            overflow: auto;
            height: 100%;
            &.active {
                display: block;
            }
        }
    }
}
</style>

