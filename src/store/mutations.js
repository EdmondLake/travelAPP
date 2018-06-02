export default {
  changeCity (state,city){
    state.city = city
    // 通过localStorage做到本地存储，刷新之后仍然显示上个被选中城市
    try{
      localStorage.city = city
    } catch (e) {}
  }
}
