$(document).ready(function () {



	$('.search').on('input', function() {
		console.log($(this).children());
		var first_child = $(this).children()[1].children[0];
		if("type" in first_child){
			var value = first_child.value; /* when a tag is there that will be the first child, not the input */
			var length = value.length;
			if(length == 0){
				$(".fa-times-circle").css("visibility", "hidden");
			}
			if(length == 1){
				$(".fa-times-circle").css("visibility", "visible");
			}
		}
		else {
			$(".fa-times-circle").css("visibility", "visible");
			console.log("breh");
		}
		
	});

	$('input').on('itemRemoved', function(event) {
		$(".fa-times-circle").css("visibility", "hidden");
	});

	$('#SearchString').tagsinput({
		itemValue: 'text',
		allowDuplicates: true
	});

	var so = $(".fa-times-circle").width() / $('.search').width() * 100;
   $(".parent-circle").css("width", $(".fa-times-circle").width()  + "px");
   /*$(".parent-circle").css("width", so + "%");*/


   var f = $(".fa-search").width() / $('.fa-search').parent().width() * 100;
   $('.bootstrap-tagsinput').css('width', (100-f-so) + '%'); //you fixed the beginning but after translation will be fucked up

   var cool = $(".fa-search").width() + $(".bootstrap-tagsinput").width();
   var bet = $('.fa-search').parent().width();

   


	$( ".bootstrap-tagsinput input" ).on('click', function() {
		translateField();
	});

	$(".cancel").css("display", "inline-block");
	$(".cancel").css("max-width", $(".cancel").width());
	$(".cancel").css("width", 0);

	console.log($(".cancel").css("max-width"));
	console.log("fak");


});

function clearText(){
	$(".fa-times-circle").css("visibility", "hidden");
	$(".bootstrap-tagsinput input").val('').focus();

	$(".bootstrap-tagsinput span").remove();

	var so = $(".fa-times-circle").width() / $('.search').width() * 100;
   $(".parent-circle").css("width", so + "%");


   var f = $(".fa-search").width() / $('.fa-search').parent().width() * 100;
   $('.bootstrap-tagsinput').css('width', (100-f-so) + '%');
	/*$(".bootstrap-tagsinput").filter(function() {
		var $this = $(this);
		return $this.css("display") == "none";
	}).remove();*/

	$(".bootstrap-tagsinput input").css("width", "100%");
	/*$(".bootstrap-tagsinput input").attr("placeholder", "Enter food item");*/


	/*console.log($(".bootstrap-tagsinput").tagsinput('items'));
	$(".bootstrap-tagsinput").tagsinput("remove", { id: 'tag', text: "Vegetables" });*/
	/*$(".bootstrap-tagsinput input").css("width", "100%");*/


}

function translateField(){
	//$(".fa-times-circle").show(); nope only do this when they have typing something
	// todo translate the whole div


	/*$(".bootstrap-tagsinput input").focus();*/
	/*$(".search").css("width", "80%");*/
	var translation = 2 * $(".title").height() + 0.07 * $(".titlesearch").parent().height();
	console.log(translation);
	console.log('bet');
	var text = "translateY(-" + translation + "px)";
	var f = $(".fa-search").width() * 1.25 / $('.fa-search').parent().width() * 100;

	var so = $(".fa-times-circle").width() * 1.25 / $('.search').width() * 100;

	var cancel_width = parseInt($(".cancel").css("max-width").slice(0,-2)) / $('.titlesearch').width() * 100;

	/*$(".cancel").css("padding-right", "3%");*/

	$('.bootstrap-tagsinput').css('width', (100-f-so) + '%');
	$(".search").css("width", (94-cancel_width-3) + "%"); /*$(".search").css("width", "80%"); this was from before dont delete breh*/
	$(".cancel").css("width", (cancel_width + 3) + "%"); /*$(".cancel").css("width", "14%");*/

	$(".titlesearch").css("transform", text);
	$(".line").css("transform", text);
	$(".category").css("transform", text);
	$("#table").css("transform", text);
}

function search_home(){

	$(".bootstrap-tagsinput span").remove();
	$(".bootstrap-tagsinput input").css("width", "100%");
	$(".bootstrap-tagsinput input").val('');
	$(".fa-times-circle").css("visibility", "hidden");

	/*$(".search").css("margin-right", "3%");
	$(".cancel").css("margin-right", "0%");*/


	var translation = 2 * $(".title").height() - 4 * 0.07 * $(".titlesearch").parent().height();
	console.log(translation);
	console.log("lmfao");
	var text = "translateY(" + translation + "px)";
	var f = $(".fa-search").width() / $('.fa-search').parent().width() * 100; /* uhh why did we need 1.25 above and not here */

	var so = $(".fa-times-circle").width() / $('.search').width() * 100;

	$(".search").css("width", "94%");/*$(".search").css("width", "97%");*/
	$(".cancel").css("width", "0%");
	$('.bootstrap-tagsinput').css('width', (100-f-so) + '%');

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

	/*$('.tag').css("display", "inline-block");
	$('.tag').css("float", "left");
	$('.bootstrap-tagsinput input').css("display", "inline-block");*/

	var parentWidth = $('.bootstrap-tagsinput input').parent().width();
	var width = $('.tag').width();
	console.log($('.bootstrap-tagsinput input').parent());
	console.log(parentWidth);
	console.log(width);
	$('.bootstrap-tagsinput input').css("width", parentWidth - width);

	$(".bootstrap-tagsinput input").val('').focus();
	$(".fa-times-circle").css("visibility", "visible");


}

$(document).on('click', '.fgimg', addTag);