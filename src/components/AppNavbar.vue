<script>
export default {
	name: 'AppNavbar'		//nome del componente che serve per esportarlo
}
</script>
<template>

	<section class="nav_bar debug">

		<div class="">
			<div class="container g-0">
				<div class="d-flex justify-content-between py-4 text-center aligne-content-center text-center">
					<img src="../../public/img/avada-drivers-logo-1x.png" alt="">
					<div class="text-center align-content-center fw-bold">
						<a class="text-uppercase" href="#">Home</a>
						<a class="text-uppercase" href="#">About</a>
						<a class="text-uppercase" href="#">Prices</a>
						<a class="text-uppercase" href="#">Courses <button
								class="btn_green_nav fw-bold">new</button></a>
						<a class="text-uppercase" href="#">Location</a>
						<a class="text-uppercase" href="#">Blog</a>
						<button class="btn btn-success rounded-pill fw-bold btn_green_nav px-4">BOOK NOW</button>
					</div>
				</div>
			</div>
		</div>

	</section>

</template>
<style lang="scss"></style>