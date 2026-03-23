(function(){
  var host = document.getElementById("nyifc-schedule-root");
  if(!host) return;
  var shadow = host.attachShadow({mode:"open"});

  var GAMES=[
    {d:"2025-09-07",t:"2:00 PM",o:"Brooklyn City FC",l:"Bush Terminal Piers Park",h:"away",r:"draw",s:"2 - 2",m:"csl2",ml:"CSL"},
    {d:"2025-09-14",t:"4:00 PM",o:"Williamsburg International FC",l:"Bushwick Inlet",h:"away",r:"draw",s:"1 - 1",m:"csl2",ml:"CSL"},
    {d:"2025-09-21",t:"10:00 AM",o:"NY Finest FC",l:"Flushing Meadows - Field 9",h:"away",r:"win",s:"1 - 4",m:"csl2",ml:"CSL"},
    {d:"2025-09-28",t:"5:00 PM",o:"Kickoff FC",l:"College Point Field",h:"home",r:"draw",s:"1 - 1",m:"csl2",ml:"CSL"},
    {d:"2025-10-05",t:"5:00 PM",o:"SC Eintracht",l:"College Point Field",h:"home",r:"win",s:"3 - 2",m:"csl2",ml:"CSL"},
    {d:"2025-10-11",t:"8:00 PM",o:"Yemen United SC",l:"Randalls Island - Field 75",h:"away",r:"win",s:"2 - 4",m:"csl2",ml:"CSL"},
    {d:"2025-10-26",t:"4:00 PM",o:"ERFC",l:"Randalls Island - Field 70",h:"home",r:"win",s:"3 - 1",m:"csl2",ml:"CSL"},
    {d:"2025-11-01",t:"8:00 PM",o:"FC Japan",l:"Randall's Island - Field 74",h:"home",r:"win",s:"1 - 0",m:"csl2",ml:"CSL"},
    {d:"2025-11-16",t:"12:00 PM",o:"Central Park Rangers Lower East",l:"Randalls Island - Field 72",h:"home",r:"win",s:"7 - 1",m:"csl2",ml:"CSL"},
    {d:"2025-11-23",t:"7:30 PM",o:"Sporting Astoria South Bronx United",l:"Soundview Park",h:"away",r:"draw",s:"2 - 2",m:"csl2",ml:"CSL"},
    {d:"2026-03-08",t:"12:00 PM",o:"Stal Mielec NY",l:"Randalls Island - Field 72",h:"home",r:"loss",s:"1 - 4",m:"csl2",ml:"CSL"},
    {d:"2026-03-15",t:"10:00 AM",o:"Vllaznia NYC",l:"Mccarren Park",h:"home",r:"win",s:"3 - 0",m:"csl2",ml:"CSL"},
    {d:"2026-03-26",t:"8:00 PM",o:"NY Galicia",l:"Randalls Island - Field 70",h:"home",r:"upcoming",s:"",m:"csl2",ml:"CSL"},
    {d:"2026-03-29",t:"4:00 PM",o:"Vibes FC",l:"Randalls Island - Field 82",h:"away",r:"upcoming",s:"",m:"csl2",ml:"CSL"},
    {d:"2026-04-12",t:"TBD",o:"NY Shamrocks",l:"TBD",h:"away",r:"upcoming",s:"",m:"csl2",ml:"CSL"},
    {d:"2026-04-26",t:"TBD",o:"Vllaznia NYC",l:"TBD",h:"away",r:"upcoming",s:"",m:"csl2",ml:"CSL"},
    {d:"2026-05-03",t:"4:00 PM",o:"SC Eintracht",l:"Russo Farm Field",h:"away",r:"upcoming",s:"",m:"csl2",ml:"CSL"},
    {d:"2026-05-17",t:"TBD",o:"NY Finest FC",l:"TBD",h:"home",r:"upcoming",s:"",m:"csl2",ml:"CSL"},
    {d:"2025-09-07",t:"12:00 PM",o:"Brooklyn City FC II",l:"Bush Terminal Piers Park",h:"away",r:"win",s:"0 - 8",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-09-14",t:"2:00 PM",o:"Williamsburg International FC II",l:"Bushwick Inlet",h:"away",r:"draw",s:"3 - 3",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-09-21",t:"8:00 AM",o:"NY Finest FC II",l:"Flushing Meadows - Field 9",h:"away",r:"loss",s:"6 - 1",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-09-28",t:"3:00 PM",o:"Kickoff FC II",l:"College Point Field",h:"home",r:"win",s:"2 - 0",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-10-05",t:"3:00 PM",o:"SC Eintracht II",l:"College Point Field",h:"home",r:"loss",s:"2 - 3",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-10-11",t:"6:00 PM",o:"Yemen United SC II",l:"Randalls Island - Field 75",h:"away",r:"win",s:"1 - 7",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-10-26",t:"2:00 PM",o:"ERFC II",l:"Randall's Island - Field 70",h:"home",r:"win",s:"4 - 0",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-11-01",t:"6:00 PM",o:"FC Japan II",l:"Randall's Island - Field 74",h:"home",r:"win",s:"3 - 0",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-11-16",t:"10:00 AM",o:"Central Park Rangers Lower East II",l:"Randalls Island - Field 72",h:"home",r:"draw",s:"3 - 3",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-11-23",t:"5:30 PM",o:"Sporting Astoria South Bronx United II",l:"Soundview Park",h:"away",r:"draw",s:"3 - 3",m:"csl2r",ml:"CSL Reserve"},
    {d:"2026-03-08",t:"10:00 AM",o:"Stal Mielec NY II",l:"Randalls Island - Field 72",h:"home",r:"win",s:"5 - 1",m:"csl2r",ml:"CSL Reserve"},
    {d:"2026-03-15",t:"8:00 AM",o:"Vllaznia NYC II",l:"Mccarren Park",h:"home",r:"win",s:"3 - 1",m:"csl2r",ml:"CSL Reserve"},
    {d:"2026-03-24",t:"9:00 PM",o:"NY Galicia II",l:"Randall's Island - Field 74",h:"home",r:"upcoming",s:"",m:"csl2r",ml:"CSL Reserve"},
    {d:"2026-03-29",t:"2:00 PM",o:"Vibes FC II",l:"Randalls Island - Field 82",h:"away",r:"upcoming",s:"",m:"csl2r",ml:"CSL Reserve"},
    {d:"2026-04-12",t:"TBD",o:"NY Shamrocks II",l:"TBD",h:"away",r:"upcoming",s:"",m:"csl2r",ml:"CSL Reserve"},
    {d:"2026-04-26",t:"TBD",o:"Vllaznia NYC II",l:"TBD",h:"away",r:"upcoming",s:"",m:"csl2r",ml:"CSL Reserve"},
    {d:"2026-05-03",t:"2:00 PM",o:"SC Eintracht II",l:"Russo Farm Field",h:"away",r:"upcoming",s:"",m:"csl2r",ml:"CSL Reserve"},
    {d:"2026-05-17",t:"TBD",o:"NY Finest FC II",l:"TBD",h:"home",r:"upcoming",s:"",m:"csl2r",ml:"CSL Reserve"},
    {d:"2025-09-07",t:"4:00 PM",o:"SC Vistula Garfield",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"win",s:"3 - 2",m:"apsl",ml:"APSL"},
    {d:"2025-09-14",t:"7:30 PM",o:"Zum Schneider FC 03",l:"Roosevelt Island - Jack Mcmanus Field",h:"away",r:"win",s:"1 - 3",m:"apsl",ml:"APSL"},
    {d:"2025-09-21",t:"4:00 PM",o:"Doxa FCW",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"win",s:"3 - 2",m:"apsl",ml:"APSL"},
    {d:"2025-09-28",t:"7:00 PM",o:"Leros SC",l:"Susa Orlin & Cohen Sports Complex - Field 1",h:"away",r:"loss",s:"2 - 1",m:"apsl",ml:"APSL"},
    {d:"2025-10-05",t:"4:00 PM",o:"NY Pancyprian Freedoms",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"loss",s:"1 - 4",m:"apsl",ml:"APSL"},
    {d:"2025-10-14",t:"8:30 PM",o:"Lansdowne Yonkers FC",l:"Tibbetts Brook Park - Field 3",h:"away",r:"loss",s:"4 - 0",m:"apsl",ml:"APSL"},
    {d:"2025-10-26",t:"4:00 PM",o:"Hoboken FC 1912",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"loss",s:"0 - 2",m:"apsl",ml:"APSL"},
    {d:"2025-11-02",t:"12:15 PM",o:"NY Athletic Club",l:"Travers Island",h:"away",r:"win",s:"1 - 2",m:"apsl",ml:"APSL"},
    {d:"2025-11-16",t:"4:00 PM",o:"Central Park Rangers FC",l:"Roosevelt Island - Jack Mcmanus Field",h:"away",r:"draw",s:"2 - 2",m:"apsl",ml:"APSL"},
    {d:"2025-11-23",t:"2:30 PM",o:"NY Greek Americans",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"loss",s:"1 - 4",m:"apsl",ml:"APSL"},
    {d:"2026-01-11",t:"1:00 PM",o:"Richmond County FC",l:"Owl Hollow Field",h:"away",r:"loss",s:"4 - 2",m:"apsl",ml:"APSL"},
    {d:"2026-03-08",t:"2:00 PM",o:"NY Pancyprian Freedoms",l:"Queens College",h:"away",r:"loss",s:"4 - 0",m:"apsl",ml:"APSL"},
    {d:"2026-03-15",t:"8:00 PM",o:"Doxa FCW",l:"Joseph F. Fosina Field",h:"away",r:"loss",s:"5 - 1",m:"apsl",ml:"APSL"},
    {d:"2026-03-19",t:"8:00 PM",o:"NY Greek Americans",l:"Hofstra University Soccer Stadium",h:"away",r:"draw",s:"2 - 2",m:"apsl",ml:"APSL"},
    {d:"2026-03-22",t:"7:30 PM",o:"NY Athletic Club",l:"Joseph F. Fosina Field",h:"home",r:"upcoming",s:"",m:"apsl",ml:"APSL"},
    {d:"2026-03-29",t:"11:00 AM",o:"Zum Schneider FC 03",l:"Randalls Island - Icahn Stadium",h:"home",r:"upcoming",s:"",m:"apsl",ml:"APSL"},
    {d:"2026-04-12",t:"2:30 PM",o:"Lansdowne Yonkers FC",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"upcoming",s:"",m:"apsl",ml:"APSL"},
    {d:"2026-04-19",t:"2:30 PM",o:"Central Park Rangers FC",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"upcoming",s:"",m:"apsl",ml:"APSL"},
    {d:"2026-04-26",t:"4:00 PM",o:"Hoboken FC 1912",l:"Laurel Hill Park",h:"away",r:"upcoming",s:"",m:"apsl",ml:"APSL"},
    {d:"2026-05-03",t:"2:30 PM",o:"Leros SC",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"upcoming",s:"",m:"apsl",ml:"APSL"},
    {d:"2026-05-16",t:"TBD",o:"Richmond County FC",l:"Roosevelt Island - Jack Mcmanus Field",h:"home",r:"upcoming",s:"",m:"apsl",ml:"APSL"},
    {d:"2026-05-16",t:"TBD",o:"SC Vistula Garfield",l:"Garfield High School",h:"away",r:"upcoming",s:"",m:"apsl",ml:"APSL"}
  ];

  var MN=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var DS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var aT=new Set(["csl2","csl2r","apsl"]);
  var tc={"csl2":"tc1","csl2r":"tc2","apsl":"tc3"};
  var cc={"csl2":"c1","csl2r":"c2","apsl":"c3"};
  var cY,cM;

  function pD(s){var p=s.split("-").map(Number);return new Date(p[0],p[1]-1,p[2]);}
  function sD(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();}
  function tD(){var n=new Date();return new Date(n.getFullYear(),n.getMonth(),n.getDate());}
  function fG(){return GAMES.filter(function(g){return aT.has(g.m);});}

  function mkCard(g){
    var d=pD(g.d),ms=MN[d.getMonth()].slice(0,3).toUpperCase(),dn=d.getDate(),wd=DS[d.getDay()];
    var mt='<span class="bd '+(g.h==="home"?"hm":"aw")+'">'+g.h+'</span>';
    if(g.r!=="upcoming"){
      var rl=g.r==="win"?"Win":g.r==="loss"?"Loss":"Draw";
      var rc=g.r==="win"?"w":g.r==="loss"?"l":"d";
      mt+='<span class="rb '+rc+'">'+rl+'</span><span class="st">'+g.s+'</span>';
    }
    var pf=g.h==="away"?"@ ":"vs ";
    return '<div class="gc '+tc[g.m]+'"><div class="gd"><span class="gm">'+ms+'</span><span class="gdy">'+dn+'</span><span class="gw">'+wd+'</span></div><div class="gi"><div class="go">'+pf+g.o+'</div><div class="gdt">'+g.t+(g.l!=="TBD"?" \u00b7 "+g.l:"")+'</div><div class="gtl '+cc[g.m]+'">'+g.ml+'</div></div><div class="gme">'+mt+'</div></div>';
  }

  function initCM(){
    var u=fG().filter(function(g){return g.r==="upcoming";});
    if(u.length){var fd=pD(u[0].d);cY=fd.getFullYear();cM=fd.getMonth();}
    else{var n=new Date();cY=n.getFullYear();cM=n.getMonth();}
  }
  initCM();

  function rCal(){
    shadow.querySelector("#nml").textContent=MN[cM]+" "+cY;
    var f1=new Date(cY,cM,1).getDay(),dm=new Date(cY,cM+1,0).getDate(),dp=new Date(cY,cM,0).getDate();
    var td=tD(),gs=fG();
    var ht="";
    DS.forEach(function(d){ht+='<div class="cdh">'+d+'</div>';});
    var i;
    for(i=f1-1;i>=0;i--){ht+='<div class="cc ou"><span class="dn">'+(dp-i)+'</span></div>';}
    var day;
    for(day=1;day<=dm;day++){
      var cd=new Date(cY,cM,day),it=sD(cd,td);
      var dg=gs.filter(function(g){return sD(pD(g.d),cd);});
      var ev="";
      if(dg.length){
        ev='<div class="ces">';
        dg.forEach(function(g){
          var pf=g.h==="home"?"vs ":"@ ";
          var ts=g.t!=="TBD"?g.t:"TBD";
          ev+='<div class="ce '+tc[g.m]+'" data-o="'+g.o+'" data-t="'+g.t+'" data-l="'+g.l+'" data-h="'+g.h+'" data-r="'+g.r+'" data-s="'+g.s+'" data-ml="'+g.ml+'" data-m="'+g.m+'"><span class="et">'+ts+'</span> '+pf+g.o+'</div>';
        });
        ev+='</div>';
      }
      ht+='<div class="cc'+(it?" td":"")+'"><span class="dn">'+day+'</span>'+ev+'</div>';
    }
    var tot=f1+dm,rem=(7-(tot%7))%7;
    for(i=1;i<=rem;i++){ht+='<div class="cc ou"><span class="dn">'+i+'</span></div>';}
    shadow.querySelector("#ncg").innerHTML=ht;
  }

  function rAll(){
    var gs=fG();
    var up=gs.filter(function(g){return g.r==="upcoming";}).sort(function(a,b){return a.d.localeCompare(b.d);});
    var pa=gs.filter(function(g){return g.r!=="upcoming";}).sort(function(a,b){return b.d.localeCompare(a.d);});
    shadow.querySelector("#nul").innerHTML=up.length?up.map(mkCard).join(""):'<p class="em">No upcoming games for selected teams.</p>';
    shadow.querySelector("#nrl").innerHTML=pa.length?pa.map(mkCard).join(""):'<p class="em">No results for selected teams.</p>';
    rCal();
  }

  var css='@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");'
    +':host{all:initial;display:block;}'
    +'*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}'
    +'.root{font-family:"Poppins",sans-serif;background:#0d0d0d;color:#fff;line-height:1.5;-webkit-font-smoothing:antialiased;max-width:920px;margin:0 auto;padding:24px 16px;}'
    +'.sh{text-align:center;margin-bottom:24px;}'
    +'.sh h2{font-size:28px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#C9A84C;margin-bottom:4px;}'
    +'.sh .sn{font-size:13px;font-weight:600;color:rgba(255,255,255,0.35);letter-spacing:2.5px;text-transform:uppercase;}'
    +'.fr{display:flex;justify-content:center;gap:6px;margin-bottom:20px;flex-wrap:wrap;}'
    +'.fb{background:#151515;border:1px solid #222;color:rgba(255,255,255,0.5);font-family:"Poppins",sans-serif;font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:6px 14px;border-radius:6px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:6px;}'
    +'.fb:hover{border-color:rgba(255,255,255,0.25);color:#fff;}'
    +'.fb.ac{border-color:rgba(255,255,255,0.5);color:#fff;background:#1a1a1a;}'
    +'.fb .dt{width:8px;height:8px;border-radius:50%;flex-shrink:0;}'
    +'.fb.ac .dt{opacity:1;}.fb:not(.ac) .dt{opacity:0.4;}'
    +'.tr{display:flex;justify-content:center;gap:4px;margin-bottom:24px;}'
    +'.tb{background:#151515;border:1px solid #222;color:rgba(255,255,255,0.5);font-family:"Poppins",sans-serif;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;padding:8px 20px;border-radius:6px;cursor:pointer;transition:all 0.2s;}'
    +'.tb:hover{border-color:rgba(201,168,76,0.4);color:#fff;}'
    +'.tb.ac{background:#C9A84C;border-color:#C9A84C;color:#0d0d0d;}'
    +'.cn{display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:16px;}'
    +'.cn button{background:#151515;border:1px solid #222;color:#fff;width:32px;height:32px;border-radius:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s,border-color 0.2s;font-size:14px;}'
    +'.cn button:hover{background:#1a1a1a;border-color:#C9A84C;}'
    +'.cn .ml{font-size:15px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;min-width:180px;text-align:center;}'
    +'.cg{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:#222;border:1px solid #222;border-radius:6px;overflow:hidden;margin-bottom:16px;}'
    +'.cdh{background:#151515;padding:8px 4px;text-align:center;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.5);}'
    +'.cc{background:#0d0d0d;min-height:76px;padding:5px;display:flex;flex-direction:column;overflow:hidden;min-width:0;}'
    +'.cc.ou{opacity:0.25;}.cc .dn{font-size:11px;font-weight:500;color:rgba(255,255,255,0.5);margin-bottom:3px;}'
    +'.cc.td .dn{color:#C9A84C;font-weight:700;}.cc.td{background:rgba(201,168,76,0.15);}'
    +'.ces{display:flex;flex-direction:column;gap:2px;margin-top:auto;min-width:0;}'
    +'.ce{font-size:8px;font-weight:500;padding:2px 4px;border-radius:3px;line-height:1.3;cursor:pointer;transition:opacity 0.2s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;display:block;}'
    +'.ce:hover{opacity:0.8;}'
    +'.ce.tc1{background:#C9A84C;color:#0d0d0d;}.ce.tc2{background:#5B9BD5;color:#0d0d0d;}.ce.tc3{background:#E07C4F;color:#0d0d0d;}'
    +'.ce .et{font-weight:700;}'
    +'.lg{display:flex;gap:20px;justify-content:center;margin-bottom:32px;flex-wrap:wrap;}'
    +'.li{display:flex;align-items:center;gap:6px;font-size:10px;font-weight:500;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.5);}'
    +'.ls{width:12px;height:12px;border-radius:3px;}'
    +'.gl{display:flex;flex-direction:column;gap:8px;margin-bottom:24px;}'
    +'.gc{display:grid;grid-template-columns:64px 1fr auto;align-items:center;gap:14px;background:#151515;border:1px solid #222;border-radius:6px;padding:12px 14px;transition:border-color 0.2s;border-left:3px solid #222;}'
    +'.gc:hover{border-color:rgba(201,168,76,0.4);}'
    +'.gc.tc1{border-left-color:#C9A84C;}.gc.tc2{border-left-color:#5B9BD5;}.gc.tc3{border-left-color:#E07C4F;}'
    +'.gd{display:flex;flex-direction:column;align-items:center;text-align:center;}'
    +'.gd .gm{font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#C9A84C;}'
    +'.gd .gdy{font-size:22px;font-weight:700;line-height:1.1;color:#fff;}'
    +'.gd .gw{font-size:9px;font-weight:500;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.35);}'
    +'.gi{display:flex;flex-direction:column;gap:2px;min-width:0;}'
    +'.go{font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
    +'.gdt{font-size:11px;color:rgba(255,255,255,0.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
    +'.gtl{font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-top:1px;}'
    +'.gtl.c1{color:#C9A84C;}.gtl.c2{color:#5B9BD5;}.gtl.c3{color:#E07C4F;}'
    +'.gme{display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0;}'
    +'.bd{font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:3px 8px;border-radius:3px;}'
    +'.bd.hm{background:#C9A84C;color:#0d0d0d;}.bd.aw{background:rgba(201,168,76,0.3);color:#fff;}'
    +'.rb{font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;padding:3px 8px;border-radius:3px;}'
    +'.rb.w{background:rgba(76,175,80,0.2);color:#4CAF50;}.rb.l{background:rgba(229,57,53,0.2);color:#E53935;}.rb.d{background:rgba(158,158,158,0.15);color:#9E9E9E;}'
    +'.st{font-size:12px;font-weight:600;color:rgba(255,255,255,0.5);}'
    +'.em{text-align:center;color:rgba(255,255,255,0.5);font-size:13px;padding:24px 0;}'
    +'@media(max-width:600px){.root{padding:16px 10px;}.cc{min-height:60px;padding:3px;}.ce{font-size:7px;padding:1px 3px;}.cdh{font-size:9px;padding:6px 2px;}.gc{grid-template-columns:52px 1fr;gap:10px;padding:10px 12px;}.gme{grid-column:1/-1;flex-direction:row;align-items:center;gap:8px;}.go{font-size:12px;}.gdt{font-size:10px;}.fb{font-size:8px;padding:5px 10px;}}';

  var htmlContent='<div class="root">'
    +'<div class="sh"><h2>Match Schedule</h2><div class="sn">2025 / 2026 Season</div></div>'
    +'<div class="fr" id="nfr">'
    +'<button class="fb ac" data-team="all"><span class="dt" style="background:#fff;"></span> All Teams</button>'
    +'<button class="fb ac" data-team="apsl"><span class="dt" style="background:#E07C4F;"></span> APSL</button>'
    +'<button class="fb ac" data-team="csl2"><span class="dt" style="background:#C9A84C;"></span> CSL</button>'
    +'<button class="fb ac" data-team="csl2r"><span class="dt" style="background:#5B9BD5;"></span> CSL Reserve</button>'
    +'</div>'
    +'<div class="tr" id="ntr">'
    +'<button class="tb ac" data-tab="upcoming">Upcoming</button>'
    +'<button class="tb" data-tab="results">Results</button>'
    +'<button class="tb" data-tab="calendar">Calendar</button>'
    +'</div>'
    +'<div id="ntc-upcoming" class="ntc"><div class="gl" id="nul"></div></div>'
    +'<div id="ntc-results" class="ntc" style="display:none;"><div class="gl" id="nrl"></div></div>'
    +'<div id="ntc-calendar" class="ntc" style="display:none;">'
    +'<div class="cn"><button id="npv">\u2039</button><span class="ml" id="nml"></span><button id="nnt">\u203A</button></div>'
    +'<div class="cg" id="ncg"></div>'
    +'<div class="lg">'
    +'<div class="li"><div class="ls" style="background:#E07C4F;"></div>APSL</div>'
    +'<div class="li"><div class="ls" style="background:#C9A84C;"></div>CSL</div>'
    +'<div class="li"><div class="ls" style="background:#5B9BD5;"></div>CSL Reserve</div>'
    +'</div></div></div>';

  shadow.innerHTML='<style>'+css+'</style>'+htmlContent;

  shadow.querySelector("#nfr").addEventListener("click",function(e){
    var btn=e.target.closest(".fb");if(!btn)return;
    var t=btn.dataset.team;
    if(t==="all"){if(aT.size===3)aT.clear();else aT=new Set(["csl2","csl2r","apsl"]);}
    else{if(aT.has(t))aT.delete(t);else aT.add(t);}
    shadow.querySelectorAll(".fb").forEach(function(b){
      if(b.dataset.team==="all")b.classList.toggle("ac",aT.size===3);
      else b.classList.toggle("ac",aT.has(b.dataset.team));
    });
    rAll();
  });

  shadow.querySelector("#ntr").addEventListener("click",function(e){
    var btn=e.target.closest(".tb");if(!btn)return;
    shadow.querySelectorAll(".tb").forEach(function(b){b.classList.remove("ac");});
    btn.classList.add("ac");
    shadow.querySelectorAll(".ntc").forEach(function(c){c.style.display="none";});
    shadow.querySelector("#ntc-"+btn.dataset.tab).style.display="";
  });

  shadow.querySelector("#npv").addEventListener("click",function(){cM--;if(cM<0){cM=11;cY--;}rCal();});
  shadow.querySelector("#nnt").addEventListener("click",function(){cM++;if(cM>11){cM=0;cY++;}rCal();});

  rAll();
})();
