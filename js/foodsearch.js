$(document).ready(function () {


	$('#SearchString').on('input', function() {
		alert('Text1 changed!');
		var length = this.value.length;
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

});

function translateField(){
	//$(".fa-times-circle").show(); nope only do this when they have typing something
	// todo translate the whole div
	$(".textbox").focus();

}

function addTag(event){
	var name = $(event.target.outerHTML).attr("value");
	$('#SearchString').tagsinput('add', { id: 'tag', text: name });

	$('SearchString').attr('placeholder', 'lol');

	translateField();

	$(".fa-times-circle").show();
}

$(document).on('click', '.fgimg', addTag);