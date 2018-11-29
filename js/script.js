$(function() {
  $('body').append('<button class = "btn-up" />');

    $('.btn-up').click(function(){
        $('body').animate({'scrollTop': 0}, 1000);
        $('html').animate({'scrollTop': 0}, 1000);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.btn-up').addClass('active');
        }
        else{
            $('.btn-up').removeClass('active');
        }
    });
});


$(window).scroll(function() { 
  $('#beginning').each(function(){ 
   var imagePos = $(this).offset().top; 
   var topOfWindow = $(window).scrollTop(); 
   if (imagePos < topOfWindow+590) { 
   $(this).addClass("slideRight"); 
   } 
  }); 
}); 
$(window).scroll(function() { 
  $('#continue').each(function(){ 
   var imagePos = $(this).offset().top; 
   var topOfWindow = $(window).scrollTop(); 
   if (imagePos < topOfWindow+590) { 
   $(this).addClass("zoomer"); 
   } 
  }); 
}); 
$(window).scroll(function() { 
  $('#ending').each(function(){ 
   var imagePos = $(this).offset().top; 
   var topOfWindow = $(window).scrollTop(); 
   if (imagePos < topOfWindow+590) { 
   $(this).addClass("slideRight"); 
   } 
  }); 
}); 
$(window).scroll(function() { 
  $('#calculator').each(function(){ 
   var imagePos = $(this).offset().top; 
   var topOfWindow = $(window).scrollTop(); 
   if (imagePos < topOfWindow+590) { 
   $(this).addClass("zoomer"); 
   } 
  }); 
}); 