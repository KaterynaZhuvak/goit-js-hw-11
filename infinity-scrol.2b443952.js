function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7rYDH"),a=r("3huUq"),l=r("fZKcF"),c=r("7Y9D8");const s=document.querySelector("form").elements.searchQuery,u=document.querySelector(".gallery"),d=document.querySelector(".submitBtn"),f=document.querySelector(".js-guard");let y=1;function h(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:2*e,behavior:"smooth"})}function g(t){const o=u.querySelectorAll(".photo-card").length>0;if(""===t||t.includes(" "))return e(c).Notify.warning("Please put down correct tag or eliminate spaces");o?(u.innerHTML="",p(s.value)):p(s.value)}async function p(t){try{const o=await(0,i.getPhoto)(t,y);e(c).Notify.success(`Hooray! We found ${o.totalHits} images of ${t}!`);let n=40*y;u.insertAdjacentHTML("afterbegin",(0,a.createMarkup)(o.hits)),h(),w.observe(f),o.totalHits<n&&e(c).Notify.info(`We found only ${o.totalHits} pictures`)}catch(t){e(c).Notify.failure("Sorry, something went wrong!")}}d.addEventListener("click",(e=>{e.preventDefault(),g(s.value)}));let w=new IntersectionObserver((function(t,o){t.forEach((async t=>{if(t.isIntersecting){const t=s.value;y+=1;let n=40*y;try{const r=await(0,i.getPhoto)(t,y);if(r.totalHits<n)return o.unobserve(f),e(c).Notify.info("We're sorry, but you've reached the end of search results.");u.insertAdjacentHTML("beforeend",(0,a.createMarkup)(r.hits)),h()}catch(t){loadBtn.classList.add("visually-hidden"),e(c).Notify.failure("Sorry, something went wrong!")}}}))}),{root:null,rootMargin:"500px",threshold:1});new(e(l))(".photo-card a",{animationSpeed:250,captionPosition:"bottom",captionsData:"alt"});
//# sourceMappingURL=infinity-scrol.2b443952.js.map
