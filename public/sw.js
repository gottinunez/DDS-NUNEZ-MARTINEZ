if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/dynamic-css-manifest.json",revision:"d751713988987e9331980363e24189ce"},{url:"/_next/static/5rQ0aCzTFYm96-JWZSkt4/_buildManifest.js",revision:"8424f6123bee9c69e2405876026914b1"},{url:"/_next/static/5rQ0aCzTFYm96-JWZSkt4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/215-e64a954b9a6a872f.js",revision:"e64a954b9a6a872f"},{url:"/_next/static/chunks/250-eaec6294aba3b38a.js",revision:"eaec6294aba3b38a"},{url:"/_next/static/chunks/26770aaf-b5df95feb36a0000.js",revision:"b5df95feb36a0000"},{url:"/_next/static/chunks/371-c9b160ed030482da.js",revision:"c9b160ed030482da"},{url:"/_next/static/chunks/484.85f46eb2b84d4543.js",revision:"85f46eb2b84d4543"},{url:"/_next/static/chunks/58-96448e10b2528f9d.js",revision:"96448e10b2528f9d"},{url:"/_next/static/chunks/709.b0b813f1284bb980.js",revision:"b0b813f1284bb980"},{url:"/_next/static/chunks/7d0bf13e-82fa06556f00587e.js",revision:"82fa06556f00587e"},{url:"/_next/static/chunks/framework-8f846fc767e4b737.js",revision:"8f846fc767e4b737"},{url:"/_next/static/chunks/main-7eec8426c565f268.js",revision:"7eec8426c565f268"},{url:"/_next/static/chunks/pages/_app-0e2e9b0e2780a630.js",revision:"0e2e9b0e2780a630"},{url:"/_next/static/chunks/pages/_error-1278a20238ba183e.js",revision:"1278a20238ba183e"},{url:"/_next/static/chunks/pages/calculadora-4e2478643bfc38d7.js",revision:"4e2478643bfc38d7"},{url:"/_next/static/chunks/pages/calcularinflacion-aaf4bce28f6ec8c4.js",revision:"aaf4bce28f6ec8c4"},{url:"/_next/static/chunks/pages/index-6c12c8a4fb6ff526.js",revision:"6c12c8a4fb6ff526"},{url:"/_next/static/chunks/pages/mayorista-9f4a01277985fe40.js",revision:"9f4a01277985fe40"},{url:"/_next/static/chunks/pages/mercaderia-83d2c81a341f8fec.js",revision:"83d2c81a341f8fec"},{url:"/_next/static/chunks/pages/notificaciones-a637b421a962537e.js",revision:"a637b421a962537e"},{url:"/_next/static/chunks/pages/sobrenosotros-3e2d688016ac177d.js",revision:"3e2d688016ac177d"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-e5234f603f524ccb.js",revision:"e5234f603f524ccb"},{url:"/_next/static/css/8a7f61e543111f71.css",revision:"8a7f61e543111f71"},{url:"/_next/static/css/f97bf82c1c367e82.css",revision:"f97bf82c1c367e82"},{url:"/about.txt",revision:"e654573711a45e976eff13c39bd76aaf"},{url:"/android-chrome-192x192.png",revision:"e6dfb9f2e736033fb6c401e2bef941df"},{url:"/android-chrome-512x512.png",revision:"8a81c9ec96c0af0e0be57d3ddb019ec4"},{url:"/apple-touch-icon.png",revision:"b104c43f5c941f8d6971661a3df5c538"},{url:"/favicon-16x16.png",revision:"2b519982e21d38a40a51bda548701372"},{url:"/favicon-32x32.png",revision:"4885264fd357b154d89b0faaf127e797"},{url:"/favicon.ico",revision:"de5e726915e10132d047a18608a3dc4b"},{url:"/manifest.json",revision:"a5e1377b801235f4bfe736b9d3165bbd"},{url:"/site.webmanifest",revision:"786fb11f60f1ad04323a8c703fa1d296"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(self.origin!==e.origin)return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>self.origin===e.origin&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>self.origin!==e.origin),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
