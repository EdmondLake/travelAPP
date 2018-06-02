// 为了避免某些浏览器在使用localStorage之后发生异常
let defaultCity = '上海'
try {
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch (e) {}

export default{
  city: defaultCity
}
