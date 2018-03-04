const fgScreen = getElemID('hero__foreground');
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
				to: `${20 * modifier}px`,
				direct: true
			}
		}
	});

	parallax.start();
});

const opacity = basicScroll.create({
	elem: fgScreen,
	from: 400,
	to: 600,
	props: {
		'--opacity': {
			from: '0',
			to: '0.3',
			direct: true
		}
	}
});
opacity.start();
