// pages/home/home.js
import { Home } from 'home-model.js';
var home = new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function () {
    this._loadData();
  },
  _loadData: function () {
    var id = 1;
    // (res)是callBack 的匿名方法使用
    home.getBannerData(id, (res) => {
      console.log(res);
      this.setData({
        'bannerArr': res
      });
    });

    // 精選主題
    home.getThemeData((res) => {
      console.log(res);
      this.setData({
        'themeArr': res
      });
    });

    // 最新單品
    home.getProductsData((res) => {
      console.log(res);
      this.setData({
        'productsArr': res
      });
    });

  },

  onProductsItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    console.log(id);
    wx.navigateTo({
      url: '../product/product?id=' + id,
    })
  },
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
  }
})