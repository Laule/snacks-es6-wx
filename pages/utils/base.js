import { Config } from '../utils/config.js';

class Base {
  constructor() {
    this.baseRequestUrl = Config.resUrl;
  }
  request(params) {
    var url = this.baseRequestUrl + params.url;
    if (!params.type)
    {
      params.type = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      header: { 
        'content-type':'application/json',
        'token':wx.getStorageSync('token')
      },
      method: params.type,
      success: function (res) {
        // if (params.sCallBack)
        // {
        //   params.sCallBack(res);
        // }
        // 等同
        params.sCallback && params.sCallback(res.data);
       },
      fail: function (res) { 
        console.log(res);

      },
      complete: function (res) { },
    })
  }
  // 獲得元素上綁定的值
   getDataSet(event,key)
   {
     return event.currentTarget.dataset[key];
   }   


}
export { Base }