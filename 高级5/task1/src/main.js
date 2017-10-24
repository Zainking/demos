var $ = require('./lib/jquery.min.js'),
    Carousel = require('./app/carousel.js'),
    GoTop = require('./app/gotop.js'),
    LazyLoad = require('./app/lazyload.js');

Carousel.init($('header'),window.innerWidth);
LazyLoad.one($("img"), function($img){
   $img.attr('src',$img.attr('data-src'));
});
GoTop.init(document.querySelector('body'));
