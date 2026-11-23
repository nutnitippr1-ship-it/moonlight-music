/* MC-KARAOKE-SKIN-PICS v1 - illustrated backgrounds for the order-song and photo tabs */
(function(){
if(window.__MCK_PICS)return;window.__MCK_PICS=1;
var BASE='https://cdn.jsdelivr.net/gh/nutnitippr1-ship-it/moonlight-music/';
var st=document.createElement('style');st.id='mck-pics-css';
st.textContent='#mck-root .mck-pic{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity .6s ease;z-index:1;pointer-events:none}'
+'#mck-root[data-tab="1"] .mck-pic.o,#mck-root[data-tab="2"] .mck-pic.p{opacity:1}'
+'#mck-root[data-tab="1"] .mck-bg>:not(.mck-pic),#mck-root[data-tab="2"] .mck-bg>:not(.mck-pic){visibility:hidden}'
+'#mck-root .mck-pic:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(8,4,20,.35),rgba(8,4,20,0) 70%)}'
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
