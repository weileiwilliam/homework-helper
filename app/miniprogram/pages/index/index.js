//index.js
const app = getApp()

Page({
  data: {
    cardCur: 0,
    anmiaton: '',
    scripts:[
      {
        title: '编程语言',
        children:[
          {
            url: '1',
            name: 'Python'
          }, {
            url: '3',
            name: 'Java'
          }, {
            url: '5',
            name: 'C/C++/C#'
          }
        ]
      }, {
        title: '工程',
        children: [
          {
            url: '4',
            name: 'Web制作'
          }, {
            url: '6',
            name: '小程序制作'
          }, {
            url: '7',
            name: '爬虫'
          }
        ]
      }
    ],
    swiperList: [{
      id: 0,
      url: 'banner1.jpg'
    }, {
      id: 1,
      url: 'banner2.jpg',
    }, {
      id: 2,
      url: 'banner3.jpg'
    }]
  },

  onLoad: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  toggle(e) {
    // var anmiaton = e.currentTarget.dataset.class;
    // var that = this;
    // that.setData({
    //   animation: anmiaton
    // })
    // setTimeout(function () {
    //   that.setData({
    //     animation: ''
    //   })
    // }, 1000)
  }
})
