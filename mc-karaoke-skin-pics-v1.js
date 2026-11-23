/* MC-KARAOKE-SKIN-PICS v2 - illustrated backgrounds for the order-song and photo tabs; top row blends into the picture */
(function(){
if(window.__MCK_PICS)return;window.__MCK_PICS=1;
var BASE='https://cdn.jsdelivr.net/gh/nutnitippr1-ship-it/moonlight-music/';
var st=document.createElement('style');st.id='mck-pics-css';
st.textContent='#mck-root .mck-pic{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity .6s ease;z-index:1;pointer-events:none}'
+'#mck-root[data-tab="1"] .mck-pic.o,#mck-root[data-tab="2"] .mck-pic.p{opacity:1}'
+'#mck-root[data-tab="1"] .mck-bg>:not(.mck-pic),#mck-root[data-tab="2"] .mck-bg>:not(.mck-pic){visibility:hidden}'
+'#mck-root .mck-pic:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(8,4,20,.35),rgba(8,4,20,0) 70%),linear-gradient(180deg,rgba(8,4,20,.5) 0,rgba(8,4,20,0) 150px)}'
+'#mck-root .mck-top{background:linear-gradient(180deg,rgba(8,4,20,.55),rgba(8,4,20,0));border-bottom:0!important;position:relative;z-index:2}'
+'#mck-root .mck-top:after{content:"";position:absolute;left:0;right:0;bottom:-26px;height:26px;background:linear-gradient(180deg,rgba(8,4,20,.25),rgba(8,4,20,0));pointer-events:none}'
+'#mck-root .mck-tabs{position:relative;z-index:2;margin-top:-4px}'
+'#mck-root .mck-tab{background:rgba(14,8,32,.38);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}'
+'#mck-root .mck-tab.on{background:linear-gradient(145deg,#ffe29a,#ff9b57)}'
+'#mck-root .mck-body{background:transparent}'
+'#mck-root[data-tab="1"] .mck-body>.mck-f,#mck-root[data-tab="2"] .mck-body>.mck-f{background:linear-gradient(180deg,rgba(14,8,32,.62),rgba(14,8,32,.5));-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}'
+'@media(max-width:700px){#mck-root .mck-pic{background-position:30% center}}';
document.head.appendChild(st);
var tries=0;
var iv=setInterval(function(){
 tries++;if(tries>240){clearInterval(iv);return;}
 var root=document.getElementById('mck-root');if(!root)return;
 var bg=root.querySelector('.mck-bg');var tabs=root.querySelectorAll('.mck-tab');
 if(!bg||tabs.length<3)return;
 clearInterval(iv);
 var o=document.createElement('div');o.className='mck-pic o';
 var p=document.createElement('div');p.className='mck-pic p';
 bg.appendChild(o);bg.appendChild(p);
 function sync(){
  var i=-1;tabs.forEach(function(t,k){if(t.classList.contains('on'))i=k;});
  root.setAttribute('data-tab',i);
  if(i===1&&!o.style.backgroundImage)o.style.backgroundImage='url("'+BASE+'mck-bg-music.webp")';
  if(i===2&&!p.style.backgroundImage)p.style.backgroundImage='url("'+BASE+'mck-bg-photo.webp")';
 }
 var mo=new MutationObserver(sync);
 tabs.forEach(function(t){mo.observe(t,{attributes:true,attributeFilter:['class']});});
 sync();
},500);
})();
