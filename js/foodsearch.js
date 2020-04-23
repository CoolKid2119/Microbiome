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

   var f = $(".fa-search").width() / $('.fa-search').parent().width() * 100;
   $('.bootstrap-tagsinput').css('width', (100-f-0.66) + '%');

   var cool = $(".fa-search").width() + $(".bootstrap-tagsinput").width();
   var bet = $('.fa-search').parent().width();

});

function translateField(){
	//$(".fa-times-circle").show(); nope only do this when they have typing something
	// todo translate the whole div


	$(".bootstrap-tagsinput input").focus();

}

function addTag(event){
	var name = $(event.target.outerHTML).attr("value");
	$('#SearchString').tagsinput('add', { id: 'tag', text: name });

	$('SearchString').attr('placeholder', '');

	translateField();

	$(".fa-times-circle").show();
}

$(document).on('click', '.fgimg', addTag);