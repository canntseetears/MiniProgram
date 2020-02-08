//import list from '../data/list'
//import axios from 'axios';

export default {
  getPic(context){
    wx.request({
      url:'https://gitee.com/colorss/json/raw/master/commic.json',
      success(data){
        context.commit('updateData',data)
        //console.log(data.data);
        
      }
    })
    /* axios.get('https://gitee.com/colorss/json/raw/master/commic.json').then(res=>{
      //console.log(res);
      context.commit('updateData',res)
    }) */
    /* return new Promise((resolve,reject)=>{
      context.commit('updateData',list)
    }).then(res=>{
    })
  } */
}
}