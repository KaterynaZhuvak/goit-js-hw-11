function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7rYDH"),a=r("3huUq"),l=r("fZKcF"),s=r("7Y9D8");const c=document.querySelector("form").elements.searchQuery,d=document.querySelector(".gallery"),u=document.querySelector(".submitBtn"),f=document.querySelector(".load-more");let y=1;function h(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:2*e,behavior:"smooth"})}function p(t){const o=d.querySelectorAll(".photo-card").length>0;if(""===t||t.includes(" "))return e(s).Notify.warning("Please put down correct tag or eliminate spaces");o?(d.innerHTML="",g(c.value)):g(c.value)}async function g(t){try{const o=await(0,i.getPhoto)(t,y);let n=40*y;e(s).Notify.success(`Hooray! We found ${o.totalHits} images of ${t}!`),d.insertAdjacentHTML("afterbegin",(0,a.createMarkup)(o.hits)),f.classList.remove("visually-hidden"),h(),o.totalHits<n&&f.classList.add("visually-hidden")}catch(t){f.classList.add("visually-hidden"),e(s).Notify.failure("Sorry, something went wrong!")}}u.addEventListener("click",(e=>{e.preventDefault(),p(c.value)})),f.addEventListener("click",(async function(){const t=c.value;y+=1;let o=40*y;try{const n=await(0,i.getPhoto)(t,y);if(n.totalHits<o)return f.classList.add("visually-hidden"),e(s).Notify.info("We're sorry, but you've reached the end of search results.");d.insertAdjacentHTML("beforeend",(0,a.createMarkup)(n.hits)),v.refresh(),h()}catch(t){f.classList.add("visually-hidden"),e(s).Notify.failure("Sorry, something went wrong!")}}));const v=new(e(l))(".photo-card a",{animationSpeed:250,captionPosition:"bottom",captionsData:"alt"});
//# sourceMappingURL=load-more.fa3424cc.js.map
