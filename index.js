import{a as y,S as g,i as u}from"./assets/vendor-DvfmeZXB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function h(o,a){return(await y.get("https://pixabay.com/api/",{params:{key:"50466269-2b1f45a47ffe964456016cff3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}})).data}//!===============================================================================
function L(o){const a=o.map(r=>`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <ul class="image-info">
          <li class="info">Likes<p>${r.likes}</p></li>
          <li class="info">Views<p>${r.views}</p></li>
          <li class="info">Comments<p>${r.comments}</p></li>
          <li class="info">Downloads<p>${r.downloads}</p></li>
        </ul>
      </li>`).join("");i.gallery.insertAdjacentHTML("beforeend",a),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}//!===============================================================================
function w(){i.gallery.innerHTML=""}//!===============================================================================
function b(){i.loader.classList.remove("hidden")}//!===============================================================================
function S(){i.loader.classList.add("hidden")}//!===============================================================================
function M(){i.loadMoreBtn.classList.remove("hidden")}//!===============================================================================
function P(){i.loadMoreBtn.classList.add("hidden")}//!===============================================================================
function d(){n<f?M():P()}//!===============================================================================
//!===============================================================================
const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};//!===============================================================================
let l,n,f;const m=15;//!===============================================================================
i.form.addEventListener("submit",async o=>{o.preventDefault(),l=i.form.elements.search.value.trim(),n=1,d(),l&&(w(),b(),await p(l,n),o.target.reset())});//!===============================================================================
async function p(o,a){try{const s=await h(o,a);if(s.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. <br>Please try again!",position:"topRight"});return}L(s.hits),f=Math.ceil(s.total/m),d()}catch(s){u.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),console.error("API error:",s)}finally{S()}}//!===============================================================================
i.loadMoreBtn.addEventListener("click",async()=>{n+=1,d(),await p(l,n)});//!===============================================================================
//# sourceMappingURL=index.js.map
