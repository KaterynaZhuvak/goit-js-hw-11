var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("7rYDH"),l=o("3huUq");const c=document.querySelector("form").elements.searchQuery,s=document.querySelector(".gallery"),a=document.querySelector(".submitBtn"),u=document.querySelector(".js-guard");let i=1;async function d(e){try{const t=await(0,n.getPhoto)(e,i);let r=40*i;s.insertAdjacentHTML("afterbegin",(0,l.createMarkup)(t.hits)),f.observe(u),t.totalHits<r&&console.log("We're sorry, but you've reached the end of search results.")}catch(e){console.error(e)}}a.addEventListener("click",(e=>{e.preventDefault();const t=s.querySelectorAll(".photo-card").length>0;if(""===c.value)return console.log("please put down correct tag");if(t){s.innerHTML="";d(c.value)}else{d(c.value)}}));let f=new IntersectionObserver((function(e,t){e.forEach((async e=>{if(e.isIntersecting){const e=c.value;i+=1;let r=40*i;try{const o=await(0,n.getPhoto)(e,i);s.insertAdjacentHTML("beforeend",(0,l.createMarkup)(o.hits)),o.totalHits<r&&(t.unobserve(u),console.log("We're sorry, but you've reached the end of search results."))}catch(e){console.error(e)}}}))}),{root:null,rootMargin:"300px",threshold:1});
//# sourceMappingURL=infinity-scrol.7626d682.js.map
