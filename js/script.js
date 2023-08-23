
//dynamic handler
document.addEventListener('click', function (e) {
	const target = e.target

	if (target.classList.contains('spoiler-btn')) {
		const spoiler = target.closest('.spoiler')
		const contentWrapper = spoiler.querySelector('.spoiler-content-wrapper')
		if (spoiler.classList.contains('active')) {
			spoiler.classList.remove('active')
			contentWrapper.style.maxHeight = 0
		} else {
			spoiler.classList.add('active')
			contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px'
		}
	}
})