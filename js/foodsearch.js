function getCookie(tag){
	var pairs = document.cookie.split('; ');
	for(var i = 0; i < pairs.length; i++){
		var data = pairs[i].split('=');
		if(data[0] == tag){
			return data[1];
		}
	}
	return '';
}

function setCookie(tag, param){
	document.cookie = tag + "=" + param;
}

var plate_string = getCookie('plate_list');

if(plate_string == ''){
	setCookie('plate_list', btoa(JSON.stringify([])));
}

function displayResults(search_string){
	$("#table").css("display", "none");
	var data = [[225, "BACON MAPLE VIRGINIA PEANUTS", "Popcorn, Peanuts, Seeds and Related Snacks"],
	[229, "SLICED BACON", "Frozen Bacon, Sausages and Ribs"],
	[230, "PORK AND BACON HASH", "Chili and Stew"]];
	var keywords = ['desc', 'food_cat'];
	var html = "";


	for(var i = 0; i < data.length; i++){
		var curArr = data[i];

		html += "<div id=" + curArr[0] + " class='food'>";

		html += '<div class=desc>' + curArr[1] + '</div>';
		html += '<div class=food_cat>' + curArr[2] + '</div>';

		html += "</div>";
	}

	$("#search_results").html(html);

	var foods = document.getElementsByClassName('food');
	for(var i = 0; i < foods.length; i++){
		foods[i].addEventListener('click', function(){
			var plate_array = JSON.parse(atob(getCookie('plate_list')));

			var dupe = false;
			for(var j = 0; j < plate_array.length; j++){
				var food_array = plate_array[j];
				if(food_array[0] == this.id){
					dupe = true;
					break;
				}
			}

			if(dupe){
				alert('This item has already been added to the plate');
				return;
			}
			else{
				var children = this.children;
				plate_array.push([this.id, btoa(children[0].innerHTML), btoa(children[1].innerHTML)]);
			}

			setCookie('plate_list', btoa(JSON.stringify(plate_array)));
			window.location = 'file:///Users/audylebovitz/Desktop/Microbiome/plate.html';
		});
	}

}

// Detects when user types in textbox. If there is a nonzero number of characters, present the delete button.
// If there are zero characters, hide the delete button.
$('.search').on('input', function() {
	console.log($(this).children());
	var first_child = $(this).children()[1].children[0];
	if("type" in first_child){
		var value = first_child.value; /* when a tag is there that will be the first child, not the input */
		var length = value.length;
		if(length == 0){
			$(".fa-times-circle").css("visibility", "hidden");
			$("#search_results").html("");
			$("#table").css("display", "block");
		}
		if(length == 1){
			$(".fa-times-circle").css("visibility", "visible");
			displayResults(value);
		}
	}
	else{
		$(".fa-times-circle").css("visibility", "visible");
		displayResults(value);
	}
});

// Detects when user rmeoves tag via backspace.
// Then removes the delete button and restores placeholder text.
$('input').on('itemRemoved', function(event) {
	$(".fa-times-circle").css("visibility", "hidden");
	$(".bootstrap-tagsinput input").attr('placeholder', 'Enter food item');

	$("#search_results").html("");
	$("#table").css("display", "block");
});

// Convert SearchString into bootstrap tagsinput
$('#SearchString').tagsinput({
	itemValue: 'text',
	allowDuplicates: true
});

$(".cancel").css("display", "inline-block");
$(".cancel").css("max-width", $(".cancel").width());
$(".cancel").css("width", 0);
	

//$( ".bootstrap-tagsinput input" ).on('click', function() {
$( ".bootstrap-tagsinput" ).on('click', function() {
	translateField();
});

function clearText(){
	$(".fa-times-circle").css("visibility", "hidden");
	$(".bootstrap-tagsinput input").attr('placeholder', "Enter food item");
	$(".bootstrap-tagsinput input").val('').focus();

	$(".bootstrap-tagsinput span").remove();

	$("#search_results").html("");
	$("#table").css("display", "block");
}

function translateField(){
	var scrollTop = $(window).scrollTop();
    var elementOffset = $('.search').offset().top;
    var translation = elementOffset - scrollTop - 0.20 * $('.search').height();
    console.log(translation);
	//var translation = $(".titlesearch").height() * 0.07 + $(".search").height() * 0.01;
	console.log('bet');
	var text = "translateY(-" + translation + "px)";
	var f = $(".fa-search").width() * 1.25 / $('.fa-search').parent().width() * 100;

	var so = $(".fa-times-circle").width() * 1.25 / $('.search').width() * 100;

	var cancel_width = parseInt($(".cancel").css("max-width").slice(0,-2)) / $('.titlesearch').width() * 100;

	/*$(".cancel").css("padding-right", "3%");*/

	console.log('brehhhh')
	console.log(f)
	console.log(so)
	//$('.bootstrap-tagsinput').css('width', (100-f-so) + '%');
	$(".search").css("width", (94-cancel_width-3) + "%"); /*$(".search").css("width", "80%"); this was from before dont delete breh*/
	$(".cancel").css("width", (cancel_width + 3) + "%"); /*$(".cancel").css("width", "14%");*/
	$(".cancel").css("display", "inline-block");

	$(".titlesearch").css("will-change", 'transform');
	$(".line").css("will-change", 'transform');
	$(".category").css("will-change", 'transform');
	$("#table").css("will-change", 'transform');
	$("#search_results").css("will-change", 'transform');

	$(".titlesearch").css("transition", 'transform 300ms linear');
	$(".line").css("transition", 'transform 300ms linear');
	$(".category").css("transition", 'transform 300ms linear');
	$("#table").css("transition", 'transform 300ms linear');
	$("#search_results").css("transition", 'transform 300ms linear');


	$(".titlesearch").css("transform", text);
	$(".line").css("transform", text);
	$(".category").css("transform", text);
	$("#table").css("transform", text);
	$("#search_results").css("transform", text);



}

function search_home(){

	$(".bootstrap-tagsinput span").remove();
	$(".bootstrap-tagsinput input").css("width", "100%");
	$(".bootstrap-tagsinput input").val('');
	$(".fa-times-circle").css("visibility", "hidden");
	$(".bootstrap-tagsinput input").attr('placeholder', "Enter food item");

	//var translation = 2 * $(".title").height() - 4 * 0.07 * $(".titlesearch").parent().height();
	var translation = 0;
	console.log("lmfao");
	var text = "translateY(" + translation + "px)";
	var f = $(".fa-search").width() / $('.fa-search').parent().width() * 100; /* uhh why did we need 1.25 above and not here */

	var so = $(".fa-times-circle").width() / $('.search').width() * 100;

	$(".search").css("width", "94%");/*$(".search").css("width", "97%");*/
	$(".cancel").css("width", "0%");
	//$('.bootstrap-tagsinput').css('width', (100-f-so) + '%');

	$(".titlesearch").css("transform", text);
	$(".line").css("transform", text);
	$(".category").css("transform", text);

	$("#table").css("display", "block");
	$("#table").css("transform", text);

	$("#search_results").html("");
	$("#search_results").css("transform", text);




	
}

function addTag(event){
	var name = $(event.target.outerHTML).attr("value");
	$('#SearchString').tagsinput('add', { id: 'tag', text: name });

	$(".bootstrap-tagsinput input").attr('placeholder', '');


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

	displayResults(name);


}

$(document).on('click', '.fgimg', addTag);