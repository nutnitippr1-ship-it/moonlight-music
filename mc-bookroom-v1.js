(function(){
  if(window.__mcBookRoom)return;window.__mcBookRoom=1;
  var SRC='https://moonlight-city-assets.nutnitippr1.workers.dev/js/pg11b.js';
  var opener=null,loading=false,card=null;
  function getOpener(cb,fail){
    if(opener){cb(opener);return}
    if(loading)return;
    loading=true;
    fetch(SRC).then(function(r){return r.text()}).then(function(t){
      var p=t.replace("document.getElementById('cityExplorer') || document.body","document.body").replace('function openMC()','window.__mcBCopen=openMC;function openMC()');
      var s=document.createElement('script');s.textContent=p;document.head.appendChild(s);
      opener=window.__mcBCopen;loading=false;
      if(opener)cb(opener);else fail();
    }).catch(function(){loading=false;fail()});
  }
  function closeSheet(){
    var sh=document.getElementById('mcmodes-sheet');if(!sh)return;
    var bs=sh.querySelectorAll('button');
    for(var i=0;i!==bs.length;i++){if(/ปิดหน้าต่าง/.test(bs[i].textContent)){bs[i].click();return}}
    sh.style.display='none';
  }
  function make(){
    var d=document.createElement('div');d.id='mcbr-card';
    d.style.cssText='margin-top:12px;padding:12px 14px;border-radius:14px;border:3px solid rgba(232,194,122,.4);background:rgba(255,255,255,.05);color:#f1e6c9';
    var b=document.createElement('b');b.textContent='📖🎨 มุมอ่านหนังสือ · ระบายสี';d.appendChild(b);
    var p=document.createElement('div');p.style.cssText='font-size:13px;opacity:.85;margin:6px 0 10px';
    p.textContent='เลือกอ่านนิทานเล่มโปรด หรือระบายสีเบา ๆ ก่อนนอน แตะเดียวก็เติมสีให้เลย (เพลงจะหยุดพักระหว่างอ่าน)';d.appendChild(p);
    var btn=document.createElement('button');btn.type='button';
    btn.style.cssText='width:100%;padding:10px 12px;border-radius:14px;border:3px solid rgba(232,194,122,.6);background:rgba(232,194,122,.18);color:#fff3d6;font-size:15px;font-weight:700;cursor:pointer';
    btn.textContent='เปิดมุมอ่านหนังสือ · ระบายสี';
    btn.addEventListener('click',function(){
      btn.textContent='กำลังเปิด…';
      getOpener(function(open){closeSheet();setTimeout(function(){btn.textContent='เปิดมุมอ่านหนังสือ · ระบายสี';open()},150)},function(){btn.textContent='เปิดไม่สำเร็จ ลองอีกครั้งนะคะ'});
    });
    d.appendChild(btn);
    return d;
  }
  function inject(){
    var sh=document.getElementById('mcmodes-sheet');if(!sh)return;
    if(sh.querySelector('#mcbr-card'))return;
    var box=sh.querySelector('.box');if(!box)return;
    var c=make();var gq=document.getElementById('mcgq-card');
    if(gq)box.insertBefore(c,gq);else box.appendChild(c);
  }
  new MutationObserver(inject).observe(document.body,{childList:true,subtree:true});
  inject();
})();
