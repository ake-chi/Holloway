var x = window.matchMedia("(min-width: 768px)");

function openNav() {
    if (x.matches){
      document.getElementById("mySidenav").style.width = "450px";
      document.getElementById("dk-bg").style.display = "block";

    }
    else{
      document.getElementById("mySidenav").style.width = "350px";
      document.getElementById("dk-bg").style.display = "block";
    }
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("dk-bg").style.display = "none";
  }

//add bg on scroll 
  $(window).scroll(function(){
    $('.nav-container').toggleClass('scroll-bg', $(this).scrollTop() > 100);
  });