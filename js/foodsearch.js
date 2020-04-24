$(document).ready(function () {


	$('.search').on('input', function() {
		console.log($(this).children());
		var value = $(this).children()[1].children[0].value;
		var length = value.length;
		if(length == 0){
			$(".fa-times-circle").hide();
		}
		if(length == 1){
			$(".fa-times-circle").show();
		}
	});

	$('#SearchString').tagsinput({
		itemValue: 'text'
	});

	var so = $(".fa-times-circle").width() / $('.search').width() * 100;
   $(".parent-circle").css("width", so + "%");


   var f = $(".fa-search").width() / $('.fa-search').parent().width() * 100;
   $('.bootstrap-tagsinput').css('width', (100-f-so) + '%'); //you fixed the beginning but after translation will be fucked up

   var cool = $(".fa-search").width() + $(".bootstrap-tagsinput").width();
   var bet = $('.fa-search').parent().width();

   


	$( ".bootstrap-tagsinput input" ).on('click', function() {
		translateField();
	});


});

function translateField(){
	//$(".fa-times-circle").show(); nope only do this when they have typing something
	// todo translate the whole div


	/*$(".bootstrap-tagsinput input").focus();*/
	/*$(".search").css("width", "80%");*/
	var translation = 2 * $(".title").height() + 0.07 * $(".titlesearch").parent().height();
	var text = "translateY(-" + translation + "px)";
	var f = $(".fa-search").width() * 1.25 / $('.fa-search').parent().width() * 100;
	$('.bootstrap-tagsinput').css('width', (100-f) + '%');
	$(".search").css("width", "80%");
	$(".cancel").css("width", "14%");

	$(".titlesearch").css("transform", text);
	$(".line").css("transform", text);
	$(".category").css("transform", text);
	$("#table").css("transform", text);




}

function addTag(event){
	var name = $(event.target.outerHTML).attr("value");
	$('#SearchString').tagsinput('add', { id: 'tag', text: name });

	$('SearchString').attr('placeholder', '');

	translateField();

	$(".fa-times-circle").show();
}

$(document).on('click', '.fgimg', addTag);