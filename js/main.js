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

document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
        const toggle = document.getElementById(toggleId);
        console.log("Toggle declarado:::->" + toggle);
        nav = document.getElementById(navId);
        console.log("nav declarado:::->" + nav);
        bodypd = document.getElementById(bodyId);
        console.log("bodypd declarado:::->" + bodypd);
        headerpd = document.getElementById(headerId);
        console.log("headerpd declarado:::->" + headerpd);
        
        // Validate that all variables exist
        if(toggle && nav && bodypd && headerpd){
            toggle.addEventListener('click', ()=>{
                console.log("click en filtro");
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
                console.log("terminó funcion click");
            })
        }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header-catalogo')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'));
            this.classList.add('active');
        }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    // Your code to run since DOM is loaded and ready
});