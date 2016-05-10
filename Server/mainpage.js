$("li").click( function() {
    $( "*" ).removeClass("active");
    $( this ).addClass("active");
});