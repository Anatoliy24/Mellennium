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
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: true
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

  $(".header__menu-link").on('click', function(e){
    scroll(this.hash);
    e.preventDefault();
  });

  // $("body").on('click', '[href*="#"]', function(e){
  //   scroll(this.hash);
  //   e.preventDefault();
  // });

  function scrollMobile(id) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(id).offset().top - fixed_offset }, 1000);
  }


  if(hash!==''){
    scrollMobile(hash);
  }

  $(".sidebar-link_mobile").on('click', function(e){
    scrollMobile(this.hash);
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

  //sidebar_mobile


  $(document).ready(function () {
    var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

    $('[data-toggle="offcanvas"]').click(function () {
      $('#wrapper').toggleClass('toggled');
    });
  });



 //Автовоспроизведение youtube

    var youtube_src = $("#myModalBox iframe").attr("src");
    $('#myModalBox').on('show.bs.modal', function () {

      $("#myModalBox iframe").attr("src", youtube_src + "&autoplay=1");
    });
    $("#myModalBox").on('hidden.bs.modal', function (e) {
      $("#myModalBox iframe").attr("src", null);
    });



});


(function($){
  var page = 1;
  var newsContainer = $('#news-page__block');
  $('#news-page__link').on('click', function(e){
    page++;
    e.preventDefault();
    $.ajax({
      url:'/assets/json/news.json',
      type: 'GET',
      dataType: 'html',
      data:{page:page},
      success: function(res){
        res =[
          {
            'date':'15.09.2017',
            'text':'МВД РФ предлагает ввести штраф для компаний и должностных лиц, которые не озаботились своевременным выездом приглашенных ими иностранцев, следует из текста законопроекта, размещенномна портале проектов нормативных актов [...]',
            'url':'./news_detail.html'
          },
          {
            'date':'16.09.2017',
            'text':'В продолжение нашей рассылки об увеличении сроков рассмотрения документов на визу в США в РФ, спешим проинформировать о возможности сокращения сроков назначения собеседования при подаче документов в третьей стране [...]',
            'url':'./news_detail.html'
          },
          {
            'date':'20.06.2017',
            'text':'Конституционный суд (КС) РФ в открытом заседании признал не соответствующими Конституции нормы российского миграционного закона, обязывающие иностранцев вставать на учет по месту пребывания [...]',
            'url':'./news_detail.html'
          },
          {
            'date':'01.07.2017',
            'text':'Спешим сообщить срочные новости по текущей ситуации с оформлением виз в США. Процедура выдачи неиммиграционных виз будет возобновлена, но в значительно сокращенном объеме [...]',
            'url':'./news_detail.html'
          }
        ];
        if(typeof res === 'string')
        {
          res = JSON.parse(res);
        }

        var len = res.length;
        for(var i=0;i<len;i++) {
          var item = res[i],
          itemHtml = "<a href='"+item.url+"' class='news-page__item padding_news1'>" +
            "<div class='news-page__date'>"+item.date+"</div>" +
            "<div class='news-page__text'>"+item.text+"</div>" +
            "</a>";
          if(i>0 && (i+1)%2===0) {
            itemHtml += '<div class="clearfix"></div>';
          }
          newsContainer.append(itemHtml);
        }
      }
    });
  })
})(jQuery);


/*-----------sidebar-toggle -jQuery  --------------*/

$(".header__mobile-icon").on('click', function () {       // Функция для отображения/скрытия,  по клику на иконку, выпадающего меню (мобильная версия)
    $(".sidebar_mobile").toggleClass("sidebar_mobile_active");          // изменить класс, и меняем его при кликена противоположный
  }
);
$(".sidebar__list-item_mobile").on('click', function () {       // Функция для отображения/скрытия,  по клику на иконку, выпадающего меню (мобильная версия)
    $(".sidebar_mobile").removeClass("sidebar_mobile_active");          // изменить класс, и меняем его при кликена противоположный
  }
);
