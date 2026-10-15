import { useEffect, useState } from 'react'
import { EXPERTS, CREDS0, SERVICES0, fakeHash, docOf } from './data'

const useHash = () => {
  const [h, setH] = useState(location.hash || '#/buscar')
  useEffect(() => {
    const f = () => setH(location.hash || '#/buscar')
    addEventListener('hashchange', f)
    return () => removeEventListener('hashchange', f)
  }, [])
  return h.slice(2).split('/')
}
const go = (p) => { location.hash = '#/' + p }
const LABEL = { valida: 'Válida', revocada: 'Revocada', pendiente: 'Pendiente', aceptado: 'Aceptado', confirmado: 'Confirmado' }
const Badge = ({ s }) => <span className={`badge ${s}`}>{LABEL[s]}</span>
const short = (h) => h.slice(0, 10) + '…' + h.slice(-6)
const nameOf = (id) => EXPERTS.find((e) => e.id === id)?.name
const EXPLORER = 'https://stellar.expert/explorer/testnet'

export default function App() {
  const [view, id] = useHash()
  const [creds, setCreds] = useState(CREDS0)
  const [services, setServices] = useState(SERVICES0)
  const [role, setRole] = useState('coord')
  const [wallet, setWallet] = useState(false)
  const [toast, setToast] = useState(null)

  const sign = async (action) => {
    if (!wallet) { setToast({ err: 'Conecta la wallet para firmar esta acción.' }); return false }
    setToast({ msg: `Firmando «${action}» con la wallet…` })
    await new Promise((r) => setTimeout(r, 700))
    setToast({ msg: `Transacción confirmada (simulada) · ${fakeHash(action + Date.now()).slice(0, 12)}…` })
    return true
  }
  const ctx = { creds, setCreds, services, setServices, role, sign }

  return (
    <>
      <header className="top">
        <a className="brand" href="#/buscar">Verified Talent Chain <small>WomenIT · testnet simulada</small></a>
        <nav>
          <a href="#/buscar">Buscar</a>
          <a href="#/emitir">Emitir</a>
          <a href="#/servicios">Servicios</a>
        </nav>
        <div className="ctl">
          <label>Actúo como
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="coord">Coordinación WomenIT</option>
              <option value="experta">Experta</option>
              <option value="empresa">Empresa</option>
            </select>
          </label>
          <button className={wallet ? 'ghost' : ''} onClick={() => setWallet(!wallet)}>
            {wallet ? 'Wallet GA7Q…TEST ✓' : 'Conectar wallet'}
          </button>
        </div>
      </header>
      <main>
        {view === 'buscar' && <Search />}
        {view === 'perfil' && <Profile id={id} {...ctx} />}
        {view === 'emitir' && <Issue {...ctx} />}
        {view === 'verificar' && <Verify id={id} creds={creds} />}
        {view === 'servicios' && <Services pre={id} {...ctx} />}
      </main>
      {toast && <div className={`toast ${toast.err ? 'err' : ''}`} onClick={() => setToast(null)} role="status">{toast.err || toast.msg}</div>}
    </>
  )
}

function Search() {
  const [q, setQ] = useState('')
  const list = EXPERTS.filter((e) => !q || e.topics.some((t) => t.toLowerCase().includes(q.toLowerCase())))
  return (
    <section>
      <h1>Encuentra expertas y verifica su trayectoria</h1>
      <input placeholder="Busca por tema: IA, ciberseguridad, datos…" value={q} onChange={(e) => setQ(e.target.value)} />
      {list.length === 0 && <p className="muted">Ninguna experta coincide con «{q}». Prueba con otro tema.</p>}
      <div className="grid">
        {list.map((e) => (
          <article key={e.id} className="card">
            <h3>{e.name}</h3>
            <p>{e.bio}</p>
            <p>{e.topics.map((t) => <span className="tag" key={t}>{t}</span>)}</p>
            <button onClick={() => go('perfil/' + e.id)}>Ver perfil</button>
          </article>
        ))}
      </div>
    </section>
  )
}

function Profile({ id, creds, services }) {
  const e = EXPERTS.find((x) => x.id === id)
  const [copied, setCopied] = useState(null)
  if (!e) return <section><p>Experta no encontrada. <a href="#/buscar">Volver a la búsqueda</a></p></section>
  const mine = creds.filter((c) => c.holder === id)
  const ev = services.filter((s) => s.expertId === id && s.status === 'confirmado')
  const copy = (cid) => {
    const url = `${location.origin}${location.pathname}#/verificar/${cid}`
    navigator.clipboard?.writeText(url); setCopied(cid)
  }
  return (
    <section>
      <h1>{e.name}</h1>
      <p>{e.bio}</p>
      <h2>Credenciales</h2>
      {mine.length === 0 && <p className="muted">Aún no tiene credenciales emitidas.</p>}
      {mine.map((c) => (
        <div className="row" key={c.id}>
          <div><strong>{c.title}</strong><br /><small>Emitida {c.date} por {c.issuer}</small></div>
          <Badge s={c.status} />
          <button className="ghost" onClick={() => go('verificar/' + c.id)}>Verificar</button>
          <button className="ghost" onClick={() => copy(c.id)}>{copied === c.id ? 'Enlace copiado' : 'Copiar enlace'}</button>
        </div>
      ))}
      <h2>Servicios confirmados</h2>
      {ev.length === 0 && <p className="muted">Todavía no hay servicios confirmados.</p>}
      {ev.map((s) => (
        <div className="row" key={s.id}>
          <div><strong>{s.scope}</strong><br /><small>{s.company} · {s.date}</small></div>
          <Badge s="confirmado" /><code>{short(s.evidence)}</code>
        </div>
      ))}
      <button onClick={() => go('servicios/' + id)}>Solicitar un servicio</button>
    </section>
  )
}

function Issue({ creds, setCreds, role, sign }) {
  const [holder, setHolder] = useState('e1')
  const [title, setTitle] = useState('')
  if (role !== 'coord') return <section><h1>Emitir credenciales</h1><p className="muted">Solo la Coordinación de WomenIT emite y revoca. Cambia «Actúo como» arriba para probar esta pantalla.</p></section>
  const issue = async () => {
    if (!title.trim()) return
    if (!(await sign('Emitir credencial'))) return
    const n = creds.length + 1
    setCreds([...creds, { id: 'c' + n, holder, title: title.trim(), issuer: 'WomenIT', status: 'valida', date: new Date().toISOString().slice(0, 10), hash: fakeHash(docOf(nameOf(holder), title.trim())) }])
    setTitle('')
  }
  const revoke = async (c) => {
    if (await sign('Revocar credencial')) setCreds(creds.map((x) => (x.id === c.id ? { ...x, status: 'revocada' } : x)))
  }
  return (
    <section>
      <h1>Emitir credencial</h1>
      <div className="form">
        <label>Experta<select value={holder} onChange={(e) => setHolder(e.target.value)}>{EXPERTS.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}</select></label>
        <label>Título de la credencial<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ej.: Facilitadora en IA" /></label>
        <button onClick={issue}>Firmar y emitir</button>
      </div>
      <h2>Emitidas</h2>
      {creds.map((c) => (
        <div className="row" key={c.id}>
          <div><strong>{c.title}</strong><br /><small>{nameOf(c.holder)} · {c.date}</small></div>
          <Badge s={c.status} />
          <button className="ghost" disabled={c.status === 'revocada'} onClick={() => revoke(c)}>Revocar</button>
        </div>
      ))}
    </section>
  )
}

function Verify({ id, creds }) {
  const c = creds.find((x) => x.id === id)
  const [altered, setAltered] = useState(false)
  if (!c) return <section><h1>Verificación pública</h1><p>No encontramos esa credencial. Revisa el enlace que recibiste.</p></section>
  const doc = docOf(nameOf(c.holder), c.title) + (altered ? ' (editado)' : '')
  const ok = fakeHash(doc) === c.hash
  return (
    <section>
      <h1>Verificación pública</h1>
      <p className="muted">Esta página se abre sin cuenta ni wallet.</p>
      <div className={`verdict ${ok && c.status === 'valida' ? 'good' : 'bad'}`}>
        {!ok ? 'Alerta: el documento no coincide con la huella registrada.' : c.status === 'valida' ? 'Credencial válida y sin alteraciones.' : 'Credencial revocada por la emisora.'}
      </div>
      <dl>
        <dt>Documento mostrado</dt><dd>{doc}</dd>
        <dt>Titular</dt><dd>{nameOf(c.holder)}</dd>
        <dt>Emisora</dt><dd>{c.issuer}</dd>
        <dt>Fecha</dt><dd>{c.date}</dd>
        <dt>Estado</dt><dd><Badge s={c.status} /></dd>
        <dt>Huella registrada</dt><dd><code>{short(c.hash)}</code></dd>
      </dl>
      <button className="ghost" onClick={() => setAltered(!altered)}>{altered ? 'Restaurar documento' : 'Simular documento alterado'}</button>{' '}
      <a href={EXPLORER} target="_blank" rel="noreferrer">Ver en el explorador de Stellar</a>
    </section>
  )
}

function Services({ pre, services, setServices, role, sign }) {
  const [expertId, setExpertId] = useState(EXPERTS.some((e) => e.id === pre) ? pre : 'e1')
  const [scope, setScope] = useState('')
  const [date, setDate] = useState('')
  const [company] = useState('Fundación Semilla')
  const set = (id, patch) => setServices(services.map((s) => (s.id === id ? { ...s, ...patch } : s)))
  const request = () => {
    if (!scope.trim() || !date) return
    setServices([...services, { id: 's' + (services.length + 1), expertId, company, scope: scope.trim(), date, status: 'pendiente' }])
    setScope(''); setDate('')
  }
  const accept = async (s) => { if (await sign('Aceptar acuerdo')) set(s.id, { status: 'aceptado' }) }
  const confirm = async (s) => { if (await sign('Confirmar servicio')) set(s.id, { status: 'confirmado', evidence: fakeHash(s.id + s.scope) }) }
  return (
    <section>
      <h1>Servicios</h1>
      {role === 'empresa' ? (
        <div className="form">
          <label>Experta<select value={expertId} onChange={(e) => setExpertId(e.target.value)}>{EXPERTS.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}</select></label>
          <label>Alcance y condiciones<input value={scope} onChange={(e) => setScope(e.target.value)} placeholder="Ej.: Charla de 2 horas sobre ciberseguridad" /></label>
          <label>Fecha<input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label>
          <button onClick={request}>Enviar solicitud</button>
        </div>
      ) : <p className="muted">Para crear una solicitud, cambia «Actúo como» a Empresa.</p>}
      <h2>Acuerdos</h2>
      {services.map((s) => (
        <div className="row" key={s.id}>
          <div><strong>{s.scope}</strong><br /><small>{s.company} → {nameOf(s.expertId)} · {s.date}</small></div>
          <Badge s={s.status} />
          {s.status === 'pendiente' && <button disabled={role !== 'experta'} title={role !== 'experta' ? 'La acepta la experta' : ''} onClick={() => accept(s)}>Aceptar y firmar</button>}
          {s.status === 'aceptado' && <button disabled={role !== 'empresa'} title={role !== 'empresa' ? 'La confirma la empresa' : ''} onClick={() => confirm(s)}>Confirmar servicio</button>}
          {s.status === 'confirmado' && <code>{short(s.evidence)}</code>}
        </div>
      ))}
    </section>
  )
}
