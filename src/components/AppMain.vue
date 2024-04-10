<script>
import { state } from '../state';

export default {
	name: 'AppMain',

	data() {
		return {
			state,



		}
	}
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
								class="btn btn_registration btn_h_green rounded-pill fw-bold text-uppercase px-4 mt-4 py-2">Request
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
							<i class="fa-solid fa-phone-flip"></i>
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
						<div class="col-4 position-absolute card_courses rounded-4">
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
									class="btn btn_courses btn_h_green btn_primary btn_h_green rounded-pill fw-bold text-uppercase py-2 px-4">Course
									Information</button>
							</div>
						</div>
					</div>
					<div v-for="course in state.courses" class="col p-4 text-center mt-4">
						<div class="" style="">
							<img :src="course.img" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title py-2 c_btn_courses">{{ course.type }}</h5>
								<a href="#"
									class="btn btn-outline-secondary btn_h_green rounded-pill c_btn_courses btn_card_courses text-uppercase fw-bold">Learn
									More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Courses -->

		<section class="rate">
			<div class="position-relative ">
				<svg class="fusion-big-triangle-candy position-absolute bg_arrow_rate"
					xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100"
					preserveAspectRatio="none" style="fill:#e4eaed;padding:0;">
					<path d="M-1 -1 L50 99 L101 -1 Z"></path>
				</svg>
			</div>
			<div class="container g-0">
				<div class="row text-center c_text_light">
					<div v-for="rate in state.rates" class="col">
						<div class="shadow_bottom rounded-4">
							<div class="card align-items-center card_rate p-4 c_text_light" style="">
								<div class="rate_1 text-center align-content-center">
									{{ rate.rate }}
								</div>
								<div class="text-uppercase fw-bold p-2 ">
									{{ rate.name }}
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
						<button type="submit"
							class="btn btn_primary btn_h_green rounded-pill fw-bold text-uppercase ">More
							About Us
						</button>
					</div>
				</div>

				<div class="row text-center c_text_light">
					<div v-for="instructor in  state.instructors " class="col">
						<div class="shadow_bottom rounded">
							<div class="card align-items-center card_instructor p-4 c_text_light rounded" style="">
								<img class="pt-4" :src="instructor.photo" alt="">
								<div class="p-3 name_instructor">
									{{ instructor.name }}
								</div>
								<div class="mt-2">
									<a href="#"><i class="fa-brands fa-facebook-f p-2"></i></a>
									<a href="#"><i class="fa-brands fa-twitter p-2"></i></a>
									<a href="#"><i class="fa-brands fa-instagram p-2"></i></a>
								</div>
								<p class="lh-lg py-3 px-4 mt-4">{{ instructor.description }}
								</p>
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
					<div v-for="testimonial in state.testimonials">
						<img class="rounded-circle" :src="testimonial.photo" alt="">
						<h6 class="pt-2 pb-5 c_text_light lh-lg fst-italic box_testimonials">{{ testimonial.comment }}
						</h6>
						<h6 class="c_text_light">{{ testimonial.name }}</h6>
					</div>
					<div class="py-4"><i class="fa-solid fa-circle p-1"></i><i class="fa-regular fa-circle p-1"></i><i
							class="fa-regular fa-circle p-1"></i><i class="fa-regular fa-circle p-1"></i><i
							class="fa-regular fa-circle p-1"></i></div>
				</div>
			</div>
		</section>
		<!-- Testimonials -->

		<section class="news">
			<div class="container g-0 position-relative">
				<div class="d-flex ">
					<div class="card_news position-absolute rounded-top text-center px-3">
						<h2 class="py-5">Latest News</h2>
						<div class="row justify-content-center p-4 mb-4">
							<div v-for="article in state.news" class="col box_latest_news text-center">
								<img :src="article.img" alt="">
								<h4 class="c_primary pt-4">
									{{ article.title }}
								</h4>
								<div><span>{{ article.date }}</span><span class="c_primary">{{ article.numbComments }}
										Comments</span></div>
								<div class="c_text_light pt-4">{{ article.text }}
								</div>
							</div>
						</div>
						<button class="btn btn_primary btn_h_green rounded-pill fw-bold text-uppercase">More From The
							Blog</button>
					</div>
					<div class="position-absolute box_news_arrow">
						<img class="text-center " src="../../public/img/latestnews-bottom-800x70.png" alt="">
					</div>
				</div>
			</div>
		</section>
		<!-- News -->

		<section class="newsletter">
			<div class="container">
				<div class="row justify-content-center text-center py-5">
					<h2 class="pb-5">Sing up to our Newsletter</h2>
					<div class="pb-4">
						<input type="mail" class="p-1">
					</div>
					<button class="btn btn_primary btn_h_green rounded-pill fw-bold text-uppercase">subscribe</button>
					<h6 class="c_text_light pt-4">(We do not share your data anybody, and only use it for its intended
						purpose)</h6>
				</div>
			</div>
		</section>
		<!-- Newsletter -->

	</main>

</template>
<style></style>