import{a as c,S as f,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function u(s){return(await c.get("https://pixabay.com/api/",{params:{key:"50466269-2b1f45a47ffe964456016cff3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function d(s){const r=s.map(o=>`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <ul class="image-info">
          <li class="info">Likes<p>${o.likes}</p></li>
          <li class="info">Views<p>${o.views}</p></li>
          <li class="info">Comments<p>${o.comments}</p></li>
          <li class="info">Downloads<p>${o.downloads}</p></li>
        </ul>
      </li>`).join("");i.gallery.innerHTML=r,new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){i.gallery.innerHTML=""}function p(){i.loader.classList.remove("hidden")}function y(){i.loader.classList.add("hidden")}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",async s=>{s.preventDefault();const r=i.form.elements.search.value.trim();r&&(m(),p(),await g(r))});async function g(s){try{const r=await u(s);if(r.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. <br>Please try again!",position:"topRight"});return}d(r.hits)}catch(r){l.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),console.error("API error:",r)}finally{y()}}
//# sourceMappingURL=index.js.map
