var GoTop = (function(){
  function _GoTop(ct){
    this.ct = ct;
    this.target = {};
    this.createNode();
    this.bindEvent();
  }
  _GoTop.prototype.bindEvent = function(){
    this.target.addEventListener('click',function(){
      window.scrollTo(0,0);
    });
  };
  _GoTop.prototype.createNode = function(){
    this.target = document.createElement('div');
    this.target.classList.add('target');
    this.target.innerText = '↑';
    this.ct.appendChild(this.target);
  };
  return {
    init : function(ct){ new _GoTop(ct);}
  }
})();
define(GoTop);
