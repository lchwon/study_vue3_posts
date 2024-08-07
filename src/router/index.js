//라우트 정보를 담고 있는 라우터 객체를 생성
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

//router설정
const routes = [
	{
		path: '/', //root로 들어왔을 때
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about', //about로 들어왔을 때
		name: 'About',
		component: AboutView,
	},
];

//라우터 객체 생성
const router = createRouter({
	history: createWebHistory('/'),
	routes, // 키와 값이 같으면 값을 빼고 적어도 됨
});

//생선된 router 객체를 외부에서 사용할 수 있도록 export
export default router;
