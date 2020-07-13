module.exports = {
    base:'/animeschedule/',
    title: '番剧放送速查小程序',
    description: '番剧放送速查小程序：查询动漫番剧播放信息，随时随地与朋友分享喜欢的动画',
    head: [
        ['link', { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' }]
    ],
    dest:'./dist',
    themeConfig:{
        logo: '/logo.png',
        sidebarDepth:2,
        displayAllHeaders: true,
        sidebar: [
            ['/','首页'],
            ['/introduction', '功能介绍'],
            ['/action', '操作演示'],
            ['/about', '关于本项目']
        ]
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CHS',
          title: '番剧放送速查小程序',
          description: '番剧放送速查小程序：查询动漫番剧播放信息，随时随地与朋友分享喜欢的动画',
        }
      }
  }