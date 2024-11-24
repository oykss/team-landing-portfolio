import{A as P,S as $,N as A,a as S}from"./assets/vendor-ClQ9ArOj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const I=e=>new IntersectionObserver((t,o)=>{t.forEach(n=>{n.isIntersecting&&(e(),o.unobserve(n.target))})},{rootMargin:"0px 0px 800px 0px",threshold:0}),B=[{name:"Wallet webservice",image:{"1x":"/projects/1_wallet-webservice-@1x.jpg","2x":"/projects/1_wallet-webservice-@2x.jpg"}},{name:"Green harvest webservice",image:{"1x":"/projects/2_green-harvest-online-store-@1x.jpg","2x":"/projects/2_green-harvest-online-store-@2x.jpg"}},{name:"English Excellence website",image:{"1x":"/projects/3_english-excellence-webservice-@1x.jpg","2x":"/projects/3_english-excellence-webservice-@2x.jpg"}},{name:"Vyshyvanka Landing Page",image:{"1x":"/projects/4_vyshyvanka-vibes-landing-page-@1x.jpg","2x":"/projects/4_vyshyvanka-vibes-landing-page-@2x.jpg"}},{name:"Chego jewelry website",image:{"1x":"/projects/5_chego-jewelry-website-@1x.jpg","2x":"/projects/5_chego-jewelry-website-@2x.jpg"}},{name:"Energy flow webservice",image:{"1x":"/projects/6_energy-flow-webservice-@1x.jpg","2x":"/projects/6_energy-flow-webservice-@2x.jpg"}},{name:"Fruitbox online store",image:{"1x":"/projects/7_fruitbox-online-store-@1x.jpg","2x":"/projects/7_fruitbox-online-store-@2x.jpg"}},{name:"Mimino website",image:{"1x":"/projects/8_mimino-website-@1x.jpg","2x":"/projects/8_mimino-website-@2x.jpg"}},{name:"Power pulse webservice",image:{"1x":"/projects/9_power-pulse-webservice-@1x.jpg","2x":"/projects/9_power-pulse-webservice-@2x.jpg"}},{name:"Starlight studio landing",image:{"1x":"/projects/10_starlight-studio-landing-page-@1x.jpg","2x":"/projects/10_starlight-studio-landing-page-@2x.jpg"}}],h={projects:B},l="/team-landing-portfolio/",T=document.querySelector(".project-list");function v(e,t){for(let o=e;o<=t;o++){const{image:{"1x":n,"2x":s},name:r}=h.projects[o];T.innerHTML+=`
      <li class="item">
        <div class="item-img">
          <picture>
            <source
              srcset="
                ${l+n} 1x,
                 ${l+s} 2x
              "
            />
            <img
              src="${l+n}"
              width="320"
              alt="${r}"
            />
          </picture>
        </div>
        <p class="item-subtext">React, JavaScript, Node JS, Git</p>
        <div class="container-txt-btn">
          <p class="item-text">${r}</p>
          <a class="item-btn-grey" href="https://github.com/oykss/team-landing-portfolio" target="_blank" rel="noopener noreferrer">
            VISIT
            <svg class="btn-grey-icon" width="24" height="24">
              <use href="${l}/icon.svg#icon-arrow-up-right"></use>
            </svg>
          </a>
        </div>
      </li>`}}v(0,2);let d=3;const y=document.querySelector(".load-more");y.addEventListener("click",E);function E(){let e=d+2;e>=h.projects.length-1?(y.classList.add("visually-hidden"),y.removeEventListener("click",E),v(d,h.projects.length-1)):(v(d,e),d=e+1)}document.addEventListener("DOMContentLoaded",()=>{new P("#ac-list",{closeOther:!0}).open(0)});const k=document.querySelector(".swiper-wrapper"),f=document.querySelector(".error-text"),c=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next"),L=document.querySelector(".slider-icon"),C=async()=>{try{const e=await S.get("https://portfolio-js.b.goit.study/api/reviews");return f.style.display="none",e.data}catch(e){f.style.display="block",c.style.display="none",a.style.display="none",console.log(e)}},N=e=>e.map(t=>`
        <div class='swiper-slide'>
        <li class='review-card'>
            <p class='review-text'>${t.review}</p>
            <div class='author-info'>
                <img src='${t.avatar_url}' alt='${t.author}' class='review-img'/>
                <p class='review-author'>${t.author}</p>
            </div>
        </li>
        </div>
    `).join(""),W=async()=>{const e=await C();if(!e){f.style.display="block",c.style.display="none",a.style.display="none";return}const t=N(e);k.insertAdjacentHTML("beforeend",t);const o=n=>{n.isBeginning?c.classList.add("disabled"):(c.classList.remove("disabled"),c.style.transition="all .3s ease-out allow-discrete",L.style.transition="all .3s ease-out allow-discrete"),n.isEnd?(a.classList.add("disabled"),a.style.transition="all .3s ease-out allow-discrete",L.style.transition="all .3s ease-out allow-discrete"):a.classList.remove("disabled")};new $(".swiper",{modules:[A],slidesPerView:1,spaceBetween:20,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},centeredSlides:!0,on:{init:function(){o(this)},slideChange:function(){o(this)}},breakpoints:{768:{slidesPerView:1,spaceBetween:32},1280:{spaceBetween:32,centeredSlides:!1,slidesPerView:2}}})},V=I(W);V.observe(k);const _=document.querySelector("#modal"),w=document.querySelectorAll("[data-close-modal]");function H(){_.classList.add("is-open"),document.addEventListener("keydown",x),w.forEach(e=>{e.addEventListener("click",x)})}function x(e){w.forEach(t=>{(e.target===t||e.target.closest(".btn-close")===t||e.key==="Escape")&&(_.classList.remove("is-open"),document.body.style.overflow="",document.removeEventListener("keydown",closeEsc),w.forEach(o=>{o.removeEventListener("click",x)}))})}const p=document.querySelector("#cont-form");p.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector("#modal .title-modal"),o=document.querySelector("#modal .desc"),n={email:p.elements["user-email"].value.trim(),comment:p.elements["user-message"].value.trim()};try{const s=await S.post("https://portfolio-js.b.goit.study/api/requests",n);p.reset(),H(),document.body.style.overflow="hidden";const{title:r,message:i}=s.data;t.innerHTML=r,o.innerHTML=i}catch{alert("Failed to submit the form. Try again.")}});const b=document.querySelector(".mob-menu"),m=document.querySelector("#header .js-open-menu"),q=document.querySelectorAll('.mob-menu [data-close="true"]');m.addEventListener("click",M);function M(){m.classList.toggle("is-active"),b.classList.toggle("is-open"),b.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow="",q.forEach(e=>{e.addEventListener("click",O)})}function O(){document.body.style.overflow="",m.classList.remove("is-active"),b.classList.remove("is-open"),m.addEventListener("click",M),q.forEach(e=>{e.removeEventListener("click",O)})}const F=document.querySelector("html"),j=document.querySelectorAll('[name="checkbox-mod"]'),g=localStorage.getItem("theme");g&&(g==="theme-dark"?u("theme-light","theme-dark"):u("theme-dark","theme-light"),j.forEach(e=>{e.checked=g==="theme-dark"}));function u(e,t){F.classList.replace(e,t),localStorage.setItem("theme",t),j.forEach(o=>{o.checked=t==="theme-dark"})}j.forEach(e=>{e.addEventListener("change",t=>{t.target.checked?u("theme-light","theme-dark"):u("theme-dark","theme-light")})});
//# sourceMappingURL=index.js.map
