parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
var e=document.querySelector("#cursor"),o=document.querySelector(".navigation__link--logo"),t=document.querySelector("#cursor-follower"),r=document.querySelector(".burger"),n=r.querySelectorAll(".burger__line"),i=gsap.timeline(),l=gsap.timeline({paused:!0}),u=!1,a=0,c=0,s=0,d=0,m=0,y=0;document.addEventListener("mousemove",function(e){e.target.classList.contains("hover")?t.classList.add("follower-hover"):t.classList.remove("follower-hover"),a=e.pageX,c=e.pageY}),setInterval(function(){s+=(a-s)/6,d+=(c-d)/6,t.style.left=s+"px",t.style.top=d+"px"},17),setInterval(function(){m+=(a-m)/6,y+=(c-y)/6,e.style.left=m+"px",e.style.top=y+"px"},1),i.fromTo(document.querySelector(".navigation__link--github"),{x:-500},{delay:.5,duration:.3,x:0}).fromTo(document.querySelector(".navigation__link--cv"),{x:500},{duration:.3,x:0},"-=.3").fromTo(document.querySelector(".navigation__link--email"),{y:500},{duration:.3,y:0},"-=.3").fromTo(r,{x:500},{duration:.3,x:0},"-=.3").fromTo(document.querySelector(".navigation__desktop"),{x:500},{duration:.3,x:0},"-=.3").fromTo(document.querySelector(".navigation__link--logo"),{x:-500},{duration:.3,x:0},"-=.3"),l.fromTo(document.querySelector(".burger-menu"),{duration:.2,skewType:"simple",skewX:-10,x:"120%",ease:"circ.inOut"},{skewX:0,x:0}).to(n[0],{duration:.2,x:18,rotate:45},"-=.3").to(n[1],{duration:.2,scale:.2},"-=.3").to(n[2],{duration:.2,x:-18,rotate:-45},"-=.3"),r.addEventListener("click",function(){u?(u=!1,l.reverse(),o.style.position="absolute"):(u=!0,l.play(),o.style.position="fixed")});
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/js.fa12ca72.js.map