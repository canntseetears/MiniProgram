import list from '../data/list'
export default {
  getPic(context){
    return new Promise((resolve,reject)=>{
      context.commit('updateData',list)
    })
  }
}