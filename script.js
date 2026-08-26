const slides=[...document.querySelectorAll(".slide")],deck=document.getElementById("deck"),dots=document.getElementById("dots");let idx=0;
slides.forEach((_,i)=>{let d=document.createElement("i");if(!i)d.className="on";dots.appendChild(d)});
function go(n){idx=Math.max(0,Math.min(slides.length-1,n));deck.style.transform=`translateX(-${idx*100}vw)`;[...dots.children].forEach((d,i)=>d.classList.toggle("on",i===idx))}
document.getElementById("next").onclick=()=>go(idx+1);document.getElementById("prev").onclick=()=>go(idx-1);
document.addEventListener("keydown",e=>{if(["ArrowRight","PageDown"," "].includes(e.key))go(idx+1);if(["ArrowLeft","PageUp"].includes(e.key))go(idx-1)});
let sx=0;document.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});document.addEventListener("touchend",e=>{let dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(idx+(dx<0?1:-1))},{passive:true});