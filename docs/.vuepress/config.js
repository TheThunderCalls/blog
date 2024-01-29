module.exports = {
  title: '名为Tom的Cat',
  // description: 'Just playing around',
  themeConfig: {
    // logo: '/assets/img/zhifubao.png',
    // navbar: false, // 禁用导航栏
    // sidebar: "auto",
    // nav也可分组，则为三层
    nav: [
      { text: '主页', link: '/' },
      // 展示 三层分组
      { text: 'Java', items: [
        {
          text: "基础", 
          items: [
            {text: "Java基础", link: "/Java/Basis/Basis/"},
            {text: "面向对象", link: "/Java/Basis/Object/"},
            {text: "常用类API", link: "/Java/Basis/CommonClass/"},
            {text: "枚举", link: "/Java/Basis/Enumeration/"},
            {text: "集合框架", link: "/Java/Basis/Collection/"},
            {text: "Java机制", link: "/Java/Basis/Mechanism/"},
            {text: "网络编程", link: "/Java/Basis/Network/"}
          ]
        },
        {
          text: "IO流",
          items: [
            {text: "IO", link: "/Java/IO/"}
          ]
        },
        {
          text: "并发编程",
          items: [
            {text: "并发编程", link: "/Java/Concurrent/"}
          ]
        },
        {
          text: "JVM",
          items: [
            {text: "JVM", link: "/Java/JVM/"}
          ]
        },
        {
          text: "新特性",
          items: [
            {text: "函数式编程", link: "/Java/Identity/Function/"},
            {text: "Stream流", link: "/Java/Identity/Stream/"}
          ]
        }
      ] },
      
      {text: "JavaWeb", items:[
        {text: "基础", link: "/JavaWeb/Basis/"}
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
      { text: '开发工具', items: [
        {text: "IDEA", link: "/Tool/Idea/"},
        {text: "GIT", link: "/Tool/Git/"}
      ] },
      { text: '前端', items: [
        {text: "VuePress", link: "/Front/VuePress/"}
      ] },
      
      { text: 'GitHub', link: 'https://github.com/TheThunderCalls/thethundercalls.github.io'},
    ],

    //侧边栏分组 + 多个侧边栏
    sidebar:{
      // 多个：以/Java/Basis/开头的，都显示该侧边栏
      '/Java/Basis/Basis/':[
        //分组： 分为不同组
        "",
        "Operator",
        "ExecutionProcess",
        "Verification"
      ],
      '/Java/Basis/Object/': [
        "",
        "Clazz",
        "Feature",
        "Abstract",
        "Interface",
        "InnerClass"
      ],
      '/Java/Basis/CommonClass/': [
        "",
        "Basis",
        "BasicDataTypePackagingClass",
        "String",
        "Array"
        
      ],
      '/Java/Basis/Mechanism/': [
        "",
        "Exception",
        "Generics",
        "Annotation",
        "Serialize",
        "Reflect",
        "Proxy"
      ],
      "/Java/Basis/Collection/": [
        "",
        "Collection",
        "Map"
      ]
        // "/Java/Basis/Operator/",
        // "/Java/Basis/ExecutionPress/",
        

        // {
        //   title: "Java基础",
        //   sidebarDepth: 1,    //侧边栏深度
        //   children: [
        //     // 可以将不同的md文件写在同一个目录下
        //     {
        //       title: "目录",
        //       path: "/Java/Basis/"
        //     },
        //     {
        //       title: "面向对象",
        //       path: "/Java/Basis/Object"
        //     }
        //   ]
        // }
        // {
        //   title: "进阶知识",
        //   sidebarDepth: 2,    //侧边栏深度
        //   children: [
        //     {
        //       title: "并发编程",
        //       path: "/Java/Concurrent/"
        //     },
        //     {
        //       title: "JVM",
        //       path: "/Java/JVM/"
        //     }
        //   ]
        // }

    }
  }
  
}