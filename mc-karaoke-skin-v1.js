/* MC-KARAOKE-SKIN v1 - decorates the order-song and photo tabs of the karaoke room (CSS + SVG only, no logic changes) */
(function(){
if(window.__MCK_SKIN)return;window.__MCK_SKIN=1;
var CSS=`
#mck-root{isolation:isolate}
#mck-root>*:not(.mck-bg){position:relative;z-index:1}
#mck-root .mck-bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}
#mck-root .mck-top{background:linear-gradient(180deg,rgba(20,10,35,.75),rgba(20,10,35,0));border-bottom:1px solid rgba(255,214,150,.18)}
#mck-root .mck-ttl{font-size:17px;letter-spacing:.2px;color:#ffe6bd;text-shadow:0 0 14px rgba(255,170,80,.55)}
#mck-root .mck-tabs{gap:10px;padding:12px 14px 4px;max-width:760px;margin:0 auto;width:100%;box-sizing:border-box}
#mck-root .mck-tab{display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px 9px;border-radius:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,214,150,.28);backdrop-filter:blur(6px);transition:transform .18s,box-shadow .18s,background .18s;font-size:13px}
#mck-root .mck-tab .ti{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:19px;background:radial-gradient(circle at 30% 25%,rgba(255,226,170,.35),rgba(255,160,90,.12));box-shadow:inset 0 0 0 1px rgba(255,214,150,.35)}
#mck-root .mck-tab:hover{transform:translateY(-2px)}
#mck-root .mck-tab.on{background:linear-gradient(145deg,#ffe29a,#ff9b57);color:#3a1d00;box-shadow:0 8px 26px rgba(255,150,70,.45),0 0 0 3px rgba(255,214,150,.18)}
#mck-root .mck-tab.on .ti{background:rgba(255,255,255,.55);box-shadow:none}
#mck-root .mck-body>.mck-f,#mck-root .mck-body>.mck-hero{max-width:640px;margin-left:auto;margin-right:auto}
#mck-root .mck-hero{position:relative;border-radius:22px;overflow:hidden;margin-bottom:12px;padding:18px 16px 16px;display:flex;align-items:center;gap:14px;border:1px solid rgba(255,214,150,.35);box-shadow:0 10px 30px rgba(0,0,0,.35),inset 0 0 40px rgba(255,170,90,.12)}
#mck-root .mck-hero.ord{background:linear-gradient(135deg,rgba(120,60,150,.55),rgba(255,140,90,.38))}
#mck-root .mck-hero.pho{background:linear-gradient(135deg,rgba(40,90,150,.55),rgba(255,170,100,.38))}
#mck-root .mck-hero svg{flex:0 0 96px;width:96px;height:96px;filter:drop-shadow(0 6px 14px rgba(0,0,0,.4))}
#mck-root .mck-hero h3{margin:0 0 4px;font-size:18px;color:#fff3dc;text-shadow:0 0 12px rgba(255,190,110,.6)}
#mck-root .mck-hero p{margin:0;font-size:13px;line-height:1.6;color:#ffe9cf;opacity:.95}
#mck-root .mck-hero .tag{display:inline-block;margin-top:8px;padding:3px 10px;border-radius:999px;font-size:12px;background:rgba(255,255,255,.18);border:1px solid rgba(255,230,190,.5);color:#fff3dc}
#mck-root .mck-body>.mck-f{background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.03));border:1px solid rgba(255,214,150,.22);border-radius:22px;padding:16px;backdrop-filter:blur(8px);box-shadow:0 12px 34px rgba(0,0,0,.3)}
#mck-root .mck-f label{display:block;margin:14px 0 6px;font-size:13.5px;font-weight:700;color:#ffd890;letter-spacing:.2px}
#mck-root .mck-f label:before{content:'✦ ';color:#ff9f5a}
#mck-root .mck-price{border:1px solid rgba(255,214,150,.45);border-style:solid;background:linear-gradient(135deg,rgba(255,200,120,.16),rgba(255,120,150,.10));border-radius:16px;position:relative}
#mck-root .mck-f input,#mck-root .mck-f textarea,#mck-root .mck-f select{background:rgba(10,5,22,.55);border:1px solid rgba(255,214,150,.3);transition:border-color .15s,box-shadow .15s}
#mck-root .mck-f input:focus,#mck-root .mck-f textarea:focus,#mck-root .mck-f select:focus{outline:0;border-color:#ffc474;box-shadow:0 0 0 3px rgba(255,180,100,.22),0 0 18px rgba(255,170,80,.25)}
#mck-root .mck-who button{padding:14px 8px;border-radius:18px;background:rgba(255,255,255,.05);transition:transform .15s,box-shadow .15s}
#mck-root .mck-who button:hover{transform:translateY(-2px)}
#mck-root .mck-who button.on{background:linear-gradient(145deg,rgba(255,210,122,.30),rgba(255,130,120,.20));border-color:#ffd27a;box-shadow:0 8px 24px rgba(255,160,80,.28),inset 0 0 0 1px rgba(255,230,180,.35)}
#mck-root .mck-chip{padding:9px 14px;border-radius:14px;background:rgba(255,255,255,.06);transition:transform .15s,box-shadow .15s}
#mck-root .mck-chip:hover{transform:translateY(-1px)}
#mck-root .mck-chip.on{box-shadow:0 6px 18px rgba(255,160,80,.4)}
#mck-root .mck-btn.pri{background:linear-gradient(135deg,#ffe08a,#ff8f5a);color:#3a1d00;font-weight:800;border:0;box-shadow:0 8px 22px rgba(255,140,70,.4);position:relative;overflow:hidden}
#mck-root .mck-btn.pri:after{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-20deg);animation:mckShine 3.2s infinite}
@keyframes mckShine{0%{left:-60%}55%,100%{left:130%}}
@keyframes mckSway{0%,100%{transform:rotate(-2.5deg)}50%{transform:rotate(2.5deg)}}
@keyframes mckTwinkle{0%,100%{opacity:.25}50%{opacity:1}}
#mck-root .mck-bg .moon{position:absolute;right:6%;top:70px;width:64px;height:64px;border-radius:50%;box-shadow:inset -16px 7px 0 0 #ffe9b8,0 0 50px 10px rgba(255,220,150,.28)}
#mck-root .mck-bg .lt{position:absolute;top:0;width:54px;transform-origin:50% 0;animation:mckSway 5s ease-in-out infinite;filter:drop-shadow(0 0 14px rgba(255,150,70,.55))}
#mck-root .mck-bg .sky{position:absolute;left:0;right:0;bottom:0;height:110px;background-repeat:repeat-x;background-position:center bottom;opacity:.95}
#mck-root .mck-bg .sp{position:absolute;border-radius:50%;background:#ffe9bf;animation:mckTwinkle 3s ease-in-out infinite}
@media(prefers-reduced-motion:reduce){#mck-root .mck-bg *,#mck-root .mck-btn.pri:after{animation:none!important}}
@media(max-width:520px){#mck-root .mck-hero svg{flex-basis:70px;width:70px;height:70px}#mck-root .mck-hero h3{font-size:16px}#mck-root .mck-bg .lt{width:40px}#mck-root .mck-bg .moon{width:46px;height:46px;top:64px;box-shadow:inset -11px 5px 0 0 #ffe9b8,0 0 36px 8px rgba(255,220,150,.25)}}
`;
var st=document.createElement('style');st.id='mck-skin';st.textContent=CSS;document.head.appendChild(st);
function lant(left,len,col,delay,dur){var h=len+86;return '<svg class="lt" style="left:'+left+'%;animation-delay:'+delay+'s;animation-duration:'+dur+'s" viewBox="0 0 54 '+h+'" xmlns="http://www.w3.org/2000/svg"><line x1="27" y1="0" x2="27" y2="'+len+'" stroke="#c9a46a" stroke-width="1.5"/><rect x="18" y="'+len+'" width="18" height="6" rx="2" fill="#7a4b1c"/><ellipse cx="27" cy="'+(len+34)+'" rx="22" ry="28" fill="'+col+'"/><ellipse cx="27" cy="'+(len+34)+'" rx="10" ry="24" fill="#fff0c8" opacity=".35"/><rect x="18" y="'+(len+56)+'" width="18" height="6" rx="2" fill="#7a4b1c"/><line x1="27" y1="'+(len+62)+'" x2="27" y2="'+(len+82)+'" stroke="#e8c27a" stroke-width="2"/></svg>';}
var tile='<svg xmlns="http://www.w3.org/2000/svg" width="420" height="110" viewBox="0 0 420 110"><path d="M0 110V62h34V36h40v34h38V20h36v44h42V48h40v38h40V30h38v40h40V50h40v60Z" fill="#07030f"/><g fill="#ffd27a"><rect x="10" y="74" width="6" height="8"/><rect x="48" y="46" width="6" height="8"/><rect x="60" y="80" width="6" height="8"/><rect x="128" y="34" width="6" height="8"/><rect x="150" y="76" width="6" height="8"/><rect x="214" y="60" width="6" height="8"/><rect x="262" y="42" width="6" height="8"/><rect x="302" y="86" width="6" height="8"/><rect x="330" y="44" width="6" height="8"/><rect x="372" y="64" width="6" height="8"/><rect x="396" y="84" width="6" height="8"/></g></svg>';
var ordSvg='<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle cx="48" cy="48" r="44" fill="#1c0f33" stroke="#ffd890" stroke-width="2"/><circle cx="48" cy="48" r="34" fill="none" stroke="#ffd89055" stroke-width="1"/><circle cx="48" cy="48" r="24" fill="none" stroke="#ffd89055" stroke-width="1"/><circle cx="48" cy="48" r="12" fill="#ff9f5a"/><circle cx="48" cy="48" r="3" fill="#1c0f33"/><g fill="#ffe9bf"><ellipse cx="66" cy="62" rx="7" ry="5.2" transform="rotate(-20 66 62)"/><rect x="71" y="30" width="3" height="32"/><path d="M74 30 q14 4 12 18 q-5-9-12-9z"/></g><path d="M20 24 l2 5 5 2 -5 2 -2 5 -2-5 -5-2 5-2z" fill="#ffe9bf"/></svg>';
var phoSvg='<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-9 48 52)"><rect x="12" y="14" width="56" height="68" rx="4" fill="#fff4de"/><rect x="18" y="20" width="44" height="44" rx="2" fill="#2a1a4a"/><circle cx="52" cy="32" r="5" fill="#ffe9b8"/><path d="M18 64 L18 52 L28 52 L28 44 L38 44 L38 54 L48 54 L48 48 L62 48 L62 64Z" fill="#0a0616"/><rect x="24" y="53" width="3" height="4" fill="#ffd27a"/><rect x="40" y="57" width="3" height="4" fill="#ffd27a"/></g><g transform="rotate(8 48 52)"><rect x="34" y="22" width="52" height="62" rx="4" fill="#fff9ee" stroke="#e8c98f"/><rect x="39" y="27" width="42" height="40" rx="2" fill="#ff9f5a"/><circle cx="52" cy="42" r="6" fill="#fff0d6"/><circle cx="68" cy="42" r="6" fill="#fff0d6"/><path d="M44 62 q8-14 16 0 q8-14 16 0z" fill="#7a3b2a"/></g><path d="M12 12 l2 5 5 2 -5 2 -2 5 -2-5 -5-2 5-2z" fill="#ffe9bf"/></svg>';
function mk(cls,svg,h,p,tag){var d=document.createElement('div');d.className='mck-hero '+cls;d.innerHTML=svg+'<div><h3>'+h+'</h3><p>'+p+'</p><span class="tag">'+tag+'</span></div>';return d;}
function apply(){
 var root=document.getElementById('mck-root');
 if(!root||root.querySelector('.mck-bg'))return !!(root&&root.querySelector('.mck-bg'));
 var bodies=root.querySelectorAll('.mck-body');if(bodies.length<3)return false;
 var sp='';for(var i=0;i<34;i++){var sz=2+(i%3);sp+='<i class="sp" style="left:'+((i*37)%100)+'%;top:'+(40+(i*53)%380)+'px;width:'+sz+'px;height:'+sz+'px;animation-delay:-'+((i*0.7)%3)+'s"></i>';}
 var bg=document.createElement('div');bg.className='mck-bg';
 bg.innerHTML=sp+'<div class="moon"></div>'+lant(8,20,'#ff8a4c',0,5)+lant(26,70,'#ffb347',-1.7,6.2)+lant(47,10,'#ff6f7d',-3.1,5.6)+lant(66,60,'#ffa24d',-2.2,5.8)+lant(88,28,'#ff7f5a',-.8,6.4)+'<div class="sky" style="background-image:url(&quot;data:image/svg+xml;utf8,'+encodeURIComponent(tile)+'&quot;)"></div>';
 root.insertBefore(bg,root.firstChild);
 root.querySelectorAll('.mck-tab').forEach(function(b){if(b.querySelector('.ti'))return;var m=b.textContent.trim().match(/^(\S+)\s+(.*)$/);if(!m)return;b.innerHTML='<span class="ti">'+m[1]+'</span><span>'+m[2]+'</span>';});
 bodies[1].insertBefore(mk('ord',ordSvg,'ให้ลูน่าหรือมีนาแต่งเพลงให้คนพิเศษ','เล่าเรื่องราวสั้น ๆ แล้วเราจะแต่งเป็นเพลงของเขาคนเดียว','เริ่มต้น 169 บาท · ส่งภายใน 24 ชม.'),bodies[1].firstChild);
 bodies[2].insertBefore(mk('pho',phoSvg,'ถ่ายภาพคู่กับชาวเมือง','เลือกตัวละครหรือสถานที่ที่ชอบ แล้วเลือกสไตล์ภาพได้เลย','เริ่มต้น 149 บาท · ส่งภายใน 24 ชม.'),bodies[2].firstChild);
 return true;
}
if(!apply()){var mo=new MutationObserver(function(){if(apply())mo.disconnect();});mo.observe(document.documentElement,{childList:true,subtree:true});}
})();
