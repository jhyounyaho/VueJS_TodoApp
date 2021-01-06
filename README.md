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

## Todo App 리펙토링 과정
### 1. 각 component 에서 데이터 관리               
- data              
- computed              
- methods               

### 2. App.vue에서 데이터 관리        
- props: 부모 > 자식                         
- $emit: 자식 > 부모               

### 3. Vuex를 사용하여 store.js 에서 데이터 관리
- state               
Vue의 data 와 같은 역할               
this.$store.sate.message 로 접근               
- getters               
Vue의 computed 와 같은 역할               
this.$store.getters.getNumber 로 접근               
- mutation               
vue의 methods 와 같은 역할               
this.$store.commit('printNumber') 인자값 없을 때               
this.$store.commit('printNumber', 20) 인자값 1개일때              
this.$store.commit('printNumber', { add, 20 }) 인자값 n개일 때 obj 로 보내준다.               
- actions              
비동기 처리, 데이터요청        

### 4. Vuex - helper 함수를 사용하여 store.js에서 데이터 관리               
- state -> mapState              
- getters -> mapGetters              
- mutations -> mapMutations              
...mapMutaions([ 'clickBtn', 'addNumber' ])              
- actions -> mapActions               
              
### 5. modules/todoApp.js에서 모듈로 데이터를 가져와서 store.js에서 데이터 관리       
- import
- export 

## Todo App 리팩토링 전, 후 구조
데이터를 Container Component 에서 관리, 변경해야 유지보수하기 쉽다.             
![vuejs_todoapp_before](https://user-images.githubusercontent.com/42309919/103492849-2db46480-4e71-11eb-84ae-dcbbefb8d58d.PNG)
![vuejs_todoapp_after](https://user-images.githubusercontent.com/42309919/103492850-2e4cfb00-4e71-11eb-9b40-85e1a609a808.PNG)

## Todo App 주요기능 
### addOneItem
TodoInput 에서 할 일 입력 후 enter or + 클릭시 생성 기능               
+) 빈칸 입력 시 모달 창에서 '내용을 입력하세요' 노출                 
![todoapp_addOneItem](https://user-images.githubusercontent.com/42309919/103766124-a1b55f00-5061-11eb-8e16-273825e643a5.PNG)
![todoapp_modal](https://user-images.githubusercontent.com/42309919/103766267-e17c4680-5061-11eb-99a4-09e88ec11b62.PNG)

### toggleOneItem 
TodoList 에서 할 일 목록 완료 true /미완료 false 변경 기능      
![todoapp_toggleOneItem](https://user-images.githubusercontent.com/42309919/103766129-a24df580-5061-11eb-895a-70e6ae23ef3b.PNG)

### removeOneItem 
TodoList 에서 할 일 목록 삭제 기능 
![todoapp_removeOneItem](https://user-images.githubusercontent.com/42309919/103766130-a2e68c00-5061-11eb-974a-58b330893695.PNG)

### clearAllItems
TodoFooter 에서 'clear all' 버튼 클릭시 전체 리스트 삭제 기능 
![todoapp_clearAllItems](https://user-images.githubusercontent.com/42309919/103766132-a2e68c00-5061-11eb-96ab-6271a75a22b0.PNG)

## 완강은 즐거워 :D 
![vuejs 중급 강좌 수강증](https://user-images.githubusercontent.com/42309919/103765520-a4638480-5060-11eb-8138-3b60b48638a8.PNG)

