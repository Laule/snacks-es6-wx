import { Config } from '../utils/config.js';
import { Token } from '../utils/token.js';
class Base {
  constructor() {
    this.baseRequestUrl = Config.resUrl;
  }
  //http 请求类, 当noRefech为true时，不做未授权重试机制
  request(params, noRefetch) {
    var that = this;
    var url = this.baseRequestUrl + params.url;
    if (!params.type) {
      params.type = 'GET';
    }
     /*不需要再次组装地址*/
    wx.request({
      url: url,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      method: params.type,
      success: function (res) {
        // if (params.sCallBack)
        // {
        //   params.sCallBack(res);
        // }
        // 等同
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          params.sCallback && params.sCallback(res.data);
        }
        else {
          if (code == '401') {
            if (!noRefetch)
            {
              that._refetch(params);
            }
            
          }
          if (noRefetch)
          {
            params.eCallback && params.eCallback(res.data);  
          }
          
        }
      },
      fail: function (res) {
        console.log(res);

      },
      complete: function (res) { },
    })
  }
  _refetch(params) {
    var token = new Token();
    token.getTokenFromServer((token) => {
      // 在这里可以做一个计数器，到达一定次数就不请求。
      this.request(params,true);
    });
  }

  // 獲得元素上綁定的值
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  }


}
export { Base }