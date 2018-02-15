// hero_animation.js

// Gather object IDs
const logoContainer = document.getElementById('hero__logo'),
	logoMain = document.getElementById('hero__logo--main'),
	logoShadow = document.getElementById('hero__logo__shadow');

const background = document.getElementById('hero__background--fill'),
	canvasBack01 = document.getElementById('hero__canvas--bg-01'),
	canvasBack02 = document.getElementById('hero__canvas--bg-02'),
	canvasBack03 = document.getElementById('hero__canvas--bg-03'),
	canvasMid = document.getElementById('hero__canvas--mg'),
	canvasFront01 = document.getElementById('hero__canvas--fg-01'),
	canvasFront02 = document.getElementById('hero__canvas--fg-02'),
	canvasFront03 = document.getElementById('hero__canvas--fg-03'),
	header = document.getElementById('section__header'),
	footer = document.getElementById('hero__footer'),
	linearGradientTop = document.getElementById('hero__linear-gradient--top'),
	linearGradientBottom = document.getElementById('hero__linear-gradient--bottom');

// Create timeline stages
const logoSlideIn = new TimelineLite(),
	logoMoveForward = new TimelineLite(),
	backgroundTransition = new TimelineLite();

// Create master timeline
const master = new TimelineLite();

// Controlling variables
const logoSlideInDuration = 1.2, // Logo slides in
	textFadeDuration = 0.6, // Hero UI slides in
	logoMoverX = 16,
	logoMoverY = { min: -10, max: 5 },
	logoMoverDuration = 6.5; // Logo slides around (each keyframe)

// Functions
const randomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// function logoMover() {
// 	TweenLite.to(logoContainer, logoMoverDuration, {
// 		xPercent: randomInt(logoMoverX * -1, logoMoverX),
// 		yPercent: randomInt(logoMoverY.min, logoMoverY.max),
// 		ease: CustomEase.create('custom', 'M0,0,C0.266,0.412,0.436,0.654,0.565,0.775,0.609,0.816,0.78,1,1,1'),
// 		onComplete: logoMover
// 	});
// }

// Setting initial values
master
	.set([logoShadow, header, footer, linearGradientTop, linearGradientBottom], {
		autoAlpha: 0
	})

	.set(header, {
		y: -20
	})

	.set(footer, {
		y: 20
	});

// Animation segments
logoSlideIn.to(
	logoContainer,
	logoSlideInDuration,
	{
		ease: Power4.easeOut,
		className: '+=parallax__layer-logo--down'
	},
	0.65
);

logoMoveForward.to(
	logoContainer,
	1,
	{
		ease: CustomEase.create('custom', 'M0,0 C0.394,0 0.82,0.026 0.892,0.162 0.983,0.335 1,0.59 1,1'),
		className: '+=parallax__layer-logo--in'
	},
	0.65
);

backgroundTransition
	.set(logoMain, {
		className: '+=hero__logo--main-red',
		immediateRender: false
	})

	.set(logoShadow, {
		autoAlpha: 0.3,
		immediateRender: false
	})

	.set(background, {
		autoAlpha: 0,
		immediateRender: false
	})

	.set(linearGradientTop, {
		autoAlpha: 1,
		immediateRender: false
	})

	.set(linearGradientBottom, {
		autoAlpha: 1,
		immediateRender: false
	})

	.to(
		canvasBack01,
		2.5,
		{
			ease: CustomEase.create('custom', 'M0,0 C0,0.408 0.103,0.633 0.248,0.778 0.386,0.916 0.584,1 1,1'),
			className: '+=parallax__layer-back01--in'
		},
		0
	)

	.to(
		canvasBack02,
		2.7,
		{
			ease: CustomEase.create('custom', 'M0,0 C0,0.408 0.103,0.633 0.248,0.778 0.386,0.916 0.584,1 1,1'),
			className: '+=parallax__layer-back02--in'
		},
		0.2
	)

	.to(
		canvasBack03,
		3,
		{
			ease: CustomEase.create('custom', 'M0,0 C0,0.408 0.103,0.633 0.248,0.778 0.386,0.916 0.584,1 1,1'),
			className: '+=parallax__layer-back03--in'
		},
		0.4
	)

	.to(
		canvasMid,
		3.8,
		{
			ease: CustomEase.create('custom', 'M0,0 C0,0.408 0.103,0.633 0.248,0.778 0.386,0.916 0.584,1 1,1'),
			className: '+=parallax__layer-mid--in'
		},
		3
	)

	.to(
		canvasFront01,
		2.5,
		{
			ease: CustomEase.create('custom', 'M0,0 C0,0.408 0.037,0.68 0.184,0.824 0.364,1 0.584,1 1,1'),
			className: '+=parallax__layer-front01--in'
		},
		0
	)

	.to(
		canvasFront02,
		2.7,
		{
			ease: CustomEase.create('custom', 'M0,0 C0,0.408 0.037,0.68 0.184,0.824 0.364,1 0.584,1 1,1'),
			className: '+=parallax__layer-front02--in'
		},
		0.1
	)

	.to(
		canvasFront03,
		3,
		{
			ease: CustomEase.create('custom', 'M0,0 C0,0.408 0.037,0.68 0.184,0.824 0.364,1 0.584,1 1,1'),
			className: '+=parallax__layer-front03--in'
			// onComplete: logoMover
		},
		0.2
	)

	.to(
		[header, footer],
		textFadeDuration * 1.2,
		{
			ease: Power2.easeOut,
			autoAlpha: 1,
			y: 0
		},
		2.4
	);

master
	.add(logoSlideIn)
	.add(logoMoveForward)
	.add(backgroundTransition);

// Where we start from (mostly for debugging)
// master.progress(0.6);
