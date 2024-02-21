// スムーズスクロール
$('a[href^= "#"]').click(function(){
  var href = $(this).attr("href");

  var target;
  if(href == "#" ){
    target = $('html')
  }
  else {
    target = $(href);

  var position = target.offset().top;

  $('body,html').animate({scrollTop:position}, 2000, 'swing');
  
  return false;
  }

});

// PC用5つの魅力変更
// 自然
$('.nature-a').on('mouseover',function(){
  $('.nature-img').css('border', '2px solid #8CFEFE');
  $('.img-table img').not('.nature-img').css('border', 'none');
  $('.nature-img').css('opacity', '1');
  $('.img-table img').not('.nature-img').css('opacity', '0.5');
  $('.nature-set').show();
  $('#what-container article').not('.nature-set').hide();
});

$('.nature-a').on('mouseout',function(){
  $('.img-table img').not('.nature-img').css('opacity', '0.5');
  $('.img-table img').not('.nature-img').css('border', 'none');
  }
);

// 観光
$('.spot-a').on('mouseover',function(){
  $('.spot-img').css('border', '2px solid #8CFEFE');
  $('.img-table img').not('.spot-img').css('border', 'none');
  $('.spot-img').css('opacity', '1');
  $('.img-table img').not('.spot-img').css('opacity', '0.5');
  $('.spot-set').show();
  $('#what-container article').not('.spot-set').hide();
});

$('.spot-a').on('mouseout',function(){
  $('.img-table img').not('.spot-img').css('opacity', '0.5');
  $('.img-table img').not('.spot-img').css('border', 'none');
  }
);

// 食事
$('.eat-a').on('mouseover',function(){
  $('.eat-img').css('border', '2px solid #8CFEFE');
  $('.img-table img').not('.eat-img').css('border', 'none');
  $('.eat-img').css('opacity', '1');
  $('.img-table img').not('.eat-img').css('opacity', '0.5');
  $('.eat-set').show();
  $('#what-container article').not('.eat-set').hide();
});

$('.eat-a').on('mouseout',function(){
  $('.img-table img').not('.eat-img').css('opacity', '0.5');
  $('.img-table img').not('.eat-img').css('border', 'none');
  }
);

// 文化
$('.culture-a').on('mouseover',function(){
  $('.culture-img').css('border', '2px solid #8CFEFE');
  $('.img-table img').not('.culture-img').css('border', 'none');
  $('.culture-img').css('opacity', '1');
  $('.img-table img').not('.culture-img').css('opacity', '0.5');
  $('.culture-set').show();
  $('#what-container article').not('.culture-set').hide();
});

$('.culture-a').on('mouseout',function(){
  $('.img-table img').not('.culture-img').css('opacity', '0.5');
  $('.img-table img').not('.culture-img').css('border', 'none');
  }
);

// 歴史
$('.history-a').on('mouseover',function(){
  $('.history-img').css('border', '2px solid #8CFEFE');
  $('.img-table img').not('.history-img').css('border', 'none');
  $('.history-img').css('opacity', '1');
  $('.img-table img').not('.history-img').css('opacity', '0.5');
  $('.history-set').show();
  $('#what-container article').not('.history-set').hide();
});

$('.history-a').on('mouseout',function(){
  $('.img-table img').not('.history-img').css('opacity', '0.5');
  $('.img-table img').not('.history-img').css('border', 'none');
  }
);

// 地域
// やんばる
$('.north-top').on('mouseover',function(){
  $('.north-top').css('opacity', '1');
  $('#map-set a').not('.north-top').css('opacity', '0.5'); 
});

$('.north-top').on('click',function(){
  $('.north-top-set').show();
  $('#region-conteiner container').not('.north-top-set').hide();
  $('#region').css('height', '410vw')
});

// 名護
$('.north-center').on('mouseover',function(){
  $('.north-center').css('opacity', '1');
  $('#map-set a').not('.north-center').css('opacity', '0.5'); 
});

$('.north-center').on('click',function(){
  $('.north-center-set').show();
  $('#region-conteiner container').not('.north-center-set').hide();
  $('#region').css('height', '410vw')
});

// 西海岸・東海岸
$('.north-bottom').on('mouseover',function(){
  $('.north-bottom').css('opacity', '1');
  $('#map-set a').not('.north-bottom').css('opacity', '0.5'); 
});

$('.north-bottom').on('click',function(){
  $('.north-bottom-set').show();
  $('#region-conteiner container').not('.north-bottom-set').hide();
  $('#region').css('height', '450vw')
});

// 中部
$('.middle').on('mouseover',function(){
  $('.middle').css('opacity', '1');
  $('#map-set a').not('.middle').css('opacity', '0.5'); 
});

$('.middle').on('click',function(){
  $('.middle-set').show();
  $('#region-conteiner container').not('.middle-set').hide();
  $('#region').css('height', '400vw')
});

// 空港周辺
$('.south-top').on('mouseover',function(){
  $('.south-top').css('opacity', '1');
  $('#map-set a').not('.south-top').css('opacity', '0.5');
});

$('.south-top').on('click',function(){
  $('.south-top-set').show();
  $('#region-conteiner container').not('.south-top-set').hide();
  $('#region').css('height', '410vw') 
});

// 南部
$('.south-bottom').on('mouseover',function(){
  $('.south-bottom').css('opacity', '1');
  $('#map-set a').not('.south-bottom').css('opacity', '0.5'); 
});

$('.south-bottom').on('click',function(){
  $('.south-bottom-set').show();
  $('#region-conteiner container').not('.south-bottom-set').hide();
  $('#region').css('height', '440vw') 
});

// SP用5つの魅力変更
// 自然
$('.nature-a').on('mouseover',function(){
  $('.nature-img').css('border', '2px solid #8CFEFE');
  $('#what-img-set-sp img').not('.nature-img').css('border', 'none');
  $('.nature-img').css('opacity', '1');
  $('#what-img-set-sp img').not('.nature-img').css('opacity', '0.5');
  $('.nature-set').show();
  $('#what-container article').not('.nature-set').hide();
});

$('.nature-a').on('mouseout',function(){
  $('#what-img-set-sp img').not('.nature-img').css('opacity', '0.5');
  $('.img-table img').not('.nature-img').css('border', 'none');
  }
);

// 観光
$('.spot-a').on('mouseover',function(){
  $('.spot-img').css('border', '2px solid #8CFEFE');
  $('#what-img-set-sp img').not('.spot-img').css('border', 'none');
  $('.spot-img').css('opacity', '1');
  $('#what-img-set-sp img').not('.spot-img').css('opacity', '0.5');
  $('.spot-set').show();
  $('#what-container article').not('.spot-set').hide();
});

$('.spot-a').on('mouseout',function(){
  $('#what-img-set-sp img').not('.spot-img').css('opacity', '0.5');
  $('#what-img-set-sp img').not('.spot-img').css('border', 'none');
  }
);

// 食事
$('.eat-a').on('mouseover',function(){
  $('.eat-img').css('border', '2px solid #8CFEFE');
  $('#what-img-set-sp img').not('.eat-img').css('border', 'none');
  $('.eat-img').css('opacity', '1');
  $('#what-img-set-sp img').not('.eat-img').css('opacity', '0.5');
  $('.eat-set').show();
  $('#what-container article').not('.eat-set').hide();
});

$('.eat-a').on('mouseout',function(){
  $('#what-img-set-sp img').not('.eat-img').css('opacity', '0.5');
  $('#what-img-set-sp img').not('.eat-img').css('border', 'none');
  }
);

// 文化
$('.culture-a').on('mouseover',function(){
  $('.culture-img').css('border', '2px solid #8CFEFE');
  $('#what-img-set-sp img').not('.culture-img').css('border', 'none');
  $('.culture-img').css('opacity', '1');
  $('#what-img-set-sp img').not('.culture-img').css('opacity', '0.5');
  $('.culture-set').show();
  $('#what-container article').not('.culture-set').hide();
});

$('.culture-a').on('mouseout',function(){
  $('#what-img-set-sp img').not('.culture-img').css('opacity', '0.5');
  $('#what-img-set-sp img').not('.culture-img').css('border', 'none');
  }
);

// 歴史
$('.history-a').on('mouseover',function(){
  $('.history-img').css('border', '2px solid #8CFEFE');
  $('#what-img-set-sp img').not('.history-img').css('border', 'none');
  $('.history-img').css('opacity', '1');
  $('#what-img-set-sp img').not('.history-img').css('opacity', '0.5');
  $('.history-set').show();
  $('#what-container article').not('.history-set').hide();
});

$('.history-a').on('mouseout',function(){
  $('#what-img-set-sp img').not('.history-img').css('opacity', '0.5');
  $('#what-img-set-sp img').not('.history-img').css('border', 'none');
  }
);