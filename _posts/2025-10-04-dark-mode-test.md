---
layout: single
title: "Prueba del Modo Oscuro"
date: 2025-10-04
tags: [dark-mode, test, jekyll]
---

¡Hola! Este es un post de prueba para demostrar el **modo oscuro** de mi blog 🎨

## Características del Modo Oscuro

- 🌙 **Toggle suave**: Botón en la esquina superior derecha
- 💾 **Preferencia persistente**: Se guarda tu elección
- 🖥️ **Detección automática**: Respeta la preferencia de tu sistema
- 📱 **Responsive**: Funciona en todos los dispositivos

## Elementos de Prueba

### Código
```javascript
function toggleDarkMode() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
}
```

### Lista
- Elemento 1
- Elemento 2
- Elemento 3

### Cita
> "El modo oscuro no es solo una tendencia, es una necesidad para la salud visual en la era digital."

### Tabla
| Característica | Modo Claro | Modo Oscuro |
|----------------|------------|-------------|
| Fondo | Blanco | Negro |
| Texto | Negro | Blanco |
| Enlaces | Azul | Azul claro |

## Instrucciones de Prueba

1. **Haz clic en el botón de luna/sol** en la esquina superior derecha
2. **Observa los cambios** en colores y contrastes
3. **Recarga la página** - tu preferencia se mantendrá
4. **Cambia el tema de tu sistema** y recarga para ver la detección automática

¡Prueba el modo oscuro y cuéntame qué te parece! 🚀
