document.addEventListener('DOMContentLoaded', function() {

	const loader = document.querySelector('.loader');

	function hideLoader() {
		loader.style.display = 'none';
	}

	window.addEventListener('load', function() {
		setTimeout(hideLoader, 900);
	});

	if (document.readyState === 'complete') {
		setTimeout(hideLoader, 500);
	}
});