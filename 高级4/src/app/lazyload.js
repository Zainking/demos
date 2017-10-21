var Exposure = (function(){
  function _Exposure($node, callback, isOne){
    this.$node = $node;
    this.callback = callback;
    this.isOne = isOne || false;

    this.init();
    this.bind();
  }
  _Exposure.prototype.init = function(){
    this.once = false;
    this.do();
  }
  _Exposure.prototype.bind = function(){
    var self = this;
    $(window).on('scroll',function(){
      if(time){
        clearTimeout(time);
      }
      var time = setTimeout(function(){
        self.do();
      },300);
    });
  }
  _Exposure.prototype.do = function(){
    if( this.isOne && this.once || !this.isVisible()){
      return false;
    }
    this.once = true;
    this.callback(this.$node);
  }
  _Exposure.prototype.isVisible = function(){
    return (this.$node.offset().top > $(window).scrollTop() && this.$node.offset().top < ($(window).scrollTop() + $(window).height()));
  }
  return {
    init: function($nodes, callback){
      $nodes.each(function(index, node){
        new _Exposure($(node), callback, false);
      });
    },
    one: function($nodes, callback){
      $nodes.each(function(index, node){
        new _Exposure($(node), callback, true);
      });
    }
  };
})();
define(Exposure);
