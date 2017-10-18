<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
            <!--<li v-for="i in [0,1,2,3,4,5]"  v-bind:class="{active: currentTab === i}">
                    Tab {{i+1}}
                    </li>-->
            <li v-bind:class="{active: currentTab === 0}">
                <ProfileEditor v-bind:profile="profile"/>    
            </li>
            <li v-bind:class="{active: currentTab === 1}">
                <WorkHistoryEditor v-bind:workHistory="workHistory"/>
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

import ProfileEditor from './ProfileEditor'
import WorkHistoryEditor from './WorkHistoryEditor'
export default {
    components:{ProfileEditor,WorkHistoryEditor},
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

