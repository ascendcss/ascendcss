# Instalacion

Documentacion mas detallada en: [https://ascendcss.com](https://ascendcss.com)

```bash
# npm
npm install ascendcss

# yarn
yarn add ascendcss
```

Importe Ascend en su estructura de archivos Sass

> Primero debe copiar y editar la configuracion para despues importar Ascendcss de la siguiente forma.

```scss
// Colores, se utilizan en los componentes
$primary-color: #7d62ff;
$secondary-color: #ffff;
$bg: #ffff;
$secondary-bg: lighten($bg, 10%);

// Breakpoints
$screen-sm: 32em;
$screen-md: 48em;
$screen-lg: 64em;
$screen-xl: 90em;

// Breakpoints-map
$breakpoints: (
  xm: 0,
  sm: $screen-sm,
  md: $screen-md,
  lg: $screen-lg,
  xl: $screen-xl,
);

@import "~ascendcss/ascendcss";

// Resetea los estilos por defecto del navegador -> opcional
@import "~ascendcss/base";
```

> EN EL CASO DE QUE NO QUIERA PERSONALIZAR LA LIBRERIA PUEDE IMPORTAR LA CONFIGURACION POR DEFECTO

```scss
@import "~ascendcss/config";
@import "~ascendcss/ascendcss";

// opcional
@import "~ascendcss/base";
```

# Breakpoints

Los breakpoints son los puntos de quiebre que te permitiran construir layouts totalmente adapatables a diferentes tamaños de pantalla.

> Puede agregar mas puntos de quiebre desde el mapa de sass:  **breakpoints**.

| Breakpoint | Tamaño |
|---|---|
| xm | 0 |
| sm | 32em |
| md | 48em |
| lg | 64em |
| xl | 90em |

# Grid System

Puede crear filas y columnas a travez de un mixin de sass.

`@include grid($col, $row);`

Define la variable de la siguiente manera:

4 filas = `$col: 1 1 1 1;`.

Utiliza la siguiente funcion para no repetir el mismo numero varias veces.

`rpt(Numero de veces que se repite, numero que se repite);`.

**Ejemplo**:
`$col: rpt(4, 1);` que es igual a `$col: 1 1 1 1;`.

## ENTRADA    

```scss
.layout {
    @include grid(rpt(4, 1));
    @include from(md) {
        @include grid(rpt(6, 1));
    }
    gap: 0.4rem;
    div {
        @include center;
        color: #ffffff;
        border-radius: 8px;
        background-color: $primary-color;
        padding: 0.5rem;
    }
}
```

## SALIDA

```css
.layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.4rem;
}
@media screen and (min-width: 48em) {
    .layout {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
}
.layout div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 8px;
    background-color: #7d62ff;
    padding: 0.5rem;
}
```

# componentes
## Botones

### SASS

```scss
.btn {
    @include btn($bg: #000, $color: #fff);
}
```

### HTML

```html
<button class="btn">Boton</button>
```

## Formulario

SASS

```scss
.form-input {
    @include input;
}
.btn {
    @include btn;
}
```

HTML

```html
<form class="form">
    <label class="form-label">
        Correo Electronico
    </label>
    <input type="email" class="form-input">

    <label class="form-label">
        Nombres
    </label>
    <input type="text" class="form-input">

    <label class="form-label">
        Apellidos
    </label>
    <input type="text" class="form-input">

    <label class="form-label">
        Edad
    </label>
    <input type="number" class="form-input">

    <label class="form-label">
        Fecha
    </label>
    <input type="date" class="form-input">
    
    <label class="form-label">
        Seleccionar
    </label>
    <select name="select" class="form-input">
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
    </select>
    
    <button class="btn">Enviar</button>
</form>
```

## Navbar

Mixin en SASS: `@include navbar($bg: #000, $color: #fff, $hg: 60px, $content-cols: 10fr 2fr);`

## SASS

```
.navbar {
    @include navbar($primary-color)
}
```

## HTML

```html
<nav class="navbar">
    <a href="/" class="navbar-brand">NAME</a>
    <button class="navbar-toggler" onclick="openNavbar()">
        <i class="fa fa-bars"></i>
    </button>
    <div class="navbar-content" id="navbar-collapse">
        <div class="navbar-links">
            <a href="#" class="active-link">Inicio</a>
            <a href="#">Destacado</a>
            <a href="#">Acerca de</a>
        </div>
        <div class="navbar-right">
            <a href=""><i class="fab fa-github"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
        </div>
    </div>
</nav>
```
## JavaScript

Utiliza JavaScript para mostrar el contenido del navbar en dispositivos pequeños.

```js
function openNavbar() {
    var nav = document.getElementById('navbar-collapse');
    nav.classList.toggle("navbar-show");
}
```

> Utiliza la clase `active-link` para cuando un enlace este activo.