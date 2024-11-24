import{A as $,S as A,N as I,a as L}from"./assets/vendor-ClQ9ArOj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const B=e=>new IntersectionObserver((t,r)=>{t.forEach(n=>{n.isIntersecting&&(e(),r.unobserve(n.target))})},{rootMargin:"0px 0px 800px 0px",threshold:0}),T=[{name:"Wallet webservice",image:{"1x":"/projects/1_wallet-webservice-@1x.jpg","2x":"/projects/1_wallet-webservice-@2x.jpg"}},{name:"Green harvest webservice",image:{"1x":"/projects/2_green-harvest-online-store-@1x.jpg","2x":"/projects/2_green-harvest-online-store-@2x.jpg"}},{name:"English Excellence website",image:{"1x":"/projects/3_english-excellence-webservice-@1x.jpg","2x":"/projects/3_english-excellence-webservice-@2x.jpg"}},{name:"Vyshyvanka Landing Page",image:{"1x":"/projects/4_vyshyvanka-vibes-landing-page-@1x.jpg","2x":"/projects/4_vyshyvanka-vibes-landing-page-@2x.jpg"}},{name:"Chego jewelry website",image:{"1x":"/projects/5_chego-jewelry-website-@1x.jpg","2x":"/projects/5_chego-jewelry-website-@2x.jpg"}},{name:"Energy flow webservice",image:{"1x":"/projects/6_energy-flow-webservice-@1x.jpg","2x":"/projects/6_energy-flow-webservice-@2x.jpg"}},{name:"Fruitbox online store",image:{"1x":"/projects/7_fruitbox-online-store-@1x.jpg","2x":"/projects/7_fruitbox-online-store-@2x.jpg"}},{name:"Mimino website",image:{"1x":"/projects/8_mimino-website-@1x.jpg","2x":"/projects/8_mimino-website-@2x.jpg"}},{name:"Power pulse webservice",image:{"1x":"/projects/9_power-pulse-webservice-@1x.jpg","2x":"/projects/9_power-pulse-webservice-@2x.jpg"}},{name:"Starlight studio landing",image:{"1x":"/projects/10_starlight-studio-landing-page-@1x.jpg","2x":"/projects/10_starlight-studio-landing-page-@2x.jpg"}}],h={projects:T},l="/team-landing-portfolio/",C=document.querySelector(".project-list");function v(e,t){for(let r=e;r<=t;r++){const{image:{"1x":n,"2x":s},name:o}=h.projects[r];C.innerHTML+=`
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
              alt="${o}"
            />
          </picture>
        </div>
        <p class="item-subtext">React, JavaScript, Node JS, Git</p>
        <div class="container-txt-btn">
          <p class="item-text">${o}</p>
          <a class="item-btn-grey" href="https://github.com/oykss/team-landing-portfolio" target="_blank" rel="noopener noreferrer">
            VISIT
            <svg class="btn-grey-icon" width="24" height="24">
              <use href="${l}/icon.svg#icon-arrow-up-right"></use>
            </svg>
          </a>
        </div>
      </li>`}}v(0,2);let d=3;const y=document.querySelector(".load-more");y.addEventListener("click",S);function S(){let e=d+2;e>=h.projects.length-1?(y.classList.add("visually-hidden"),y.removeEventListener("click",S),v(d,h.projects.length-1)):(v(d,e),d=e+1)}document.addEventListener("DOMContentLoaded",()=>{new $("#ac-list",{closeOther:!0}).open(0)});const E=document.querySelector(".swiper-wrapper"),f=document.querySelector(".error-text"),c=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next"),j=document.querySelector(".slider-icon"),N=async()=>{try{const e=await L.get("https://portfolio-js.b.goit.study/api/reviews");return f.style.display="none",e.data}catch(e){f.style.display="block",c.style.display="none",a.style.display="none",console.log(e)}},W=e=>e.map(t=>`
        <div class='swiper-slide'>
        <li class='review-card'>
            <p class='review-text'>${t.review}</p>
            <div class='author-info'>
                <img src='${t.avatar_url}' alt='${t.author}' class='review-img'/>
                <p class='review-author'>${t.author}</p>
            </div>
        </li>
        </div>
    `).join(""),V=async()=>{const e=await N();if(!e){f.style.display="block",c.style.display="none",a.style.display="none";return}const t=W(e);E.insertAdjacentHTML("beforeend",t);const r=n=>{n.isBeginning?c.classList.add("disabled"):(c.classList.remove("disabled"),c.style.transition="all .3s ease-out allow-discrete",j.style.transition="all .3s ease-out allow-discrete"),n.isEnd?(a.classList.add("disabled"),a.style.transition="all .3s ease-out allow-discrete",j.style.transition="all .3s ease-out allow-discrete"):a.classList.remove("disabled")};new A(".swiper",{modules:[I],slidesPerView:1,spaceBetween:20,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},centeredSlides:!0,on:{init:function(){r(this)},slideChange:function(){r(this)}},breakpoints:{768:{slidesPerView:1,spaceBetween:32},1280:{spaceBetween:32,centeredSlides:!1,slidesPerView:2}}})},H=B(V);H.observe(E);const k=document.querySelector("#modal"),_=document.querySelectorAll("[data-close-modal]");function F(){k.classList.add("is-open"),_.forEach(e=>{e.addEventListener("click",x),document.addEventListener("keydown",q)})}function x(){k.classList.remove("is-open"),document.body.style.overflow="",_.forEach(e=>{e.removeEventListener("click",x),document.removeEventListener("keydown",q)})}function q(e){e.key==="Escape"&&x()}const m=document.querySelector("#cont-form");m.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector("#modal .title-modal"),r=document.querySelector("#modal .desc"),n={email:m.elements["user-email"].value.trim(),comment:m.elements["user-message"].value.trim()};try{const s=await L.post("https://portfolio-js.b.goit.study/api/requests",n);m.reset(),F(),document.body.style.overflow="hidden";const{title:o,message:i}=s.data;t.innerHTML=o,r.innerHTML=i}catch{alert("Failed to submit the form. Try again.")}});const w=document.querySelector(".mob-menu"),p=document.querySelector("#header .js-open-menu"),M=document.querySelectorAll('.mob-menu [data-close="true"]');p.addEventListener("click",O);function O(){p.classList.toggle("is-active"),w.classList.toggle("is-open"),w.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow="",M.forEach(e=>{e.addEventListener("click",P)})}function P(){document.body.style.overflow="",p.classList.remove("is-active"),w.classList.remove("is-open"),p.addEventListener("click",O),M.forEach(e=>{e.removeEventListener("click",P)})}const R=document.querySelector("html"),b=document.querySelectorAll('[name="checkbox-mod"]'),g=localStorage.getItem("theme");g&&(g==="theme-dark"?u("theme-light","theme-dark"):u("theme-dark","theme-light"),b.forEach(e=>{e.checked=g==="theme-dark"}));function u(e,t){R.classList.replace(e,t),localStorage.setItem("theme",t),b.forEach(r=>{r.checked=t==="theme-dark"})}b.forEach(e=>{e.addEventListener("change",t=>{t.target.checked?u("theme-light","theme-dark"):u("theme-dark","theme-light")})});
//# sourceMappingURL=index.js.map
