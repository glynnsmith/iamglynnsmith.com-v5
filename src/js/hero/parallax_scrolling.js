document.querySelectorAll('.parallax__layer').forEach(elem => {
	const modifier = elem.getAttribute('data-modifier');

	basicScroll
		.create({
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
		})
		.start();
});
