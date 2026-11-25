const IcSpark = yi, IcCheck = jn;
// ===== AFINTY · componentes nuevos (se inyectan en el bundle; usan F, V, _u, dc, Ha, Qn, Ie, W1, iconos) =====
const AFY_FONT_D = "'Syne', 'Space Grotesk', sans-serif";
const AFY_FONT_M = "'Space Mono', 'IBM Plex Mono', monospace";

function afyHm(min) {
  const h = Math.floor(min / 60), m = min % 60;
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}

function useCuenta(objetivo, ms = 1100) {
  const [v, setV] = F.useState(0);
  F.useEffect(() => {
    let raf, t0;
    const paso = (t) => {
      if (!t0) t0 = t;
      const k = Math.min(1, (t - t0) / ms);
      setV(Math.round(objetivo * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(paso);
    };
    raf = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(raf);
  }, [objetivo, ms]);
  return v;
}

function AfyStat({ valor, sufijo, etiqueta, color, icono }) {
  const n = useCuenta(valor);
  const Ico = icono;
  return (
    <div className="afy-stat">
      <div className="afy-stat-ico" style={{ color, borderColor: color + "55", boxShadow: "0 0 18px -4px " + color }}>
        <Ico size={18} />
      </div>
      <div>
        <div className="afy-stat-num" style={{ color }}>{n}{sufijo}</div>
        <div className="afy-stat-lbl">{etiqueta}</div>
      </div>
    </div>
  );
}

function HeroAfinty({ onIr, ocupacion, camasLibres, alertas, criticos }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div className="afy-hero">
        <div className="afy-hero-copy">
          <span className="afy-pill"><span className="afy-dot" /> IA ACTIVA · MONITOREANDO EL HOSPITAL</span>
          <h1 className="afy-h1">
            GESTIÓN<br />
            <span className="afy-h1-thin">HOSPITALARIA</span><br />
            <span className="afy-h1-glow">INTELIGENTE</span>
          </h1>
          <p className="afy-lead">
            Una IA que no solo responde: <b>interviene</b>. Si un doctor llega tarde reasigna pacientes y les avisa;
            si llegas al hospital, te hace las preguntas y deja tus papeles listos antes de la ventanilla.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="afy-btn-main" onClick={() => onIr && onIr("ia")}>
              Abrir centro de comando IA <Am size={16} />
            </button>
            <button className="afy-btn-ghost" onClick={() => onIr && onIr("turnos")}>
              Ver turnos médicos
            </button>
          </div>
        </div>
        <div className="afy-hero-media">
          <div className="afy-media-frame">
            <img src="./hospital-fachada.png" alt="Hospital Nacional Arzobispo Loayza" />
            <div className="afy-media-shade" />
          </div>
          <div className="afy-float-chip"><span className="afy-dot" style={{ background: "#2EE6A0", boxShadow: "0 0 10px #2EE6A0" }} /> OPERATIVO 24/7</div>
          <div className="afy-ring"><span>IA<br />ONLINE</span></div>
        </div>
      </div>
      <div className="afy-stats">
        <AfyStat valor={ocupacion} sufijo="%" etiqueta="OCUPACIÓN DE CAMAS" color="#38BDF8" icono={Dr} />
        <AfyStat valor={camasLibres} sufijo="" etiqueta="CAMAS LIBRES" color="#2EE6A0" icono={IcCheck} />
        <AfyStat valor={alertas} sufijo="" etiqueta="ALERTAS ACTIVAS" color="#FFB547" icono={Ol} />
        <AfyStat valor={criticos} sufijo="" etiqueta="MEDICINAS CRÍTICAS" color="#FF5D7A" icono={Rr} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 1) MONITOR EN VIVO: la IA interviene cuando un doctor llega tarde
// ---------------------------------------------------------------------------
const TOL_AVISO = 10, TOL_REASIGNA = 20, TOL_ESCALA = 35;
const PACIENTES_DEMO = jo; // lista de nombres ya existente en el sistema

function IAMonitor({ onAlerta }) {
  const lista = F.useMemo(() => {
    const base = V.filter((d) => vi.includes(d.id) && _u[d.id] === "07:00");
    const vistos = new Set();
    const out = [];
    for (const d of base) {
      if (!vistos.has(d.area)) { vistos.add(d.area); out.push(d); }
      if (out.length === 6) break;
    }
    for (const d of base) { if (out.length >= 6) break; if (!out.includes(d)) out.push(d); }
    return out;
  }, []);
  // llegada programada de la demo (minutos desde 00:00): unos puntuales, uno tarde y uno que no llega
  const plan = F.useMemo(() => {
    const p = {};
    lista.forEach((d, k) => {
      p[d.id] = k === 1 ? 7 * 60 + 24 : k === 3 ? null : 7 * 60 - 4 + Math.floor(Ha(d.id * 1.7) * 8);
    });
    return p;
  }, [lista]);
  const espera = (d) => 4 + Math.floor(Ha(d.id * 3.1) * 7);
  const pacientesDe = (d) => Array.from({ length: espera(d) }, (_, k) => PACIENTES_DEMO[(d.id * 3 + k * 5) % PACIENTES_DEMO.length].nombre);

  const [t, setT] = F.useState(7 * 60 - 10);
  const [corre, setCorre] = F.useState(false);
  const [auto, setAuto] = F.useState(true);
  const [llegadas, setLlegadas] = F.useState({});
  const [acciones, setAcciones] = F.useState({}); // id -> {aviso, propuesta, reasignado:{a, pacientes}, escalado}
  const [log, setLog] = F.useState([]);
  const hecho = F.useRef(new Set());
  const extra = F.useRef({}); // pacientes ya derivados a cada doctor de reemplazo

  const ahora = () => afyHm(t);
  const agregarLog = (tipo, texto, t0) => setLog((l) => [{ id: Math.random().toString(36).slice(2), tipo, texto, hora: afyHm(t0) }, ...l].slice(0, 40));

  // reloj de simulación
  F.useEffect(() => {
    if (!corre) return;
    const h = setInterval(() => setT((x) => (x >= 7 * 60 + 60 ? x : x + 1)), 280);
    return () => clearInterval(h);
  }, [corre]);
  F.useEffect(() => { if (t >= 7 * 60 + 60 && corre) setCorre(false); }, [t, corre]);

  // llegadas programadas
  F.useEffect(() => {
    lista.forEach((d) => {
      const pl = plan[d.id];
      if (pl !== null && t >= pl && !(d.id in llegadas)) setLlegadas((l) => ({ ...l, [d.id]: pl }));
    });
  }, [t]);

  const presente = (d) => d.id in llegadas;
  const retraso = (d) => (presente(d) ? Math.max(0, llegadas[d.id] - 7 * 60) : Math.max(0, t - 7 * 60));

  function buscarReemplazo(d) {
    const cands = lista.filter((x) => x.id !== d.id && presente(x));
    const mismo = cands.filter((x) => x.area === d.area);
    const carga = (x) => espera(x) + (extra.current[x.id] || 0);
    const orden = (mismo.length ? mismo : cands).slice().sort((a, b) => carga(a) - carga(b));
    return orden[0] || null;
  }

  function ejecutarReasignacion(d, reemp, t0, manual) {
    const pac = pacientesDe(d);
    if (reemp) extra.current[reemp.id] = (extra.current[reemp.id] || 0) + pac.length;
    setAcciones((a) => ({ ...a, [d.id]: { ...(a[d.id] || {}), propuesta: null, reasignado: { a: reemp ? reemp.nombre : null, n: pac.length, pac } } }));
    if (reemp) {
      agregarLog("accion", `${manual ? "Aprobado · " : ""}IA reasignó ${pac.length} pacientes de Dr(a). ${d.nombre.split(" ").slice(0, 2).join(" ")} a Dr(a). ${reemp.nombre.split(" ").slice(0, 2).join(" ")} (${reemp.esp}) y envió SMS a cada paciente con su nuevo consultorio.`, t0);
    } else {
      agregarLog("accion", `IA no encontró reemplazo disponible: ofreció a ${pac.length} pacientes reprogramar su cita o esperar, y envió SMS con el tiempo estimado.`, t0);
    }
  }

  // motor de reglas: se evalúa cada minuto simulado
  F.useEffect(() => {
    lista.forEach((d) => {
      if (presente(d)) return;
      const r = t - 7 * 60;
      const k = (n) => `${d.id}-${n}`;
      const corto = d.nombre.split(" ").slice(0, 2).join(" ");
      if (r >= TOL_AVISO && !hecho.current.has(k("aviso"))) {
        hecho.current.add(k("aviso"));
        setAcciones((a) => ({ ...a, [d.id]: { ...(a[d.id] || {}), aviso: true } }));
        agregarLog("aviso", `IA envió mensaje y llamada automática a Dr(a). ${corto}: «Su turno de 07:00 ya inició, ¿confirma su llegada?»`, t);
      }
      if (r >= TOL_REASIGNA && !hecho.current.has(k("reasigna"))) {
        hecho.current.add(k("reasigna"));
        const reemp = buscarReemplazo(d);
        if (auto) {
          ejecutarReasignacion(d, reemp, t, false);
        } else {
          setAcciones((a) => ({ ...a, [d.id]: { ...(a[d.id] || {}), propuesta: { reemp: reemp ? reemp.id : null } } }));
          agregarLog("propuesta", `IA propone reasignar a los ${espera(d)} pacientes de Dr(a). ${corto}${reemp ? ` con Dr(a). ${reemp.nombre.split(" ").slice(0, 2).join(" ")}` : ""}. Espera tu aprobación.`, t);
        }
      }
      if (r >= TOL_ESCALA && !hecho.current.has(k("escala"))) {
        hecho.current.add(k("escala"));
        setAcciones((a) => ({ ...a, [d.id]: { ...(a[d.id] || {}), escalado: true } }));
        agregarLog("escala", `IA escaló a Jefatura de Personal: Dr(a). ${corto} acumula ${r} min de retraso. Se registró alerta y posible sanción.`, t);
        onAlerta && onAlerta({
          id: `ia-escala-${d.id}-${Date.now()}`,
          sev: "alta",
          area: d.esp,
          msg: `IA AFINTY: ${d.nombre} no marcó ingreso (turno 07:00) y lleva ${r} min de retraso. Pacientes reasignados y Jefatura notificada.`,
          time: "Ahora",
        });
      }
    });
  }, [t, llegadas]);

  function marcarLlegada(d) {
    const era = t - 7 * 60;
    setLlegadas((l) => ({ ...l, [d.id]: t }));
    const corto = d.nombre.split(" ").slice(0, 2).join(" ");
    if (acciones[d.id] && acciones[d.id].reasignado) {
      agregarLog("ok", `Dr(a). ${corto} llegó (${afyHm(t)}, +${era} min). IA mantiene la reasignación para no confundir a los pacientes y le asigna los nuevos ingresos.`, t);
    } else {
      agregarLog("ok", `Dr(a). ${corto} marcó ingreso a las ${afyHm(t)}${era > 0 ? ` (+${era} min)` : ""}. IA canceló el protocolo de contingencia.`, t);
    }
  }

  function reiniciar() {
    hecho.current = new Set();
    extra.current = {};
    setT(7 * 60 - 10); setCorre(false); setLlegadas({}); setAcciones({}); setLog([]);
  }

  const totalEsperaAhorrada = Object.entries(acciones).reduce((s, [id, a]) => {
    if (!a.reasignado) return s;
    const d = lista.find((x) => String(x.id) === id);
    return s + a.reasignado.n * Math.max(0, Math.min(t - 7 * 60, 40) - 5);
  }, 0);

  const colorTipo = { aviso: "#FFB547", propuesta: "#A78BFA", accion: "#38BDF8", escala: "#FF5D7A", ok: "#2EE6A0" };
  const etiquetaTipo = { aviso: "AVISO", propuesta: "PROPUESTA", accion: "ACCIÓN", escala: "ESCALADO", ok: "OK" };

  return (
    <div>
      <div className="afy-card afy-ia-bar">
        <div className="afy-orb"><IcSpark size={20} color="#fff" /></div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <div className="afy-mini">REGLAS DE INTERVENCIÓN</div>
          <div style={{ fontSize: 13, color: "#C2CDEB", lineHeight: 1.55 }}>
            <b style={{ color: "#FFB547" }}>+{TOL_AVISO} min</b> avisa al doctor ·{" "}
            <b style={{ color: "#38BDF8" }}>+{TOL_REASIGNA} min</b> reasigna pacientes y les escribe ·{" "}
            <b style={{ color: "#FF5D7A" }}>+{TOL_ESCALA} min</b> escala a Jefatura.
          </div>
        </div>
        <label className="afy-switch" title="La IA ejecuta sola las reasignaciones">
          <input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} />
          <span className="afy-switch-track"><span className="afy-switch-knob" /></span>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: auto ? "#7CF5C4" : "#9AA9D0" }}>{auto ? "IA autónoma" : "Requiere mi aprobación"}</span>
        </label>
      </div>

      <div className="afy-card" style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", marginTop: 14 }}>
        <div>
          <div className="afy-mini">RELOJ DE LA SIMULACIÓN · TURNO 07:00</div>
          <div style={{ fontFamily: AFY_FONT_M, fontSize: 40, fontWeight: 700, letterSpacing: 2, color: "#E8EEFF", textShadow: "0 0 24px rgba(56,189,248,.6)" }}>{ahora()}</div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="afy-btn-main" onClick={() => setCorre((c) => !c)}>{corre ? "⏸ Pausar" : "▶ Simular la mañana"}</button>
          <button className="afy-btn-ghost" onClick={() => setT((x) => Math.min(x + 5, 7 * 60 + 60))}>+5 min</button>
          <button className="afy-btn-ghost" onClick={() => setT((x) => Math.min(x + 15, 7 * 60 + 60))}>+15 min</button>
          <button className="afy-btn-ghost" onClick={reiniciar}>↺ Reiniciar</button>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div className="afy-mini">ESPERA EVITADA POR LA IA</div>
          <div style={{ fontFamily: AFY_FONT_D, fontSize: 26, fontWeight: 700, color: "#2EE6A0" }}>{totalEsperaAhorrada} <span style={{ fontSize: 13, color: "#9AA9D0", fontWeight: 500 }}>min-paciente</span></div>
        </div>
      </div>

      <div className="afy-grid-doc">
        {lista.map((d) => {
          const a = acciones[d.id] || {};
          const ok = presente(d);
          const r = retraso(d);
          const tarde = !ok && t - 7 * 60 > 0;
          let estado, color;
          if (ok && r === 0) { estado = "EN CONSULTORIO"; color = "#2EE6A0"; }
          else if (ok) { estado = `LLEGÓ +${r} MIN`; color = "#FFB547"; }
          else if (!tarde) { estado = "POR LLEGAR"; color = "#9AA9D0"; }
          else if (t - 7 * 60 >= TOL_ESCALA) { estado = `SIN LLEGAR +${t - 7 * 60} MIN`; color = "#FF5D7A"; }
          else { estado = `ATRASADO +${t - 7 * 60} MIN`; color = "#FFB547"; }
          const propReemp = a.propuesta && a.propuesta.reemp ? lista.find((x) => x.id === a.propuesta.reemp) : null;
          return (
            <div key={d.id} className="afy-card afy-doc" style={{ borderColor: tarde ? color + "66" : undefined, boxShadow: tarde ? `0 0 30px -12px ${color}` : undefined }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="afy-avatar" style={{ borderColor: color }}><Wm size={17} /></div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5, color: "#E8EEFF", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{d.nombre}</div>
                  <div style={{ fontSize: 11.5, color: "#7C8DB8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{d.esp}</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                <span className="afy-tag" style={{ color, borderColor: color + "66", background: color + "1A" }}>{estado}</span>
                <span style={{ fontSize: 12, color: "#9AA9D0" }}><Wt size={12} style={{ verticalAlign: -1 }} /> {espera(d)} en espera</span>
              </div>
              {a.aviso && !ok && <div className="afy-step" style={{ color: "#FFB547" }}>✓ IA avisó al doctor (mensaje + llamada)</div>}
              {a.reasignado && (
                <div className="afy-step" style={{ color: "#38BDF8" }}>
                  ✓ {a.reasignado.n} pacientes {a.reasignado.a ? `→ Dr(a). ${a.reasignado.a.split(" ").slice(0, 2).join(" ")}` : "avisados para reprogramar"} · SMS enviado
                </div>
              )}
              {a.escalado && <div className="afy-step" style={{ color: "#FF5D7A" }}>✓ Jefatura de Personal notificada</div>}
              {a.propuesta && (
                <div className="afy-propuesta">
                  <div style={{ fontSize: 12.5, color: "#D9CCFF", marginBottom: 8 }}>
                    La IA propone mover a {espera(d)} pacientes{propReemp ? ` con Dr(a). ${propReemp.nombre.split(" ").slice(0, 2).join(" ")}` : " (sin reemplazo: reprogramar)"}.
                  </div>
                  <button className="afy-btn-main" style={{ padding: "7px 14px", fontSize: 12.5 }} onClick={() => ejecutarReasignacion(d, propReemp, t, true)}>Aprobar y avisar a pacientes</button>
                </div>
              )}
              {!ok && (
                <button className="afy-btn-ghost" style={{ marginTop: 12, width: "100%", fontSize: 12.5 }} onClick={() => marcarLlegada(d)}>Marcar llegada ahora</button>
              )}
              {a.reasignado && a.reasignado.pac && (
                <details style={{ marginTop: 10 }}>
                  <summary style={{ cursor: "pointer", fontSize: 12, color: "#9AA9D0" }}>Ver SMS enviado a pacientes</summary>
                  <div className="afy-sms">
                    «Hospital Loayza: su doctor(a) se retrasó. Su atención se mantiene en el mismo orden y {a.reasignado.a ? `pasará con Dr(a). ${a.reasignado.a.split(" ").slice(0, 2).join(" ")}` : "puede reprogramar con un clic"}. — AFINTY IA»
                    <div style={{ marginTop: 6, color: "#7C8DB8" }}>Enviado a: {a.reasignado.pac.slice(0, 3).map((n) => n.split(" ")[0]).join(", ")}{a.reasignado.pac.length > 3 ? ` y ${a.reasignado.pac.length - 3} más` : ""}</div>
                  </div>
                </details>
              )}
            </div>
          );
        })}
      </div>

      <div className="afy-card" style={{ marginTop: 14 }}>
        <div className="afy-mini" style={{ marginBottom: 10 }}>REGISTRO DE INTERVENCIONES DE LA IA</div>
        {log.length === 0 && <div style={{ fontSize: 13, color: "#7C8DB8" }}>Aún no hay intervenciones. Pulsa «Simular la mañana»: un doctor llegará tarde y otro no llegará.</div>}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {log.map((e) => (
            <div key={e.id} className="afy-log">
              <span style={{ fontFamily: AFY_FONT_M, fontSize: 12, color: "#7C8DB8" }}>{e.hora}</span>
              <span className="afy-tag" style={{ color: colorTipo[e.tipo], borderColor: colorTipo[e.tipo] + "66", background: colorTipo[e.tipo] + "1A" }}>{etiquetaTipo[e.tipo]}</span>
              <span style={{ fontSize: 13, color: "#C2CDEB", lineHeight: 1.5 }}>{e.texto}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2) ADMISIÓN INTELIGENTE: la IA pregunta al paciente y deja los papeles listos
// ---------------------------------------------------------------------------
const AFY_ESP = [
  [/pecho|coraz[oó]n|presi[oó]n|palpit/, "Cardiología"],
  [/respirar|tos|pulm[oó]n|asma|flema/, "Neumología"],
  [/cabeza|mareo|convuls|migra|hormigueo/, "Neurología"],
  [/az[uú]car|diabet|tiroides/, "Endocrinología"],
  [/est[oó]mago|barriga|abdom|v[oó]mit|diarrea|ac[ií]dez/, "Gastroenterología"],
  [/hueso|rodilla|fractur|golpe|espalda|tobillo|hombro/, "Ortopedia"],
  [/piel|ronchas|picaz[oó]n|mancha|acn[eé]/, "Dermatología"],
  [/ojo|vista|visi[oó]n/, "Oftalmología"],
  [/o[ií]do|garganta|nariz|sinusitis/, "Otorrinolaringología"],
  [/ni[nñ]o|hij[oa]|beb[eé]|lactante/, "Pediatría"],
  [/embaraz|regla|menstru|ginec/, "Ginecología"],
  [/orina|ri[nñ][oó]n|pr[oó]stata/, "Urología"],
];
function afyAnalizar(motivo, edad) {
  const m = (motivo || "").toLowerCase();
  let prioridad = "BAJA";
  if (/dolor.*(pecho|t[oó]rax)|no puedo respirar|falta de aire|desmay|convulsi|inconsci|sangrado (fuerte|abundante)|asfixia|derrame|paralisis|par[aá]lisis/.test(m)) prioridad = "ALTA";
  else if (/fiebre|v[oó]mit|dolor (fuerte|intenso)|fractur|herida|sangr|deshidrat/.test(m)) prioridad = "MEDIA";
  let esp = "Medicina Interna";
  for (const [re, nombre] of AFY_ESP) if (re.test(m)) { esp = nombre; break; }
  if (edad !== null && edad < 14 && esp === "Medicina Interna") esp = "Pediatría";
  const doc = V.find((d) => d.esp.toLowerCase().includes(esp.toLowerCase().slice(0, 9)) && vi.includes(d.id)) || V.find((d) => d.esp.startsWith("Medicina Interna"));
  return { prioridad, esp, doc };
}
function afyEdad(txt) {
  const mm = /^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/.exec(txt.trim());
  if (!mm) return null;
  const d = +mm[1], mo = +mm[2], y = +mm[3];
  if (mo < 1 || mo > 12 || d < 1 || d > 31 || y < 1900 || y > new Date().getFullYear()) return null;
  const hoy = new Date();
  let e = hoy.getFullYear() - y;
  if (hoy.getMonth() + 1 < mo || (hoy.getMonth() + 1 === mo && hoy.getDate() < d)) e--;
  return e >= 0 ? e : null;
}

const AFY_PASOS = [
  { k: "nombre", q: () => "¡Hola! Soy AFINTY IA. Voy a adelantar tus trámites para que no hagas cola en 4 ventanillas. Para empezar, ¿cuál es tu nombre completo?", ok: (s) => s.trim().split(/\s+/).length >= 2, err: "Necesito al menos nombre y apellido." },
  { k: "dni", q: (d) => `Gracias, ${d.nombre.split(" ")[0]}. ¿Cuál es tu DNI? (8 dígitos)`, ok: (s) => /^\d{8}$/.test(s.trim()), err: "El DNI debe tener exactamente 8 números.", chips: ["No tengo DNI"], skipChip: "No tengo DNI" },
  { k: "nacimiento", q: () => "¿Tu fecha de nacimiento? (día/mes/año, por ejemplo 14/03/1990)", ok: (s) => afyEdad(s) !== null, err: "Usa el formato día/mes/año, por ejemplo 14/03/1990." },
  { k: "celular", q: () => "¿A qué celular te avisamos cuando te toque? (9 dígitos)", ok: (s) => /^9\d{8}$/.test(s.trim()), err: "Debe tener 9 números y empezar con 9.", chips: ["Prefiero no darlo"], skipChip: "Prefiero no darlo" },
  { k: "seguro", q: () => "¿Con qué seguro te atiendes hoy?", chips: ["SIS", "EsSalud", "SOAT", "Particular"], ok: () => true },
  { k: "motivo", q: () => "Cuéntame con tus palabras: ¿qué te trae al hospital hoy?", ok: (s) => s.trim().length >= 4, err: "Cuéntame un poco más, aunque sea en pocas palabras." },
  { k: "detalle", q: (d) => {
      const m = d.motivo.toLowerCase();
      if (/fiebre/.test(m)) return "Entiendo. ¿Cuántos grados llegó la fiebre?";
      if (/dolor|duele/.test(m)) return "Del 1 al 10, ¿qué tan fuerte es el dolor?";
      if (/respir|tos/.test(m)) return "¿Tienes tos con flema o falta de aire al caminar?";
      return "¿Hay algo más que sientas junto con esto?";
    },
    chips: (d) => /fiebre/.test(d.motivo.toLowerCase()) ? ["Menos de 38°", "38° a 39°", "Más de 39°"] : /dolor|duele/.test(d.motivo.toLowerCase()) ? ["1 a 3 (leve)", "4 a 6 (moderado)", "7 a 10 (muy fuerte)"] : ["Nada más", "Mareo", "Náuseas"], ok: (s) => s.trim().length >= 1 },
  { k: "tiempo", q: () => "¿Desde cuándo lo tienes?", chips: ["Desde hoy", "1 a 3 días", "Más de una semana", "Es un control"], ok: () => true },
  { k: "alergias", q: () => "¿Eres alérgico(a) a algún medicamento?", chips: ["No", "Penicilina", "Ibuprofeno"], ok: (s) => s.trim().length >= 1 },
  { k: "meds", q: () => "¿Tomas algún medicamento actualmente?", chips: ["Ninguno"], ok: (s) => s.trim().length >= 1 },
  { k: "primera", q: () => "Última pregunta: ¿es tu primera vez en este hospital?", chips: ["Sí, primera vez", "No, ya tengo historia"], ok: () => true },
];

function IAAdmision({ onAlerta, onIr }) {
  const [datos, setDatos] = F.useState({});
  const [paso, setPaso] = F.useState(0);
  const [msgs, setMsgs] = F.useState([{ rol: "ia", texto: AFY_PASOS[0].q({}) }]);
  const [txt, setTxt] = F.useState("");
  const [enviado, setEnviado] = F.useState(false);
  const fin = F.useRef(null);
  F.useEffect(() => { fin.current && fin.current.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, [msgs, paso]);

  const terminado = paso >= AFY_PASOS.length;
  const actual = AFY_PASOS[paso];

  function responder(valor, esChip) {
    if (terminado) return;
    const s = valor.trim();
    if (!s) return;
    const p = actual;
    const saltar = p.skipChip && s === p.skipChip;
    if (!saltar && !esChip && p.ok && !p.ok(s)) {
      setMsgs((m) => [...m, { rol: "yo", texto: s }, { rol: "ia", texto: p.err || "No logré entender, ¿puedes repetirlo?" }]);
      setTxt("");
      return;
    }
    const nuevos = { ...datos, [p.k]: saltar ? "No indicado" : s };
    setDatos(nuevos);
    const sig = paso + 1;
    const mm = [...msgs, { rol: "yo", texto: s }];
    if (p.k === "motivo") {
      const an = afyAnalizar(s, afyEdad(nuevos.nacimiento || ""));
      if (an.prioridad === "ALTA") onAlerta && onAlerta({ id: "ia-urg-" + Date.now(), sev: "alta", area: "Emergencias", msg: `IA AFINTY: ${nuevos.nombre || "Paciente"} refiere «${s}» (posible urgencia). Recibirlo en Emergencias de inmediato.`, time: "Ahora" });
      if (an.prioridad === "ALTA") mm.push({ rol: "ia", alerta: true, texto: "⚠ Lo que describes puede ser urgente. Avisé al personal de Emergencias para que te reciba de inmediato. Si estás acompañado, pide que te acerquen a la puerta de Emergencia. Terminamos tus datos mientras tanto." });
    }
    if (sig < AFY_PASOS.length) {
      mm.push({ rol: "ia", texto: AFY_PASOS[sig].q(nuevos) });
    } else {
      mm.push({ rol: "ia", texto: "¡Listo! Con lo que me contaste ya preparé tu ficha y los documentos de cada área. Revísalos aquí abajo." });
    }
    setMsgs(mm);
    setPaso(sig);
    setTxt("");
  }

  function reiniciar() {
    setDatos({}); setPaso(0); setEnviado(false); setTxt("");
    setMsgs([{ rol: "ia", texto: AFY_PASOS[0].q({}) }]);
  }

  const edad = afyEdad(datos.nacimiento || "");
  const an = terminado ? afyAnalizar(datos.motivo, edad) : null;
  const colorPrio = an ? (an.prioridad === "ALTA" ? "#FF5D7A" : an.prioridad === "MEDIA" ? "#FFB547" : "#2EE6A0") : "#38BDF8";
  const sinIA = Qn.reduce((s, x) => s + x.tiempoMin, 0);
  const conIA = 3;
  const progreso = Math.round((Math.min(paso, AFY_PASOS.length) / AFY_PASOS.length) * 100);

  function textoFicha() {
    return [
      "FICHA DE ADMISIÓN PRE-LLENADA POR IA — " + Ie.nombre,
      "Paciente: " + datos.nombre, "DNI: " + datos.dni, "Edad: " + (edad !== null ? edad + " años" : "—") + " (nac. " + datos.nacimiento + ")",
      "Celular: " + datos.celular, "Seguro: " + datos.seguro, "Motivo: " + datos.motivo, "Detalle: " + datos.detalle, "Evolución: " + datos.tiempo,
      "Alergias: " + datos.alergias, "Medicación actual: " + datos.meds, "Primera vez: " + datos.primera,
      "Prioridad sugerida: " + an.prioridad, "Especialidad sugerida: " + an.esp + (an.doc ? " · " + an.doc.nombre : ""),
      "Generado por AFINTY IA el " + new Date().toLocaleString("es-PE"),
    ].join("\n");
  }
  function descargar() {
    const blob = new Blob([textoFicha()], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ficha-admision-" + (datos.dni || "paciente") + ".txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function enviarAreas() {
    setEnviado(true);
    onAlerta && onAlerta({
      id: "ia-adm-" + Date.now(),
      sev: an.prioridad === "ALTA" ? "alta" : an.prioridad === "MEDIA" ? "media" : "baja",
      area: "Admisión",
      msg: `IA AFINTY pre-llenó la ficha de ${datos.nombre} (DNI ${datos.dni}) · ${an.esp} · prioridad ${an.prioridad}. Documentos enviados a ${Qn.map((x) => x.area).join(", ")}.`,
      time: "Ahora",
    });
  }

  const chips = actual && (typeof actual.chips === "function" ? actual.chips(datos) : actual.chips);

  return (
    <div className="afy-adm">
      <div className="afy-card" style={{ display: "flex", flexDirection: "column", minHeight: 520 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div className="afy-orb" style={{ width: 38, height: 38 }}><IcSpark size={20} color="#fff" /></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: AFY_FONT_D, fontWeight: 700, fontSize: 15, color: "#E8EEFF" }}>Admisión inteligente</div>
            <div style={{ fontSize: 11.5, color: "#7C8DB8" }}>La IA te pregunta, valida y llena tus papeles</div>
          </div>
          <span className="afy-tag" style={{ color: "#38BDF8", borderColor: "#38BDF866", background: "#38BDF81A" }}>{progreso}%</span>
        </div>
        <div className="afy-bar"><div style={{ width: progreso + "%" }} /></div>
        <div className="afy-chat">
          {msgs.map((m, k) => (
            <div key={k} className={"afy-msg " + (m.rol === "yo" ? "afy-msg-yo" : "afy-msg-ia")} style={m.alerta ? { borderColor: "#FF5D7A88", background: "rgba(255,93,122,.14)", color: "#FFD3DB" } : undefined}>{m.texto}</div>
          ))}
          <div ref={fin} />
        </div>
        {!terminado ? (
          <div>
            {chips && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                {chips.map((c) => (<button key={c} className="afy-chip" onClick={() => responder(c, true)}>{c}</button>))}
              </div>
            )}
            <div style={{ display: "flex", gap: 8 }}>
              <input
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") responder(txt, false); }}
                placeholder="Escribe tu respuesta…"
                style={{ flex: 1, border: "1px solid rgba(130,150,255,.28)", borderRadius: 12, padding: "11px 14px", fontSize: 14, fontFamily: "Inter, sans-serif" }}
              />
              <button className="afy-btn-main" onClick={() => responder(txt, false)} aria-label="Enviar"><Mu size={16} /></button>
            </div>
          </div>
        ) : (
          <button className="afy-btn-ghost" onClick={reiniciar}>↺ Atender a otro paciente</button>
        )}
      </div>

      <div className="afy-card">
        <div className="afy-mini" style={{ marginBottom: 10 }}>FICHA DE ADMISIÓN · PRE-LLENADA POR IA</div>
        {!terminado ? (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[["Paciente", datos.nombre], ["DNI", datos.dni], ["Nacimiento", datos.nacimiento], ["Celular", datos.celular], ["Seguro", datos.seguro], ["Motivo", datos.motivo]].map(([l, v]) => (
                <div key={l} className="afy-field"><div>{l}</div><b style={{ color: v ? "#E8EEFF" : "#4D5C88" }}>{v || "· · ·"}</b></div>
              ))}
            </div>
            <div style={{ marginTop: 16, fontSize: 13, color: "#7C8DB8", lineHeight: 1.6 }}>
              Los campos se van llenando solos mientras conversas. Al terminar, la IA calcula tu <b style={{ color: "#C2CDEB" }}>prioridad</b>, sugiere la <b style={{ color: "#C2CDEB" }}>especialidad y el doctor</b>, y manda los documentos a Admisión, Seguros, Historia Clínica y Farmacia.
            </div>
          </div>
        ) : (
          <div>
            <div className="afy-prio" style={{ borderColor: colorPrio + "88", background: colorPrio + "18" }}>
              <div style={{ fontSize: 11, fontFamily: AFY_FONT_M, color: colorPrio, letterSpacing: 1.2 }}>PRIORIDAD SUGERIDA</div>
              <div style={{ fontFamily: AFY_FONT_D, fontSize: 26, fontWeight: 800, color: colorPrio }}>{an.prioridad}</div>
              <div style={{ fontSize: 13, color: "#C2CDEB" }}>
                {an.prioridad === "ALTA" ? "Derivar a Emergencias ahora." : <>Especialidad: <b>{an.esp}</b>{an.doc ? <> · Dr(a). {an.doc.nombre.split(" ").slice(0, 3).join(" ")}</> : null}</>}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
              {[["Paciente", datos.nombre], ["DNI", datos.dni], ["Edad", edad !== null ? edad + " años" : "—"], ["Seguro", datos.seguro], ["Motivo", datos.motivo], ["Evolución", datos.tiempo], ["Alergias", datos.alergias], ["Medicación", datos.meds]].map(([l, v]) => (
                <div key={l} className="afy-field"><div>{l}</div><b>{v}</b></div>
              ))}
            </div>
            <div className="afy-mini" style={{ margin: "16px 0 8px" }}>DOCUMENTOS GENERADOS AUTOMÁTICAMENTE</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {Qn.map((x) => (
                <div key={x.area} className="afy-doc-row">
                  <span style={{ color: enviado ? "#2EE6A0" : "#38BDF8" }}>{enviado ? "✓" : "●"}</span>
                  <span style={{ flex: 1 }}>{x.area}</span>
                  <span style={{ color: "#7C8DB8", fontSize: 12 }}>{enviado ? "recibido" : `ahorra ${x.tiempoMin} min`}</span>
                </div>
              ))}
            </div>
            <div className="afy-ahorro">
              <div><span>Sin IA</span><b style={{ color: "#FF7A93" }}>{sinIA} min</b></div>
              <div style={{ color: "#7C8DB8" }}>→</div>
              <div><span>Con IA</span><b style={{ color: "#2EE6A0" }}>{conIA} min</b></div>
              <div style={{ marginLeft: "auto" }}><span>Ahorras</span><b style={{ color: "#38BDF8" }}>{sinIA - conIA} min</b></div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
              <button className="afy-btn-main" disabled={enviado} onClick={enviarAreas}>{enviado ? "✓ Enviado a las áreas" : "Enviar a las áreas"}</button>
              <button className="afy-btn-ghost" onClick={descargar}><Rm size={14} style={{ verticalAlign: -2 }} /> Descargar ficha</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3) CENTRO IA (pestañas)
// ---------------------------------------------------------------------------
function CentroIA({ areasResumen, medicamentos, onAlerta }) {
  const [tab, setTab] = F.useState("monitor");
  const tabs = [
    ["monitor", "Monitor en vivo", Ko],
    ["admision", "Admisión inteligente", Au],
    ["chat", "Conversar con la IA", Du],
  ];
  return (
    <div>
      {F.createElement(ue, { eyebrow: "IA proactiva · copiloto del hospital", title: "Centro de comando IA" })}
      <div className="afy-tabs">
        {tabs.map(([k, l, Ico]) => (
          <button key={k} className={"afy-tab" + (tab === k ? " afy-tab-on" : "")} onClick={() => setTab(k)}><Ico size={15} /> {l}</button>
        ))}
      </div>
      {tab === "monitor" && <IAMonitor onAlerta={onAlerta} />}
      {tab === "admision" && <IAAdmision onAlerta={onAlerta} />}
      {tab === "chat" && <W1 areasResumen={areasResumen} medicamentos={medicamentos} />}
    </div>
  );
}

function AdmisionPaciente({ onAlerta }) {
  return (
    <div>
      {F.createElement(ue, { eyebrow: "Admisión con IA · sin colas", title: "Adelanta tus trámites" })}
      <IAAdmision onAlerta={onAlerta} />
    </div>
  );
}
