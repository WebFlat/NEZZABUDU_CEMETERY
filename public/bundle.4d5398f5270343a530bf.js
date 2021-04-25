(()=>{var e={139:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300;400;500;700&family=Ubuntu:wght@300;400;700&display=swap);"]),r.push([e.id,'html{font-size:10px;height:100%;scroll-behavior:smooth}body{font-family:"Roboto",sans-serif;font-size:1.6rem;min-height:100%;width:100%;margin:0;background:#fff}*{box-sizing:border-box}.wrapper{width:90%;max-width:500px;margin:0 auto;text-align:center;padding:50px 0 40px 0;overflow:hidden}.row{display:flex;justify-content:space-around;width:100%}.message{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.3);display:flex;justify-content:center;align-items:center;opacity:0;z-index:-1}.message__text{overflow:hidden;border-radius:6px;padding:20px 10px;color:#fff;background:#000;max-width:280px;min-width:280px;height:auto;text-align:center}.message.active{opacity:1;z-index:5}.header{width:100%;position:fixed;top:0;left:0;background:#fff;height:40px;display:flex;align-items:center;justify-content:center}.header__logo{font-size:2rem;font-weight:700;letter-spacing:4px;font-family:"Montserrat",sans-serif}.camera{display:flex;flex-direction:column;align-items:center}.camera__window{width:100px;height:150px;border:2px solid #ccc;border-radius:6px;object-fit:cover;margin-bottom:20px;background:#fff;text-align:center;overflow:hidden}.camera__btn{width:190px;margin:20px 0;text-transform:uppercase;border-radius:6px;padding:10px 0;background:#fff;border:none;background:#000;color:#fff;font-size:1.2rem}.camera__btn--xs{max-width:145px;margin:0}.camera .red{background:red}#canvas{display:none}label{text-transform:uppercase;font-size:1.2rem;max-width:80%;margin:0 auto;height:26px;overflow:hidden}textarea{height:70px !important}.geo{display:flex;flex-direction:column;align-items:center}.info__wrap{margin-top:20px;display:flex;flex-direction:column;align-items:center}.info__text{font-family:"Roboto",sans-serif;width:145px;border:2px solid #ccc;background:transparent;padding:5px 10px;border-radius:6px;margin:5px 0;color:#000;font-size:1.2rem;height:30px;outline:transparent}.info__text::placeholder{font-size:1.2rem;color:#ccc;font-weight:200}.info__text:focus{background:#eee;border-color:#000}.info__text--xl{width:90%}.info__geo{border:none;border-bottom:1px solid #ccc;padding:5px 10px;text-overflow:ellipsis;width:90%;outline:transparent}.info__block{max-width:145px;overflow:hidden}#p_prldr{position:fixed;left:0;top:0;right:0;bottom:0;z-index:10000;height:100vh}.contpre small{font-size:2rem}.contpre{width:250px;height:auto;position:absolute;left:50%;top:45%;margin-left:-125px;margin-top:-75px;color:#fff;font-size:2.4rem;letter-spacing:-2px;text-align:center;line-height:35px}.contpre__logo{display:block;font-size:3rem;letter-spacing:4px;text-transform:uppercase;text-align:center;font-family:"Montserrat",sans-serif}#p_prldr .svg_anm{position:absolute;width:41px;height:41px;background-size:41px;margin:-16px 0 0 -16px}',""]);const i=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],l=t.base?c[0]+t.base:c[0],u=n[l]||0,d="".concat(l," ").concat(u);n[l]=u+1;var s=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(i[s].references++,i[s].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function s(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,t){var n,o,r;if(t.singleton){var i=m++;n=p||(p=l(t)),o=s.bind(null,n,i,!1),r=s.bind(null,n,i,!0)}else n=l(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var l=c(e,t),u=0;u<n.length;u++){var d=a(n[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=l}}}},105:()=>{window.onload=()=>{let e=document.querySelector("#p_prldr");setTimeout((()=>{e.style.opacity=0,e.style.zIndex=-5,document.querySelector(".start").style.display="block"}),1e3)}},378:()=>{const e=document.querySelector("#sendForm");let t=document.querySelector(".message__text"),n=document.querySelector(".message"),o=(document.querySelector("#form"),document.querySelector("body")),r=document.querySelector("#latitude"),i=document.querySelector("#longitude"),a=document.querySelector("#canvas"),c=document.querySelector("#sector"),l=document.querySelector("#square"),u=document.querySelector("#row"),d=document.querySelector("#number"),s=document.querySelector("#numberOfPlace"),f=document.querySelector("#surname"),p=document.querySelector("#name"),m=document.querySelector("#patronimyc"),h=document.querySelector("#birth"),g=document.querySelector("#die"),v=document.querySelector("#info"),x=document.querySelector("#number-reg"),y=document.querySelector("#number-book"),b=document.querySelector("#other"),w=e=>{t.innerHTML=e,n.classList.add("active"),o.style.overflow="hidden",setTimeout((()=>{n.classList.remove("active"),o.style.overflow="auto"}),1600)};const S=e=>""!==e&&null!=e||(w(`Заполните поле ${e}`),!1);e.addEventListener("click",(async e=>{e.preventDefault();let t={photo:a.getAttribute("data"),longitude:i.value,latitude:r.value,sector:c.value,square:l.value,row:u.value,number:d.value,numberOfPlace:s.value,surname:f.value,name:p.value,patronimyc:m.value,birth:h.value.split("-").reverse().join("-"),die:g.value.split("-").reverse().join("-"),numberBook:y.value,numberReg:x.value,other:b.value};if((()=>{if(S(r.value)&&S(i.value)&&S(c.value)&&S(l.value)&&S(u.value)&&S(d.value)&&S(s.value)&&S(f.value)&&S(p.value)&&S(m.value)&&S(h.value)&&S(g.value)&&S(v.value))return!0})()){const e=await fetch("sendRequest.php",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(e.ok)return w("Данные отправленны"),await e.text().then((e=>w(e))).then(setTimeout((()=>{window.location.reload()}),1600));throw w(`Ошибка подключения,статус ${e.status}`),new Error(`Ошибка подключения,статус ${e.status}`)}w("Заполнены необходимые поля")}))},424:()=>{!function(){let e=document.querySelector(".message__text"),t=document.querySelector(".message"),n=document.querySelector("body"),o=o=>{e.innerHTML=o,t.classList.add("active"),n.style.overflow="hidden",setTimeout((()=>{t.classList.remove("active"),n.style.overflow="auto"}),1700)},r=320,i=240,a=!1,c=null,l=null,u=null;function d(){if(u){let e=l.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,l.width,l.height);let t=l.toDataURL("image/png");l.setAttribute("data",t),u.setAttribute("src",t)}else o("Сделайте фото")}document.querySelector("#onBtn").addEventListener("click",(function(e){e.preventDefault(),c=document.getElementById("video"),l=document.getElementById("canvas"),u=document.getElementById("photo"),navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}).then((function(e){c.srcObject=e,c.play()})).catch((function(e){o("An error occurred: "+e)})),c.addEventListener("canplay",(function(e){a||(i=c.videoHeight/(c.videoWidth/r),isNaN(i)&&(i=240),c.setAttribute("width",r),c.setAttribute("height",i),l.setAttribute("width",r),l.setAttribute("height",i),a=!0)}),!1),d()})),document.getElementById("startbutton").addEventListener("click",(function(e){e.preventDefault(),c?function(){let e=l.getContext("2d");if(i){l.width=r,l.height=i,e.drawImage(c,0,0,r,i);let t=l.toDataURL("image/png");l.setAttribute("data",t),u.setAttribute("src",t)}else d()}():o("Включите камеру")})),document.querySelector("#clearbutton").addEventListener("click",d)}()},481:()=>{let e=document.querySelector("#latitude"),t=document.querySelector("#longitude");function n(n){e.value=n.coords.latitude,t.value=n.coords.longitude}document.querySelector("#takeGeo").addEventListener("click",(function(e){e.preventDefault(),navigator.geolocation?navigator.geolocation.getCurrentPosition(n):alert("Браузер не поддерживает геолокацию")}))}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),o=n(139);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,n(105),n(424),n(481),n(378)})()})();