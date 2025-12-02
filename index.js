import{a as p,S as h,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();async function L(o,r){return(await p.get("https://pixabay.com/api/",{params:{key:"50466269-2b1f45a47ffe964456016cff3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:y}})).data}//!===============================================================================
let i;function b(o){const r=o.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <ul class="image-info">
          <li class="info">Likes<p>${e.likes}</p></li>
          <li class="info">Views<p>${e.views}</p></li>
          <li class="info">Comments<p>${e.comments}</p></li>
          <li class="info">Downloads<p>${e.downloads}</p></li>
        </ul>
      </li>`).join("");a.gallery.insertAdjacentHTML("beforeend",r),i?i.refresh():i=new h(".gallery a",{captionsData:"alt",captionDelay:250})}//!===============================================================================
function w(){i&&(i.destroy(),i=null),a.gallery.innerHTML=""}//!===============================================================================
function S(){a.loader.classList.remove("hidden")}//!===============================================================================
function q(){a.loader.classList.add("hidden")}//!===============================================================================
function v(){a.loadMoreBtn.classList.remove("hidden")}//!===============================================================================
function c(){a.loadMoreBtn.classList.add("hidden")}//!===============================================================================
//!===============================================================================
const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),get galleryItem(){return document.querySelector(".gallery-item")}};//!===============================================================================
let n,d,m;const y=15;//!===============================================================================
a.form.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.querySelector('button[type="submit"]');if(r.disabled=!0,n=a.form.elements.search.value.trim(),d=1,!n){l.error({title:"Error",message:"Please, enter your search query to get photos.",position:"topRight"}),r.disabled=!1;return}w(),c(),S(),await g(n,d),r.disabled=!1,o.target.reset()});//!===============================================================================
async function g(o,r){try{const e=await L(o,r);if(e.hits.length===0){c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. <br>Please try again!",position:"topRight"});return}b(e.hits),m=Math.ceil(e.totalHits/y),r<m?v():(c(),l.info({title:"Info",message:"We're sorry, but you've reached the end of the results.",position:"topRight"}))}catch(e){l.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),console.error("API error:",e)}finally{q()}}//!===============================================================================
a.loadMoreBtn.addEventListener("click",async()=>{c(),d+=1,await g(n,d);const o=a.galleryItem.getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})});//!===============================================================================
//# sourceMappingURL=index.js.map
