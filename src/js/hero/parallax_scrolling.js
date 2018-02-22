document.querySelectorAll('.parallax-layer').forEach(elem => {
	const modifier = elem.getAttribute('data-modifier');

	const parallax = basicScroll.create({
		elem: elem,
		from: 0,
		to: document.documentElement.clientHeight,
		props: {
			'--translateY': {
				from: '0',
				to: `${10 * modifier}px`,
				direct: true
			}
		}
	});

	parallax.start();
});

const fg = getElemID('hero__foreground');

const opacity = basicScroll.create({
	elem: fg,
	from: document.documentElement.clientHeight / 4,
	to: document.documentElement.clientHeight / 1.2,
	props: {
		'--opacity': {
			from: '0',
			to: '1',
			direct: true
		}
	}
});
opacity.start();
