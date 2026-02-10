let viewers = Math.floor(Math.random()*40000)+40000;
setInterval(()=>{
  viewers += Math.floor(Math.random()*300-150);
  if(viewers<1000) viewers=1000;
  document.getElementById("viewers").innerText = viewers.toLocaleString();
},2000);
