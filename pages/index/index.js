//引入
import request from '../../utils/request.js';
Page({
  data: {
    //轮播图
    banners: [],
    //分类
    unlike: [],
    //楼层数据
    louceng: []
  },
  onLoad() {
    request({
      url: '/home/swiperdata'
    }).then(res => {
      const { message } = res.data
      this.setData({
        banners: message
      })
    }),
      request({
        url: '/home/catitems'
      }).then(res => {
        const { message } = res.data
        const newNav = message.map((v, i) => {
          //分类
          if (i === 0) {
            v.url = '/pages/category/index'
          }
          return v
        })
        this.setData({
          unlike: newNav
        })
      })
    request({
      url: '/home/floordata'
    }).then(res => {
     const {message} =res.data
     console.log(message)
     this.setData({
       louceng:message
     })
     console.log(this.data.louceng)
    })
  }
})
