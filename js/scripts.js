//===================//
// LOADING ANIMATION //
//===================//
$body = $("body");

$(document).on({
	ajaxStart: function() {
		$body.addClass("loading");
	},
	ajaxStop: function() {
		$body.removeClass("loading");
	}
});

//==============//
// MODAL WINDOW //
//==============//
var modal = document.getElementById("modal");
var btnOpen = document.getElementById("btnRoll");
var btnClose = document.getElementById("btnClose");

btnOpen.onclick = function() {
	modal.style.display = "block";
}

btnClose.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}