function getCurrentYear() {
	var date = new Date();
	var yearVal = date.getFullYear();
	$(".current_year").text(yearVal);
}
