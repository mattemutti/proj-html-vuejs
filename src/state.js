import { reactive } from 'vue'

export const state = reactive({

	courses: [
		{
			type: 'Pass Plus',
			img: '../../public/img/courses-passplus-200x200.jpg',
		},
		{
			type: 'Intensive Course',
			img: '../../public/img/course-intensive-200x200.jpg',
		},
		{
			type: 'Instructor',
			img: '../../public/img/courses-instructor-200x200.jpg',
		},
	],

	rates: [
		{
			rate: '95 %',
			name: 'Pass Rate',
		},
		{
			rate: '100 %',
			name: 'Refferral Rate',
		},
		{
			rate: '0 %',
			name: 'Accident Rate',
		},
	],

	instructors: [
		{
			name: 'Mike Hart',
			photo: '../../public/img/instructor-mikehart-400x254.jpg',
			description: 'Affascinante bravo a guidare, gentile, ti metterà a tuo agio',
		},
		{
			name: 'John Smith',
			photo: '../../public/img/instructor-johnsmith-400x254.jpg',
			description: 'John uno dei migliori per i testacoda e strade sterrate',
		},
		{
			name: 'Angela Hart',
			photo: '../../public/img/instructor-angelahart-400x254.jpg',
			description: 'Non è la moglie di Mike e nemmeno la sorella, ma un pilota professionista che si è ritirate dalle gare ufficiali',
		},
	],

	news: [
		{
			img: '../../public/img/blog-choosecar-320x202.jpg',
			title: 'What Car to Star With?',
			date: 'February 7th, 2019 |',
			numbComments: 0,
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
		},
		{
			img: '../../public/img/blogpost-10and2-320x202.jpg',
			title: 'Avada Driving School Expanding',
			date: 'February 7th, 2019 |',
			numbComments: 2,
			text: 'Guida guida tu che sei felice di guidare',
		},
	],

	testimonials: [
		{
			photo: '../../public/img/testimonial-sophia.png ',
			comment: 'Bellissimo corso, mi sono trovata subito bene, instruttore competente e molto gentile. bla bla ora faccio dei testacoda più belli del mio ragazzo, e della sua amante.',
			name: 'Sophia Johnes',
		}
	]



})