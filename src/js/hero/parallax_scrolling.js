const fgScreen = getElemID('hero__foreground');
const height = window.innerWidth;

document.querySelectorAll('.parallax-layer').forEach(elem => {
	const modifier = elem.getAttribute('data-modifier');

	const parallax = basicScroll.create({
		elem: elem,
		from: 0,
		to: height * 1.5,
		props: {
			'--translateY': {
				from: '0',
				to: `${22 * modifier}px`,
				direct: true
			}
		}
	});

	parallax.start();
});

const opacity = basicScroll.create({
	elem: fgScreen,
	from: 20,
	to: height * 1.5,
	props: {
		'--opacity': {
			from: '0',
			to: '0.7',
			direct: true
		}
	}
});
opacity.start();
