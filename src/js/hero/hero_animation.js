// hero_animation.js

CustomEase.create('easeLogoIn', 'M0,0 C0,1 0.23,1 1,1');
CustomEase.create(
	'easeLogoForward',
	'M0,0 C0.383,0 0.81,0 0.816,0.2 0.84,1 0.802,1 1,1'
);

// Create master timeline
const master = new TimelineLite();

// Controlling variables
const logoSlideInDuration = 2.5; // Hero logo slides in
const textFadeDelay = 2.5; // Hero UI slide delay
const textFadeDuration = 0.85; // Hero UI slides in

// Setting initial values
// TweenLite.set(
// 	[
// 		'#hero__canvas-layer--01',
// 		'#hero__canvas-layer--02',
// 		'#hero__canvas-layer--03',
// 		'#hero__canvas-layer--04',
// 		'#hero__canvas-layer--05',
// 		'#hero__canvas-layer--06',
// 		'#hero__canvas-layer--07'
// 	],
// 	{
// 		autoAlpha: 0
// 	}
// );

TweenLite.set(['#hero__logo-shadow', '#section__header', '#hero__footer'], {
	autoAlpha: 0
});

TweenLite.set('#section__header', {
	y: -30
});

TweenLite.set('#hero__footer', {
	y: 30
});

// Animation segments
function logoSlideIn() {
	let tl = new TimelineLite();

	tl.to(
		'#hero__logo--group',
		logoSlideInDuration,
		{
			ease: 'easeLogoIn',
			className: '+=parallax__logo-group--down'
		},
		1.5
	);
	return tl;
}

function logoMoveForward() {
	let tl = new TimelineLite();

	tl.to('#hero__logo--group', 1.25, {
		ease: 'easeLogoForward',
		className: '+=parallax__logo-group--in'
	});
	tl.set('#hero__logo', {
		className: '+=hero__logo--red',
		immediateRender: false
	});
	tl.set('#hero__logo-shadow', {
		autoAlpha: 0.3,
		immediateRender: false
	});
	return tl;
}

function backgroundTransition() {
	let tl = new TimelineLite();

	for (let i = 1; i <= 7; i++) {
		tl.set(
			`#hero__canvas-layer--0${i}`,
			{
				className: `+=parallax__layer--0${i}--in`,
				immediateRender: false
			},
			i / 2
		);
	}

	tl.to(
		['#section__header', '#hero__footer'],
		textFadeDuration,
		{
			ease: Power3.easeOut,
			autoAlpha: 1,
			y: 0
		},
		textFadeDelay
	);
	return tl;
}

master.add(backgroundTransition());
master.add(logoSlideIn());
master.add(logoMoveForward());

// Where we start from (mostly for debugging)
// master.progress(0.9);
