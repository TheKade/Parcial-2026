# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** Matias Sousa
**Fecha:** 23/04/2026

---

## Prompt 1

### Momento del proceso

Cuando estaba corrigiendo el HTML original, especialmente al reemplazar los `<div>` por etiquetas semánticas. Tenía dudas sobre qué etiquetas usar en cada sección (por ejemplo, navegación, contenido principal y tarjetas).

### Lo que le pedí a la IA

```
Corrigime este HTML reemplazando los div por etiquetas semánticas correctas y manteniendo la estructura del contenido
```

### Análisis del resultado obtenido

La IA generó una estructura más ordenada usando etiquetas como `<header>`, `<nav>`, `<main>`, `<section>` y `<article>`. El enfoque fue correcto en términos generales, ya que respetó la jerarquía del contenido y mejoró la semántica. Sin embargo, en algunos casos utilizó `<section>` donde correspondía `<nav>` o no agrupó correctamente elementos de navegación en listas. Aun así, me sirvió como base para entender cómo reorganizar el documento.

### Qué debí corregir manualmente y por qué

Tuve que ajustar la navegación, ya que la IA no utilizó una lista (`<ul>` con `<li>`) para los links, lo cual es una práctica recomendada para accesibilidad. También agregué atributos `alt` en imágenes que la IA dejó incompletos o genéricos. Además, reemplacé algunos textos estructurales mal ubicados en `<div>` por etiquetas como `<h1>`, `<p>` y `<dl>`. Detecté estos problemas revisando el código manualmente y comparándolo con buenas prácticas de HTML semántico.

---

## Prompt 2

### Momento del proceso

Al comenzar la parte de JavaScript, cuando necesitaba implementar las funciones pedidas en el enunciado y asegurarme de que cumplieran con los requisitos.

### Lo que le pedí a la IA

```
Creame un script.js con variables y funciones en JavaScript para un personaje que calcule daño, verifique si está vivo, si puede lanzar hechizos y genere una presentación con console.log
```

### Análisis del resultado obtenido

La IA generó un archivo con variables bien definidas y funciones separadas para cada requerimiento. El enfoque fue correcto, utilizando funciones declaradas y arrow functions según lo solicitado. Además, incluyó `console.log` para mostrar resultados, lo cual coincidía con lo pedido en el examen. El resultado fue bastante cercano a lo esperado y sirvió como base funcional.

### Qué debí corregir manualmente y por qué

Tuve que revisar la lógica para asegurar que cumpliera exactamente con el enunciado, especialmente en `calculateDamage`, donde era necesario devolver 0 si el resultado era negativo. También verifiqué que no hubiera números mágicos y que se usaran las variables declaradas como parámetros. Ajusté nombres de variables para que fueran más descriptivos y consistentes con el dominio del problema. Detecté estos detalles al probar el código en la consola del navegador y revisar las condiciones solicitadas en el enunciado.

---

## Reflexión final

La IA fue útil como punto de partida, pero cometió errores principalmente en aspectos de semántica HTML y buenas prácticas de accesibilidad. En varios casos generó código funcional, pero no completamente alineado con los requisitos específicos del examen. Sin embargo, en JavaScript la ayuda fue más precisa y requirió menos correcciones. Para futuros usos, intentaría ser más específico en los prompts, indicando restricciones claras como “usar etiquetas semánticas correctas y accesibles” o “cumplir exactamente con las condiciones del enunciado”, para obtener resultados más ajustados.
