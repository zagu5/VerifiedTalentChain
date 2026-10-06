# Product Blueprint — WomenIT Verified Talent Network

# 1\. Priorización de historias

Las historias provienen de [`ZurisadaiAgudelo.md`](docs\semana2\ZurisadaiAgudelo.md). Se priorizaron con tres criterios, en este orden:

1.  ****Aporte a la fricción priorizada**** en el Problem Brief: verificación y evidencia de experiencia.
2.  ****Dependencia técnica:**** lo que otras historias necesitan para poder demostrarse.
3.  ****Factibilidad**** en las tres semanas restantes, por una sola persona y sobre testnet.

| Prioridad | Historia                                          | Decisión                                       |
| --------- | ------------------------------------------------- | ---------------------------------------------- |
| Must      | HU-1 Empresa verifica credenciales y evidencias   | Backlog                                        |
| Must      | HU-2 WomenIT emite y revoca credenciales          | Backlog                                        |
| Must      | HU-3 Experta recibe y comparte credenciales       | Backlog                                        |
| Must      | HU-4 Empresa confirma el servicio realizado       | Backlog                                        |
| Should    | HU-5 Experta acepta una solicitud con condiciones | Backlog                                        |
| Could     | HU-6 Búsqueda de expertas por tema                | Backlog (versión mínima con datos precargados) |
| Could     | HU-7 Perfil de la experta                         | Backlog (versión mínima con datos precargados) |

  

# 2\. Propuesta de valor

****Para quién.**** La empresa u organización que necesita una charla, taller o servicio, y las mujeres de WomenIT que quieren ofrecerlo (usuarios y actores del Problem Brief).

****Resultado para la empresa.**** Puede revisar quién es una experta, qué formación tiene y qué servicios ha prestado, y comprobar por sí misma que esa información es auténtica antes de contratar, sin pedirle a WomenIT que haga la validación caso por caso.

****Resultado para la experta.**** Cada formación y cada servicio prestado se convierte en evidencia que ella conserva y puede mostrar a cualquier organización. Su trayectoria deja de depender de que alguien la conozca o la recomiende.

****Resultado para WomenIT.**** Reduce el tiempo de validación por cada solicitud y deja de ser un cuello de botella, porque la verificación puede hacerla cualquier tercero.

****Cómo se resuelve hoy.**** Contactos personales, WhatsApp y registros manuales; la experiencia queda dispersa y se autodeclara.

****Por qué elegirían esta solución.**** Porque ofrece algo que hoy no existe en ese proceso: evidencia que cada parte puede revisar de forma independiente, y que no se pierde si cambia la persona que coordina o la plataforma que se use. No se propone sustituir el contacto humano ni competir como marketplace; se concentra en el momento en que la confianza decide la contratación.

  

# 3\. Flujo de usuario

****Roles:**** Coordinación de WomenIT (emisora), Experta, Empresa y Tercero verificador.

1.  ****WomenIT emite**** una credencial a la experta (por ejemplo, "Facilitadora en IA"). Interacción: formulario de emisión y firma con wallet.
2.  ****La experta recibe**** la credencial en su perfil y obtiene un enlace público de verificación.
3.  ****La empresa busca**** expertas por tema y abre un perfil.
4.  ****La empresa verifica****: la página muestra las credenciales con su estado (válida, revocada) y quién las emitió. Interacción: lectura pública, sin cuenta.
5.  ****La empresa solicita**** el servicio con alcance, fecha y condiciones.
6.  ****La experta acepta**** y firma el acuerdo; queda registrado.
7.  ****Se presta el servicio**** (fuera del sistema).
8.  ****La empresa confirma**** el servicio realizado con su firma.
9.  ****Se genera la evidencia:**** el servicio queda como registro verificable en la trayectoria de la experta.
10.  ****Un tercero**** puede abrir el enlace de la experta y verificar toda la trayectoria.

flowchart LR  
  W\[WomenIT emite credencial\] --> E\[Experta la recibe y comparte\]  
  E --> C\[Empresa busca y verifica\]  
  C --> S\[Solicita servicio\]  
  S --> A\[Experta acepta y firma\]  
  A --> P\[Servicio prestado\]  
  P --> F\[Empresa confirma\]  
  F --> V\[Evidencia verificable\]  
  V --> T\[Tercero verifica\]  

  

# 4\. Alcance del MVP

## Funcionalidad central (entra)

-   Emisión y revocación de credenciales por parte de WomenIT (HU-2).
-   Perfil de la experta con sus credenciales y enlace público de verificación (HU-3).
-   Página de verificación abierta que lee el estado desde la red (HU-1).
-   Acuerdo de servicio firmado por la experta y la empresa (HU-5).
-   Confirmación del servicio por la empresa y generación de evidencia (HU-4).
-   Búsqueda y perfiles en versión mínima, con un grupo reducido de expertas precargadas (HU-6, HU-7).

## Deseable (queda fuera)

-   Pagos con activos digitales: es un componente experimental y el flujo funciona sin él.
-   Calificaciones y reputación numérica.
-   Agenda y disponibilidad en tiempo real.
-   Emisión por múltiples organizaciones aliadas.
-   Gestión tributaria, facturación y contratos legales.
-   Aplicación móvil y notificaciones.

## Por qué el recorte sigue entregando valor

El MVP completa el ciclo que define la hipótesis: ****emitir → verificar → contratar → confirmar → evidencia reutilizable****. Eso permite probar con usuarios reales si una credencial verificable cambia la confianza de quien contrata, que es el supuesto más importante. Búsqueda, perfiles y pagos son funciones que otras herramientas ya resuelven y no aportan a esa validación. Para esta etapa, la demostración se hará en testnet con datos de prueba.

  

# 5\. Lean Canvas

|                          |                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Problema                 | 1. WomenIT no sabe quién puede ofrecer qué y la búsqueda es manual. 2. Las empresas no pueden verificar rápido capacidades y experiencia. 3. El trabajo realizado no se convierte en evidencia reutilizable. |
| Segmento de usuarios     | Empresas y fundaciones que contratan charlas, talleres y servicios (IA y ciberseguridad como foco por confirmar); mujeres de WomenIT como expertas; coordinación de WomenIT.                                 |
| Propuesta de valor única | Contratar talento de WomenIT con evidencia que cualquiera puede verificar por sí mismo, y que la experta conserva como trayectoria propia.                                                                   |
| Solución                 | Credenciales emitidas por WomenIT, acuerdos de servicio firmados por ambas partes y evidencia confirmada por la empresa, registradas de forma verificable en Stellar; perfiles y búsqueda básicos.           |
| Canales                  | Comunidad y plataforma de WomenIT, Innovus y sus aliados empresariales, voluntariado de expertos.                                                                                                            |
| Métricas clave           | Expertas con al menos una credencial; verificaciones realizadas por terceros; servicios confirmados; tiempo de WomenIT por solicitud; porcentaje de empresas que consideran útil la verificación.            |
| Ventaja diferencial      | Respaldo institucional de WomenIT como emisora, verificación independiente del emisor, y evidencia portable. Difícil de copiar: la confianza de la comunidad.                                                |
| Estructura de costos     | Desarrollo y mantenimiento, alojamiento web y base de datos, comisiones de red (mínimas), tiempo de coordinación. Revisión legal más adelante.                                                               |
| Fuentes de ingresos      | Por validar. Hipótesis: comisión por servicio contratado, suscripción de empresas con acceso prioritario, o servicio financiado por aliados.                                                                 |

  

# 6\. Backlog priorizado (Kanban)

****Tablero en GitHub Projects:**** `https://github.com/users/zagu5/projects/2

Columnas: ****Backlog → Listo → En progreso → En revisión → Hecho****. Cada tarjeta tiene sus criterios de aceptación y su prioridad (Must, Should o Could).

| Tarjeta | Historia                                      | Prioridad |
| ------- | --------------------------------------------- | --------- |
| T-01    | Contrato: registro de emisoras y credenciales | Must      |
| T-02    | Emisión y revocación desde la interfaz        | Must      |
| T-03    | Perfil de experta y enlace de verificación    | Must      |
| T-04    | Página pública de verificación                | Must      |
| T-05    | Acuerdo de servicio con doble firma           | Should    |
| T-06    | Confirmación del servicio y evidencia         | Must      |
| T-07    | Búsqueda y perfiles mínimos                   | Could     |

  

# 7\. Arquitectura inicial

La solución tiene tres capas. La red entra solo en el punto donde se necesita confianza compartida.

flowchart TB  
  subgraph Cliente  
    UI\[Interfaz web\]  
    WAL\[Wallet Freighter\]  
  end  
  subgraph Servidor  
    API\[Lógica y API\]  
    DB\[(Base de datos: perfiles, búsqueda, documentos)\]  
  end  
  subgraph Stellar testnet  
    SC\[Contrato Soroban: credenciales y evidencias\]  
  end  
  UI --> API --> DB  
  UI --> WAL --> SC  
  API -->|huella del documento| SC  
  UI -->|lectura pública vía RPC| SC  

-   ****Interfaz:**** aplicación web para emisora, experta, empresa y verificador. Las firmas se hacen con una wallet.
-   ****Lógica y base de datos:**** perfiles, búsqueda, textos de credenciales y detalles del servicio. Aquí viven los datos personales, que ****no se guardan en la red****.
-   ****Stellar:**** un contrato guarda la huella (hash) de cada documento, la emisora, la titular, el estado y el sello de tiempo. Cualquier persona puede consultarlo.

****Punto de entrada de la red:**** al emitir, revocar, aceptar y confirmar, y en la verificación pública. El resto del producto funciona sin blockchain.

****Cómo se conectan:**** la interfaz pide a la lógica los datos de negocio y, cuando una parte debe firmar, prepara la transacción y la envía a la wallet. La lógica calcula la huella del documento y la interfaz la registra en el contrato. Para verificar, la página lee el contrato por RPC y compara esa huella con el documento mostrado; si no coinciden, lo señala. Si el servidor deja de funcionar, las huellas y estados siguen consultables en la red, que es justo la propiedad que justifica usarla. Como decisión de diseño, la base de datos puede reconstruirse a partir de los documentos, pero no puede alterar lo ya registrado.

  

# 8\. Uso de Stellar y justificación

El Problem Brief concluyó que una base de datos propia de WomenIT bastaría para perfiles y búsqueda, y que la red solo se justifica si varias partes necesitan verificar un registro común sin depender del emisor. Por eso se usa Stellar únicamente para eso.

| Componente                   | Uso                                                                                     | Justificación                                                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cuentas y wallet (Freighter) | Identidad firmante de WomenIT, experta y empresa                                        | Cada parte firma por sí misma; no hay una llave central                                                                                           |
| Contrato Soroban             | Registro de emisoras autorizadas, credenciales (huella y estado), acuerdos y evidencias | La regla de que el acuerdo requiere la firma de ambas partes y la confirmación la firma de la empresa se aplica en el contrato, no en un servidor |
| Autorización (require_auth)  | Exigir la firma de quien corresponde en cada operación                                  | Evita que una parte falsifique lo que otra debe acreditar                                                                                         |
| Stellar RPC y explorador     | Verificación pública sin cuenta                                                         | Un tercero comprueba sin pedir acceso a WomenIT                                                                                                   |
| Testnet                      | Entorno de la demostración                                                              | Sin costo ni activos reales                                                                                                                       |

****Pagos:**** quedan fuera del MVP. Stellar los soporta de forma nativa y podrían sumarse luego si la validación muestra una ventaja real.

****Límite honesto:**** la credencial prueba quién la emitió y que no fue alterada, no que la persona preste bien el servicio. Esa evaluación debe hacerse con otros mecanismos.

  

# Trazabilidad

-   Base: `docs/semana1/ProblemBrief.md` y guía oficial del Entregable 2.
-   Elaborado con apoyo de Claude (Anthropic) para estructura y redacción, supervisado por Zurisadai Agudelo.