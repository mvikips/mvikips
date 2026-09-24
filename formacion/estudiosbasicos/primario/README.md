# Estudios Primarios

**Ruta:** `/formacion/estudiosbasicos/primario`  
**Autora:** María Victoria Perera  
**Licencia:** MIT  
**Última actualización:** 2026-09-24

[![Deploy](https://github.com/mvikips/mvikips/actions/workflows/deploy-primario.yml/badge.svg)](https://github.com/mvikips/mvikips/actions/workflows/deploy-primario.yml)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-581845)](https://mvikips.github.io/mvikips/formacion/estudiosbasicos/primario/)
[![License: MIT](https://img.shields.io/badge/license-MIT-333333)](./LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-000000)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-333333)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-581845)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Estado](https://img.shields.io/badge/estado-en%20construcci%C3%B3n-555555)](#estado-del-proyecto)

---

## Tabla de contenidos

1. [Descripción breve](#descripción-breve)
2. [Narrativa y contexto](#narrativa-y-contexto)
3. [Estructura de carpetas](#estructura-de-carpetas)
4. [Stack técnico](#stack-técnico)
5. [Visual Analytics y Big Data](#visual-analytics-y-big-data)
6. [Notebook](#notebook)
7. [Contribución](#contribución)
8. [Estado del proyecto](#estado-del-proyecto)
9. [Créditos y firma](#créditos-y-firma)

---

## Descripción breve

Este módulo corresponde al trayecto de **estudios primarios** dentro del repositorio `mvikips/mvikips`. Es un sitio web estático que reúne tres cosas en un mismo espacio:

- Una **narrativa biográfica** sobre el proceso de validación de estudios entre Uruguay y Argentina.
- La **digitalización del diploma histórico** de estudios primarios, con un componente de zoom interactivo.
- Un conjunto de **tableros de Visual Analytics** que articulan los tres proyectos previos de la suite —**DilemaPizza**, **MiniMoovit** y **#3calc**— como los tres ejercicios de un único examen.

El sitio se despliega automáticamente en GitHub Pages mediante GitHub Actions, y toda modificación pasa por rama de trabajo y Pull Request.

---

## Narrativa y contexto

Aprobé la primaria a los 10 años, en Uruguay. Años después, al migrar a la Argentina, me encontré con un panorama burocrático que no reconocía mis estudios previos y que me dejaba en un limbo administrativo difícil de sostener.

En lugar de esperar a que la documentación se legalizara, tomé una decisión: **hacer la primaria desde cero**. No fue una obligación externa, fue una elección personal. Me sentía perdida y pensé que iba a ser más rápido reconstruir el trayecto que pelear por el reconocimiento de lo ya hecho.

Esa decisión implicó rendir **un único examen con tres ejercicios**. Los tres ejercicios de aquel examen son, hoy, los tres proyectos técnicos que articulan este módulo:

| Ejercicio | Proyecto | Foco |
|---|---|---|
| Ejercicio 1 | **DilemaPizza** | Arquitectura de movilidad urbana de cercanía |
| Ejercicio 2 | **MiniMoovit** | Modelos de partición y geometría combinatoria |
| Ejercicio 3 | **#3calc** | Procesamiento analítico y Visual Analytics |

La narrativa completa, con el detalle biográfico y la metáfora del examen, vive en el `index.html` del sitio. Este README se mantiene deliberadamente neutro para no repetir lo que ya está contado allí.

---

## Estructura de carpetas

```
formacion/
└── estudiosbasicos/
    └── primario/
        ├── index.html              # Página principal con índice general
        ├── README.md               # Este documento
        ├── LICENSE                 # Licencia MIT
        ├── assets/
        │   ├── css/                # Hojas de estilo (Times New Roman, paleta sobria)
        │   ├── js/                 # Scripts de interactividad y zoom
        │   └── img/                # Imágenes, diploma digitalizado, logos
        ├── notebook/
        │   └── notebook.html       # Visualización HTML del notebook
        └── data/
            └── (datasets para Visual Analytics)
```

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Marcado | HTML5 |
| Estilos | CSS3 (sin frameworks, sin dependencias externas) |
| Interactividad | JavaScript vanilla |
| Visualización de datos | Componentes propios + librerías ligeras si fueran necesarias |
| Control de versiones | Git |
| CI/CD | GitHub Actions |
| Despliegue | GitHub Pages |
| Tipografía | Times New Roman (exclusiva) |
| Paleta | `#FFFFFF`, `#000000`, `#333333`, `#555555`, `#581845` |

Restricciones estéticas absolutas:

- Cero animaciones superfluas.
- Cero efectos recargados.
- Cero sombras flotantes innecesarias.
- Cero emojis.
- Logos estrictamente minimalistas.

---

## Visual Analytics y Big Data

El eje central del módulo es la **analítica visual**. Los tableros y componentes gráficos interactivos modelan flujos de volúmenes de datos considerables —simulando volúmenes propios de Big Data— aplicados a:

- Las matrices combinatorias espaciales (DilemaPizza).
- La optimización de trayectos urbanos (MiniMoovit).
- El procesamiento analítico agregado (#3calc).

Se muestran correlaciones gráficas claras sobre:

- Métricas de tiempo.
- Densidad de paradas.
- Distribución volumétrica.

Toda la analítica respeta la estética sobria del sitio: Times New Roman, blanco puro, negro absoluto, grises oscuros y acentos en ciruela (`#581845`).

---

## Notebook

El notebook asociado al proyecto se publica como **HTML autónomo** dentro de `notebook/notebook.html`. Es navegable, accesible desde el índice general del sitio, y respeta las mismas reglas estéticas que el resto del módulo.

No es necesario haberlo leído antes para recorrerlo: la estructura del HTML está pensada para ser explorada de forma libre, con secciones claras y sin dependencias externas que rompan la sobriedad del conjunto.

---

## Contribución

Toda modificación sigue el mismo flujo:

1. Crear una rama de trabajo a partir de `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/nombre-descriptivo
   ```
2. Realizar los cambios y commitear con mensajes claros y en imperativo.
3. Subir la rama al remoto:
   ```bash
   git push origin feature/nombre-descriptivo
   ```
4. Abrir un **Pull Request** hacia `main`.
5. El PR debe pasar los checks de **GitHub Actions** (build y validación).
6. Una vez aprobado y mergeado, el despliegue a **GitHub Pages** es automático.

No se aceptan commits directos sobre `main`. La rama principal se mantiene siempre desplegable.

---

## Estado del proyecto

| Componente | Estado |
|---|---|
| Estructura de carpetas | Completado |
| README | Completado |
| `index.html` (índice general) | En construcción |
| Narrativa biográfica | En construcción |
| Diploma digital con zoom | Pendiente |
| Tableros de Visual Analytics | Pendiente |
| Notebook en HTML | Pendiente |
| Workflow de GitHub Actions | Pendiente |
| Despliegue en GitHub Pages | Pendiente |

---

## Créditos y firma

Proyecto desarrollado por **María Victoria Perera** dentro del repositorio [`mvikips/mvikips`](https://github.com/mvikips/mvikips).

Los tres proyectos articulados en este módulo —**DilemaPizza**, **MiniMoovit** y **#3calc**— son desarrollos previos de la misma suite y se integran aquí como los tres ejercicios de un único examen de estudios primarios.

Licencia MIT. Consultar el archivo [`LICENSE`](./LICENSE) para más detalles.

---

*Última actualización: 2026-09-24*
```

---