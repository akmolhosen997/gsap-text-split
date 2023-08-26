(function ($) {
"use strict";


gsap.registerPlugin(ScrollTrigger)

const splitType = document.querySelectorAll('.reveal-type')

splitType.forEach((char,i) => {
	const text = new SplitType(char, { type: 'chars,words'})

	gsap.from(text.chars, {
		scrollTrigger: {
			trigger: char,
			start: 'top 80%',
			end: 'top 20%',
			scrub: true,
			markers: true
		},
		opacity: .1,
		stagger: .1

	})

} )

// video title
// create modern text scroll animation


})(jQuery);