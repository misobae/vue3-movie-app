import { createStore } from 'vuex'
import movie from './movie'
import about from './about'

export default createStore({
  modules: {
    movie, // 데이터와 속성 이름이 같으면 데이터 이름 생략 가능
    about
  }
})