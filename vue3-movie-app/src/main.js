import { createApp } from 'vue';
import App from './App';
import router from './routes'; // index 파일을 가져올 경우 파일명 생략 가능
import store from './store';
import loadImage from './plugins/loadImage';

createApp(App)
  // .use() vue.js 프로젝트에 연결할 플러그인, 라이브러리를 지정하는 메소드
  .use(router)
  .use(store)
  .use(loadImage)
  .mount('#app');