requirejs.config({
    baseUrl: 'src/app',
    paths: {
        jquery: '../lib/jquery.min'
    }
});

// Start the main app logic.
requirejs(['jquery', 'carousel', 'gotop', 'lazyload'],
function   ($,        Carousel,   GoTop,   LazyLoad) {
  Carousel.init($('header'),window.innerWidth);
  LazyLoad.one($("img"), function($img){
     $img.attr('src',$img.attr('data-src'));
  });
  GoTop.init(document.querySelector('body'));
});
