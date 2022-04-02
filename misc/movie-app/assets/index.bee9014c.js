import{c as z,o as d,a as _,d as g,u as w,b as H,r as S,e as o,f as m,g as I,w as k,h as R,i as q,j as V,k as i,U as E,l as x,m as v,n as D,t as u,F as y,p as A,q as N,s as B,v as F,x as K,y as T,z as U,A as J}from"./vendor.efc12df2.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};W();function b(e){let t=e.getDate(),n=e.getMonth()+1;const s=e.getFullYear();return t=t<10?`0${t}`:t,n=n<10?`0${n}`:n,`${s}-${n}-${t}`}function C(e,t){return t.filter(n=>e.find(s=>s.id===n&&s.name!==void 0)).map(n=>{var s;return(s=e.find(a=>a.id===n))==null?void 0:s.name})}async function Y(e={}){let t="https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57";return t+=`&page=${e.page||1}`,e.dates&&e.dates.start&&e.dates.start&&(t+=`&primary_release_date.gte=${b(e.dates.start)}&primary_release_date.lte=${b(e.dates.end)}`),await(await fetch(t)).json()}async function Q(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=f62f750b70a8ef11dad44670cfb6aa57`;return await(await fetch(t)).json()}async function X(e){const t=`https://api.themoviedb.org/3/movie/${e}/credits?api_key=f62f750b70a8ef11dad44670cfb6aa57`;return await(await fetch(t)).json()}var L={get:Y,find:Q,credits:X};async function Z(){return await(await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57")).json()}var ee={get:Z};const te=()=>({genres:[]}),se={genres:e=>e.genres},oe={async getGenres({commit:e}){const{genres:t}=await ee.get();e("setGenres",t)}},ne={setGenres(e,t){e.genres=t}};var ae={namespaced:!0,state:te,getters:se,actions:oe,mutations:ne};const ie={home:{snapshots:{},loading:!1,results:[],totalPages:0,totalResults:0,filters:{page:1,dates:{start:"",end:""}}},single:{snapshots:{},loading:!1,movie:null}},re=()=>ie,le={async getHomeMovies({commit:e,state:t}){e("setHomeLoading",!0);const n=t.home.filters;let s;const a=JSON.stringify(n);t.home.snapshots.hasOwnProperty(a)?s=t.home.snapshots[a]:(s=await L.get(n),e("setHomeSnapshot",{snapshotKey:a,data:s})),e("setHomeLoading",!1),e("setHomeMovies",s)},async getSingleMovie({commit:e,state:t},{movieId:n}){let s;t.single.snapshots.hasOwnProperty(n)?s=t.single.snapshots[n]:(s=await L.find(n),s.credits=await L.credits(n),e("setSingleMovieSnapshot",s)),e("setSingleMovie",s)}},ce={setPage(e,t){e.home.filters.page=t},setDates(e,t){e.home.filters.dates=t},setHomeLoading(e,t){e.home.loading=t},setHomeMovies(e,t){e.home.results=t.results,e.home.totalPages=t.total_pages,e.home.totalResults=t.total_results},setHomeSnapshot(e,{snapshotKey:t,data:n}){e.home.snapshots[t]=n},setSingleMovie(e,t){e.single.loading=!1,e.single.movie=t},setSingleMovieSnapshot(e,t){e.single.snapshots[t.id]=t},resetSingleMovie(e){e.single.movie=null,e.single.loading=!1}},de={movies:e=>e.home,filters:e=>e.home.filters,single:e=>e.single};var ue={namespaced:!0,state:re,getters:de,actions:le,mutations:ce},j=z({modules:{genres:ae,movies:ue}});var f=(e,t)=>{const n=e.__vccOpts||e;for(const[s,a]of t)n[s]=a;return n};const _e={};function me(e,t){return d(),_("div")}var pe=f(_e,[["render",me],["__scopeId","data-v-225bb98a"]]);const ve={class:"container-fluid"},ge={class:"container"},he=g({setup(e){const t=w();return H(()=>{t.dispatch("genres/getGenres")}),(n,s)=>{const a=S("router-view");return d(),_("main",null,[o("div",ve,[m(pe),o("div",ge,[m(a)])])])}}});var fe=f(he,[["__scopeId","data-v-016af461"]]);const $e=g({props:{movieId:{required:!0,type:Number}},setup(e){return(t,n)=>{const s=S("router-link");return d(),I(s,{to:{name:"movie-details",params:{id:e.movieId}}},{default:k(()=>[R(t.$slots,"default")]),_:3},8,["to"])}}});const ye={id:"search-box",class:"rounded"},be={class:"container"},xe={class:"row"},we={class:"col-auto me-auto"},ke=x(" Search by release date: "),Se=g({emits:["setDates","getMovies","setPage"],setup(e,{emit:t}){const s=w().getters["movies/filters"].dates,a=q([s.start,s.end]),r=c=>c[0]!==void 0&&c[1]===void 0?b(c[0]):`${b(c[0])} - ${b(c[1])}`;V(()=>a.value,c=>{Array.isArray(c)?t("setDates",...c):t("setDates","","")});const l=()=>{t("setPage",1),t("getMovies")};return(c,p)=>(d(),_("div",ye,[o("div",be,[o("div",xe,[o("div",we,[ke,m(i(E),{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=$=>a.value=$),class:"d-inline-block ms-4",format:r,"preview-format":r,range:""},null,8,["modelValue"])]),o("div",{class:"col-auto"},[o("button",{class:"btn btn-primary",onClick:l},"Search")])])])]))}});var Me=f(Se,[["__scopeId","data-v-6405440c"]]);const Pe=["src","alt"],O=g({props:{image:null,alt:null,size:null},setup(e){const t=e,n={thumb:"w300",small:"w185",medium:"w342",large:"w500",original:"original"},s=n[t.size]||n.original,a=v(()=>`https://image.tmdb.org/t/p/${s}${t.image}`);return(r,l)=>{var c;return d(),_("img",{src:i(a),alt:(c=e.alt)!=null?c:""},null,8,Pe)}}});const Le=e=>(N("data-v-41c566d2"),e=e(),B(),e),He={class:"card"},Ie={class:"row g-3"},Ne={class:"col-md-6"},Be={class:"col-md-6"},De={class:"d-flex flex-column align-items-start h-100 py-3"},Ae={class:"title mb-auto"},Ce={class:"info"},je=Le(()=>o("i",{class:"icon-calendar"},null,-1)),Oe=["datetime"],Ge={class:"genres"},ze=g({props:{movie:{type:Object,required:!0}},setup(e){const t=e,n=w(),s=v(()=>t.movie),a=n.getters["genres/genres"],r=v(()=>C(a,s.value.genre_ids));return(l,c)=>{const p=S("movie-link");return d(),_("div",He,[o("div",Ie,[o("div",Ne,[m(p,{"movie-id":i(s).id},{default:k(()=>[m(O,{image:i(s).poster_path,alt:i(s).title,size:"small",class:D("rounded-start")},null,8,["image","alt"])]),_:1},8,["movie-id"])]),o("div",Be,[o("div",De,[o("h5",Ae,[m(p,{"movie-id":i(s).id},{default:k(()=>[x(u(i(s).title),1)]),_:1},8,["movie-id"])]),o("section",Ce,[je,o("time",{class:"d-inline-block mb-3 ms-2",datetime:i(s).release_date},u(i(s).release_date),9,Oe),o("ul",Ge,[(d(!0),_(y,null,A(i(r),($,P)=>(d(),_("li",{key:P},u($),1))),128))])])])])])])}}});var Re=f(ze,[["__scopeId","data-v-41c566d2"]]);const qe=e=>(N("data-v-1d4c41c2"),e=e(),B(),e),Ve={class:"container text-center"},Ee={class:"d-flex justify-content-center"},Fe=["disabled"],Ke=qe(()=>o("span",{class:"separator"},null,-1)),Te=["disabled"],Ue=g({props:{page:{required:!0,type:Number},totalPages:{required:!0,type:Number},moviesLength:{required:!0,type:Number}},emits:["setPage","getMovies"],setup(e,{emit:t}){const n=e,s=r=>{window.scrollTo({top:0,behavior:"smooth"}),t("setPage",r),t("getMovies")},a=v(()=>{const r=(n.page-1)*20+1,l=n.moviesLength%20,c=n.page*20-l;return`${r}-${c}`});return(r,l)=>(d(),_("div",Ve,[o("div",Ee,[o("button",{disabled:e.page<=1,class:"text-end",onClick:l[0]||(l[0]=c=>s(e.page-1))},"Previous Page",8,Fe),Ke,o("button",{disabled:e.page>=e.totalPages,class:"text-start",onClick:l[1]||(l[1]=c=>s(e.page+1))},"Next Page",8,Te)]),o("p",null,"Showing results "+u(i(a)),1)]))}});var Je=f(Ue,[["__scopeId","data-v-1d4c41c2"]]);const We={},Ye={class:"text-center d-block mx-auto spinner-border text-primary",role:"status"},Qe=o("span",{class:"sr-only"},null,-1),Xe=[Qe];function Ze(e,t){return d(),_("div",Ye,Xe)}var G=f(We,[["render",Ze]]);const et={class:"container"},tt={class:"row"},st=g({setup(e){const t=w(),n=v(()=>t.getters["movies/movies"]),s=v(()=>t.getters["movies/filters"].page),a=(c,p)=>{t.commit("movies/setDates",{start:c,end:p})},r=c=>{t.commit("movies/setPage",c)},l=()=>{t.dispatch("movies/getHomeMovies")};return H(()=>{l()}),(c,p)=>(d(),_(y,null,[m(Me,{onSetDates:a,onSetPage:r,onGetMovies:l}),o("div",et,[o("div",tt,[i(n).loading===!1?(d(),_(y,{key:0},[(d(!0),_(y,null,A(i(n).results,($,P)=>(d(),_("div",{key:P,class:"col-md-4 gx-5 mb-5"},[m(Re,{movie:$},null,8,["movie"])]))),128)),m(Je,{page:i(s),"total-pages":i(n).totalPages,"movies-length":i(n).results.length,onSetPage:r,onGetMovies:l},null,8,["page","total-pages","movies-length"])],64)):(d(),I(G,{key:1}))])])],64))}});var ot=f(st,[["__scopeId","data-v-7db75aba"]]);const nt=g({props:{genres:null},setup(e){const t=e,n=j.getters["genres/genres"],s=v(()=>t.genres.reduce((r,l)=>(r.push(l.id),r),[])),a=v(()=>C(n,s.value));return(r,l)=>u(i(a).join(", "))}}),at={class:"credits"},it=o("h4",null,"Credit:",-1),rt={class:"small"},lt=g({props:{movie:null},setup(e){const t=e,n=v(()=>{let s=t.movie.credits.cast;return s.sort((a,r)=>r.popularity-a.popularity),s.reduce((a,r)=>(a.push(r.name),a),[])});return(s,a)=>(d(),_("div",at,[it,o("p",rt,[x(u(i(n).slice(0,10).join(", "))+" ",1),i(n).length>10?(d(),_(y,{key:0},[x(" and "+u(i(n).length-10)+" more.",1)],64)):F("",!0)])]))}});const h=e=>(N("data-v-5c66b164"),e=e(),B(),e),ct={key:0,class:"container"},dt={class:"info rounded d-flex justify-content-start align-items-center"},ut=h(()=>o("i",{class:"icon-left"},null,-1)),_t=x(" Back"),mt={class:"ms-5"},pt={class:"title d-inline-block"},vt={class:"tagline m-0"},gt={class:"details"},ht={class:"row"},ft={class:"col-md-4"},$t={class:"col-md-8"},yt=h(()=>o("th",null,"Budget",-1)),bt=h(()=>o("th",null,"Revenue",-1)),xt=h(()=>o("th",null,"Relase Date",-1)),wt=h(()=>o("th",null,"Runtime",-1)),kt=h(()=>o("th",null,"Score",-1)),St=h(()=>o("th",null,"Genres",-1)),Mt=h(()=>o("th",null,"IMDB Link",-1)),Pt=["href"],Lt=h(()=>o("th",null,"Homepag Link",-1)),Ht=["href"],It={class:"description p-1 mt-5"},Nt=g({setup(e){const t=K(),n=w();H(()=>{const l=t.params.id;n.commit("movies/resetSingleMovie"),n.dispatch("movies/getSingleMovie",{movieId:l})});const s=v(()=>n.getters["movies/single"]),a=l=>`$${l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"\u066C")}`,r=l=>{const c=Math.floor(l/60),p=l%60;return`${c}h ${p}m`};return(l,c)=>{const p=S("router-link");return i(s).movie!==null&&i(s).loading===!1?(d(),_("div",ct,[o("div",dt,[m(p,{class:"d-block btn btn-primary px-4",to:"/"},{default:k(()=>[ut,_t]),_:1}),o("div",mt,[o("h1",pt,u(i(s).movie.title),1),o("p",vt,u(i(s).movie.tagline),1)])]),o("div",gt,[o("div",ht,[o("div",ft,[m(O,{image:i(s).movie.poster_path,alt:i(s).movie.title,size:"large",class:D("rounded w-100")},null,8,["image","alt"])]),o("div",$t,[o("table",null,[o("tbody",null,[o("tr",null,[yt,o("td",null,u(a(i(s).movie.budget)),1)]),o("tr",null,[bt,o("td",null,u(a(i(s).movie.revenue)),1)]),o("tr",null,[xt,o("td",null,u(i(s).movie.release_date),1)]),o("tr",null,[wt,o("td",null,u(r(i(s).movie.runtime)),1)]),o("tr",null,[kt,o("td",null,u(i(s).movie.vote_average)+" ("+u(i(s).movie.vote_count)+" votes)",1)]),o("tr",null,[St,o("td",null,[m(nt,{genres:i(s).movie.genres},null,8,["genres"])])]),o("tr",null,[Mt,o("td",null,[o("a",{href:`https://www.imdb.com/title/${i(s).movie.imdb_id}`,target:"_blank"},"Link",8,Pt)])]),o("tr",null,[Lt,o("td",null,[o("a",{href:`https://www.themoviedb.org/movie/${i(s).movie.id}`,target:"_blank"},"Link",8,Ht)])])])])])])]),o("p",It,u(i(s).movie.overview),1),m(lt,{movie:i(s).movie},null,8,["movie"])])):(d(),I(G,{key:1}))}}});var Bt=f(Nt,[["__scopeId","data-v-5c66b164"]]);const Dt=[{path:"/",component:ot},{path:"/movie/:id",component:Bt,name:"movie-details"}];var At=T({history:U(),routes:Dt,scrollBehavior(e,t,n){return n||{top:0}}});const M=J(fe);M.use(At);M.use(j);M.component("MovieLink",$e);M.mount("#app");
