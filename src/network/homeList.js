import request from './request';
export function getListPi() {
  return request({
    url:'/commic.json'
  });
}
export function getListPic(){
  console.log('homelist');
  
}