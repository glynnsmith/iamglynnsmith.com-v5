const fg = getElemID('hero__foreground');
const clientHeight = document.documentElement.clientHeight;

document.querySelectorAll('.parallax-layer').forEach(elem => {
	const modifier = elem.getAttribute('data-modifier');

	const parallax = basicScroll.create({
		elem: elem,
		from: 0,
		to: clientHeight,
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

const opacity = basicScroll.create({
	elem: fg,
	from: clientHeight / 4,
	to: clientHeight / 1.2,
	props: {
		'--opacity': {
			from: '0',
			to: '1',
			direct: true
		}
	}
});
opacity.start();
