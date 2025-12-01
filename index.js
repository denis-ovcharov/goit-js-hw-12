import{a as g,S as p,i as d}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function h(t,o){return(await g.get("https://pixabay.com/api/",{params:{key:"50466269-2b1f45a47ffe964456016cff3",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:m}})).data}//!===============================================================================
function L(t){const o=t.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
        </a>
        <ul class="image-info">
          <li class="info">Likes<p>${s.likes}</p></li>
          <li class="info">Views<p>${s.views}</p></li>
          <li class="info">Comments<p>${s.comments}</p></li>
          <li class="info">Downloads<p>${s.downloads}</p></li>
        </ul>
      </li>`).join("");a.gallery.insertAdjacentHTML("beforeend",o),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}//!===============================================================================
function w(){a.gallery.innerHTML=""}//!===============================================================================
function b(){a.loader.classList.remove("hidden")}//!===============================================================================
function S(){a.loader.classList.add("hidden")}//!===============================================================================
function v(){a.loadMoreBtn.classList.remove("hidden")}//!===============================================================================
function B(){a.loadMoreBtn.classList.add("hidden")}//!===============================================================================
function f(){n<u?v():B()}//!===============================================================================
//!===============================================================================
const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),get galleryItem(){return document.querySelector(".gallery-item")}};//!===============================================================================
let l,n,u;const m=15;//!===============================================================================
a.form.addEventListener("submit",async t=>{t.preventDefault(),l=a.form.elements.search.value.trim(),n=1,f(),l&&(w(),b(),await y(l,n),t.target.reset())});//!===============================================================================
async function y(t,o){try{const i=await h(t,o);if(i.hits.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. <br>Please try again!",position:"topRight"});return}L(i.hits),u=Math.ceil(i.totalHits/m),f(),o>=u&&d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})}catch(i){d.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),console.error("API error:",i)}finally{S()}}//!===============================================================================
a.loadMoreBtn.addEventListener("click",async()=>{n+=1,f(),await y(l,n);const t=a.galleryItem.getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"})});//!===============================================================================
//# sourceMappingURL=index.js.map
