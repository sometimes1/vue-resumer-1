<template>
    <div id="preview">
        <h1>{{resume.profile.name || '请填写姓名'}}</h1>
        <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生年月'}}</p>
        <hr>
        <section v-if="filter(resume.workHistory).length > 0">
            <h2>工作经历</h2>
            <ul>
                <li v-for="work in filter(resume.workHistory)">
                    {{work.company}} {{work.content}}
                </li>
            </ul>
        </section>
        <hr>
        <section v-if="filter(resume.studyHistory).length > 0">
            <h2>学习经历</h2>
            <ul>
                <li v-for="study in filter(resume.studyHistory)">
                    {{study.school}} {{study.duration}} {{study.degree}}
                </li>
            </ul>
        </section>
        <hr>
        <section v-if="filter(resume.projects).length > 0">
            <h2>项目经历</h2>
            <ul>
                <li v-for="project in filter(resume.projects)">
                    {{project.name}} {{project.content}}
                </li>
            </ul>
        </section>
        <hr>
        <section v-if="filter(resume.wards).length > 0">
            <h2>获得奖励</h2>
            <ul>
                <li v-for="wards in filter(resume.wards)">
                    {{wards.name}} {{wards.content}}
                </li>
            </ul>
        </section>
        <hr>
        <section v-if="filter(resume.contacts).length > 0">
            <h2>联系方式</h2>
            <p>{{resume.contacts.qq || '请填写QQ'}}</p>
            <p>{{resume.contacts.wechat || '请填写微信'}}</p>
            <p>{{resume.contacts.email || '请填写邮箱'}}</p>
            <p>{{resume.contacts.phone || '请填写手机'}}</p>
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

<style>
#preview {}
</style>