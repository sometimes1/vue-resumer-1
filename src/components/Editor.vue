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
            <li v-for="i in [0,1,2,3,4,5]"  v-bind:class="{active: currentTab === i}">
            Tab {{i+1}}
            </li>
            <!--<li v-bind:class="{active: currentTab === 0}">tab 1</li>
            <li v-bind:class="{active: currentTab === 1}">tab 2</li>
            <li v-bind:class="{active: currentTab === 2}">tab 3</li>
            <li v-bind:class="{active: currentTab === 3}">tab 4</li>
            <li v-bind:class="{active: currentTab === 4}">tab 5</li>
            <li v-bind:class="{active: currentTab === 5}">tab 6</li>
            -->
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
            icons:['shenfengzheng4','shubao','shu','xiangmu','jiangbei','dianhua']
        }
    }
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
    > .panes{
        > li{
            display: none;
            &.active{
                display:block;
            }
        }
    }
}
</style>

