!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("validate",[],t):"object"==typeof exports?exports.validate=t():e.validate=t()}(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={install:function(e,t){e.filter("formatTime",function(e){return Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in t)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[r]:("00"+t[r]).substr((""+t[r]).length)));return e},new Date(e).Format("yyyy-MM-dd hh:mm:ss")}),e.prototype.doubleNumber=function(e){return"number"==typeof e?2*e:isNaN(Number(e))?null:2*Number(e)},e.prototype.$service={telNumberCheck:function(e){return/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/.test(e)},checkUserName:function(e){if(""==e)return!1},checkEmail:function(e){return/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}},e.prototype.errMsgMap=new Map,e.prototype.checkStart=!1,e.directive("uname",{bind:function(e,t,r){console.log("bind")},update:function(t,r,o){e.prototype.checkStart=!0;var n=o.child.label,p=o.child.value,i=[];for(var s in r.modifiers)i.push(s);if(console.log(i),i.length>0){for(var a="",u=0;u<i.length;u++)switch(i[u]){case"checkphone":e.prototype.$service.telNumberCheck(p)?e.prototype.errMsgMap.has(n)&&e.prototype.errMsgMap.delete(n):a.length>0?a+="并且电话号码不合法":a=n+"电话号码不合法";break;case"checkEmail":e.prototype.$service.telNumberCheck(p)?e.prototype.errMsgMap.has(n)&&e.prototype.errMsgMap.delete(n):a.length>0?a+="并且邮箱不合法":a=n+"邮箱不合法"}a.length>0&&e.prototype.errMsgMap.set(n,a)}else if(p)e.prototype.errMsgMap.has(n)&&e.prototype.errMsgMap.delete(n);else{var a=n+"不能为空";e.prototype.errMsgMap.set(n,a)}}})}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),t.default=o}])});
//# sourceMappingURL=myvue-validate.js.map