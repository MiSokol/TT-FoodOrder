$("li").click(function() {
	$( ".menu" ).removeClass( "active" );
	$( this ).addClass( "active" );
   	//alert(this.id);
  
   	$("tr").addClass("hidden");
   	$("." + this.id + "_offer").removeClass("hidden");
});