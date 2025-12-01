import{a as p,S as y,i as d}from"./assets/vendor-DvfmeZXB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function h(t,a){return(await p.get("https://pixabay.com/api/",{params:{key:"50466269-2b1f45a47ffe964456016cff3",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}})).data}//!===============================================================================
function L(t){const a=t.map(o=>`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <ul class="image-info">
          <li class="info">Likes<p>${o.likes}</p></li>
          <li class="info">Views<p>${o.views}</p></li>
          <li class="info">Comments<p>${o.comments}</p></li>
          <li class="info">Downloads<p>${o.downloads}</p></li>
        </ul>
      </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",a),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}//!===============================================================================
function w(){s.gallery.innerHTML=""}//!===============================================================================
function b(){s.loader.classList.remove("hidden")}//!===============================================================================
function S(){s.loader.classList.add("hidden")}//!===============================================================================
function v(){s.loadMoreBtn.classList.remove("hidden")}//!===============================================================================
function B(){s.loadMoreBtn.classList.add("hidden")}//!===============================================================================
function u(){n<f?v():B()}//!===============================================================================
//!===============================================================================
const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),get galleryItem(){return document.querySelector(".gallery-item")}};//!===============================================================================
let l,n,f;const m=15;//!===============================================================================
s.form.addEventListener("submit",async t=>{t.preventDefault(),l=s.form.elements.search.value.trim(),n=1,u(),l&&(w(),b(),await g(l,n),t.target.reset())});//!===============================================================================
async function g(t,a){try{const i=await h(t,a);if(i.hits.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. <br>Please try again!",position:"topRight"});return}L(i.hits),f=Math.ceil(i.totalHits/m),u()}catch(i){d.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),console.error("API error:",i)}finally{S()}}//!===============================================================================
s.loadMoreBtn.addEventListener("click",async()=>{n+=1,u(),await g(l,n);const t=s.galleryItem.getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"}),n>=f&&d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})});//!===============================================================================
//# sourceMappingURL=index.js.map
