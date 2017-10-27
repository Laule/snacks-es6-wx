import { Base } from '../../pages/utils/base.js';

class Theme extends Base {
  constructor() {
    super();
  }

  // 獲取主題下的的商品列表
  // 對應主題的id號
  getProductData(id, callback) {
    var params = {
      url: 'theme/' + id ,
      sCallback: function (res) {
        console.log(res);
        callback && callback(res);
      }
    }
    this.request(params);
  }

}

export { Theme }