!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a=o("bpxeT"),i=o("2TvXO"),c=o("b7ONl"),u=o("1KhuP"),s=o("5IjG7"),l=o("6JpON"),f=document.querySelector("form").elements.searchQuery,d=document.querySelector(".gallery"),p=document.querySelector(".submitBtn"),h=document.querySelector(".js-guard"),v=1;function y(){var e=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}function g(t){var r=d.querySelectorAll(".photo-card").length>0;if(""===t||t.includes(" "))return e(l).Notify.warning("Please put down correct tag or eliminate spaces");r?(d.innerHTML="",b(f.value)):b(f.value)}function b(e){return w.apply(this,arguments)}function w(){return(w=e(a)(e(i).mark((function t(r){var n,o;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.getPhoto)(r,v);case 3:n=t.sent,e(l).Notify.success("Hooray! We found ".concat(n.totalHits," images of ").concat(r,"!")),o=40*v,d.insertAdjacentHTML("afterbegin",(0,u.createMarkup)(n.hits)),y(),m.observe(h),n.totalHits<o&&e(l).Notify.info("We found only ".concat(n.totalHits," pictures")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),e(l).Notify.failure("Sorry, something went wrong!");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}p.addEventListener("click",(function(e){e.preventDefault(),g(f.value)}));var m=new IntersectionObserver((function(t,r){var n;t.forEach((n=e(a)(e(i).mark((function t(n){var o,a,s;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.isIntersecting){t.next=19;break}return o=f.value,a=40*(v+=1),t.prev=4,t.next=7,(0,c.getPhoto)(o,v);case 7:if(!((s=t.sent).totalHits<a)){t.next=11;break}return r.unobserve(h),t.abrupt("return",e(l).Notify.info("We're sorry, but you've reached the end of search results."));case 11:d.insertAdjacentHTML("beforeend",(0,u.createMarkup)(s.hits)),y(),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(4),loadBtn.classList.add("visually-hidden"),e(l).Notify.failure("Sorry, something went wrong!");case 19:case"end":return t.stop()}}),t,null,[[4,15]])}))),function(e){return n.apply(this,arguments)}))}),{root:null,rootMargin:"500px",threshold:1});new(e(s))(".photo-card a",{animationSpeed:250,captionPosition:"bottom",captionsData:"alt"})}();
//# sourceMappingURL=infinity-scrol.a8ea2f1c.js.map
