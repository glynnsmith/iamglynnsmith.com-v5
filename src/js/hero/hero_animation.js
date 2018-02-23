// hero_animation.js

// Create master timeline
const master = new TimelineLite();

const ease = {
	in: 'M0,0 C1,0 1,0 1,1',
	logoIn: 'M0,0 C1.2,0 0.3,1 1,1',
	out: 'M0,0 C0,1 0.018,0.984 1,1'
};

// Controlling variables
const textFadeDelay = 2.65; // Hero UI slide delay
const textFadeDuration = 1.25; // Hero UI slides in

// Setting initial values
TweenLite.set(['#hero__logo-shadow', '#section__header', '#hero__footer'], {
	autoAlpha: 0
});

for (let i = 1; i <= 7; i++) {
	TweenLite.set(
		`#hero__canvas-layer--0${i}`,
		{
			xPercent: -100
		},
		i / 2
	);
}

TweenLite.set('#hero__logo-container', {
	autoAlpha: 0,
	yPercent: -140,
	scale: 0.18
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

	tl.to('#hero__logo-container', 1.2, {
		ease: CustomEase.create('custom', ease.out),
		autoAlpha: 1,
		yPercent: -10
	});
	tl.to(
		'#hero__logo-container',
		1.2,
		{
			ease: CustomEase.create('custom', ease.logoIn),
			scale: 1
		},
		2
	);
	tl.set('#hero__background', {
		autoAlpha: 0
	});
	tl.set('#hero__logo', {
		className: '+=red',
		immediateRender: false
	});
	tl.to('#hero__logo-shadow', 1.2, {
		ease: Power3.easeOut,
		autoAlpha: 0.3
	});
	return tl;
}

function backgroundTransition() {
	let tl = new TimelineLite();

	for (let j = 1; j <= 7; j++) {
		TweenLite.to(`#hero__canvas-layer--0${j}`, (j * -1 + 45) / 16, {
			xPercent: 0,
			ease: CustomEase.create('custom', ease.out),
			delay: j * (j / 1.5) / 15 + 4.4
		});
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

master.add(logoSlideIn(), '+=1');
master.add(backgroundTransition());

// Where we start from (mostly for debugging)
master.progress(0.9);
