jQuery(document).ready(function(){
  $('.section__slider').slick({
    centerMode: false,
    slidesToShow: 4,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  // //Scroll navigation

  function scroll(id) {
    var fixed_offset = 185;
    $('html,body').stop().animate({ scrollTop: $(id).offset().top - fixed_offset }, 1000);
  }
  var hash = location.hash+'';
  location.hash='';

  if(hash!==''){
    scroll(hash);
  }
  $("body").on('click', '[href*="#"]', function(e){
    scroll(this.hash);
    e.preventDefault();
  });





  // $("body").on('click', '[href*="#"]', function(e){
  //   var fixed_offset = 185;
  //   $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  //   e.preventDefault();
  // });




// Validation


$('form').on('submit','',function(event) {
  event.preventDefault();

  var validate = true,
    form = $(this),
    inputs = form.find('input'),
    type = typeof form.attr('method') !== 'undefined' && form.attr('method')!='' ? form.attr('method') : 'post';

  $.each(inputs,function() {
    if(typeof $(this).val() === 'undefined' || $(this).val()==''){
      validate = false;
      $(this).parents('.input-group').addClass('no-valid');
    }
    else
    {
      $(this).parents('.input-group').removeClass('no-valid');
    }
  });
  if(validate) {
    $.ajax({
      url: form.attr('action'),
      type: type,
      data: form.serialize(),
      //dataType: 'json',
      success: function(res){
        alert('Спасибо');
      }
    });
  }

})




 //Автовоспроизведение youtube

    var youtube_src = $("#myModalBox iframe").attr("src");
    $('#myModalBox').on('show.bs.modal', function () {

      $("#myModalBox iframe").attr("src", youtube_src + "&autoplay=1");
    });
    $("#myModalBox").on('hidden.bs.modal', function (e) {
      $("#myModalBox iframe").attr("src", null);
    });



});


// (function($){
//   $(window).on("load",function(){
//     $("a[rel='m_PageScroll2id']").mPageScroll2id({
//       offset: 185
//     });
//   });
// })(jQuery);


