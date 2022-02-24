<template>
	<main class="d-flex flex-fill py-4">
		<b-container
			fluid
			class="d-flex flex-fill justify-content-center align-items-center">
			<b-card no-body>
				<b-card-header>
					<div class="card__image">
						<figure>
							<b-card-img-lazy
								:src="
									require('@/assets/images/equilibrium.jpg')
								"
								fluid
								alt=""></b-card-img-lazy>
						</figure>
					</div>
				</b-card-header>

				<b-card-body>
					<h2 class="card__title">
						<b-link>Equilibrium #3429</b-link>
					</h2>
					<p class="card__desc">
						Our Equilibrium collection promotes balance and calm.
					</p>
					<b-row align-v="center" class="card__stats">
						<b-col
							class="card__stat-value d-flex align-items-center">
							<i
								class="icon-ethereum flex-shrink-0 mr-2"
								aria-hidden="true"></i>
							<span>0.041 ETH</span>
						</b-col>
						<b-col
							class="card__stat-countdown d-flex justify-content-end align-items-center">
							<i
								class="icon-clock flex-shrink-0 mr-2"
								aria-hidden="true"></i>
							<span>3 days left</span>
						</b-col>
					</b-row>
				</b-card-body>

				<b-card-footer>
					<b-row no-gutters align-v="center" class="card__author">
						<figure
							class="card__author-avatar flex-shrink-0 mb-0 mr-3">
							<b-avatar
								size="33"
								:src="require('@/assets/images/avatar.png')"
								alt="Avatar"></b-avatar>
						</figure>
						<p class="card__author-text">
							Creation of
							<b-link>Jules Wyvern</b-link>
						</p>
					</b-row>
				</b-card-footer>
			</b-card>
		</b-container>
	</main>
</template>

<style scoped lang="scss">
.card {
	width: 100%;
	max-width: em(350);
	padding: 1.5em;
	background-color: $neutral-2;
	border: 0;
	border-radius: em(15);
	box-shadow: 0 em(25) em(50) rgba(0, 0, 0, 0.0952917);
}

.card__image {
	position: relative;
	height: 0;
	padding-bottom: 100%;
	background-color: $primary-1;
	overflow: hidden;
	border-radius: em(8);
}

.card__image figure {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: 0;
	cursor: pointer;
}

.card__image figure::before,
.card__image figure::after {
	content: '';
	position: absolute;
	inset: 0;
	transition: all 0.3s;
}

.card__image figure::before {
	z-index: 1;
	background: $primary-2-50 url('~@/assets/images/icons/view.svg') no-repeat
		center;
	background-size: em(48);
	opacity: 0;
}

.card__image figure::after {
	z-index: 2;
	width: em(6);
	height: em(52);
	margin: auto;
	background-color: $neutral-4;
	border-radius: em(4);
	opacity: 0;
	transform: rotate(45deg) scale(1, 0);
}

.card__image figure:hover::before {
	opacity: 1;
}

.card__desc {
	margin-bottom: em(16, 18);
	line-height: em(26, 18);
	font-size: em(18);
	font-weight: $fw-300;
}

.card__stats,
.card__author-text {
	font-size: em(15);
}

.card__stat-value {
	font-weight: $fw-600;
	color: $primary-2;
}

.card__author {
	font-size: em(16);
}

.card__author-text {
	margin: 0;
}

// override bootstrap-vue
.card-header {
	padding: 0;
	margin-bottom: 1.5em;
}

.card-body {
	padding: 0;
}

.card-footer {
	padding: 1em 0 0;
	margin-top: 1em;
	border-top: 1px solid $neutral-3;
}

.card-footer .b-avatar {
	border: 1px solid $neutral-4;
}
// end of override

@media (min-width: 48em) {
	.card__title {
		margin-bottom: em(16, 22);
	}

	.card__desc {
		margin-bottom: em(24, 18);
	}

	.card__stats,
	.card__author-text {
		font-size: 1em;
	}

	// override bootstrap-vue
	.card-footer {
		margin-top: 1.5em;
	}
	// end of override
}
</style>
