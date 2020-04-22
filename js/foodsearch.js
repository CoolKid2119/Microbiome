function addTag(event){
	var name = $(event.target.outerHTML).attr("value");
	$(".typing").html('<span class="fgtext" >' + name +  '</span>' + $(".typing").html());
	$(".textbox").focus();
}

$(document).on('click', '.fgimg', addTag);

function bet(){
	console.log('bet');
}