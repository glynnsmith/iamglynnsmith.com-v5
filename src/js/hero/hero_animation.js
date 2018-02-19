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
TweenLite.set(
	[
		'#hero__canvas-layer--01',
		'#hero__canvas-layer--02',
		'#hero__canvas-layer--03',
		'#hero__canvas-layer--04',
		'#hero__canvas-layer--05',
		'#hero__canvas-layer--06',
		'#hero__canvas-layer--07'
	],
	{
		left: '-2000%',
		immediateRender: false
	}
);

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

	tl.to('#hero__logo--group', logoSlideInDuration, {
		ease: 'easeLogoIn',
		className: '+=parallax__logo-group--down'
	});
	return tl;
}

function logoMoveForward() {
	let tl = new TimelineLite();

	tl.to(
		'#hero__logo--group',
		1.25,
		{
			ease: 'easeLogoForward',
			className: '+=parallax__logo-group--in'
		},
		0.65
	);
	return tl;
}

function backgroundTransition() {
	let tl = new TimelineLite();

	tl
		.set('#hero__logo', {
			className: '+=hero__logo--red',
			immediateRender: false
		})
		.set('#hero__logo-shadow', {
			autoAlpha: 0.3,
			immediateRender: false
		})
		.set('#hero__container', {
			className: '+=hero__container--in',
			immediateRender: false
		})
		.set(
			[
				'#hero__canvas-layer--01',
				'#hero__canvas-layer--02',
				'#hero__canvas-layer--03',
				'#hero__canvas-layer--04',
				'#hero__canvas-layer--05',
				'#hero__canvas-layer--06',
				'#hero__canvas-layer--07'
			],
			{
				left: '0%',
				immediateRender: false
			}
		)
		.set('#hero__canvas-layer--01', {
			className: '+=parallax__layer--01--in',
			immediateRender: false
		})
		.set('#hero__canvas-layer--02', {
			className: '+=parallax__layer--02--in',
			immediateRender: false
		})
		.set('#hero__canvas-layer--03', {
			className: '+=parallax__layer--03--in',
			immediateRender: false
		})
		.set('#hero__canvas-layer--04', {
			className: '+=parallax__layer--04--in',
			immediateRender: false
		})
		.set('#hero__canvas-layer--05', {
			className: '+=parallax__layer--05--in',
			immediateRender: false
		})
		.set('#hero__canvas-layer--06', {
			className: '+=parallax__layer--06--in',
			immediateRender: false
		})
		.set('#hero__canvas-layer--07', {
			className: '+=parallax__layer--07--in',
			immediateRender: false
		})
		.to(
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

master.add(logoSlideIn(), '+=1.5');
master.add(logoMoveForward());
master.add(backgroundTransition, '-=0.225');

// Where we start from (mostly for debugging)
master.progress(0.9);
