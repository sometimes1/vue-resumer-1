<template>
    <div id="preview">
        <h1>{{resume.profile.name}}</h1>
        <p>{{resume.profile.city}}</p>
        <p>{{resume.profile.birth}}</p>
            <section v-if="filter(resume.workHistory).length > 0">
                <h2>工作经历</h2>
                <ul>
                    <li v-for="work in filter(resume.workHistory)">
                        <p>公司：<span>{{work.company}}</span></p>
                        <p>工作内容：<span>{{work.content}}</span></p>
                    </li>
                </ul>
            </section>
            <section v-if="filter(resume.studyHistory).length > 0">
                <h2>学习经历</h2>
                <ul>
                    <li v-for="study in filter(resume.studyHistory)">
                        <p>学校：<span>{{study.school}}</span></p>
                        <p>时间：<span>{{study.duration}}</span></p>
                        <p>学位：<span>{{study.degree}}</span></p>
                    </li>
                </ul>
            </section>
            <section v-if="filter(resume.projects).length > 0">
                <h2>项目经历</h2>
                <ul>
                    <li v-for="project in filter(resume.projects)">
                        <p>项目：<span>{{project.name}}</span></p>
                        <p>项目内容：<span>{{project.content}}</span></p>
                    </li>
                </ul>
            </section>
            
            <section v-if="filter(resume.wards).length > 0">
                <h2>荣获奖励</h2>
                <ul>
                    <li v-for="wards in filter(resume.wards)">
                        <p>奖励详情：<span>{{wards.name}}</span></p>
                    </li>
                </ul>
            </section>
            <section id="contact">
                <p>{{resume.contacts.qq}}</p>
                <p>{{resume.contacts.email}}</p>
                <p>{{resume.contacts.phone}}</p>
            </section>

    </div>
</template>


<script>
export default {
  props:['resume'],
  methods:{
      filter(array){//找出非空对象
          return array.filter(item=> !this.isEmpty(item))
      },
      isEmpty(object){//只要有一个value不是false就返回false
          let empty = true
          for(let key in object){
              if(object[key]){
                  empty = false
                  break
              }
          }
          return empty
      }
  }
}
</script>

<style lang="scss">
#preview {
    padding:30px 40px;
    position: relative;
    >h1{
        margin-bottom:20px;
    }
    >p {
        font-size: 16px;
        font-family: bold;
        line-height: 20px;
    }
    >#contact{
        position: absolute;
        top:30px;
        right: 0;
        >p{
            width:200px;
        }
    }
        >section{
            >h2 {
            margin: 20px 0;
            }
             p{
                font-size:16px;
                line-height: 25px;
                >span{
                    font-weight:lighter;
                }
            }
            li{
                border-bottom:1px solid #c9c9c9;
                margin-bottom:10px;
            }
        }
}
</style>