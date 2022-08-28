import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

export default {
  // module화되어 사용될 수 있다를 명시적으로 나타냄
  namespaced: true,
  // data
  state: () => ({
    movies: []
  }),
  // computed
  getters: {},
  // methods
  mutations: { // 변이
    updateState(state, payload) {
      // 객체데이터의 속성의 이름을 가지고 새로운 배열데이터를 만듬
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  actions: { // 비동기
    async searchMovies({state, commit}, payload) {
      const {title, type, number, year} = payload;
      const OMDB_API_KEY = '7035c60c';

      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`);
      const {Search, totalResults} = res.data;
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID')
      })
      console.log(totalResults);
      console.log(typeof totalResults);

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)

      // 추가 요청
      if(pageLength > 1) {
        for(let page = 2; page <= pageLength; page += 1) {
          if (page > (number / 10)) break;

          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`);
          const {Search} = res.data;
          commit('updateState', {
            movies: [
              ...state.movies,
              ..._uniqBy(Search)
            ]
          })
        }
      }
    }
  }
}