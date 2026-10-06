# Historias de usuario — TüiDev

Producto: ****Verified Talent Chain****. Las historias están escritas desde cuatro roles del flujo definido en el Problem Brief: empresa contratante, experta, coordinación de WomenIT y un tercero que verifica.

## Mis historias de usuario

****Ordenadas de mayor a menor importancia.****

| #    | Historia                                                                                                                                                                                                                                                  |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HU-1 | Como empresa contratante, quiero ver las credenciales y evidencias de servicios previos de una experta y comprobar que son auténticas, para decidir si la contrato sin depender de que WomenIT me lo confirme caso por caso.                              |
| HU-2 | Como coordinadora de WomenIT, quiero emitir y, si es necesario, revocar una credencial de formación o competencia a una integrante, para que su conocimiento quede respaldado por la comunidad y la credencial deje de ser válida si se emitió por error. |
| HU-3 | Como experta de la comunidad, quiero recibir mis credenciales y compartirlas mediante un enlace verificable, para demostrar lo que sé hacer sin pedir cartas ni depender de contactos.                                                                    |
| HU-4 | Como empresa contratante, quiero confirmar que el servicio contratado se realizó, para dejar una evidencia confiable de la experiencia de la experta y cerrar el ciclo de contratación.                                                                   |
| HU-5 | Como experta de la comunidad, quiero aceptar una solicitud de servicio con alcance y condiciones claras, para que quede registrado lo acordado y evitar malentendidos.                                                                                    |
| HU-6 | Como empresa contratante, quiero buscar expertas por tema y ver su disponibilidad, para encontrar rápido a quien pueda atender mi necesidad sin pasar por búsquedas manuales.                                                                             |
| HU-7 | Como experta de la comunidad, quiero crear mi perfil con los temas en los que puedo dar charlas o servicios, para que WomenIT y las empresas sepan que estoy disponible y en qué.                                                                         |

Un tercero (otra organización, un cliente futuro) está cubierto por HU-1: verifica la trayectoria sin cuenta ni intermediarios.

## La más importante y por qué

****HU-1**** es la más importante porque es donde el producto resuelve la fricción priorizada en el Problem Brief (verificación y evidencia de experiencia) y donde se juega la hipótesis de blockchain: que una tercera parte pueda comprobar por sí misma una afirmación emitida por otros.

El orden sigue dos criterios:

1.  ****HU-1 a HU-4**** forman el núcleo de valor diferencial: emitir, compartir, verificar y confirmar. Sin ellas el producto sería un directorio más.
2.  ****HU-5**** registra lo acordado y conecta la contratación con la evidencia posterior.
3.  ****HU-6 y HU-7**** (perfil y búsqueda) son necesarias pero son funciones convencionales que cualquier solución tradicional ya resuelve. Por eso quedan al final y, en el MVP, se atenderán con datos precargados.

Hay una dependencia que conviene tener presente: HU-2 debe existir antes de poder demostrar HU-1 y HU-3, así que se construye primero aunque su valor para el usuario final sea menor.