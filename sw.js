if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const o=e=>c(e,r),f={module:{uri:r},exports:d,require:o};s[r]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(n(...e),d)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1095de7a.js",revision:null},{url:"esprima.js",revision:"8fed543d06ce3a5eac20f4deacb6177f"},{url:"font/css/all.css",revision:"0d53db1c860eecc1f13b2105eaeda46b"},{url:"font/css/all.min.css",revision:"84d8ad2b4fcdc0f0c58247e778133b3a"},{url:"font/css/brands.css",revision:"6f401ab29d7a4d8dd943cae0d87f8362"},{url:"font/css/brands.min.css",revision:"733eb07cd729deb0cbeb98919af9eaa6"},{url:"font/css/font-awesome.css",revision:"4dce5bbb129034eed4e25f00baabd8b3"},{url:"font/css/fontawesome.min.css",revision:"567d8b2f1f8aa898ec16c59083c8883e"},{url:"font/css/regular.css",revision:"ed3b07cc320e884328bfcea970eda92d"},{url:"font/css/regular.min.css",revision:"937d314b8b94ec1519066e40f410489e"},{url:"font/css/solid.css",revision:"6b60bef98ded7f1d3b6cd3b662268423"},{url:"font/css/solid.min.css",revision:"eaff8f91a0fa41a4237d2dd86a77163d"},{url:"font/css/svg-with-js.css",revision:"e1473a28b6a842076684e0cecbb1fe4b"},{url:"font/css/svg-with-js.min.css",revision:"9fdb84996e7caf24e943507643203ef4"},{url:"font/css/v4-shims.css",revision:"151e4dc384ff258463dba3f06b6274f6"},{url:"font/css/v4-shims.min.css",revision:"6594c66c112461991bc746527d86004b"},{url:"font/flaticon.css",revision:"8b8dc13aed171090163aa98b2649d03c"},{url:"font/flaticon.html",revision:"5f20ae6ecb5c9fc629caffd9531bb84d"},{url:"freesound.js",revision:"4a04e8523fa14ca233839819d4c00dc8"},{url:"hydra-synth-strudel.js",revision:"ecdc091318a0b9fe036cb212145a7a35"},{url:"index.html",revision:"c673c81331b05d65687394e639de09e8"},{url:"registerSW.js",revision:"51d159dcceba47dada0451178607e0e0"},{url:"styles/codemirror.css",revision:"288352df06a67ee35003b0981da414ac"},{url:"styles/tachyons-extended.css",revision:"c46cb572fbf0f2d9b29500fcc1fb8ad0"},{url:"styles/tomorrow-night-eighties.css",revision:"dfdb51cf18e52fc88b8865c89ab7f40b"},{url:"favicon.ico",revision:"545f392acc1f3d0bc9ee0d7727773ba3"},{url:"apple-touch-icon.png",revision:"908615791390a013b662320bb9da6a5e"},{url:"icon-192x192.png",revision:"2968e156fc2731b9cbbe192f421f75d4"},{url:"icon-512x512.png",revision:"89edc0b3034263a1a415cd9d7b895b28"},{url:"manifest.webmanifest",revision:"1c774a3308366c9d1b9db8ee602cd374"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
