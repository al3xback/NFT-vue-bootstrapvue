<template>
	<div id="app" class="d-flex flex-column flex-fill">
		<the-header></the-header>
		<the-main></the-main>
		<the-footer></the-footer>
	</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheMain from './components/layout/TheMain.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheMain,
		TheFooter,
	},
};
</script>
