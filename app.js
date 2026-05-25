// --- CONFIGURATIE & CONSTANTEN ---
const FEESTDAGEN_2026 = {
  "2026-01-01": "Nieuwjaar",
  "2026-04-06": "Paasmaandag",
  "2026-05-01": "Dag van de Arbeid",
  "2026-05-14": "Onze Lieve Heer Hemelvaart",
  "2026-05-25": "Pinkstermaandag",
  "2026-07-21": "Nationale Feestdag",
  "2026-08-15": "Onze Lieve Vrouw Hemelvaart",
  "2026-11-01": "Allerheiligen",
  "2026-11-11": "Wapenstilstand",
  "2026-12-25": "Kerstmis"
};

const COLLECTIEVE_SLUITING_2026 = {
  "2026-05-15": "Brugdag Hemelvaart",
  "2026-07-20": "Collectieve sluiting",
  "2026-07-22": "Collectieve sluiting",
  "2026-07-23": "Collectieve sluiting",
  "2026-07-24": "Collectieve sluiting",
  "2026-11-02": "Collectieve sluiting",
  "2026-12-28": "Collectieve sluiting",
  "2026-12-29": "Collectieve sluiting",
  "2026-12-30": "Collectieve sluiting",
  "2026-12-31": "Collectieve sluiting"
};

const VERLOF_CODES = {
  "AANW": { label: "Aanwezig", class: "b-aanw", isVerlof: false },
  "AV":   { label: "Jaarlijks Verlof (AV)", class: "b-av", isVerlof: true, budgetKey: "av" },
  "V":    { label: "Verlof", class: "b-v", isVerlof: true, budgetKey: "v" },
  "FV":   { label: "Feestverlof", class: "b-fv", isVerlof: true, budgetKey: "fv" },
  "Z":    { label: "Ziekte", class: "b-z", isVerlof: false },
  "MU":   { label: "Meeruren (Opbouw +7.6u)", class: "b-mu", isVerlof: false },
  "REC":  { label: "Recuperatie (-7.6u)", class: "b-rec", isVerlof: false },
  "AAP":  { label: "Ancienniteit / Aanmoediging", class: "b-aap", isVerlof: true, budgetKey: "aap" },
  "R1Q":  { label: "Rimpeldag Q1", class: "b-r1q", isVerlof: true, budgetKey: "r1q" },
  "R2Q":  { label: "Rimpeldag Q2", class: "b-r2q", isVerlof: true, budgetKey: "r2q" },
  "R3Q":  { label: "Rimpeldag Q3", class: "b-r3q", isVerlof: true, budgetKey: "r3q" },
  "R4Q":  { label: "Rimpeldag Q4", class: "b-r4q", isVerlof: true, budgetKey: "r4q" }
};

// --- STANDAARD GEGEVENS (INITIALISATIE) ---
const STANDAARD_PERSONEN = [
  { id: "p1", naam: "Bart Wouters", type: "wl", regim: 38, budget: { av:20, v:5, fv:0, aap:2, r1q:1, r2q:1, r3q:1, r4q:1 } },
  { id: "p2", naam: "Danny Van de Perre", type: "wl", regim: 38, budget: { av:20, v:2, fv:1, aap:0, r1q:0, r2q:0, r3q:0, r4q:0 } },
  { id: "p3", naam: "Gerd Camps", type: "std", regim: 38, budget: { av:20, v:0, fv:0, aap:1, r1q:1, r2q:1, r3q:0, r4q:0 } },
  { id: "p4", naam: "Benny Verhaegen", type: "std", regim: 38, budget: { av:20, v:0, fv:2, aap:3, r1q:1, r2q:1, r3q:1, r4q:1 } },
  { id: "p5", naam: "Mario Verhaegen", type: "std", regim: 38, budget: { av:20, v:4, fv:0, aap:0, r1q:0, r2q:0, r3q:0, r4q:0 } },
  { id: "p6", naam: "Sven Van de Weyer", type: "std", regim: 38, budget: { av:20, v:1, fv:1, aap:1, r1q:0, r2q:0, r3q:0, r4q:0 } },
  { id: "p7", naam: "Huseyin Karaca", type: "std", regim: 38, budget: { av:20, v:0, fv:0, aap:0, r1q:0, r2q:0, r3q:0, r4q:0 } },
  { id: "p8", naam: "Kris Van de Craen", type: "std", regim: 38, budget: { av:20, v:0, fv:0, aap:2, r1q:1, r2q:1, r3q:1, r4q:1 } },
  { id: "p9", naam: "Danny Janssens", type: "std", regim: 38, budget: { av:20, v:0, fv:0, aap:0, r1q:1, r2q:0, r3q:0, r4q:0 } },
  { id: "p10", naam: "Danny Schroeven", type: "std", regim: 38, budget: { av:20, v:3, fv:0, aap:1, r1q:1, r2q:1, r3q:1, r4q:0 } },
  { id: "p11", naam: "Eddy Vanderheyden", type: "std", regim: 38, budget: { av:20, v:0, fv:0, aap:4, r1q:1, r2q:1, r3q:1, r4q:1 } },
  { id: "p12", naam: "Luc Wouters", type: "std", regim: 38, budget: { av:20, v:0, fv:3, aap:2, r1q:1, r2q:1, r3q:1, r4q:1 } },
  { id: "p13", naam: "Nico Van Ende", type: "std", regim: 38, budget: { av:20, v:0, fv:0, aap:1, r1q:0, r2q:0, r3q:0, r4q:0 } },
  { id: "p14", naam: "Davy Van de Weyer", type: "std", regim: 38, budget: { av:20, v:2, fv:0, aap:0, r1q:0, r2q:0, r3q:0, r4q:0 } },
  { id: "p15", naam: "Marc Vervoort", type: "std", regim: 38, budget: { av:20, v:1, fv:0, aap:3, r1q:1, r2q:1, r3q:1, r4q:1 } },
  { id: "p16", naam: "Kris Van de Weyer", type: "std", regim: 38, budget: { av:20, v:0, fv:1, aap:0, r1q:0, r2q:0, r3q:0, r4q:0 } }
];

// --- STATE MANAGEMENT (LOCALSTORAGE) ---
let state = {
  currentTab: "rooster",
  currentMonth: 4, // Mei (0-indexed dus 4)
  personen: JSON.parse(localStorage.getItem("kn_personen")) || STANDAARD_PERSONEN,
  rooster: JSON.parse(localStorage.getItem("kn_rooster")) || {},
  planning: JSON.parse(localStorage.getItem("kn_planning")) || {},
  externen: JSON.parse(localStorage.getItem("kn_externen")) || [
    { id: "e1", naam: "Extern 1 (Schilder)" },
    { id: "e2", naam: "Extern 2 (Elektricien)" }
  ],
  werven: JSON.parse(localStorage.getItem("kn_werven")) || ["Werf Centrum", "Werf Noord", "Werf Post", "Atelier"],
  instellingen: JSON.parse(localStorage.getItem("kn_instellingen")) || {
    emailWl: "bart.wouters@kneindhout.be",
    emailBureel: "info@kneindhout.be",
    emailZiekte: "hr@kneindhout.be"
  }
};

function saveState() {
  localStorage.setItem("kn_personen", JSON.stringify(state.personen));
  localStorage.setItem("kn_rooster", JSON.stringify(state.rooster));
  localStorage.setItem("kn_planning", JSON.stringify(state.planning));
  localStorage.setItem("kn_externen", JSON.stringify(state.externen));
  localStorage.setItem("kn_werven", JSON.stringify(state.werven));
  localStorage.setItem("kn_instellingen", JSON.stringify(state.instellingen));
}

// --- CORE UTILS ---
function getDaysInMonth(m) {
  return new Date(2026, m + 1, 0).getDate();
}
function getIsoDate(m, d) {
  return `2026-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}
function isWeekend(iso) {
  let day = new Date(iso).getDay();
  return day === 0 || day === 6;
}
function getQuarter(m) {
  return Math.floor(m / 3) + 1;
}

// --- APP RENDERER ---
function setTab(tabName) {
  state.currentTab = tabName;
  document.querySelectorAll(".nav-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.tab === tabName);
  });
  renderContent();
}

function changeMonth(dir) {
  state.currentMonth = (state.currentMonth + dir + 12) % 12;
  renderContent();
}

function renderContent() {
  const container = document.getElementById("content");
  container.innerHTML = "";

  if (state.currentTab === "rooster") renderRooster(container);
  else if (state.currentTab === "kalender") renderKalender(container);
  else if (state.currentTab === "verlof") renderVerlofBudgetten(container);
  else if (state.currentTab === "planning") renderPlanning(container);
  else if (state.currentTab === "instellingen") renderInstellingen(container);
}

// --- TABS RENDERING ---

// 1. ROOSTER TAB
function renderRooster(target) {
  let days = getDaysInMonth(state.currentMonth);
  let maandNaam = new Date(2026, state.currentMonth, 1).toLocaleString('nl-BE', { month: 'long', year: 'numeric' });

  let html = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Uurrooster: ${maandNaam}</h2>
        <div class="no-print" style="display:flex;gap:8px;">
          <button class="btn btn-sm" onclick="changeMonth(-1)">◀ Vorige</button>
          <button class="btn btn-sm" onclick="changeMonth(1)">Volgende ▶</button>
          <button class="btn btn-sm btn-primary" onclick="window.print()">🖨 Afdrukken</button>
        </div>
      </div>
      <div class="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th class="sticky-col" style="min-width:160px;">Medewerker</th>
              ${Array.from({length:days}, (_,i) => {
                let d = i+1;
                let iso = getIsoDate(state.currentMonth, d);
                let we = isWeekend(iso);
                let hd = FEESTDAGEN_2026[iso];
                let cs = COLLECTIEVE_SLUITING_2026[iso];
                let style = we ? 'background:#cbd5e1;color:#fff;' : (hd ? 'background:#fca5a5;color:#991b1b;' : (cs ? 'background:#fef08a;' : ''));
                let titel = hd || cs || '';
                return `<th class="day-th" style="${style}" title="${titel}">${d}</th>`;
              }).join('')}
              <th style="text-align:center;">Saldo MU</th>
            </tr>
          </thead>
          <tbody>
  `;

  // Splitsen in Werkleiders en Medewerkers
  let wls = state.personen.filter(p => p.type === 'wl');
  let stds = state.personen.filter(p => p.type === 'std');

  function renderRows(lijst) {
    return lijst.map(p => {
      let muSaldo = berekenMuSaldo(p.id);
      let muStyle = muSaldo < 0 ? 'color:#dc2626;font-weight:700;' : 'color:#166534;font-weight:700;';

      let cells = Array.from({length:days}, (_,i) => {
        let d = i+1;
        let iso = getIsoDate(state.currentMonth, d);
        let code = state.rooster[`${p.id}_${iso}`] || "AANW";
        let meta = VERLOF_CODES[code] || { class: "", label: code };
        let text = code === "AANW" ? "•" : code;
        
        if (isWeekend(iso)) return `<td style="background:#f8fafc;color:#cbd5e1;text-align:center;">-</td>`;
        if (FEESTDAGEN_2026[iso]) return `<td style="background:#fef2f2;color:#fca5a5;text-align:center;font-size:10px;">HD</td>`;
        if (COLLECTIEVE_SLUITING_2026[iso]) return `<td style="background:#fefce8;color:#fde68a;text-align:center;font-size:10px;">CS</td>`;

        return `
          <td class="rooster-day ${meta.class}" style="text-align:center;font-weight:700;" 
              onclick="openRoosterModal('${p.id}', '${iso}', '${p.naam}')" title="${meta.label}">
            ${text}
          </td>`;
      }).join('');

      return `
        <tr>
          <td class="sticky-col">
            <strong>${p.naam}</strong> ${p.type==='wl'?'<span class="wl-label">WL</span>':''}
          </td>
          ${cells}
          <td style="text-align:center;${muStyle}">${muSaldo > 0 ? '+' : ''}${muSaldo.toFixed(1)}u</td>
        </tr>
      `;
    }).join('');
  }

  html += `<tr class="divider-row"><td colspan="${days+2}" style="color:#fff;font-size:11px;font-weight:700;padding:2px 10px;">WERKLEIDERS</td></tr>`;
  html += renderRows(wls);
  html += `<tr class="divider-row"><td colspan="${days+2}" style="color:#fff;font-size:11px;font-weight:700;padding:2px 10px;">MEDEWERKERS</td></tr>`;
  html += renderRows(stds);

  html += `</tbody></table></div></div>`;
  target.innerHTML = html;
}

// 2. KALENDER TAB
function renderKalender(target) {
  let days = getDaysInMonth(state.currentMonth);
  let maandNaam = new Date(2026, state.currentMonth, 1).toLocaleString('nl-BE', { month: 'long', year: 'numeric' });
  let firstDayIndex = new Date(2026, state.currentMonth, 1).getDay(); 
  let correctedIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1; // Maandag-gebaseerd

  let html = `
    <div class="card" style="max-width:800px;margin:0 auto;">
      <div class="card-header">
        <h2 class="card-title">Kalender: ${maandNaam}</h2>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-sm" onclick="changeMonth(-1)">◀</button>
          <button class="btn btn-sm" onclick="changeMonth(1)">▶</button>
        </div>
      </div>
      <div class="cal-grid">
        <div class="cal-head">Ma</div><div class="cal-head">Di</div><div class="cal-head">Wo</div>
        <div class="cal-head">Do</div><div class="cal-head">Vr</div><div class="cal-head">Za</div><div class="cal-head">Zo</div>
  `;

  for(let i=0; i<correctedIndex; i++) {
    html += `<div style="border:1px solid transparent;"></div>`;
  }

  for(let d=1; d<=days; d++) {
    let iso = getIsoDate(state.currentMonth, d);
    let hd = FEESTDAGEN_2026[iso];
    let cs = COLLECTIEVE_SLUITING_2026[iso];
    let we = isWeekend(iso);
    
    let cls = "cal-day";
    let lbl = "";
    if (we) cls += " weekend";
    if (hd) { cls += " is-holiday"; lbl = hd; }
    if (cs) { cls += " is-collective"; lbl = cs; }

    html += `
      <div class="${cls}">
        <span class="cal-day-num">${d}</span>
        <span class="cal-day-label">${lbl}</span>
      </div>
    `;
  }

  html += `</div></div>`;
  target.innerHTML = html;
}

// 3. VERLOF BUDGETTEN TAB
function renderVerlofBudgetten(target) {
  let html = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Overzicht Verlofrechten & Budgetten (2026)</h2>
        <button class="btn btn-sm btn-primary no-print" onclick="window.print()">🖨 Afdrukken</button>
      </div>
      <div class="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>Medewerker</th>
              <th>AV (Opgen./Budget)</th>
              <th>V</th>
              <th>FV</th>
              <th>AAP</th>
              <th>Rimpel Q1</th>
              <th>Rimpel Q2</th>
              <th>Rimpel Q3</th>
              <th>Rimpel Q4</th>
            </tr>
          </thead>
          <tbody>
  `;

  state.personen.forEach(p => {
    let verbruikt = berekenVerbruiktVerlof(p.id);
    
    function cell(key) {
      let bud = p.budget[key] || 0;
      let opg = verbruikt[key] || 0;
      let warn = opg > bud ? 'background:#fee2e2;color:#991b1b;font-weight:700;border-radius:4px;padding:2px 4px;' : '';
      return `<td style="text-align:left;"><span style="${warn}">${opg}</span> / <span>${bud}</span></td>`;
    }

    html += `
      <tr>
        <td><strong>${p.naam}</strong> ${p.type==='wl'?'<span class="wl-label">WL</span>':''}</td>
        ${cell('av')}
        ${cell('v')}
        ${cell('fv')}
        ${cell('aap')}
        ${cell('r1q')}
        ${cell('r2q')}
        ${cell('r3q')}
        ${cell('r4q')}
      </tr>
    `;
  });

  html += `</tbody></table></div></div>`;
  target.innerHTML = html;
}

// 4. PLANNING TAB
function renderPlanning(target) {
  let dagenLijst = [];
  let startWeek = new Date(2026, state.currentMonth, 1);
  // Zoek de eerste maandag van de maand of net ervoor
  let diff = startWeek.getDay() === 0 ? 6 : startWeek.getDay() - 1;
  startWeek.setDate(startWeek.getDate() - diff);

  for(let i=0; i<5; i++) { // Maandag t.e.m. Vrijdag
    let d = new Date(startWeek);
    d.setDate(d.getDate() + i);
    if(d.getMonth() === state.currentMonth) {
      dagenLijst.push(d.toISOString().split('T')[0]);
    }
  }

  if (dagenLijst.length === 0) {
    // Fallback indien de eerste week raar valt
    dagenLijst.push(getIsoDate(state.currentMonth, 1));
  }

  let actieveDag = dagenLijst[0];

  let html = `
    <div style="display:grid;grid-template-columns: 280px 1fr; gap:16px;">
      <div class="card no-print">
        <h3 style="font-size:13px;margin-bottom:10px;font-weight:700;">Selecteer Dag (Eerste Werkweek)</h3>
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${dagenLijst.map(iso => {
            let n = new Date(iso).toLocaleDateString('nl-BE', { weekday:'short', day:'numeric', month:'short' });
            return `<button class="btn style="text-align:left;" onclick="document.getElementById('plan-date').value='${iso}';triggerPlanningRender()">${n}</button>`;
          }).join('')}
        </div>
        <hr style="margin:14px 0;border:none;border-top:1px solid #e2e8f0;">
        <label style="font-size:12px;font-weight:600;">Handmatige Datum:</label>
        <input type="date" id="plan-date" value="${actieveDag}" onchange="triggerPlanningRender()" style="width:100%;padding:6px;border-radius:6px;border:1px solid #cbd5e1;margin-top:4px;">
        
        <div style="margin-top:20px;">
          <button class="btn btn-primary style="width:100%;" onclick="openMailModal('${actieveDag}')">✉ Genereer Dagplanning Mail</button>
        </div>
      </div>

      <div id="planning-dag-container"></div>
    </div>
  `;

  target.innerHTML = html;
  renderPlanningDag(actieveDag);
}

function triggerPlanningRender() {
  let d = document.getElementById("plan-date").value;
  renderPlanningDag(d);
}

function renderPlanningDag(iso) {
  let container = document.getElementById("planning-dag-container");
  if(!container) return;

  let geformatteerdeDatum = new Date(iso).toLocaleDateString('nl-BE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  
  // Verzamel alle beschikbare medewerkers + externen
  let alleMensen = [
    ...state.personen.map(p => ({ id: p.id, naam: p.naam, sub: p.type==='wl'?'Werkleider':'Medewerker', cls: p.type==='wl'?'av-wl':'av-std', isExt: false })),
    ...state.externen.map(e => ({ id: e.id, naam: e.naam, sub: 'Externe partner', cls: 'av-ext', isExt: true }))
  ];

  let html = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Werf- & Taakplanning: <span style="color:#2563eb;">${geformatteerdeDatum}</span></h2>
        <button class="btn btn-sm btn-primary no-print" onclick="window.print()">🖨 Print Planning</button>
      </div>
      
      <p style="font-size:12px;color:#64748b;margin-bottom:14px;" class="no-print">Klik op een persoon om een taak of werf toe te wijzen voor deze specifieke dag.</p>

      <div style="display:flex;flex-direction:column;gap:1px;background:#e2e8f0;border-radius:8px;overflow:hidden;">
  `;

  alleMensen.forEach(m => {
    let key = `${m.id}_${iso}`;
    let taken = state.planning[key] || [];
    
    // Controleer of de vaste medewerker afwezig is volgens het rooster
    let afwezigTxt = "";
    if (!m.isExt) {
      let rCode = state.rooster[key] || "AANW";
      if (rCode !== "AANW") {
        afwezigTxt = `<span class="badge ${VERLOF_CODES[rCode]?.class || 'b-z'}" style="margin-left:8px;">${VERLOF_CODES[rCode]?.label || rCode}</span>`;
      }
    }

    html += `
      <div class="plan-person ${m.cls==='av-wl'?'is-wl':(m.isExt?'is-ext':'')}" style="background:#fff;">
        <div class="plan-avatar ${m.cls}">${m.naam.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase()}</div>
        <div style="flex:1;">
          <div style="display:flex;align-items:center;justify-content:between;">
            <div>
              <span style="font-weight:600;font-size:13px;">${m.naam}</span>
              <span style="font-size:11px;color:#94a3b8;margin-left:6px;">(${m.sub})</span>
              ${afwezigTxt}
            </div>
            <button class="add-task-btn no-print" onclick="openAddTaskModal('${m.id}', '${iso}', '${m.naam}')">+ Toewijzen</button>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px;">
            ${taken.length === 0 ? '<span style="font-size:12px;color:#cbd5e1;font-style:italic;">Nog geen werf toegewezen</span>' : ''}
            ${taken.map((t, idx) => `
              <span class="task-chip" onclick="verwijderTaak('${m.id}', '${iso}', ${idx})" title="Klik om te verwijderen">
                📍 <strong>${t.werf}</strong> ${t.notitie ? `(${t.notitie})` : ''} <span style="color:#cbd5e1;margin-left:4px;">×</span>
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

// 5. INSTELLINGEN TAB
function renderInstellingen(target) {
  let html = `
    <div class="card" style="max-width:600px;margin:0 auto;">
      <h2 class="card-title" style="margin-bottom:14px;">⚙ Instellingen & E-mail configuratie</h2>
      
      <label style="display:block;font-size:12px;font-weight:600;margin-top:10px;">E-mail Adres Hoofdwerkleider (Bart):</label>
      <input type="text" id="cfg-wl" value="${state.instellingen.emailWl}" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;margin-bottom:12px;">

      <label style="display:block;font-size:12px;font-weight:600;">E-mail Adres Bureel (KNeindhout):</label>
      <input type="text" id="cfg-bur" value="${state.instellingen.emailBureel}" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;margin-bottom:12px;">

      <label style="display:block;font-size:12px;font-weight:600;">E-mail Adres HR / Ziekte-administratie:</label>
      <input type="text" id="cfg-zk" value="${state.instellingen.emailZiekte}" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;margin-bottom:16px;">

      <button class="btn btn-primary" onclick="opslaanInstellingen()">Instellingen Opslaan</button>
      
      <hr style="margin:20px 0;border:none;border-top:1px solid #e2e8f0;">
      <h3 style="font-size:13px;font-weight:700;color:#dc2626;margin-bottom:6px;">⚠️ Database Beheer</h3>
      <p style="font-size:12px;color:#64748b;margin-bottom:10px;">Indien je de applicatie volledig wilt resetten naar de fabrieksinstellingen en alle opgeslagen data wilt wissen, klik dan hieronder.</p>
      <button class="btn btn-danger btn-sm" onclick="fabrieksReset()">Volledige Reset (Wis alles)</button>
    </div>
  `;
  target.innerHTML = html;
}

function opslaanInstellingen() {
  state.instellingen.emailWl = document.getElementById("cfg-wl").value;
  state.instellingen.emailBureel = document.getElementById("cfg-bur").value;
  state.instellingen.emailZiekte = document.getElementById("cfg-zk").value;
  saveState();
  alert("Instellingen succesvol opgeslagen!");
}

function fabrieksReset() {
  if(confirm("Weet je absoluut zeker dat je ALLE roosters, planningen en aanpassingen wilt wissen? Dit kan niet ongedaan gemaakt worden.")) {
    localStorage.clear();
    location.reload();
  }
}

// --- LOGIC & CALCULATIONS ---
function berekenMuSaldo(pid) {
  let saldo = 0;
  Object.keys(state.rooster).forEach(key => {
    if(key.startsWith(pid + "_")) {
      let code = state.rooster[key];
      if(code === "MU") saldo += 7.6;
      if(code === "REC") saldo -= 7.6;
    }
  });
  return saldo;
}

function berekenVerbruiktVerlof(pid) {
  let counts = { av:0, v:0, fv:0, aap:0, r1q:0, r2q:0, r3q:0, r4q:0 };
  Object.keys(state.rooster).forEach(key => {
    if(key.startsWith(pid + "_")) {
      let code = state.rooster[key];
      let meta = VERLOF_CODES[code];
      if(meta && meta.isVerlof && meta.budgetKey) {
        counts[meta.budgetKey]++;
      }
    }
  });
  return counts;
}

// --- MODAL GENERATION & HANDLING ---
function openRoosterModal(pid, iso, pnaam) {
  let huidig = state.rooster[`${pid}_${iso}`] || "AANW";
  let geformatteerdeDatum = new Date(iso).toLocaleDateString('nl-BE', { weekday: 'long', day: 'numeric', month: 'long' });

  let bg = document.getElementById("modal-bg");
  let modal = document.getElementById("modal");

  let html = `
    <h2>Status Wijzigen</h2>
    <div class="modal-sub">${pnaam} — ${geformatteerdeDatum}</div>

    <label>Kies Status / Verlofcategorie:</label>
    <div class="code-grid">
  `;

  Object.keys(VERLOF_CODES).forEach(code => {
    let meta = VERLOF_CODES[code];
    let sel = code === huidig ? 'selected' : '';
    html += `
      <button class="code-btn ${sel}" onclick="saveRoosterStatus('${pid}','${iso}','${code}')">
        <span class="badge ${meta.class}">${code}</span>
        <span style="font-weight:500;margin-top:2px;">${meta.label.split('(')[0]}</span>
      </button>
    `;
  });

  html += `
    </div>
    <div class="modal-footer">
      <button class="btn style="width:100%;" onclick="closeModal()">Sluiten</button>
    </div>
  `;

  modal.innerHTML = html;
  bg.classList.add("open");
}

function saveRoosterStatus(pid, iso, code) {
  let key = `${pid}_${iso}`;
  if(code === "AANW") {
    delete state.rooster[key];
  } else {
    state.rooster[key] = code;
  }
  saveState();
  closeModal();
  renderContent();

  // Automatische trigger voor e-mail bij kritieke statussen zoals ziekte
  if(code === "Z") {
    setTimeout(() => {
      if(confirm("Je hebt iemand op ZIEK gezet. Wilt je direct de HR/Ziekte notificatiemail openen?")) {
        let p = state.personen.find(x => x.id === pid);
        let d = new Date(iso).toLocaleDateString('nl-BE', { day:'numeric', month:'long' });
        let mailto = `mailto:${state.instellingen.emailZiekte}?subject=Ziekemeldingsnotificatie: ${p.naam}&body=Beste HR,%0D%0A%0D%0ABij deze meld ik dat medewerker ${p.naam} op ${d} geregistreerd staat als afwezig wegens ziekte.%0D%0A%0D%0AMet vriendelijke groeten.`;
        window.location.href = mailto;
      }
    }, 200);
  }
}

function openAddTaskModal(pid, iso, pnaam) {
  let bg = document.getElementById("modal-bg");
  let modal = document.getElementById("modal");

  let html = `
    <h2>Werf of Taak Toewijzen</h2>
    <div class="modal-sub">${pnaam}</div>

    <label>Selecteer of typ een Werf/Locatie:</label>
    <select id="taak-werf-sel" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;margin-bottom:12px;">
      ${state.werven.map(w => `<option value="${w}">${w}</option>`).join('')}
    </select>
    
    <label>Of voeg een nieuwe werf toe aan de lijst:</label>
    <input type="text" id="taak-werf-nieuw" placeholder="Nieuwe werf naam..." style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;margin-bottom:12px;">

    <label>Specifieke Opmerking / Taakbeschrijving (optioneel):</label>
    <input type="text" id="taak-notitie" placeholder="Bijv: Vanaf 13:00, Schilderen, etc..." style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;margin-bottom:16px;">

    <div class="modal-footer">
      <button class="btn btn-primary" onclick="savePlanningTaak('${pid}','${iso}')">Toewijzing Opslaan</button>
      <button class="btn" onclick="closeModal()">Annuleren</button>
    </div>
  `;

  modal.innerHTML = html;
  bg.classList.add("open");
}

function savePlanningTaak(pid, iso) {
  let selWerf = document.getElementById("taak-werf-sel").value;
  let nwWerf = document.getElementById("taak-werf-nieuw").value.trim();
  let notitie = document.getElementById("taak-notitie").value.trim();

  let definitieveWerf = selWerf;
  if(nwWerf.length > 0) {
    definitieveWerf = nwWerf;
    if(!state.werven.includes(nwWerf)) {
      state.werven.push(nwWerf);
    }
  }

  let key = `${pid}_${iso}`;
  if(!state.planning[key]) state.planning[key] = [];
  state.planning[key].push({ werf: definitieveWerf, notitie: notitie });

  saveState();
  closeModal();
  renderPlanningDag(iso);
}

function verwijderTaak(pid, iso, idx) {
  let key = `${pid}_${iso}`;
  if(state.planning[key]) {
    state.planning[key].splice(idx, 1);
    if(state.planning[key].length === 0) delete state.planning[key];
    saveState();
    renderPlanningDag(iso);
  }
}

function openMailModal(iso) {
  let bg = document.getElementById("modal-bg");
  let modal = document.getElementById("modal");
  let geformatteerdeDatum = new Date(iso).toLocaleDateString('nl-BE', { weekday: 'long', day: 'numeric', month: 'long' });

  // Bouw e-mail body tekst op
  let bodyTxt = `Beste team,%0D%0A%0D%0AHierbij de werf- en taakplanning voor ${geformatteerdeDatum}:%0D%0A%0D%0A`;
  
  state.personen.forEach(p => {
    let key = `${p.id}_${iso}`;
    let taken = state.planning[key] || [];
    let rCode = state.rooster[key] || "AANW";
    
    bodyTxt += `- ${p.naam}: `;
    if(rCode !== "AANW") {
      bodyTxt += `AFWEZIG (${VERLOF_CODES[rCode]?.label || rCode})`;
    } else if(taken.length === 0) {
      bodyTxt += "Nog te bepalen / Atelier";
    } else {
      bodyTxt += taken.map(t => `${t.werf} ${t.notitie ? `(${t.notitie})`:''}`).join(', ');
    }
    bodyTxt += `%0D%0A`;
  });

  bodyTxt += `%0D%0AMet vriendelijke groeten,%0D%0ABart Wouters`;

  let mailtoWl = `mailto:${state.instellingen.emailBureel}?cc=${state.instellingen.emailWl}&subject=Dagplanning ${geformatteerdeDatum}&body=${bodyTxt}`;

  let html = `
    <h2>✉ E-mail Dagplanning Verzenden</h2>
    <div class="modal-sub">Gegenereerd voor ${geformatteerdeDatum}</div>
    
    <div class="info-box" style="margin-bottom:16px;">
      <h3>Wat gaat er gebeuren?</h3>
      <ol>
        <li>De applicatie opent je standaard mailprogramma (Outlook, Mail, Mailbird, etc.).</li>
        <li>De onderwerpen, ontvangers (Bureel + CC Bart) en de volledige planning staan al automatisch ingevuld.</li>
        <li>Je hoeft enkel nog op 'Verzenden' te klikken in je eigen mailprogramma.</li>
      </ol>
    </div>

    <div class="modal-footer">
      <a class="btn btn-primary style="text-decoration:none;text-align:center;flex:1;" href="${mailtoWl}" onclick="closeModal()">📬 Open Mailprogramma</a>
      <button class="btn" onclick="closeModal()">Annuleren</button>
    </div>
  `;

  modal.innerHTML = html;
  bg.classList.add("open");
}

function closeModal() {
  document.getElementById("modal-bg").classList.remove("open");
}

// --- APP STARTUP ---
window.addEventListener("DOMContentLoaded", () => {
  renderContent();
});
