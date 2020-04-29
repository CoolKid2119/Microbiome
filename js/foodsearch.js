function displayResults(search_string){
	$("#table").css("display", "none");
	var data = [["BACON MAPLE VIRGINIA PEANUTS", "Popcorn, Peanuts, Seeds & Related Snacks", "Whitley Peanut Factory, Inc"],
	["SLICED BACON", "Frozen Bacon, Sausages & Ribs", "John F Martin & Sons Inc"],
	["PORK & BACON HASH", "Chili & Stew", "Hormel Foods Corporation"]];
	var keywords = ['desc', 'food_cat', 'owner'];
	var html = "";


	for(var i = 0; i < data.length; i++){
		var curArr = data[i];
		if(i > 0){
			html += "<hr class='item_divison'>";
		}
		html += "<table>"
		for(var j = 0; j < curArr.length; j++){
			if(j == 0){
				html += "<tr> <td rowspan=3 class='imgcell'> <img class='img' src='" + (i+1) + ".jpg'> </td>"
				html += '<td class="' + keywords[j] + '">' + curArr[j] + '</td> </tr>'; 
			}
			else {
				html += '<tr> <td class="' + keywords[j] + '">' + curArr[j] + '</td> </tr>'; 
			}
		}
		html += "</table>";
	}

	$("#search_results").html(html);

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
});

// Convert SearchString into bootstrap tagsinput
$('#SearchString').tagsinput({
	itemValue: 'text',
	allowDuplicates: true
});

$(".cancel").css("display", "inline-block");
$(".cancel").css("max-width", $(".cancel").width());
$(".cancel").css("width", 0);
	

$( ".bootstrap-tagsinput input" ).on('click', function() {
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