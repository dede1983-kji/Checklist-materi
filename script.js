// ===== LOGIN SEDERHANA GITHUB PAGES =====
// Ubah username/password di bawah jika diperlukan.
const LOGIN_USER = "admin";
const LOGIN_PASS = "kji12345";

const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");

function showApp(){
  loginScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
}
function showLogin(){
  appScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  document.getElementById("loginPass").value = "";
}
if(localStorage.getItem("kjiLogin") === "true") showApp();

loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  const u = document.getElementById("loginUser").value.trim();
  const p = document.getElementById("loginPass").value;
  if(u === LOGIN_USER && p === LOGIN_PASS){
    localStorage.setItem("kjiLogin","true");
    loginError.textContent = "";
    showApp();
  }else{
    loginError.textContent = "Username atau password salah.";
  }
});
logoutBtn.addEventListener("click", function(){
  localStorage.removeItem("kjiLogin");
  showLogin();
});

const STATUS = {
  unlearned: { symbol:"○", label:"Belum Dipelajari", cls:"s-unlearned" },
  learning:  { symbol:"◐", label:"Sedang Dipelajari", cls:"s-learning" },
  enough:    { symbol:"✓", label:"Cukup", cls:"s-enough" },
  mastered:  { symbol:"☑", label:"Dikuasai", cls:"s-mastered" },
  poor:      { symbol:"!", label:"Kurang", cls:"s-poor" }
};
const order = ["unlearned","learning","enough","mastered","poor"];

const materials = [
  ["KATAJUTSU",["Jutsu Shodan","Jutsu Nidan","Jutsu Sandan","Jutsu Yondan","Jutsu Godan","Jutsu Rukodan","Jutsu Nanadan"]],
  ["KONSHINRYU JUHOJUTSU TEKNIK",["Ude Nagashi","Ude Tsukami","Kotegaeshi","Erijime","Hade","Edimaki","Renri","Sawa","Hasida","Kenko","Kushiguruma"]],
  ["KIHON - SIKAP & DASAR",["Sikap Do (Sikap Siaga)","Tacre (Sikap)","Rei (Hormat)","Seza (Duduk)","Mukso (Berdo’a)","Pedoman Koporyu Jujitsu Indonesia","Taishabaki (Hindaran)"]],
  ["KIHON - KUDA-KUDA",["Heikodachi","Kibadachi","Sikodachi","Zenkutsudachi","Sanchin Dachi","Neko Ashi Dachi","Kokutsu Dachi","Tsuru Ashi Dachi"]],
  ["ATEMI WAZA",["Atemi Waza 1","Atemi Waza 2","Atemi Waza 3","Atemi Waza 4","Atemi Waza 5","Atemi Waza 6","Atemi Waza 7","Atemi Waza 8","Atemi Waza 9","Kombinasi atemi waza 1 - 9"]],
  ["KIHON - PUKULAN (CHUKI)",["Chudan tsuki","Jodan tsuki","Gedan tsuki","Mawashi Tsuki (Hook)","Mawashi Jodan Tsuki (Hook Atas)","Ura tsuki (Uppercut)"]],
  ["NAGE WAZA / TAKE DOWN",["Single Leg","Single Leg 2","Single Leg 3","Double Leg","Double Leg 2","O Soto Gari / O Soto Otoshi","Tai Otoshi","O Goshi","Seoi Nage","Uki Otoshi","Uki Goshi","Harai Goshi","Kouchi makikomi","Tomoe nage","Tani Otoshi","Ankel pick","Ouchi Gari","Uchimata","Kata Guruma","Ura Nage"]],
  ["KIHON - TANGKISAN (UKE)",["jodan uke","uchi uke","ude/Soto uke","gedan barai/uke","juji uke (gedan dan jodan)","Suto Uke","Mawashi Uke"]],
  ["KIHON - HANTAMAN (UCHI)",["Uraken Uchi","Suto Uchi","Haito","Tetsui","Sotei","Kome Kame","Nukite"]],
  ["KIHON - TENDANGAN (GERI)",["mae geri","Mawashi Geri","Ura Mawashi Geri","Yoko Geri","Ushiro Geri","Ushiro Mawashi Geri","Hiza Geri","Kakato Geri"]],
  ["TEKNIK JATUH (UKEMI)",["Mae Ukemi (jatuh kedepan)","Zempo Keiten (Jatuh bergulir kedepan)","Koho Ukemi (Jatuh Ke belakang)","Yoko Ukemi (jatuh kesamping)","Ushiro Ukemi (Jatuh bergulir ke belakang)"]],
  ["TEKNIK FIGHTING & NEWAZA",["FS Part 1 Jagling FS, Move","Gyaku Tsuki","Kizami Tsuki","Oi Tsuki","Mae geri","Mawashi geri","Ura Masahi geri","Kombinasi","NS Kihon Kuda-kuda Newaza","Kumikata / Grip"]],
  ["GROUND FIGHTING - MOUNT",["Full Mount","Back Mount","Side Mount","Back Control","Osaekomi","North-South side (Kami Shiho Gatame)"]],
  ["GROUND FIGHTING - GUARD",["Open Guard","Close Guard","Half Guard","Butterfly Guard","X-Guard","Spider Guard","De La Riva Guard","Lasso guard","Guard lainnya"]],
  ["GROUND FIGHTING - KNEE SET",["Knee Ride / Knee on Belly","Knee Ripping"]],
  ["GROUND FIGHTING - PASS GUARD",["Pass Guard 1","Pass Guard 2","Pass Guard 3","Pass Guard 4","Pass Guard 5","Pass Guard lainnya"]],
  ["GROUND FIGHTING - LOCK / CHOKE / KUNCIAN",["Arm bar (juji gatame)","Amerikana (ude garami)","Kimura","RNC / Rear Naked Choke (Hadaki jime)","Triangle choke (Sakaku jime)","Omoplata","Cross choke","Loop Choke","Ezekiel choke","Guillotine Choke","Torso","Kneebar","Ankle lock","Banana split","Toehold","Kuncian lainnya"]],
  ["GROUND FIGHTING - SWEEP",["Hip Bump Sweep","Scissor Sweep","Flower Sweep","Muscle Sweep","Double Ankle Sweep","Lumberjack Sweep","Baloon Sweep","Sweep Lainnya"]],
  ["GROUND FIGHTING - REVERSAL / ESCAPE",["Escape mount","Escape Side mount","Escape Osaekomi","Escape lainnya"]],
  ["SELF DEFENSE",["Anti Bulying","Tantojutsu","Bokkenjutsu"]],
  ["JUNBI UNDO",["Warming up Pemanasan (Pemanasan Dinamis)","Stretching Pelemasan (Peregangan Statis)","Drill Bear Walk","Shoot/takedown double leg","Sprawl","Sit Out","Tecnical Stand Up","Bridging/UPA","Shrimp","Lainnya"]]
];

const KEY = "kjiDojoChecklistV1";
let state = JSON.parse(localStorage.getItem(KEY) || "{}");
let profile = JSON.parse(localStorage.getItem(KEY+"_profile") || "{}");

const materialsEl = document.getElementById("materials");
const filterEl = document.getElementById("sectionFilter");
const searchEl = document.getElementById("search");

function save(){
  localStorage.setItem(KEY, JSON.stringify(state));
  localStorage.setItem(KEY+"_profile", JSON.stringify(profile));
}
function itemKey(section,item){return section+"::"+item}
function statusOf(section,item){return state[itemKey(section,item)] || "unlearned"}

function renderFilters(){
  materials.forEach(([section])=>{
    const o=document.createElement("option"); o.value=section; o.textContent=section;
    filterEl.appendChild(o);
  });
}

function render(){
  const q=searchEl.value.trim().toLowerCase();
  const filter=filterEl.value;
  materialsEl.innerHTML="";
  let shown=0;
  materials.forEach(([section,items])=>{
    if(filter!=="all" && filter!==section) return;
    const matches=items.filter(x=>!q || x.toLowerCase().includes(q) || section.toLowerCase().includes(q));
    if(!matches.length) return;
    shown += matches.length;
    const sec=document.createElement("section"); sec.className="section";
    const counts=items.reduce((a,it)=>(a[statusOf(section,it)]++,a),{unlearned:0,learning:0,enough:0,mastered:0,poor:0});
    sec.innerHTML=`<div class="section-head"><h2>${section}</h2><div class="section-meta">${counts.mastered}/${items.length} dikuasai</div></div><div class="items"></div>`;
    const list=sec.querySelector(".items");
    matches.forEach((item)=>{
      const st=statusOf(section,item), meta=STATUS[st];
      const row=document.createElement("div"); row.className="item";
      row.innerHTML=`<div class="item-no">${items.indexOf(item)+1}</div><div class="item-name">${item}</div>
        <button class="status-button ${meta.cls}" data-section="${section}" data-item="${item}">${meta.symbol} ${meta.label}</button>`;
      list.appendChild(row);
    });
    materialsEl.appendChild(sec);
  });
  if(!shown) materialsEl.innerHTML='<div class="empty">Materi tidak ditemukan.</div>';
  updateSummary();
}

function updateSummary(){
  let total=0; const counts={unlearned:0,learning:0,enough:0,mastered:0,poor:0};
  materials.forEach(([s,items])=>items.forEach(i=>{total++;counts[statusOf(s,i)]++}));
  const pct=total ? Math.round(counts.mastered/total*100):0;
  document.getElementById("progressPercent").textContent=pct+"%";
  document.getElementById("progressText").textContent=`${counts.mastered} / ${total} materi dikuasai`;
  document.getElementById("progressBar").style.width=pct+"%";
  document.getElementById("summary").innerHTML=order.map(k=>`<span class="status-chip ${STATUS[k].cls}">${STATUS[k].symbol} ${STATUS[k].label}: ${counts[k]}</span>`).join("");
}

materialsEl.addEventListener("click",e=>{
  const b=e.target.closest(".status-button"); if(!b)return;
  const key=itemKey(b.dataset.section,b.dataset.item);
  const current=statusOf(b.dataset.section,b.dataset.item);
  const next=order[(order.indexOf(current)+1)%order.length];
  state[key]=next; save(); render();
});

["studentName","belt","studentAddress"].forEach(id=>{
  const el=document.getElementById(id);
  el.value=profile[id]||"";
  el.addEventListener("input",()=>{profile[id]=el.value;save()});
});
searchEl.addEventListener("input",render);
filterEl.addEventListener("change",render);
document.getElementById("printBtn").addEventListener("click",()=>window.print());
document.getElementById("resetBtn").addEventListener("click",()=>{
  if(confirm("Reset semua checklist dan mengembalikan seluruh materi menjadi Belum Dipelajari?")){
    state={};save();render();
  }
});

renderFilters();
render();
