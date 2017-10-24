var $ = require('../lib/jquery.min.js');

var Carousel = (function(){
  function _Carousel($ct, width){
    this.$ct = $ct;
    this.width = width;

    this.init();
    this.bind();
  }

  _Carousel.prototype.init = function(){
    this.currentPage = 0;
    this.isAnimated = false;
    this.pageNum = this.$ct.find('.imgList li').length;

    var $firstPage = this.$ct.find('.imgList li:first-child').clone(),
        $lastPage = this.$ct.find('.imgList li:last-child').clone();

    this.$ct.find('.imgList').prepend($lastPage);
    this.$ct.find('.imgList').append($firstPage);

    this.$ct.find('.imgList li img').width(this.width);
    this.$ct.width(this.width);

    this.$ct.find('.imgList').width(this.width * this.$ct.find('.imgList li').length);
    this.$ct.find('.imgList').css('left', -this.width);
  };
  _Carousel.prototype.bind = function(){
    var self = this;
    this.$ct.find('.prev').on('click',function(){
      if(!self.isAnimated){
        self.prev();
      }
    });
    this.$ct.find('.next').on('click',function(){
      if(!self.isAnimated){
        self.next();
      }
    });
    this.$ct.find('.navList').on('click','li',function(){
      if(!self.isAnimated){
        self.goto($(this).index());
      }
    })
  };
  _Carousel.prototype.next = function(){
    this.isAnimated = true;
    this.currentPage++;
    var self = this;
    this.$ct.find('.imgList').animate({'left' : '-=' + this.width},function(){
      self.isAnimated = false;
      if(self.currentPage >= self.pageNum){
        self.$ct.find('.imgList').css('left', -self.width);
        self.currentPage = 0;
      }
      self.refreshNav();
    });
  };
  _Carousel.prototype.prev = function(){
    this.isAnimated = true;
    this.currentPage--;
    var self = this;
    this.$ct.find('.imgList').animate({'left' : '+=' + this.width},function(){
      self.isAnimated = false;
      if(self.currentPage < 0){
        self.$ct.find('.imgList').css('left', -self.width*self.pageNum);
        self.currentPage = self.pageNum - 1;
      }
      self.refreshNav();
    });
  };
  _Carousel.prototype.goto = function(page){
    this.isAnimated = true;
    this.currentPage = page;
    var self = this;
    this.$ct.find('.imgList').animate({'left' : -self.width - page*self.width},function(){
      self.isAnimated = false;
      self.refreshNav();
    });
  };
  _Carousel.prototype.refreshNav = function(){
    this.$ct.find('.navList li').removeClass('active');
    this.$ct.find('.navList li').eq(this.currentPage).addClass('active');
  };
  return {
    init : function($ct, width){
      new _Carousel($ct, width);
    }
  }
})()
module.exports = Carousel;
// new Carousel($('#container'), 320);
// new Carousel($('#container2'), 320);
