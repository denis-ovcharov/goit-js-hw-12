import{a as y,S as g,i as d}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function h(s,r){return(await y.get("https://pixabay.com/api/",{params:{key:"50466269-2b1f45a47ffe964456016cff3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:m}})).data}//!===============================================================================
function L(s){const r=s.map(o=>`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <ul class="image-info">
          <li class="info">Likes<p>${o.likes}</p></li>
          <li class="info">Views<p>${o.views}</p></li>
          <li class="info">Comments<p>${o.comments}</p></li>
          <li class="info">Downloads<p>${o.downloads}</p></li>
        </ul>
      </li>`).join("");i.gallery.insertAdjacentHTML("beforeend",r),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}//!===============================================================================
function b(){i.gallery.innerHTML=""}//!===============================================================================
function w(){i.loader.classList.remove("hidden")}//!===============================================================================
function S(){i.loader.classList.add("hidden")}//!===============================================================================
function v(){i.loadMoreBtn.classList.remove("hidden")}//!===============================================================================
function M(){i.loadMoreBtn.classList.add("hidden")}//!===============================================================================
function u(){n<f?v():M()}//!===============================================================================
//!===============================================================================
const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};//!===============================================================================
let l,n,f;const m=15;//!===============================================================================
i.form.addEventListener("submit",async s=>{s.preventDefault(),l=i.form.elements.search.value.trim(),n=1,u(),l&&(b(),w(),await p(l,n),s.target.reset())});//!===============================================================================
async function p(s,r){try{const a=await h(s,r);if(a.hits.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. <br>Please try again!",position:"topRight"});return}L(a.hits),f=Math.ceil(a.totalHits/m),u(),r>=f&&d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})}catch(a){d.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),console.error("API error:",a)}finally{S()}}//!===============================================================================
i.loadMoreBtn.addEventListener("click",async()=>{n+=1,u(),await p(l,n)});//!===============================================================================
//# sourceMappingURL=index.js.map
