# Vue.js로 만드는 TODO App
강의명: [인프런] Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex                  
강사: 캡틴판교                  
skill: JavaScript, Vue.js, ES6, Vuex     

#### 강의에서 다루는 내용
1. Vue CLI를 이용한 프로젝트 구성 방법              
2. 컴포넌트 기반 설계 방법              
3. 컴포넌트 구조화 및 컴포넌트 통신 방법              
4. ES6를 이용한 효율적이고 간결한 Vue 코딩 방법              
5. Vuex를 이용한 상태 관리의 이해 및 적용 방법               

## Todo App Component

### Container Component

데이터 관리, 변경

App.vue

### Presentational Component

마크업, UI적으로 표현

TodoHeader.vue           
TodoInput.vue           
TodoList.vue          
TodoFooter.vue              
common/Modal.vue             

## Todo App 리팩토링 전, 후 구조
데이터를 Container Component 에서 관리, 변경해야 유지보수하기 쉽다.             
props: 부모 > 자식                         
$emit: 자식 > 부모              
![vuejs_todoapp_before](https://user-images.githubusercontent.com/42309919/103492849-2db46480-4e71-11eb-84ae-dcbbefb8d58d.PNG)
![vuejs_todoapp_after](https://user-images.githubusercontent.com/42309919/103492850-2e4cfb00-4e71-11eb-9b40-85e1a609a808.PNG)

