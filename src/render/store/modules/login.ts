import { makeAutoObservable } from "mobx";

// 创建的是实例对象
class Login {
  constructor() {
    makeAutoObservable(this);
  }
  /**
   * @description 商品列表数据
   */
  goodList = [];

  /**
   * @description 是否绑定手机号
   */
  isPhone = false;
}
export default new Login();
