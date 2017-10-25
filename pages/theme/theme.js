// pages/theme/theme.js
import { Theme } from 'theme-model.js';
var theme = new Theme(); //实例化  主题列表对象
Page({

  /**
   * 页面的初始数据
   */

  
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var name = options.name;
    this.data.id = id;
    this.data.name = name;
    this._loadData();
  },
  _loadData:function()
  {
    theme.getProductData(this.data.id,(data)=>{
      this.setData({
        themeInfo:data
      })
    })
  }
})