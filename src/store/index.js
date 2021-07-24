import Vue from 'vue'
import Vuex from 'vuex'
import jsonData from '../json/default.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: jsonData.default_pack || [],
    total:{
      all: jsonData.total.all || 0,
      income: jsonData.total.income || 0,
      outcome: jsonData.total.outcome || 0
    }
  },
  getters:{
    total:(state) => (type) => {
      return state.total[type]
    }
  },
  mutations: {
    insertData(state,payload){

      // นำ payload เข้า data
      state.data.push(payload)

      // นำจำนวนไปใส่ total ตาม type
      state.total[payload.type] += Number(payload.current)

      // คำนวณ Total
      if(payload.type == 'income'){
        state.total['all'] += Number(payload.current)
      }else{
        state.total['all'] -= Number(payload.current)
      }

    },
  },
  actions: {
  },
  modules: {
  }
})
