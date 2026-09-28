# Problem Brief

## Decisión del problema

### Problema elegido

> El problema ganador en una frase, sin mencionar blockchain, y quién lo propuso.

Facilitadoras expertas en comunidad de mujeres en tech no pueden ser verificadas de forma confiable, lo que limita su acceso a clientes y genera fricción en pagos.
Propuesto por: Zurisadai Agudelo

### Por qué elegimos este

> Qué inclinó al equipo por este problema frente a los demás, según los criterios de la Sesión 1.

Este problema es único porque es la intersección de tres necesidades reales:

La comunidad de mujeres en tech necesita escalar facilitadoras (documentado en reunión de comunidad): "Necesitamos una base de mujeres expertas" y "hay mujeres que vienen diciendo yo quiero dictar charlas"
Blockchain aporta valor real: No es solo una base de datos, es verificabilidad inmutable + pagos instantáneos
Tiene usuarios validados: Acceso directo a facilitadoras + empresas que piden facilitadoras + Comunidad como verificador.

### Propuestas descartadas

> Cada propuesta considerada, quién la propuso y el motivo del descarte.

Trazabilidad café (familia): Problema real pero requiere coordinar múltiples actores (productor, transportista, distribuidor) en 5 semanas; timing no viable.

### Cómo tomamos la decisión

> Cómo llegó el equipo al acuerdo: votación, consenso tras debate u otro.

Análisis individual:

¿Problema real validado? Sí, en documentación de Comunidad
¿Acceso a usuarios? Sí, como líder de tech en Comunidad
¿Blockchain fit? Alto (verificación + pagos)
¿MVP en 5 semanas? Sí (credencial QR + smart contract)
¿Hipótesis blockchain válida? Sí (requiere inmutabilidad + múltiples actores)

---

## Problem Brief

### Encabezado

> Nombre del proyecto y una frase que describa el problema. Extensión: breve.

Proyecto: CertChain

Descripción: Sistema de credenciales digitales verificables + pagos en blockchain para facilitadoras expertas en comunidades tecnológicas (piloto Comunidad de mujeres en Tech)

### Equipo y roles

> Integrantes con su usuario de GitHub, rol asumido por cada persona, responsable de las entregas y canal de coordinación interna. Extensión: breve.

Integrante: Zurisadai Agudelo
GitHub: zagu5
Rol:Product + Full Stack	
Responsabilidad: Definición de producto, investigación usuario, frontend, smart contract, integración wallet
Nota: Esta es una propuesta inicial, trabajando en búsqueda de co-equipo con expertise en:
Smart contracts Soroban (Rust)
Integración Stellar API

### Problema y evidencia

> Enunciado del problema en una frase, sin mencionar blockchain. Contexto, frecuencia y alcance. Evidencia mínima de que el problema existe: observación directa, experiencia propia, conversaciones o fuentes consultadas, con enlace o cita cuando aplique. Extensión: 150–300 palabras.

Enunciado: Facilitadoras expertas en Comunidad de mujeres en Tech, no pueden ser verificadas de forma confiable, lo que les limita acceso a clientes y genera fricción en recepción de pagos.

Contexto y Alcance:

WomenIT es una comunidad de 1,600+ mujeres en tech en LatAm con más de 100 voluntarias facilitando sesiones, talleres y mentoría. A partir de 2026, WomenIT decidió pasar de un modelo de "formación centralizada" a un modelo de "facilitadoras experta descentralizadas" que ofrecen servicios freelance a empresas.

El problema surge cuando:

Una facilitadora (ej: Liz, especialista en Data) quiere ofrecer su experiencia a una empresa
La empresa no tiene forma de verificar "¿Esta persona es realmente experta?" más allá de LinkedIn
WomenIT no tiene mecanismo para certificar y publicar "esta facilitadora está verificada en X tema"

Evidencia del problema:

Documentación WomenIT (reunión equipo voluntariado septiembre 2026) dice explícitamente: "necesitamos una base de mujeres expertas que podamos vender a empresas".
"hay mujeres que me escriben hace tiempo queriendo dictar charlas, pero necesitamos un equipo que agende esos temas".
Reconoce que hoy todo está "centrado en la co-founder de la comunidad", creando dependencia.
Fricción de pagos documentada:
Reunión voluntariado menciona: "mujeres quieren servicios freelance"; pagos hoy se hacen por Bancolombia (demora 3-5 días, comisión 3-5%)
Alternativa cripto mencionada pero sin integración.
Contexto LatAm más amplio:
Facilitadores de comunidades de mujeres en tech en LatAm enfrentan barrera similar: LinkedIn no es verificación.
Empresas reportan dificultad para encontrar especialistas "verificados" en temas niche (ciberseguridad, IA, data).

Frecuencia: Ocurre cada vez que una facilitadora quiere monetizar su expertise (estimado: 5-10 casos/mes en WomenIT hoy; potencial 50-100/mes si escala).

### Usuario y actores

> Quién sufre el problema y qué necesita resolver. Cómo lo resuelve hoy y qué le cuesta en dinero, tiempo o esfuerzo. Demás actores que intervienen en el flujo, con el papel que cumple cada uno. Extensión: 150–300 palabras.

Usuario Primario: Facilitadora especialista en Comunidad

Ejemplo: Liz (especialista en Data Science)

Qué necesita:
Forma confiable de demostrar expertise a empresas que la buscan.
Pago rápido cuando dicta una charla/taller (hoy espera 3-5 días + comisión).
Portafolio público de trabajo que la ayude conseguir más clientes.
Cómo lo resuelve hoy:
Envía su LinkedIn y CV en la plataforma de la comunidad.
Negocia pago directo a su cuenta bancaria (si la empresa le pide por cuenta) o pasa por WomenIT que "le confía" y le paga después pero sin forma de demostrar "soy experta certificada"

Costo de no resolver: Pierde oportunidades porque empresas prefieren facilitadoras "conocidas"; tiene que hacer cold outreach sin credencial verificable.

Actores Secundarios

Actor 2: Empresa/Cliente

Quién: HR manager o gerente de talento que busca facilitadora para capacitación interna.
Qué necesita: Verificar que la facilitadora es realmente experta en el tema; no tener riesgo de contratar a alguien no calificado.
Cómo lo resuelve hoy:
Pregunta referencias (llamadas, correos)
Revisa LinkedIn
En algunos casos, entrevista técnica
Paga por transferencia bancaria o plataforma (ej: Upwork) que toma 10-20% comisión.
Costo: Proceso manual lento (1-2 semanas); comisión alta si usa plataforma; riesgo residual de mala contratación

Actor 3: WomenIT (Verificador/Plataforma)

Quién: Organización que verifica y agrega facilitadoras
Qué necesita:
Forma de certificar que una facilitadora es experta (sin crear programa formal tedioso).
Sistema para conectar facilitadoras con empresas.
Trazabilidad de "quién dijo qué" (para responsabilidad).
Cómo lo resuelve hoy:
Recomendación manual ("conozco a Liz, ella es experta")
Sin registro formal de certificación.
Sin comisión/modelo de sustentabilidad para pagar voluntarios que arrancan estos servicios.
Costo: No escala; depende de persona en comunidad para contactar.

### Flujo actual de valor

> Recorrido paso a paso de cómo se mueve hoy el dinero, la información o el activo, desde el origen hasta el destino. Diagrama o secuencia numerada, con los intermediarios explícitos. Señalar si algún paso responde a una obligación normativa. Extensión: 150–300 palabras.

Escenario: Una empresa contacta a la comunidad pidiendo "una facilitadora de Data Science"

1. BÚSQUEDA (Manual)
   └─ Empresa escribe a WomenIT: "¿Tienen a alguien que enseñe Data?"
   └─ Co-founder busca en su memoria: "Liz sabe data"
   └─ Co-founder contacta a Liz por WhatsApp/email

2. VERIFICACIÓN (Informal)
   └─ Co-founder dice a empresa: "Liz es experta, la conozco hace tiempo"
   └─ No hay certificado formal
   └─ No hay portafolio público
   └─ Empresa confía porque WomenIT recomienda

3. COORDINACIÓN (Manual)
   └─ Co-founder coordina fecha entre Liz y empresa
   └─ Co-founder coordina pago: ¿Quién paga a quién?
   └─ Si Liz cobra directamente: empresa paga por transferencia bancaria a Liz
   └─ Si WomenIT intermediaria: empresa → WomenIT (3-5 días) → Liz (más demora)

4. LIQUIDACIÓN (Lenta)
   └─ Empresa paga por transferencia bancaria
   └─ Si va a través de WomenIT: +2-3 días más
   └─ Comisión bancaria: 1-2% (sobre todo si es internacional)
   └─ Liz recibe dinero en su cuenta después de 3 días

5. REPUTACIÓN (Sin registro)
   └─ No hay forma de ver: "Liz ha dictado 10 charlas en 2026"
   └─ No hay reviews públicos
   └─ No hay portafolio visible
   └─ Si Liz quiere nuevo cliente, arranca de cero

Intermediarios explícitos:

Banco (comisión 1-2%, demora 2-3 días)
WomenIT si intermediaria (demora +2-3 días, sin modelo de comisión formal).

### Fricciones identificadas

> Puntos concretos donde el flujo falla, se encarece o se demora. Cada fricción indica en qué paso ocurre, qué la causa y a quién afecta. Extensión: 150–300 palabras.

Fricción 1: Sin Verificación Formal de Expertise
Dónde ocurre: Paso 2 (Verificación)
Causa: No existe certificado digital verificable de que Liz es "experta en Data".
A quién afecta: Principalmente a empresa (asume riesgo)
Síntoma: Empresa pide "referencias" o entrevista técnica; no confía solo en LinkedIn
Costo: 3-5 horas de tiempo HR para vetting manual
Fricción 2: Demora en Liquidación de Pagos
Dónde ocurre: Paso 4 (Liquidación)
Causa: Transferencia bancaria 2-3 días + si pasa por WomenIT +2-3 días = 5-7 días total
A quién afecta: Facilitadora (espera mucho para acceder a dinero)
Síntoma: Liz no puede reinvertir rápido si necesita comprar material; genera fricción psicológica ("¿será que cobré?")
Costo: Oportunidad de reinversión lenta
Fricción 3: Comisiones Ocultas/Altas
Dónde ocurre: Paso 4 (Liquidación)
Causa: Comisión bancaria 1-2% + si va a través de WomenIT sin modelo claro, podría ser 3-5%
A quién afecta: Facilitadora (pierde dinero)
Síntoma: En un taller de $1,500, pierda $75-150 en comisiones
Costo: De 10 talleres/año, pierde ~$750-1,500
Fricción 4: Dependencia de Persona (co-founder)
Dónde ocurre: Pasos 1, 2, 3 (todo lo manual)
Causa: Solo co-founder sabe "quién es experta en qué"; solo ella contacta
A quién afecta: WomenIT (no escala), empresas (no encuentran facilitadoras fácilmente)
Síntoma: con-founder dice en reunión: "Hay personas que me dicen quiero dictar charlas pero no tenemos equipo que agende eso"
Costo: Imposible pasar de 10 facilitadoras activas a 100
Fricción 5: Sin Portafolio Verificable
Dónde ocurre: Todos los pasos (no hay historial visible)
Causa: No existe forma de ver públicamente "Liz ha dictado estos 10 talleres con estas reviews"
A quién afecta: Facilitadora (no puede usar historial para nuevo cliente)
Síntoma: Liz necesita "vender nuevamente" al siguiente cliente; no acumula credibilidad
Costo: Ciclo de ventas largo; baja conversión.

### Oportunidad e hipótesis

> Oportunidad priorizada entre las fricciones identificadas, con el motivo de la elección. Hipótesis inicial de por qué blockchain podría mejorar ese punto, expresada en términos de qué cambiaría para el usuario. Extensión: 150–300 palabras.

Oportunidad Priorizada: Crear un sistema de certificación digital verificable + pagos instantáneos en blockchain que elimine demora, reduzca comisiones y permita que facilitadoras construyan portafolio público verificable.

Motivo de elección:

Es la fricción que afecta a TODOS los actores (empresa espera, facilitadora espera, WomenIT no escala)
Blockchain es la única forma de resolver "verificabilidad sin intermediario" (necesario porque WomenIT es descentralizada)
Es monetizable: comisión de pagos + certificaciones especializadas

Hipótesis Inicial de Blockchain:

"Si emitimos credenciales digitales en blockchain (Stellar) que son:

Verificables públicamente (cualquiera puede escanear QR y confirmar)
Inmutables (no se pueden falsificar)
Integradas con pagos en USDC (comisión 0.5-1% vs 3-5%)

ENTONCES:

Facilitadora recibe pago en minutos, no días
Facilitadora construye portafolio on-chain (reviews, certificaciones acumuladas)
WomenIT puede escalar a 100+ facilitadoras sin dependencia de persona"

Para el usuario (facilitadora) cambia de:

"Envío CV, espero 5-7 días por transferencia bancaria, pierdo $100-150 en comisiones"

A:

"Escanea mi credencial QR, ve mi portafolio, paga en USDC en mi wallet, dinero en 5 segundos, sin comisión"

### Criterio de pertinencia

> Justificación de por qué el caso requiere un registro distribuido y no una base de datos tradicional o una integración entre sistemas existentes. Debe apoyarse en al menos uno de los criterios de la Sesión 1: varias partes que no confían entre sí necesitan compartir un mismo registro, el histórico no puede alterarse, o se elimina un intermediario que hoy concentra la confianza. Extensión: 150–300 palabras.

Por qué blockchain es necesario aquí y no una solución tradicional?

Blockchain aporta valor porque hay múltiples actores (facilitadora, cliente, WomenIT) que no confían entre sí de entrada y necesitan un registro que ninguno pueda manipular:

Problema de Confianza (No hay intermediario confiable):
Empresa no confía en LinkedIn (fácil de falsificar)
Empresa no confía en "recomendación oral" de WomenIT sin evidencia
Facilitadora no confía en que empresa pagará sin historial de trabajos anteriores
→ Necesitan registro inmutable de "Liz dictó esto en esta fecha"
Descentralización Necesaria:
WomenIT no puede ser "base de datos central" porque:
Sería punto único de fallo (si WomenIT desaparece, credenciales desaparecen)
No pueden manipular registros sin detectarse (incentivo perverso)
Blockchain = no depende de intermediario
Pagos Programáticos:
Smart contract en Soroban puede:
Verificar credencial válida
Enviar USDC automáticamente cuando se confirma servicio
Reducir comisiones de 3-5% a 0.5-1%
No hay forma de hacer esto sin blockchain (requeriría intermediario que cobra)

Alternativa Tradicional (por qué no funciona):

Base de datos SQL centralizada en WomenIT:
Punto único de fallo
WomenIT puede falsificar registros (empresa no confía)
Pagos siguen siendo lentos (necesita banco/procesador)

Certificados PDF firmados digitalmente:
Sin historia de trabajos anteriores
No integra pagos
No está centralizado, difícil de descubrir

### Supuestos y riesgos

> Dos o tres supuestos que tendrían que ser ciertos para que la hipótesis funcione, y qué podría invalidarla. Extensión: 150–300 palabras.

Supuestos Críticos

Supuesto 1: Facilitadoras quieren acceso a más clientes pagando comisión menor

¿Cómo lo validamos?: Entrevista con facilitadora 
¿Qué lo invalida?: Si dicen "no nos importa monetizar, hacemos esto por voluntad"
Risk Level: BAJO (reunión voluntariado mostró que sí hay interés en "servicios freelance")

Supuesto 2: Empresas validan facilitadoras escaneando credencial verificable

¿Cómo lo validamos?: Encuesta a 2-5 HR managers diciendo "¿confiarías en credencial QR en blockchain?"
¿Qué lo invalida?: Si dicen "no, queremos vídeo llamada igual / aún necesitamos entrevista"
Risk Level: MEDIO (comportamiento de adopción tech puede ser resistente)

Supuesto 3: WomenIT está dispuesta a ser "emisor de credenciales"

¿Cómo lo validamos?: Confirmar con co-founder que quiere ser parte de solución
¿Qué lo invalida?: Si dicen "queremos que otra entidad más neutral emita credenciales"
Risk Level: BAJO (reunión voluntariado explícitamente menciona "necesitamos base de mujeres expertas")

Supuesto 4: Stellar es viable para pagos en WomenIT (facilidades tienen wallet o pueden abrir una)

¿Cómo lo validamos?: Entrevista con facilitadoras sobre "¿tienes wallet cripto o te gustaría abrir una?"
¿Qué lo invalida?: Si 80%+ dicen "no quiero cripto" o "no entiendo blockchain"
Risk Level: MEDIO-ALTO (adopción cripto en mujeres LatAm varía mucho)

Riesgos Principales

Riesgo 1: Adopción de Credenciales Digitales

Qué: Empresas/facilitadoras no adopten el sistema por rechazo a blockchain o preferencia por métodos tradicionales
Mitigation: Hacer UX lo más simple posible (QR scans, no necesita wallet para verificar)
Impacto si ocurre: MVP funciona pero sin usuarios reales

Riesgo 2: Adopción de Pagos en Cripto

Qué: Facilitadoras rechazan USDC, exigen pago en COP a su cuenta bancaria
Mitigation: Ofrecer rampa de salida (USDC → COP en plataforma como Decaf)
Impacto si ocurre: Mantener fricción de comisión bancaria, pero credenciales aún aportan valor

Riesgo 3: Regulación/Legal

Qué: Autoridades colombianas cuestionan "credenciales en blockchain"
Mitigation: Enfatizar que no son títulos oficiales, son micro-credenciales comunitarias
Impacto si ocurre: Bajo (no hay riesgo legal si está claro el disclaimer)

