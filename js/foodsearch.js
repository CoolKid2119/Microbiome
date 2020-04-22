function addTag(event){
	var name = $(event.target.outerHTML).attr("value");
	$(".typing").html('<span class="fgtext" >' + name +  '</span>' + $(".typing").html());
	$(".textbox").focus();
	$(".fa-times-circle").show();
}

$(document).on('click', '.fgimg', addTag);

function bet(){
	console.log('bet');
	$(".fa-times-circle").show();

}



$(document).ready(function () {

      $('#SearchString').tagsinput({
          itemValue: 'text'
      });

      $checks = $(":checkbox");
      $checks.on('change', function () {
          $('#SearchString').tagsinput('removeAll');
          $checks.filter(":checked").each(function( index ) {
            	console.log( index + ": " + this.value );
              $('#SearchString').tagsinput('add', { id: this.id, text: this.value });
          });
     }).trigger('change');
});