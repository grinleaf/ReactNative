/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';

//* 처음 실행되는 컴포넌트를 지정하는 메소드 (디폴트)
//첫번째 파라미터 : 앱이름
//두번째 파라미터 : 처음 실행될 컴포넌트를 리턴하는 콜백함수 지정
//AppRegistry.registerComponent(appName, () => App);

//* 처음 실행될 화면을 직접 지정해보기 : MyApp.js (원래는 jsx 파일(js+xml)이지만, .js로 만드는 추세! 그리고 .js도 생략함)
AppRegistry.registerComponent(appName, ()=> MyApp);