// 小程序所有请求都是异步的 沒辦法values = xxx 來實現
// 小程序沒有DOM的思維~ 只有數據綁定的思維
import { Base } from '../utils/base.js';
class Home extends Base {
  // ES6定义构造函数
  constructor() {
    super();
  }
  getBannerData(id, callback) {
    var params = {
      url: 'banner/' + id,
      sCallback: function (res) {
        callback && callback(res.items);
      }
    }
    this.request(params);
  }
  getThemeData(callback) {
    var params = {
      url: 'theme?ids=1,2,3',
      sCallback: function (res) {
        callback && callback(res);
      }
    }
    this.request(params);
  }
  // 商品列表
  getProductsData(callback) {
    var params = {
      url: 'product/recent',
      sCallback: function (res) {
        callback && callback(res);
      }
    }
    this.request(params);
  }



}
// 要引用类，必须输出类
export { Home };
