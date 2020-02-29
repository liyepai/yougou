// pages/category/index.js
import request from '../../utils/request.js'
Page({
  data: {
    indexs: 0,
    allList: []
  },
  onLoad() {
    request({
      url: '/categories'
    }).then(res => {
      this.setData({
        allList: res.data.message
      })
      console.log(this.data.allList)

    })
  },

  dianji(e) {
    this.setData({
      indexs: e.currentTarget.dataset.index
    })

  }
})