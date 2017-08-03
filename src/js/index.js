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

  // $('.section__slider').bxSlider();


  // Scroll navigation
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 185;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });


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


});