//라우트 정보를 담고 있는 라우터 객체를 생성
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

//게시판
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

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

	//게시판
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},

	// ':' <- 동적 라우팅이라도하며 여러 개의 URL을 하나의 페이지 컴포넌트에 맵핑하고 싶을때
	// 표현하는 표현 방식이다.
	// 이 세미콜론은 파라미터라고해서 라우트 객체에 params로 받을 수 있다. -> {{ $route.params }}
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},

	//404 Not found
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},

	//중첩 Router
	{
		path: '/nested',
		name: 'NestedView',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHomeView,
			},
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
];

//라우터 객체 생성
const router = createRouter({
	history: createWebHistory('/'),
	routes, // 키와 값이 같으면 값을 빼고 적어도 됨
});

//생선된 router 객체를 외부에서 사용할 수 있도록 export
export default router;
