<script>

export default {
	name: 'AppMain'		//nome del componente che serve per esportarlo
}
</script>
<template>

	<main class="debug">

		<section class="jumbotrone align-content-center">
			<!-- <img src="../../public/img/homepage-hero-background.jpg" alt="" class="Position"> -->
			<div class="container g-0">
				<div class="title_jumbo">
					<h1 class="fw-bolder">Drive with Avada</h1>
					<h4>We offer the finest driving tuition money can buy</h4>
				</div>
			</div>
		</section>
		<!-- Jumbotrone -->

		<section class="registration">
			<div class="container g-0">
				<div class="d-flex justify-content-between position-relative">
					<div class="col-6 text_registration">
						<h2 class="py-4 mt-5 ">Get Behind The Wheel</h2>
						<p class="lh-lg c_text_light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							esse
							debitis
							voluptatem
							temporibus distinctio praesentium quis velit necessitatibus voluptatum, fugit beatae labore
							magnam eaque est ut nisi quas. Magnam, quis!</p>
						<p class="lh-base c_text_light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							esse debitis
							voluptatem
							temporibus distinctio praesentium quis velit necessitatibus voluptatum, fugit beatae labore
							magnam eaque est ut nisi quas. Magnam, quis! Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Numquam sed corrupti ducimus rem ipsa at, voluptatum vel quis nihil
							maiores accusamus, dolores sit molestias eaque error hic! Minima, nostrum nisi.</p>
					</div>
					<div class="text-center position-absolute card_form_registration rounded">
						<h4 class="title_form py-4 fw-semibold">First Lesson Free!</h4>
						<div class="px-4">
							<p class="c_text_light">When you make a block booking with us your first lesson is included
								free</p>
						</div>
						<form class="form_registration align-content-center " action="">
							<div class="mb-3 px-4 pb-2">
								<input type="name" class="form-control bg_input" id="exampleInputName"
									aria-describedby="" placeholder="Your Name">
							</div>
							<div class="mb-3 px-4 py-2">
								<input type="email" class="form-control bg_input" id="exampleInputEmail1"
									aria-describedby="emailHelp" placeholder="E-mail*">
							</div>
							<div class="mb-3 px-4 py-2">
								<input type="name" class="form-control bg_input" id="exampleInputName"
									aria-describedby="" placeholder="Telephone">
							</div>
							<div class="mb-3 px-4 py-2">
								<input type="name" class="form-control bg_input" id="exampleInputName"
									aria-describedby="" placeholder="Location">
							</div>

							<button type="submit"
								class="btn btn_registration rounded-pill fw-bold text-uppercase px-4 mt-4 py-2">Request
								a
								Callback</button>
						</form>
						<!-- Form Registration -->
					</div>
				</div>
			</div>
		</section>
		<!-- Registration -->

		<section class="call">
			<div class="container g-0">
				<div class="d-flex align-items-center call_section">
					<div class="col-8 text-white">
						<h3>Start Learning to Drive Today</h3>
						<h5>Give us a call to schedule your first driving lesson</h5>
					</div>
					<div class="col-4">
						<h2 class="text-white">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
								class="bi bi-telephone-fill" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
							</svg>
							<span class=""> 1-800-555-555</span>
						</h2>
					</div>
				</div>
			</div>
		</section>
		<!-- Call -->

		<section class="courses pt-4">
			<div class="container">
				<div class="row">
					<div class="col-4 position-relative">
						<div class="col-4 position-absolute card_courses rounded">
							<img class="position-absolute" src="../../public/img/new-corner.jpg" alt="">
							<div class="text-center">
								<h2 class="mt-5 pt-2">Courses</h2>
								<p class="lh-lg p-4 c_text_light">Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
									Quo at
									beatae enim modi possimus
									soluta fugiat eius a non quos, nobis similique
								</p>
								<button type="submit"
									class="btn btn_courses btn_primary rounded-pill fw-bold text-uppercase py-2 px-4">Course
									Information</button>
							</div>
						</div>
					</div>
					<div class="col p-4 text-center mt-4">
						<div class="" style="">
							<img src="../../public/img/courses-passplus-200x200.jpg" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title py-2 c_btn_courses">Pass Plus</h5>
								<a href="#"
									class="btn btn-outline-secondary rounded-pill c_btn_courses btn_card_courses text-uppercase fw-bold">Learn
									More</a>
							</div>
						</div>
					</div>
					<div class="col p-4 text-center mt-4">
						<div class="" style="">
							<img src="../../public/img/course-intensive-200x200.jpg" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title py-2 c_btn_courses">Intensive Course</h5>
								<a href="#"
									class="btn btn-outline-secondary rounded-pill c_btn_courses btn_card_courses text-uppercase fw-bold">Learn
									More</a>
							</div>
						</div>
					</div>
					<div class="col p-4 text-center  mt-4">
						<div class="" style="">
							<img src="../../public/img/courses-instructor-200x200.jpg" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title py-2 c_btn_courses">Instructor</h5>
								<a href="#"
									class="btn btn-outline-secondary rounded-pill c_btn_courses btn_card_courses text-uppercase fw-bold">Learn
									More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Courses -->

		<section class="rate">
			<div class="position-relative">
				<svg class="fusion-big-triangle-candy position-absolute" xmlns="http://www.w3.org/2000/svg"
					version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"
					style="fill:#e4eaed;padding:0;">
					<path d="M-1 -1 L50 99 L101 -1 Z"></path>
				</svg>
			</div>
			<div class="container g-0">
				<div class="row text-center c_text_light">
					<div class="col">
						<div class="shadow_bottom">
							<div class="card align-items-center card_rate p-4 c_text_light" style="">
								<div class="rate_1 text-center align-content-center">
									95 %
								</div>
								<div class="text-uppercase fw-bold p-2 ">
									Pass Rate
								</div>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="shadow_bottom">
							<div class="card align-items-center card_rate p-4 c_text_light" style="">
								<div class="rate_1 text-center align-content-center">
									100 %
								</div>
								<div class="text-uppercase fw-bold p-2 ">
									Refferral Rate
								</div>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="shadow_bottom">
							<div class="card align-items-center card_rate p-4 c_text_light" style="">
								<div class="rate_1 text-center align-content-center">
									0 %
								</div>
								<div class="text-uppercase fw-bold p-2 ">
									Accident Rate
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Rate -->

		<section class="instructors">
			<div class="container g-0">
				<h2 class="mt-5">
					Your Instructors
				</h2>
				<div class="row my-4 pb-4">
					<div class="col-8">
						<p class="lh-lg p-2 c_text_light">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Incidunt
							cupiditate
							quasi,
							molestiae vitae ut, maiores impedit accusamus cum aut ducimus fugit earum modi culpa
							tempora.</p>
					</div>
					<div class="col-4 text-end ">
						<button type="submit" class="btn btn_primary rounded-pill fw-bold text-uppercase ">More
							About Us
						</button>
					</div>
				</div>

				<div class="row text-center c_text_light">
					<div class="col">
						<div class="shadow_bottom rounded">
							<div class="card align-items-center card_instructor p-4 c_text_light rounded" style="">
								<img class="pt-4" src="../../public/img/instructor-mikehart-400x254.jpg" alt="">
								<div class="p-3 name_instructor">
									Mike Hart
								</div>
								<div class="mt-2">
									<i class="fa-brands fa-facebook-f p-2"></i>
									<i class="fa-brands fa-twitter p-2"></i>
									<i class="fa-brands fa-instagram p-2"></i>
								</div>
								<p class="lh-lg py-3 px-4 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing
									elit.
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="shadow_bottom rounded">
							<div class="card align-items-center card_instructor_central p-4 c_text_light" style="">
								<img class="pt-4" src="../../public/img/instructor-johnsmith-400x254.jpg" alt="">
								<div class="p-3 name_instructor">
									John Smith
								</div>
								<div class="mt-2">
									<i class="fa-brands fa-facebook-f p-2"></i>
									<i class="fa-brands fa-twitter p-2"></i>
									<i class="fa-brands fa-instagram p-2"></i>
								</div>
								<p class="lh-lg py-3 px-4 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing
									elit.</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="shadow_bottom rounded">
							<div class="card align-items-center card_instructor p-4 c_text_light" style="">
								<img class="pt-4" src="../../public/img/instructor-angelahart-400x254.jpg" alt="">
								<div class="p-3 name_instructor">
									Angela Hart
								</div>
								<div class="mt-2">
									<i class="fa-brands fa-facebook-f p-2"></i>
									<i class="fa-brands fa-twitter p-2"></i>
									<i class="fa-brands fa-instagram p-2"></i>
								</div>
								<p class="lh-lg py-3 px-4 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing
									elit.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Instructors -->

		<section class="testimonials">
			<div class="container">
				<div class="d-flex flex-column text-center align-items-center">
					<div class="empty_space"></div>
					<h2>Testimonials</h2>
					<h6 class="pt-2 pb-5 c_text_light">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h6>
					<img class="rounded-circle" src="../../public/img/testimonial-sophia.png " alt="">
					<h6 class="pt-2 pb-5 c_text_light lh-lg fst-italic box_testimonials">Lorem ipsum dolor sit amet,
						consectetur
						adipisicing elit.
						Commodi
						id quisquam ipsum perferendis veritatis debitis dignissimos impedit dolorem est! Velit officiis
						aliquam sapiente assumenda quos sed quaerat. Aut, sit veniam.
					</h6>
					<h6 class="c_text_light">Sophia Johnes</h6>
					<div class="py-4"><i class="fa-solid fa-circle"></i><i class="fa-regular fa-circle"></i><i
							class="fa-regular fa-circle"></i><i class="fa-regular fa-circle"></i><i
							class="fa-regular fa-circle"></i></div>
				</div>
			</div>
		</section>
		<!-- Testimonials -->

		<section class="news">
			<div class="container">
				<div class="row">
					News
				</div>
			</div>
		</section>
		<!-- News -->

		<section class="newsletter">
			<div class="container">
				<div class="row">
					Newsletter
				</div>
			</div>
		</section>
		<!-- Newsletter -->

	</main>

</template>
<style></style>