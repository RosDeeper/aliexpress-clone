<template>
	<MainLayout>
		<div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
			<div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
				<div v-if="products" v-for="product in products" :key="product">
					<ProductComponent :product="product"/>
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
	import MainLayout from '~/layouts/MainLayout.vue'

	const products = [
		{ id: 1, title: 'Title 1', discription: 'This is a description', url: 'https://picsum.photos/id/7/300/300', price: 9999 },
		{ id: 2, title: 'Title 2', discription: 'This is a description', url: 'https://picsum.photos/id/77/300/300', price: 9999 },
		{ id: 3, title: 'Title 3', discription: 'This is a description', url: 'https://picsum.photos/id/78/300/300', price: 9999 },
		{ id: 4, title: 'Title 4', discription: 'This is a description', url: 'https://picsum.photos/id/79/300/300', price: 9999 },
		{ id: 5, title: 'Title 5', discription: 'This is a description', url: 'https://picsum.photos/id/72/300/300', price: 9999 },
		{ id: 6, title: 'Title 6', discription: 'This is a description', url: 'https://picsum.photos/id/74/300/300', price: 9999 },
		{ id: 7, title: 'Title 7', discription: 'This is a description', url: 'https://picsum.photos/id/76/300/300', price: 9999 },
	]
</script>

