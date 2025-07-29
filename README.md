Amigo Secreto

Una aplicación web interactiva para realizar sorteos de "Amigo Secreto" de manera divertida y fácil. Desarrollada con HTML, CSS y JavaScript vanilla.

Descripción

Esta aplicación permite a los usuarios crear listas de participantes y realizar sorteos aleatorios para determinar quién será el "amigo secreto" de cada persona. Es perfecta para eventos sociales, fiestas de oficina, reuniones familiares o cualquier ocasión donde se quiera organizar un intercambio de regalos.

Características

- **Interfaz intuitiva**: Diseño moderno y fácil de usar
- **Validación de datos**: Previene entradas duplicadas y campos vacíos
- **Límite configurable**: Máximo 10 participantes por sorteo
- **Sorteo aleatorio**: Algoritmo justo para seleccionar participantes
- **Responsive design**: Funciona en dispositivos móviles y de escritorio
- **Sin dependencias**: Solo HTML, CSS y JavaScript vanilla

Funcionalidades

### 1. Agregar Participantes
- Escribe el nombre de cada participante en el campo de texto
- Haz clic en "Añadir" o presiona Enter para agregarlo a la lista
- Los nombres se muestran numerados en una lista visible

### 2. Validaciones
- **Campo vacío**: Muestra alerta si intentas agregar un nombre vacío
- **Duplicados**: Previene agregar el mismo nombre dos veces
- **Límite máximo**: Permite máximo 10 participantes
- **Sorteo mínimo**: Requiere al menos 2 participantes para sortear

### 3. Sorteo Aleatorio
- Haz clic en "Sortear amigo" para seleccionar un participante aleatorio
- El resultado se muestra con un mensaje festivo
- El sorteo es completamente aleatorio y justo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y diseño responsive
- **JavaScript ES6+**: Lógica de programación y manipulación del DOM
- **Google Fonts**: Tipografías Inter y Merriweather

## Estructura del Proyecto

```
challenge-amigo-secreto_esp-main/
├── index.html          # Página principal
├── app.js             # Lógica de la aplicación
├── style.css          # Estilos y diseño
├── assets/            # Recursos gráficos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md          # Documentación
```

## Cómo Usar
## 🎯 Cómo Usar

1. **Abrir la aplicación**: Abre `index.html` en tu navegador web
2. **Agregar participantes**: 
   - Escribe el nombre en el campo de texto
   - Haz clic en "Añadir" o presiona Enter
3. **Verificar la lista**: Los nombres aparecerán numerados debajo
4. **Realizar el sorteo**: Haz clic en "Sortear amigo" cuando estés listo
5. **Ver el resultado**: El amigo secreto seleccionado se mostrará en pantalla

## Instalación y Ejecución

### Opción 1: Ejecución Local
1. Descarga o clona el repositorio
2. Abre `index.html` directamente en tu navegador


Luego abre `http://localhost:8000` en tu navegador.


## Funciones Principales
      
### `agregarAmigo()`
- Valida la entrada del usuario
- Previene duplicados y campos vacíos
- Actualiza la lista visual
- Mantiene el foco en el campo de entrada

### `mostrarLista()`
- Renderiza la lista de participantes
- Numera cada elemento automáticamente
- Limpia la lista antes de actualizar

### `sortearAmigo()`
- Genera un índice aleatorio
- Valida que haya suficientes participantes
- Muestra el resultado con formato atractivo

---

**¡Disfruta organizando tu próximo Amigo Secreto! 🎉** 