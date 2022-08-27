export default {
  // module화되어 사용될 수 있다를 명시적으로 나타냄
  namespaced: true,
  // data
  state: () => ({
    movies: []
  }),
  // computed
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imbdID)
    }
  },
  // methods
  mutations: { // 변이
    resetMovies(state) {
      state.movies = []
    }
  },
  actions: { // 비동기
    searchMovies() {
      
    }
  }
}