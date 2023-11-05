module.exports = {
  title: '名为Tom的Cat',
  // description: 'Just playing around',
  themeConfig: {
    // logo: '/assets/img/zhifubao.png',
    // navbar: false, // 禁用导航栏
    // sidebar: "auto",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', items: [
        {text: "Java基础", link: "/Java/Basis/"},
        {text: "常用类", link: "/Java/Object/"},
        {text: "集合框架", link: "/Java/Collection/"},
        {text: "IO", link: "/Java/IO/"},
        {text: "网络编程", link: "/Java/Network/"},
        {text: "JVM", link: "/Java/JVM/"},
        {text: "String", link: "/Java/String/"},
        {text: "并发编程", link: "/Java/Concurrent/"}
      ] },
      {text: "新特性", items:[
        {text: "函数式编程", link: "/Identity/Function/"}
      ]},
      {text: "JavaWeb", items:[
        {text: "JavaWeb基础", link: "/JavaWeb/Basis/"}
      ]},
      { text: '框架', items: [
        {text: "Mybatis", link: "/Framework/Mybatis/"},
        {text: "MybatisPlus", link: "/Framework/MybatisPlus/"},
        {text: "Spring", link: "/Framework/Spring/"},
        {text: "SpringMVC", link: "/Framework/SpringMVC/"},
        {text: "SpringBoot", link: "/Framework/SpringBoot/"},
        {text: "SpringCloud", link: "/Framework/SpringCloud/"},
      ] },
      { text: '核心技术', items: [
        {text: "数据结构与算法", link: "/Core/Algorithm/"},
        {text: "设计模式", link: "/Core/Design/"}
      ] },

      { text: '项目管理', items: [
        {text: "Maven", link: "/Manage/Maven/"},
        {text: "Git", link: "/Manage/Git/"}
      ] },

      { text: '数据库', items: [
        {text: "MySQL", link: "/SQL/Mysql/"}
      ] },
      { text: '运维', items: [
        {text: "Linux基础", link: "/Operation/Linux/"},
        {text: "环境搭建", link: "/Operation/Building/"},
        {text: "部署", link: "/Operation/Deploy/"}
      ] },
      
      { text: 'GitHub', link: 'https://github.com/TheThunderCalls/thethundercalls.github.io'},
    ]
  }
  
}