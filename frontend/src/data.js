// Datos de prueba (testnet simulada). No hay llamadas a la red en esta semana.
export const EXPERTS = [
  { id: 'e1', name: 'Laura Gómez', topics: ['IA', 'Facilitación'], bio: 'Facilita talleres de IA aplicada para equipos no técnicos.' },
  { id: 'e2', name: 'Camila Rojas', topics: ['Ciberseguridad'], bio: 'Analista de seguridad; charlas de higiene digital para fundaciones.' },
  { id: 'e3', name: 'Natalia Pérez', topics: ['IA', 'Datos'], bio: 'Mentora en análisis de datos y modelos de lenguaje.' },
]

// Huella simulada (no es SHA-256 real); en la semana 4 la calculará la lógica y la registrará el contrato.
export const fakeHash = (s) => {
  let out = ''
  for (let k = 1; k <= 8; k++) {
    let h = 2166136261 ^ k
    for (const ch of s + k) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619) }
    out += (h >>> 0).toString(16).padStart(8, '0')
  }
  return out
}

export const docOf = (holderName, title) => `${title} — ${holderName} — emitida por WomenIT`
const mk = (id, holder, title, status, date) => {
  const name = EXPERTS.find((e) => e.id === holder).name
  return { id, holder, title, issuer: 'WomenIT', status, date, hash: fakeHash(docOf(name, title)) }
}

export const CREDS0 = [
  mk('c1', 'e1', 'Facilitadora en IA', 'valida', '2026-09-20'),
  mk('c2', 'e2', 'Analista en Ciberseguridad', 'valida', '2026-09-22'),
  mk('c3', 'e3', 'Mentora en Datos', 'revocada', '2026-08-30'),
]

export const SERVICES0 = [
  { id: 's1', expertId: 'e1', company: 'Fundación Semilla', scope: 'Taller de IA para equipo administrativo', date: '2026-09-28', status: 'confirmado', evidence: fakeHash('s1-evidencia') },
]
