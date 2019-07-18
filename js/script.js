$(function(){

  /////////////// MENU-HOVER ///////////////

  $('.top-menu li a').hover(
    function(){
      $(this).css({
        'opacity':'1',
        'color':'#3E1900'
      });
      $('.now').css({
        'border-bottom':'none'
      });
    },
    function(){
      $(this).css({
        'opacity':'.7',
        'color':'#AEAB92'
      });
      $('.now').css({
        'border-bottom':'solid 5px #96743B'
      });
    }
  );

  $('.top-menu li a').click(function(){
      $(this).css({
        'opacity':'1',
        'color':'#3E1900'
      });
      $('.now').css({
        'border-bottom':'none'
      });
    });

  $('.green-btn').hover(
    function(){
      $('.green-btn img').css({
        'filter':'drop-shadow(0px 3px 3px #333)',
        'opacity':'1'
      });
      $('.now').css({
        'border-bottom':'none'
      });
    },
    function(){
      $('.green-btn img').css({
        'filter':'drop-shadow(0px 3px 3px #333)',
        'opacity':'.9'
      });
      $('.now').css({
        'border-bottom':'solid 5px #96743B'
      });
    }
  );

  $('.green-btn a').mousedown(function(){
    $('.green-btn img').css({
      'filter':'drop-shadow(0px 1px 1px #333)',
      'margin-top':'2px'
    });
  });
  $('.green-btn a').mouseup(function(){
    $('.green-btn img').css({
      'filter':'drop-shadow(0px 3px 3px #333)',
      'margin-top':'0px'
    });
  });

  $('.here').hover(
    function(){
      $(this).css({
        'opacity':'1',
        'color':'#3E1900'
      });
      $('.now').css({
        'border-bottom':'solid 5px #96743B'
      });
    },
    function(){
      $(this).css({
        'opacity':'1',
        'color':'#3E1900'
      });
      $('.now').css({
        'border-bottom':'solid 5px #96743B'
      });
    }
  );

  ////////////////////////////////////////

  /////////////// MENU-HOVER ///////////////

  $('#RIGHT-MENU a').hover(
    function(){
      $('#RIGHT-MENU a').css({
        'color':'#FFF',
        'opacity':'1'
      });
    },
    function(){
      $('#RIGHT-MENU a').css({
        'color':'#FFF',
        'opacity':'.9'
      });

    }
  );

  $('#RIGHT-MENU a').mousedown(function(){
    $('#RIGHT-MENU h3').css({
      'margin-top':'175px',
      'text-shadow':'0px 2px 2px #333'
    });
  })
  $('#RIGHT-MENU a').mouseup(function(){
    $('#RIGHT-MENU h3').css({
      'margin-top':'174px',
      'text-shadow':'0px 4px 4px #333'
    });
  })

  ////////////////////////////////////////

  /////////////// SMARTPHONE-MENU-BTN ///////////////

  $('.menu-btn').click(function(){
    $('.modal-menu').show();
    $('.sm-menu').hide();
    $('#WHITEBACK').hide();
    $('#TITLE').hide();
  });

  $('.close-btn').click(function(){
    $('.modal-menu').hide();
    $('.sm-menu').show();
    $('#WHITEBACK').show();
    $('#TITLE').show();
  });

  $('.modal-menu').on('click', function(){
    $('.modal-menu').hide();
    $('.sm-menu').show();
    $('#WHITEBACK').show();
    $('#TITLE').show();
  });

  $('.modal-menu a').on('click', function(){
    $('.modal-menu').hide();
    $('.sm-menu').show();
    $('#WHITEBACK').show();
    $('#TITLE').show();
  });

  ////////////////////////////////////////

  /////////////// NAVI-IMG ///////////////

                      //// large ////
  $('#NAVI-IMG .-img1 .whitecover').click(function(){
    if ($('.-galleryitem2').show()) {
      $('.-galleryitem2').hide();
    }
    if ($('.-galleryitem1').show()) {
    } else {
      $('.-galleryitem1').show();
    }
    if ($('.-galleryitem3').show()) {
      $('.-galleryitem3').hide();
    }
  });

  $('#NAVI-IMG .-img2 .whitecover').click(function(){
    if ($('.-galleryitem1').show()) {
      $('.-galleryitem1').hide();
    }
    if ($('.-galleryitem2').show()) {
    } else {
      $('.-galleryitem2').show();
    }
    if ($('.-galleryitem3').show()) {
      $('.-galleryitem3').hide();
    }
  });

  $('#NAVI-IMG .-img3 .whitecover').click(function(){
    if ($('.-galleryitem1').show()) {
      $('.-galleryitem1').hide();
    }
    if ($('.-galleryitem3').show()) {
    } else {
      $('.-galleryitem3').show();
    }
    if ($('.-galleryitem2').show()) {
      $('.-galleryitem2').hide();
    }
  });
                      //// large ////

                      //// middle ////
  $('#NAVI-IMG-MD .-img1 .whitecover').click(function(){
    if ($('.-mdgalleryitem2').show()) {
      $('.-mdgalleryitem2').hide();
    }
    if ($('.-mdgalleryitem1').show()) {
    } else {
      $('.-mdgalleryitem1').show();
    }
    if ($('.-mdgalleryitem3').show()) {
      $('.-mdgalleryitem3').hide();
    }
    $("body,html").animate({scrollTop:0},800);
  });

  $('#NAVI-IMG-MD .-img2 .whitecover').click(function(){
    if ($('.-mdgalleryitem1').show()) {
      $('.-mdgalleryitem1').hide();
    }
    if ($('.-mdgalleryitem2').show()) {
    } else {
      $('.-mdgalleryitem2').show();
    }
    if ($('.-mdgalleryitem3').show()) {
      $('.-mdgalleryitem3').hide();
    }
    $("body,html").animate({scrollTop:0},500);
  });

  $('#NAVI-IMG-MD .-img3 .whitecover').click(function(){
    if ($('.-mdgalleryitem1').show()) {
      $('.-mdgalleryitem1').hide();
    }
    if ($('.-mdgalleryitem3').show()) {
    } else {
      $('.-mdgalleryitem3').show();
    }
    if ($('.-mdgalleryitem2').show()) {
      $('.-mdgalleryitem2').hide();
    }
    $("body,html").animate({scrollTop:0},500);
  });
                      //// middle ////

                      //// small ////
  $('#NAVI-IMG-SM .-img1 .whitecover').click(function(){

    if ($('.-mdgalleryitem2').show()) {
      $('.-mdgalleryitem2').hide();
    }
    if ($('.-mdgalleryitem1').show()) {
    } else {
      $('.-mdgalleryitem1').show();
    }
    if ($('.-mdgalleryitem3').show()) {
      $('.-mdgalleryitem3').hide();
    }
    $('.-mdgalleryitem1 .screens .-min').hide();
    $('.-mdgalleryitem1 .screens .-pc').show();
    $('.-mdgalleryitem1 #SLIDE-L-BTN').hide();
    $('.-mdgalleryitem1 #SLIDE-R-BTN').show();
    $("body,html").animate({scrollTop:0},1000);
  });

  $('#NAVI-IMG-SM .-img2 .whitecover').click(function(){
    if ($('.-mdgalleryitem1').show()) {
      $('.-mdgalleryitem1').hide();
    }
    if ($('.-mdgalleryitem2').show()) {
    } else {
      $('.-mdgalleryitem2').show();
    }
    if ($('.-mdgalleryitem3').show()) {
      $('.-mdgalleryitem3').hide();
    }
    $('.-mdgalleryitem2 .screens .-min').hide();
    $('.-mdgalleryitem2 .screens .-pc').show();
    $('.-mdgalleryitem2 #SLIDE-L-BTN').hide();
    $('.-mdgalleryitem2 #SLIDE-R-BTN').show();
    $("body,html").animate({scrollTop:0},800);
  });

  $('#NAVI-IMG-SM .-img3 .whitecover').click(function(){
    if ($('.-mdgalleryitem1').show()) {
      $('.-mdgalleryitem1').hide();
    }
    if ($('.-mdgalleryitem3').show()) {
    } else {
      $('.-mdgalleryitem3').show();
    }
    if ($('.-mdgalleryitem2').show()) {
      $('.-mdgalleryitem2').hide();
    }
    $('.-mdgalleryitem3 .screens .-min').hide();
    $('.-mdgalleryitem3 .screens .-pc').show();
    $('.-mdgalleryitem3 #SLIDE-L-BTN').hide();
    $('.-mdgalleryitem3 #SLIDE-R-BTN').show();
    $("body,html").animate({scrollTop:0},800);
  });
                      //// small ////

  ////////////////////////////////////////

  /////////////// SLIDE-BTN ///////////////

  $('.-mdgalleryitem1 #SLIDE-R-BTN').click(function(){
    $(this).hide();
    $('.-mdgalleryitem1 #SLIDE-L-BTN').show();
    $('.-mdgalleryitem1 .screens .-pc').hide();
    $('.-mdgalleryitem1 .screens .-min').animate(
      {
        width: 'show' // 左右に表示・非表示
      },
      {
        duration: 1000, // 速度
      }
    );
  });

  $('.-mdgalleryitem1 #SLIDE-L-BTN').click(function(){
    $(this).hide();
    $('.-mdgalleryitem1 #SLIDE-R-BTN').show();
    $('.-mdgalleryitem1 .screens .-min').hide();
    $('.-mdgalleryitem1 .screens .-pc').animate(
      {
        width: 'show' // 左右に表示・非表示
      },
      {
        duration: 1000, // 速度
      }
    );
  });


  $('.-mdgalleryitem2 #SLIDE-R-BTN').click(function(){
    $(this).hide();
    $('.-mdgalleryitem2 #SLIDE-L-BTN').show();
    $('.-mdgalleryitem2 .screens .-pc').hide();
    $('.-mdgalleryitem2 .screens .-min').animate(
      {
        width: 'show' // 左右に表示・非表示
      },
      {
        duration: 1000, // 速度
      }
    );
  });

  $('.-mdgalleryitem2 #SLIDE-L-BTN').click(function(){
    $(this).hide();
    $('.-mdgalleryitem2 #SLIDE-R-BTN').show();
    $('.-mdgalleryitem2 .screens .-min').hide();
    $('.-mdgalleryitem2 .screens .-pc').animate(
      {
        width: 'show' // 左右に表示・非表示
      },
      {
        duration: 1000, // 速度
      }
    );
  });


  $('.-mdgalleryitem3 #SLIDE-R-BTN').click(function(){
    $(this).hide();
    $('.-mdgalleryitem3 #SLIDE-L-BTN').show();
    $('.-mdgalleryitem3 .screens .-pc').hide();
    $('.-mdgalleryitem3 .screens .-min').animate(
      {
        width: 'show' // 左右に表示・非表示
      },
      {
        duration: 1000, // 速度
      }
    );
  });

  $('.-mdgalleryitem3 #SLIDE-L-BTN').click(function(){
    $(this).hide();
    $('.-mdgalleryitem3 #SLIDE-R-BTN').show();
    $('.-mdgalleryitem3 .screens .-min').hide();
    $('.-mdgalleryitem3 .screens .-pc').animate(
      {
        width: 'show' // 左右に表示・非表示
      },
      {
        duration: 1000, // 速度
      }
    );
  });

  ////////////////////////////////////////

  /////////////// GALLERY-LINK ///////////////


  ////////////////////////////////////////
});
