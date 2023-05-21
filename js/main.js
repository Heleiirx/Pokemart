$(function(){
    $('#header').load('html/header.html', function (){
        $('#search').on("mouseover", function () {
            console.log("hover");
            $('#searchbar').focus();
        }).on("mouseout", function(){
            $('#searchbar').blur();
        });
        console.log("Cargó header");
    });
    
    $('#footer').load('html/footer.html', function(){
        console.log("Cargó footer");
    });
});
