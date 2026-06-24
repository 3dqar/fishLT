/* ============== FishLT app.js ============== */

/* ---------- i18n ---------- */
const I18N = {
  lt: {
    recTitle: "Rekomendacija šiandien",
    loading: "Kraunama...",
    modesTitle: "Režimai",
    modeNewbie: "Naujokas",
    modeFish: "Pasirink žuvį",
    modeBudget: "Biudžetas",
    placesTitle: "Vietos netoliese",
    fishTitle: "Žuvys",
    gearTitle: "Mano įranga",
    settingsTitle: "Nustatymai",
    chooseStyle: "Pasirink savo žvejybos būdą",
    styleFloat: "🟡 Plūdė",
    styleFeeder: "⚪ Feederis / dugninė",
    styleSpin: "🔵 Spiningas",
    styleAll: "🟢 Viskas",
    themeLabel: "Tema",
    themeDark: "Tamsi",
    themeLight: "Šviesi",
    navToday: "Šiandien",
    navMap: "Žemėlapis",
    navFish: "Žuvis",
    navGear: "Įranga",
    navSettings: "Nustatymai",
    worthIt: "VERTA VAŽIUOTI",
    notWorthIt: "GERIAU NEVAŽIUOTI",
    medium: "GALIMA, BET VIDUTINIŠKAI",
    distance: "Atstumas",
    bestTime: "Geriausias laikas",
    fish: "Žuvis",
    method: "Būdas",
    bait: "Masalas",
    baitAlt: "Masalo alternatyvos",
    depth: "Gylis",
    fromShore: "Nuo kranto",
    side: "Krantas / pusė",
    coords: "Koordinatės",
    updated: "Atnaujinta",
    disclaimer: "Informacija gali būti netiksli – patikrink Žvejo Gide / ALIS.",
    weatherFail: "Nepavyko gauti realių orų, naudojami atsarginiai duomenys.",
    checkFishingGuide: "Žvejo Gidas",
    checkAlis: "ALIS",
    rules: "Taisyklės",
    needsPermit: "Reikia leidimo",
    noPermitNeeded: "Leidimas nereikalingas",
    rented: "Išnuomota",
    free: "Nemokama",
    stocking: "Įžuvinimas",
    unknown: "nežinoma",
    newbieTip: "Imk plūdę, kabink dziką, mesk 5–10 m nuo kranto prie žolių.",
    chooseFish: "Pasirink žuvį:",
    pike: "Lydeka", perch: "Ešerys", bream: "Karšis", roach: "Kuoja", tench: "Lynas", zander: "Starkis",
    chooseBudget: "Pasirink biudžetą:",
    budget5: "iki 5 €", budget10: "iki 10 €", budget15: "iki 15 €",
    budgetSuggestionTitle: "Ką nusipirkti:",
    myGear: "Mano įranga",
    saved: "Išsaugota",
    locating: "Nustatoma lokacija...",
    locationDenied: "Nepavyko nustatyti lokacijos. Naudojame Vilniaus centrą.",
    zoneReeds: "nendrės", zoneBay: "įlanka", zoneBridge: "tiltas", zoneDeep: "gilesnė vieta", zoneShallow: "sekluma", zoneInflow: "įtekėjimas",
    typeLake: "ežeras", typeRiver: "upė", typePond: "tvenkinys",
    km: "km",
    m: "m",
    score: "Score",
    yes: "Taip", no: "Ne",
  },
  ru: {
    recTitle: "Рекомендация на сегодня",
    loading: "Загрузка...",
    modesTitle: "Режимы",
    modeNewbie: "Новичок",
    modeFish: "Выбрать рыбу",
    modeBudget: "Бюджет",
    placesTitle: "Места рядом",
    fishTitle: "Рыба",
    gearTitle: "Моё снаряжение",
    settingsTitle: "Настройки",
    chooseStyle: "Выбери способ ловли",
    styleFloat: "🟡 Поплавок",
    styleFeeder: "⚪ Фидер / донка",
    styleSpin: "🔵 Спиннинг",
    styleAll: "🟢 Всё",
    themeLabel: "Тема",
    themeDark: "Тёмная",
    themeLight: "Светлая",
    navToday: "Сегодня",
    navMap: "Карта",
    navFish: "Рыба",
    navGear: "Снаряжение",
    navSettings: "Настройки",
    worthIt: "СТОИТ ЕХАТЬ",
    notWorthIt: "ЛУЧШЕ НЕ ЕХАТЬ",
    medium: "МОЖНО, НО СРЕДНЕ",
    distance: "Расстояние",
    bestTime: "Лучшее время",
    fish: "Рыба",
    method: "Способ",
    bait: "Наживка",
    baitAlt: "Альтернативы наживки",
    depth: "Глубина",
    fromShore: "От берега",
    side: "Берег / сторона",
    coords: "Координаты",
    updated: "Обновлено",
    disclaimer: "Информация может быть неточной – проверь в Žvejo Gidas / ALIS.",
    weatherFail: "Не удалось получить погоду, используются резервные данные.",
    checkFishingGuide: "Žvejo Gidas",
    checkAlis: "ALIS",
    rules: "Правила",
    needsPermit: "Нужно разрешение",
    noPermitNeeded: "Разрешение не нужно",
    rented: "Арендовано",
    free: "Бесплатно",
    stocking: "Зарыбление",
    unknown: "неизвестно",
    newbieTip: "Бери поплавок, наживляй опарыша, бросай 5–10 м от берега у травы.",
    chooseFish: "Выбери рыбу:",
    pike: "Щука", perch: "Окунь", bream: "Лещ", roach: "Плотва", tench: "Линь", zander: "Судак",
    chooseBudget: "Выбери бюджет:",
    budget5: "до 5 €", budget10: "до 10 €", budget15: "до 15 €",
    budgetSuggestionTitle: "Что купить:",
    myGear: "Моё снаряжение",
    saved: "Сохранено",
    locating: "Определение локации...",
    locationDenied: "Не удалось определить локацию. Используем центр Вильнюса.",
    zoneReeds: "камыши", zoneBay: "залив", zoneBridge: "мост", zoneDeep: "глубокое место", zoneShallow: "отмель", zoneInflow: "приток",
    typeLake: "озеро", typeRiver: "река", typePond: "пруд",
    km: "км",
    m: "м",
    score: "Счёт",
    yes: "Да", no: "Нет",
  },
  pl: {
    recTitle: "Rekomendacja na dziś",
    loading: "Wczytywanie...",
    modesTitle: "Tryby",
    modeNewbie: "Początkujący",
    modeFish: "Wybierz rybę",
    modeBudget: "Budżet",
    placesTitle: "Miejsca w pobliżu",
    fishTitle: "Ryby",
    gearTitle: "Mój sprzęt",
    settingsTitle: "Ustawienia",
    chooseStyle: "Wybierz sposób łowienia",
    styleFloat: "🟡 Spławik",
    styleFeeder: "⚪ Feeder / grunt",
    styleSpin: "🔵 Spinning",
    styleAll: "🟢 Wszystko",
    themeLabel: "Motyw",
    themeDark: "Ciemny",
    themeLight: "Jasny",
    navToday: "Dziś",
    navMap: "Mapa",
    navFish: "Ryby",
    navGear: "Sprzęt",
    navSettings: "Ustawienia",
    worthIt: "WARTO JECHAĆ",
    notWorthIt: "LEPIEJ NIE JECHAĆ",
    medium: "MOŻNA, ALE ŚREDNIO",
    distance: "Odległość",
    bestTime: "Najlepszy czas",
    fish: "Ryba",
    method: "Sposób",
    bait: "Przynęta",
    baitAlt: "Alternatywy przynęty",
    depth: "Głębokość",
    fromShore: "Od brzegu",
    side: "Brzeg / strona",
    coords: "Koordynaty",
    updated: "Zaktualizowano",
    disclaimer: "Informacje mogą być niedokładne – sprawdź w Žvejo Gidas / ALIS.",
    weatherFail: "Nie udało się pobrać pogody, używane są dane zapasowe.",
    checkFishingGuide: "Žvejo Gidas",
    checkAlis: "ALIS",
    rules: "Przepisy",
    needsPermit: "Wymaga zezwolenia",
    noPermitNeeded: "Zezwolenie niepotrzebne",
    rented: "Wynajęte",
    free: "Bezpłatne",
    stocking: "Zarybianie",
    unknown: "nieznane",
    newbieTip: "Weź spławik, nadziej robaka, rzucaj 5–10 m od brzegu przy trzcinach.",
    chooseFish: "Wybierz rybę:",
    pike: "Szczupak", perch: "Okoń", bream: "Leszcz", roach: "Płoć", tench: "Lin", zander: "Sandacz",
    chooseBudget: "Wybierz budżet:",
    budget5: "do 5 €", budget10: "do 10 €", budget15: "do 15 €",
    budgetSuggestionTitle: "Co kupić:",
    myGear: "Mój sprzęt",
    saved: "Zapisano",
    locating: "Ustalanie lokalizacji...",
    locationDenied: "Nie udało się ustalić lokalizacji. Używamy centrum Wilna.",
    zoneReeds: "trzciny", zoneBay: "zatoka", zoneBridge: "most", zoneDeep: "głębsze miejsce", zoneShallow: "mielizna", zoneInflow: "dopływ",
    typeLake: "jezioro", typeRiver: "rzeka", typePond: "staw",
    km: "km",
    m: "m",
    score: "Wynik",
    yes: "Tak", no: "Nie",
  }
};

let state = {
  lang: localStorage.getItem("fishlt_lang") || "lt",
  theme: localStorage.getItem("fishlt_theme") || "dark",
  fishingStyle: localStorage.getItem("fishlt_style") || null,
  gear: JSON.parse(localStorage.getItem("fishlt_gear") || "[]"),
  mode: "default", // default | newbie | fish | budget
  selectedFish: null,
  selectedBudget: null,
  userLoc: null,
  weather: null,
  weatherFailed: false,
};

function t(key){
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.lt[key] || key;
}

/* ---------- Locations data ---------- */
const LOCATIONS = [
  { id:"balsys", name:"Balsys", type:"lake", lat:54.7508, lng:25.3667,
    fish:["pike","perch","roach","tench"],
    zones:["zoneReeds","zoneBay","zoneShallow"],
    permit:false, rented:false, free:true,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Rytinis krantas, prie nendrių" },
  { id:"gulbinai", name:"Gulbinai", type:"pond", lat:54.7825, lng:25.3206,
    fish:["bream","roach","tench"],
    zones:["zoneBay","zoneShallow"],
    permit:false, rented:true, free:false,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Šiaurinis krantas" },
  { id:"zaliejiezerai", name:"Žalieji ežerai", type:"lake", lat:54.6364, lng:25.3169,
    fish:["perch","roach","pike"],
    zones:["zoneReeds","zoneDeep"],
    permit:false, rented:false, free:true,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Vakarinis krantas, prie gilesnių vietų" },
  { id:"tapeliai", name:"Tapeliai", type:"lake", lat:54.7672, lng:25.4256,
    fish:["pike","perch","bream"],
    zones:["zoneBay","zoneInflow"],
    permit:false, rented:false, free:true,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Pietinis krantas, prie įtekėjimo" },
  { id:"balzis", name:"Balžis", type:"lake", lat:54.5497, lng:25.3072,
    fish:["pike","zander","perch"],
    zones:["zoneDeep","zoneShallow"],
    permit:false, rented:false, free:true,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Šlaitas vakariniame krante" },
  { id:"neris_zirmunai", name:"Neris ties Žirmūnais", type:"river", lat:54.7186, lng:25.2814,
    fish:["bream","roach","zander","perch"],
    zones:["zoneBridge","zoneDeep"],
    permit:false, rented:false, free:true,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Kairysis krantas, prie tilto" },
  { id:"voke", name:"Vokė", type:"river", lat:54.5950, lng:25.1850,
    fish:["roach","perch","tench"],
    zones:["zoneShallow","zoneReeds"],
    permit:false, rented:false, free:true,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Dešinysis krantas" },
  { id:"salote", name:"Salotė", type:"lake", lat:54.7964, lng:25.5594,
    fish:["pike","tench","roach"],
    zones:["zoneReeds","zoneBay"],
    permit:false, rented:false, free:true,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Šiaurinis krantas prie nendrių" },
  { id:"gineitiskiu", name:"Gineitiškių ežeras", type:"lake", lat:54.6219, lng:25.1494,
    fish:["perch","bream","pike"],
    zones:["zoneInflow","zoneDeep"],
    permit:false, rented:false, free:true,
    stocking:"unknown",
    guideUrl:"https://www.zvejogidas.lt/", alisUrl:"https://zuvinimas.aaa.am.lt/",
    side:"Pietrytinis krantas" },
];

/* ---------- Fish rules ---------- */
const FISH_RULES = {
  pike:   { method:"spin", baits:["guminukas","vobleris","blizgė","gyva žuvelė"], depth:[1,4], shore:[5,30], zones:["zoneReeds","zoneBay"] },
  perch:  { method:["spin","float"], baits:["mažas guminukas","sliekas","dzikas"], depth:[1,3], shore:[3,20], zones:["zoneReeds","zoneBridge"] },
  bream:  { method:"feeder", baits:["sliekas","dzikas","kukurūzas","pašaras"], depth:[2,6], shore:[20,50], zones:["zoneDeep","zoneInflow"] },
  roach:  { method:"float", baits:["dzikas","sliekas","kukurūzas"], depth:[0.8,2.5], shore:[3,15], zones:["zoneShallow","zoneBay"] },
  tench:  { method:"float", baits:["sliekas","kukurūzas"], depth:[0.8,2], shore:[3,12], zones:["zoneReeds"] },
  zander: { method:"spin", baits:["guminukas"], depth:[2,6], shore:[10,30], zones:["zoneDeep"] },
};

const METHOD_LABEL = { spin:{lt:"Spiningas",ru:"Спиннинг",pl:"Spinning"}, float:{lt:"Plūdė",ru:"Поплавок",pl:"Spławik"}, feeder:{lt:"Feederis / dugninė",ru:"Фидер / донка",pl:"Feeder / grunt"} };

const GEAR_ITEMS = [
  {id:"float", label:{lt:"Plūdė",ru:"Поплавок",pl:"Spławik"}},
  {id:"feeder", label:{lt:"Feederis",ru:"Фидер",pl:"Feeder"}},
  {id:"spin", label:{lt:"Spiningas",ru:"Спиннинг",pl:"Spinning"}},
  {id:"softlure", label:{lt:"Guminukai",ru:"Силикон",pl:"Gumy"}},
  {id:"wobbler", label:{lt:"Vobleriai",ru:"Воблеры",pl:"Woblery"}},
  {id:"spoon", label:{lt:"Blizgės",ru:"Блёсны",pl:"Błystki"}},
  {id:"hooks", label:{lt:"Kabliukai",ru:"Крючки",pl:"Haczyki"}},
  {id:"maggot", label:{lt:"Dzikai",ru:"Опарыш",pl:"Larwy"}},
  {id:"worm", label:{lt:"Sliekai",ru:"Червяки",pl:"Robaki"}},
  {id:"corn", label:{lt:"Kukurūzas",ru:"Кукуруза",pl:"Kukurydza"}},
  {id:"groundbait", label:{lt:"Pašaras",ru:"Прикормка",pl:"Zanęta"}},
  {id:"livebait", label:{lt:"Gyva žuvelė",ru:"Живец",pl:"Żywiec"}},
];

const BUDGET_SUGGESTIONS = {
  5: { lt:"Sliekai (1€), kabliukai (2€), plūdė (2€).", ru:"Червяки (1€), крючки (2€), поплавок (2€).", pl:"Robaki (1€), haczyki (2€), spławik (2€)." },
  10:{ lt:"Dzikai (2€), kabliukai (2€), nedidelis guminukas (3€), valas (3€).", ru:"Опарыш (2€), крючки (2€), небольшой силикон (3€), леска (3€).", pl:"Larwy (2€), haczyki (2€), mała guma (3€), żyłka (3€)." },
  15:{ lt:"Pašaras (4€), kukurūzas (1€), kabliukai (2€), guminukas (4€), valas (4€).", ru:"Прикормка (4€), кукуруза (1€), крючки (2€), силикон (4€), леска (4€).", pl:"Zanęta (4€), kukurydza (1€), haczyki (2€), guma (4€), żyłka (4€)." },
};

/* ---------- Helpers ---------- */
function haversine(lat1,lng1,lat2,lng2){
  const R=6371;
  const dLat=(lat2-lat1)*Math.PI/180;
  const dLng=(lng2-lng1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function fmtTime(d){
  const pad=n=>String(n).padStart(2,"0");
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function defaultWeather(){
  return { temperature:18, windSpeed:10, windDir:200, pressure:1013, rain:0, cloud:40, sunrise:"05:00", sunset:"21:30" };
}

/* ---------- Weather fetch (Open-Meteo) ---------- */
async function fetchWeather(lat,lng){
  try{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m,wind_direction_10m,pressure_msl,precipitation,cloud_cover&daily=sunrise,sunset&timezone=auto`;
    const res = await fetch(url);
    if(!res.ok) throw new Error("bad response");
    const data = await res.json();
    state.weatherFailed = false;
    return {
      temperature: data.current.temperature_2m,
      windSpeed: data.current.wind_speed_10m,
      windDir: data.current.wind_direction_10m,
      pressure: data.current.pressure_msl,
      rain: data.current.precipitation,
      cloud: data.current.cloud_cover,
      sunrise: data.daily.sunrise[0].slice(11,16),
      sunset: data.daily.sunset[0].slice(11,16),
    };
  }catch(e){
    state.weatherFailed = true;
    return defaultWeather();
  }
}

/* ---------- Fishing score algorithm ---------- */
function computeScore(loc, weather, distanceKm, fishKey, style){
  let score = 50;
  const hour = new Date().getHours();
  const month = new Date().getMonth()+1; // 1-12

  // temperature: ideal 12-22
  if(weather.temperature>=12 && weather.temperature<=22) score+=12;
  else if(weather.temperature<5 || weather.temperature>30) score-=15;
  else score+=2;

  // wind
  if(weather.windSpeed<=15) score+=8;
  else if(weather.windSpeed>30) score-=20;
  else score-=8;

  // pressure: stable ~1013-1020 good, rapid low bad
  if(weather.pressure>=1008 && weather.pressure<=1022) score+=8;
  else score-=6;

  // rain
  if(weather.rain===0) score+=5;
  else if(weather.rain>4) score-=15;
  else score-=5;

  // cloud cover: moderate cloud often good for fishing
  if(weather.cloud>=30 && weather.cloud<=80) score+=6;

  // time of day: dawn/dusk best
  if((hour>=4 && hour<=7) || (hour>=18 && hour<=22)) score+=10;
  else if(hour>=11 && hour<=15) score-=8;

  // season
  if(month>=4 && month<=10) score+=6;
  else score-=10;

  // distance
  if(distanceKm<5) score+=6;
  else if(distanceKm>25) score-=8;

  // location type bonus for river vs lake (neutral, small variety)
  if(loc.type==="river") score+=2;

  // fish/style match
  if(fishKey){
    const rule = FISH_RULES[fishKey];
    const methods = Array.isArray(rule.method)?rule.method:[rule.method];
    if(style && style!=="all" && !methods.includes(style)) score-=10;
    if(!loc.fish.includes(fishKey)) score-=15;
  } else if(style && style!=="all"){
    // does location support at least one fish matching style
    const supportsStyle = loc.fish.some(f=>{
      const m = FISH_RULES[f].method;
      const methods = Array.isArray(m)?m:[m];
      return methods.includes(style);
    });
    if(!supportsStyle) score-=8;
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  return score;
}

function scoreClass(score){
  if(score>=60) return "good";
  if(score>=35) return "mid";
  return "bad";
}

function pickBestFishForLocation(loc, style){
  let candidates = loc.fish;
  if(style && style!=="all"){
    candidates = candidates.filter(f=>{
      const m = FISH_RULES[f].method;
      const methods = Array.isArray(m)?m:[m];
      return methods.includes(style);
    });
    if(candidates.length===0) candidates = loc.fish;
  }
  return candidates[0] || loc.fish[0];
}

/* ---------- Rendering ---------- */
let mapInstance = null;
let mapMarkers = [];

function renderAll(){
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.body.setAttribute("data-theme", state.theme);
  document.getElementById("themeToggle").textContent = state.theme==="dark" ? "🌙" : "☀️";
  document.getElementById("langSelect").value = state.lang;
  renderRecommendation();
  renderPlacesList();
  renderFishView();
  renderGearView();
  renderSettingsStyleButtons();
  if(mapInstance) renderMapMarkers();
}

function bestLocation(){
  if(!state.userLoc) return LOCATIONS[0];
  let best=null, bestScore=-1, bestDist=0, bestFish=null;
  LOCATIONS.forEach(loc=>{
    const dist = haversine(state.userLoc.lat, state.userLoc.lng, loc.lat, loc.lng);
    const fishKey = state.mode==="fish" && state.selectedFish ? state.selectedFish : pickBestFishForLocation(loc, state.fishingStyle);
    const sc = computeScore(loc, state.weather||defaultWeather(), dist, state.mode==="fish"?state.selectedFish:null, state.fishingStyle);
    if(sc>bestScore){ bestScore=sc; best=loc; bestDist=dist; bestFish=fishKey; }
  });
  return { loc:best, score:bestScore, dist:bestDist, fish:bestFish };
}

function renderRecommendation(){
  const body = document.getElementById("recBody");
  const { loc, score, dist, fish } = bestLocation();
  const cls = scoreClass(score);
  const rule = FISH_RULES[fish];
  const methods = Array.isArray(rule.method)?rule.method:[rule.method];
  const methodLabel = methods.map(m=>METHOD_LABEL[m][state.lang]||METHOD_LABEL[m].lt).join(" / ");

  let verdict = t("medium");
  if(score>=60) verdict = t("worthIt");
  else if(score<35) verdict = t("notWorthIt");

  const fishName = t(fish);
  const zonesText = loc.zones.map(z=>t(z)).join(", ");

  let extraNote = "";
  if(state.mode==="newbie"){
    extraNote = `<div class="rec-explain">${t("newbieTip")}</div>`;
  }
  if(score<35){
    extraNote += `<div class="rec-explain">${state.lang==="lt"?`Šiandien geriau nevažiuoti. Score ${score}/100.`:state.lang==="ru"?`Сегодня лучше не ехать. Счёт ${score}/100.`:`Lepiej nie jechać dzisiaj. Wynik ${score}/100.`}</div>`;
  }
  if(state.mode==="budget" && state.selectedBudget){
    const sugg = BUDGET_SUGGESTIONS[state.selectedBudget][state.lang] || BUDGET_SUGGESTIONS[state.selectedBudget].lt;
    extraNote += `<div class="rec-explain"><strong>${t("budgetSuggestionTitle")}</strong> ${sugg}</div>`;
  }

  body.innerHTML = `
    <div class="score-wrap">
      <div class="score-circle ${cls}">${score}</div>
      <div>
        <div class="score-verdict">${verdict}</div>
        <div class="score-sub">${loc.name} · ${dist.toFixed(1)} ${t("km")}</div>
      </div>
    </div>
    <div class="rec-grid">
      <div><div class="label">${t("fish")}</div><div class="value">${fishName}</div></div>
      <div><div class="label">${t("method")}</div><div class="value">${methodLabel}</div></div>
      <div><div class="label">${t("bait")}</div><div class="value">${rule.baits[0]}</div></div>
      <div><div class="label">${t("baitAlt")}</div><div class="value">${rule.baits.slice(1).join(", ")||"—"}</div></div>
      <div><div class="label">${t("depth")}</div><div class="value">${rule.depth[0]}–${rule.depth[1]} m</div></div>
      <div><div class="label">${t("fromShore")}</div><div class="value">${rule.shore[0]}–${rule.shore[1]} m</div></div>
      <div><div class="label">${t("side")}</div><div class="value">${loc.side}</div></div>
      <div><div class="label">${t("coords")}</div><div class="value">${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}</div></div>
    </div>
    ${extraNote}
    <div class="rec-explain">${zonesText}</div>
    ${state.weatherFailed ? `<div class="rec-disclaimer">⚠️ ${t("weatherFail")}</div>` : ""}
    <div class="rec-disclaimer">${t("disclaimer")}</div>
    <div class="rec-links">
      <a class="link-btn" href="${loc.guideUrl}" target="_blank" rel="noopener">${t("checkFishingGuide")}</a>
      <a class="link-btn" href="${loc.alisUrl}" target="_blank" rel="noopener">${t("checkAlis")}</a>
      <a class="link-btn" href="https://www.zvejozinynas.lt/" target="_blank" rel="noopener">${t("rules")}</a>
    </div>
  `;

  document.getElementById("updatedAt").textContent = `${t("updated")}: ${fmtTime(new Date())}`;
}

function renderPlacesList(){
  const list = document.getElementById("placesList");
  if(!state.userLoc){ list.innerHTML = `<p class="muted">${t("locating")}</p>`; return; }
  const rows = LOCATIONS.map(loc=>{
    const dist = haversine(state.userLoc.lat, state.userLoc.lng, loc.lat, loc.lng);
    const fishKey = pickBestFishForLocation(loc, state.fishingStyle);
    const sc = computeScore(loc, state.weather||defaultWeather(), dist, null, state.fishingStyle);
    return { loc, dist, sc };
  }).sort((a,b)=>a.dist-b.dist);

  list.innerHTML = rows.map(r=>{
    const cls = scoreClass(r.sc);
    return `<div class="place-row" data-id="${r.loc.id}">
      <div>
        <div class="place-name">${r.loc.name}</div>
        <div class="place-meta">${t("type"+capitalize(r.loc.type))||r.loc.type} · ${r.dist.toFixed(1)} ${t("km")}</div>
      </div>
      <div class="place-score-dot dot-${cls}">${r.sc}</div>
    </div>`;
  }).join("");

  list.querySelectorAll(".place-row").forEach(row=>{
    row.addEventListener("click", ()=>openPlaceModal(row.getAttribute("data-id")));
  });
}
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }
// map typeLake/typeRiver/typePond keys properly
function typeKey(type){
  if(type==="lake") return "typeLake";
  if(type==="river") return "typeRiver";
  if(type==="pond") return "typePond";
  return type;
}

function openPlaceModal(id){
  const loc = LOCATIONS.find(l=>l.id===id);
  if(!loc) return;
  const dist = state.userLoc ? haversine(state.userLoc.lat, state.userLoc.lng, loc.lat, loc.lng) : null;
  const fishNames = loc.fish.map(f=>t(f)).join(", ");
  const zonesText = loc.zones.map(z=>t(z)).join(", ");
  const content = document.getElementById("placeModalContent");
  content.innerHTML = `
    <h2>${loc.name}</h2>
    <p class="muted">${t(typeKey(loc.type))}${dist!==null?` · ${dist.toFixed(1)} ${t("km")}`:""}</p>
    <div class="rec-grid">
      <div><div class="label">${t("fish")}</div><div class="value">${fishNames}</div></div>
      <div><div class="label">${t("side")}</div><div class="value">${loc.side}</div></div>
      <div><div class="label">${t("coords")}</div><div class="value">${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}</div></div>
      <div><div class="label">${t("needsPermit")}</div><div class="value">${loc.permit?t("yes"):t("no")}</div></div>
      <div><div class="label">${t("rented")}</div><div class="value">${loc.rented?t("yes"):t("no")}</div></div>
      <div><div class="label">${t("free")}</div><div class="value">${loc.free?t("yes"):t("no")}</div></div>
      <div><div class="label">${t("stocking")}</div><div class="value">${t("unknown")}</div></div>
    </div>
    <div class="rec-explain">${zonesText}</div>
    <div class="rec-disclaimer">${t("disclaimer")}</div>
    <div class="rec-links">
      <a class="link-btn" href="${loc.guideUrl}" target="_blank" rel="noopener">${t("checkFishingGuide")}</a>
      <a class="link-btn" href="${loc.alisUrl}" target="_blank" rel="noopener">${t("checkAlis")}</a>
      <a class="link-btn" href="https://www.zvejozinynas.lt/" target="_blank" rel="noopener">${t("rules")}</a>
    </div>
  `;
  document.getElementById("placeModal").classList.add("show");
}

function renderFishView(){
  const list = document.getElementById("fishList");
  list.innerHTML = Object.keys(FISH_RULES).map(key=>{
    const rule = FISH_RULES[key];
    const methods = Array.isArray(rule.method)?rule.method:[rule.method];
    const methodLabel = methods.map(m=>METHOD_LABEL[m][state.lang]||METHOD_LABEL[m].lt).join(" / ");
    return `<div class="fish-card">
      <h4>${t(key)}</h4>
      <div class="fmeta">${t("method")}: ${methodLabel}</div>
      <div class="fmeta">${t("bait")}: ${rule.baits.join(", ")}</div>
      <div class="fmeta">${t("depth")}: ${rule.depth[0]}–${rule.depth[1]} m</div>
      <div class="fmeta">${t("fromShore")}: ${rule.shore[0]}–${rule.shore[1]} m</div>
    </div>`;
  }).join("");
}

function renderGearView(){
  const list = document.getElementById("gearList");
  list.innerHTML = GEAR_ITEMS.map(g=>{
    const checked = state.gear.includes(g.id) ? "checked" : "";
    const label = g.label[state.lang] || g.label.lt;
    return `<label class="gear-item">
      <input type="checkbox" data-gear="${g.id}" ${checked}>
      <span>${label}</span>
    </label>`;
  }).join("");
  list.querySelectorAll("input[data-gear]").forEach(cb=>{
    cb.addEventListener("change", ()=>{
      const id = cb.getAttribute("data-gear");
      if(cb.checked){ if(!state.gear.includes(id)) state.gear.push(id); }
      else { state.gear = state.gear.filter(x=>x!==id); }
      localStorage.setItem("fishlt_gear", JSON.stringify(state.gear));
    });
  });
}

function renderSettingsStyleButtons(){
  const wrap = document.getElementById("styleButtonsSettings");
  const styles = [
    {id:"float", key:"styleFloat"}, {id:"feeder", key:"styleFeeder"},
    {id:"spin", key:"styleSpin"}, {id:"all", key:"styleAll"},
  ];
  wrap.innerHTML = styles.map(s=>{
    const active = state.fishingStyle===s.id ? "active":"";
    return `<button class="chip-btn ${active}" data-style="${s.id}">${t(s.key)}</button>`;
  }).join("");
  wrap.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.fishingStyle = btn.getAttribute("data-style");
      localStorage.setItem("fishlt_style", state.fishingStyle);
      renderAll();
    });
  });
}

/* ---------- Map ---------- */
function initMap(){
  const center = state.userLoc ? [state.userLoc.lat, state.userLoc.lng] : [54.6872, 25.2797];
  mapInstance = L.map("map", { zoomControl:true }).setView(center, 11);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(mapInstance);
  renderMapMarkers();
}

function colorForScore(score){
  if(score>=60) return "#57c167";
  if(score>=35) return "#f2c14e";
  return "#e25c5c";
}

function renderMapMarkers(){
  mapMarkers.forEach(m=>mapInstance.removeLayer(m));
  mapMarkers = [];

  if(state.userLoc){
    const me = L.circleMarker([state.userLoc.lat, state.userLoc.lng], {
      radius:8, color:"#2d8cff", fillColor:"#2d8cff", fillOpacity:0.9, weight:2,
    }).addTo(mapInstance).bindPopup(state.lang==="lt"?"Jūs":(state.lang==="ru"?"Вы":"Ty"));
    mapMarkers.push(me);
  }

  LOCATIONS.forEach(loc=>{
    const dist = state.userLoc ? haversine(state.userLoc.lat, state.userLoc.lng, loc.lat, loc.lng) : 0;
    const sc = computeScore(loc, state.weather||defaultWeather(), dist, null, state.fishingStyle);
    const marker = L.circleMarker([loc.lat, loc.lng], {
      radius:10, color: colorForScore(sc), fillColor: colorForScore(sc), fillOpacity:0.85, weight:2,
    }).addTo(mapInstance);
    marker.bindPopup(`<strong>${loc.name}</strong><br>${t("score")}: ${sc}/100`);
    marker.on("click", ()=>openPlaceModal(loc.id));
    mapMarkers.push(marker);
  });
}

/* ---------- Navigation ---------- */
function setView(view){
  document.querySelectorAll(".panel").forEach(p=>p.hidden=true);
  document.getElementById("view-"+view).hidden=false;
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active", b.getAttribute("data-view")===view));
  if(view==="map" && mapInstance){ setTimeout(()=>mapInstance.invalidateSize(), 50); }
}

/* On desktop both today+map panels are visible via CSS, nav still works for mobile */

/* ---------- Init ---------- */
async function init(){
  // first run modal
  if(!state.fishingStyle){
    document.getElementById("styleModal").classList.add("show");
  }

  document.querySelectorAll(".modal-option").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.fishingStyle = btn.getAttribute("data-style");
      localStorage.setItem("fishlt_style", state.fishingStyle);
      document.getElementById("styleModal").classList.remove("show");
      renderAll();
    });
  });

  document.getElementById("placeModal").addEventListener("click", (e)=>{
    if(e.target.id==="placeModal") e.target.classList.remove("show");
  });

  document.getElementById("langSelect").addEventListener("change", (e)=>{
    state.lang = e.target.value;
    localStorage.setItem("fishlt_lang", state.lang);
    renderAll();
  });

  document.getElementById("themeToggle").addEventListener("click", ()=>{
    state.theme = state.theme==="dark" ? "light" : "dark";
    localStorage.setItem("fishlt_theme", state.theme);
    renderAll();
  });
  document.getElementById("themeDarkBtn").addEventListener("click", ()=>{ state.theme="dark"; localStorage.setItem("fishlt_theme","dark"); renderAll(); });
  document.getElementById("themeLightBtn").addEventListener("click", ()=>{ state.theme="light"; localStorage.setItem("fishlt_theme","light"); renderAll(); });

  document.querySelectorAll(".nav-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>setView(btn.getAttribute("data-view")));
  });

  document.getElementById("bigButton").addEventListener("click", ()=>{
    const { loc } = bestLocation();
    setView("map");
    if(mapInstance){
      mapInstance.setView([loc.lat, loc.lng], 13);
      const found = mapMarkers.find(m=>m.getLatLng && m.getLatLng().lat===loc.lat && m.getLatLng().lng===loc.lng);
      if(found) found.openPopup();
    }
  });

  // mode buttons
  document.getElementById("modeNewbie").addEventListener("click", ()=>{
    state.mode = state.mode==="newbie" ? "default" : "newbie";
    state.selectedFish=null; state.selectedBudget=null;
    updateModeButtons();
    document.getElementById("modeExtra").innerHTML="";
    renderRecommendation();
  });

  document.getElementById("modeFish").addEventListener("click", ()=>{
    state.mode = state.mode==="fish" ? "default" : "fish";
    updateModeButtons();
    renderModeExtra();
    renderRecommendation();
  });

  document.getElementById("modeBudget").addEventListener("click", ()=>{
    state.mode = state.mode==="budget" ? "default" : "budget";
    updateModeButtons();
    renderModeExtra();
    renderRecommendation();
  });

  document.body.setAttribute("data-theme", state.theme);

  // geolocation
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      async (pos)=>{
        state.userLoc = { lat:pos.coords.latitude, lng:pos.coords.longitude };
        await loadWeatherAndRender();
      },
      async ()=>{
        state.userLoc = { lat:54.6872, lng:25.2797 }; // Vilnius center fallback
        await loadWeatherAndRender();
      },
      { timeout:8000 }
    );
  }else{
    state.userLoc = { lat:54.6872, lng:25.2797 };
    await loadWeatherAndRender();
  }

  renderAll();
  initMap();
  setView("today");
}

async function loadWeatherAndRender(){
  state.weather = await fetchWeather(state.userLoc.lat, state.userLoc.lng);
  renderAll();
  if(mapInstance) renderMapMarkers();
}

function updateModeButtons(){
  document.getElementById("modeNewbie").classList.toggle("active", state.mode==="newbie");
  document.getElementById("modeFish").classList.toggle("active", state.mode==="fish");
  document.getElementById("modeBudget").classList.toggle("active", state.mode==="budget");
}

function renderModeExtra(){
  const extra = document.getElementById("modeExtra");
  if(state.mode==="fish"){
    const fishKeys = ["pike","perch","bream","roach","tench","zander"];
    extra.innerHTML = `<p class="muted">${t("chooseFish")}</p>
      <div class="modes-row">${fishKeys.map(f=>`<button class="chip-btn ${state.selectedFish===f?'active':''}" data-fish="${f}">${t(f)}</button>`).join("")}</div>`;
    extra.querySelectorAll("[data-fish]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        state.selectedFish = btn.getAttribute("data-fish");
        renderModeExtra();
        renderRecommendation();
      });
    });
  } else if(state.mode==="budget"){
    const budgets = [5,10,15];
    extra.innerHTML = `<p class="muted">${t("chooseBudget")}</p>
      <div class="modes-row">${budgets.map(b=>`<button class="chip-btn ${state.selectedBudget===b?'active':''}" data-budget="${b}">${t("budget"+b)}</button>`).join("")}</div>`;
    extra.querySelectorAll("[data-budget]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        state.selectedBudget = parseInt(btn.getAttribute("data-budget"),10);
        renderModeExtra();
        renderRecommendation();
      });
    });
  } else {
    extra.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", init);
