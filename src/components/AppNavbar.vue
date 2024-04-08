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
						<a href="#">Home</a>
						<a href="#">About</a>
						<a href="#">Prices</a>
						<a href="#">Courses <button class="btn_green_nav fw-bold">new</button></a>
						<a href="#">Location</a>
						<a href="#">Blog</a>
						<button class="btn btn-success rounded-pill fw-bold btn_green_nav px-4">BOOK NOW</button>
					</div>
				</div>
			</div>
		</div>

	</section>

</template>
<style lang="scss"></style>