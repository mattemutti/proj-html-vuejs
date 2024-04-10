<script>
export default {
	name: 'AppNavbar',

	props: ['Home', 'About', 'Prices', 'Courses', 'Location', 'Blog']
}
</script>
<template>

	<section class="nav_bar debug">

		<div>
			<div class="container g-0">
				<div class="d-flex justify-content-between py-4 text-center aligne-content-center text-center">
					<img src="../../public/img/avada-drivers-logo-1x.png" alt="">
					<div class="text-center align-content-center fw-bold">
						<a class="text-uppercase" href="#">Home</a>
						<a class="text-uppercase" href="#registration">About</a>
						<a class="text-uppercase" href="#">Prices</a>
						<a class="text-uppercase" href="#courses">Courses <button
								class="btn_green_nav btn_h_green fw-bold rounded">new</button></a>
						<a class="text-uppercase" href="#">Location</a>
						<a class="text-uppercase" href="#blog">Blog</a>
						<button class="btn btn_green_nav btn_h_green rounded-pill fw-bold btn_primary px-4">BOOK
							NOW</button>
					</div>
				</div>
			</div>
		</div>

	</section>

</template>
<style lang="scss"></style>