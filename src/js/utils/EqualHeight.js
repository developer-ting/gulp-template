// Set equal height to set of target class
function equalHeight(target) {
	var setHeight = 0;
	$(target).each(function () {
		var getH = $(this).outerHeight();
		if (setHeight < getH) {
			setHeight = getH;
		}
	});
	$(target).outerHeight(setHeight);
}
// Transfer height of source element to destination element
function transferHeight(source, destination) {
	var sourceH = $(source).outerHeight();
	$(destination).outerHeight(sourceH);
}
