<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">{{ form.createdAt }}</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	id: Number,
});

const router = useRouter();
//const id = route.params.id;

//'ref'의 장점은 객체 할당이 가능하다는 점 그리고 일관성(?)이 있다.
// 단점은 form.value.title , form.value.conent 계속해서 value를 붙여야함
const form = ref({});

//'reactive'의 장단점은 'ref'의 반대다.
//let form = reactive({});

const fetchPost = () => {
	const data = getPostById(props.id);
	//ref
	form.value = { ...data };

	//reactive
	//form.title = data.title;
	//form.content = data.content;
};

fetchPost();

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
