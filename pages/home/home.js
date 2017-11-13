// pages/home/home.js
import { Home } from 'home-model.js';
var home = new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: false
  },
  onLoad: function () {
    this._loadData();
  },
  _loadData: function () {
    var that = this;
    var id = 1;
    // (res)是callBack 的匿名方法使用
    home.getBannerData(id, (res) => {
      console.log(res);
      that.setData({
        'bannerArr': res
      });
    });

    // 精選主題
    home.getThemeData((res) => {
      console.log(res);
      that.setData({
        'themeArr': res
      });
    });

    // 最新單品
    home.getProductsData((res) => {
      console.log(res);
      that.setData({
        'productsArr': res,
        loadingHidden: true
      });
    });

  },
  // 商品详情
  onProductsItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    console.log(id);
    wx.navigateTo({
      url: '../product/product?id=' + id,
    })
  },
  // 主题列表
  onThemeItemTap: function (event) {
    var id = home.getDataSet(event, 'id'),
      name = home.getDataSet(event, 'name');
    console.log(id, name);
    wx.navigateTo({
      url: '../theme/theme?id=' + id + "&name=" + name,
    })
  },
  callBack: function (res) {
    console.log(res);
  },
  /*下拉刷新页面*/
  onPullDownRefresh: function () {
    this._loadData(() => {
      wx.stopPullDownRefresh()
    });
  },
  //分享效果
  onShareAppMessage: function () {
    return {
      title: '赶圩网 一应俱全',
      path: 'pages/home/home'
    }
  }
})