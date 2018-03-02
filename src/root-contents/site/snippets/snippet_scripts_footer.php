<noscript id="deferred-styles">
	<?php echo css('assets/css/screen.min.css') ?>
</noscript>

<script>
const loadDeferredStyles = function() {
	const addStylesNode = document.getElementById('deferred-styles');
	const replacement = document.createElement('div');
	replacement.innerHTML = addStylesNode.textContent;
	document.body.appendChild(replacement);
	addStylesNode.parentElement.removeChild(addStylesNode);
};
const raf = requestAnimationFrame || mozRequestAnimationFrame ||
		webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
else window.addEventListener('load', loadDeferredStyles);
</script>
