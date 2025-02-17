# BootstrapTable

## Referencia de Documentación de Usabilidad  
**Desarrollador(a):** Viviana Pérez Ruiz  

## Descripción General  
El componente `BootstrapTable` es un componente reutilizable de React para mostrar datos en formato de tabla, con las siguientes características:  

- Funcionalidad de búsqueda.  
- Scroll infinito.  
- Estilizado condicional de celdas.  
- Integración con modales para vistas detalladas.  
- Soporte para columnas dinámicas.  
- Animaciones personalizadas para estados vacíos.  

## Propiedades del Componente  

### `TableProps`  
El componente acepta las siguientes propiedades:  

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `columns` | `Column[]` | Un array que define las columnas de la tabla, incluyendo etiquetas y lógica de renderizado opcional. |
| `data` | `Array<Record<string, any>>` | El conjunto de datos que se mostrará en la tabla. |
| `renderModalContent` | `(row, column, onHide) => React.ReactNode` | Función para renderizar el contenido del modal basado en la fila y columna seleccionada. |
| `totalDias` | `number` | Número total de días para estilizado condicional en la columna `dias_habiles`. |
| `subtitle` | `string` | Texto del subtítulo mostrado encima de la tabla. |
| `items` | `string` | Texto adicional mostrado en la sección del subtítulo. |
| `extraInput` | `React.ReactNode` | Campos de entrada adicionales renderizados junto al campo de búsqueda. |
| `dateColumnKey` | `string` | Clave de la columna de fecha usada para ordenar filas en orden descendente. |

### `Column`  
Define la estructura y el comportamiento de cada columna de la tabla:  

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `key` | `string` | Clave correspondiente a un campo de datos en el conjunto de datos. |
| `label` | `string` | Etiqueta mostrada en el encabezado de la tabla. |
| `hasModal` | `boolean` | Si es `true`, al hacer clic en la celda se abre un modal. |
| `renderComponent` | `(row) => React.ReactNode` | Lógica personalizada de renderizado para el contenido de la columna. |

## Características y Funcionalidad  

### 1. Búsqueda  
- Utiliza el componente `BusquedaInput` para filtrar filas basándose en una búsqueda insensible a mayúsculas y acentos.  
- Filtra datos dinámicamente mientras el usuario escribe.  

### 2. Scroll Infinito  
- Carga más filas automáticamente a medida que el usuario hace scroll en la tabla.  
- Controlado por la función `handleScroll`.  

### 3. Estilizado Condicional  
- Aplica colores de fondo y texto a la columna `dias_habiles` basado en el porcentaje de días transcurridos.  

### 4. Integración con Modales  
- Abre un modal cuando se hace clic en una celda con `hasModal: true`.  
- El modal muestra contenido basado en la función `renderModalContent` proporcionada en las props.  

### 5. Columnas Dinámicas  
- Las columnas se generan dinámicamente basado en la prop `columns`, permitiendo flexibilidad en la estructura de la tabla.  

### 6. Animaciones para Estados Vacíos  
- Muestra animaciones usando la librería Lottie cuando:  
  - El conjunto de datos está vacío.  
  - Ninguna fila coincide con los criterios de búsqueda.  

### 7. Otras Características  
- Subtítulo y campos de entrada adicionales proporcionan información contextual e interactividad adicional.  
- Ordenamiento por fecha cuando se proporciona `dateColumnKey`.  

## Ejemplo de Uso  
```tsx
import BootstrapTable from './BootstrapTable';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'nombre', label: 'Nombre', hasModal: true },
  { key: 'dias_habiles', label: 'Días Hábiles' },
];

const data = [
  { id: 1, nombre: 'Ejemplo 1', dias_habiles: 10 },
  { id: 2, nombre: 'Ejemplo 2', dias_habiles: 20 },
];

const renderModalContent = (row, column, onHide) => (
  <div>
    <h2>Detalle de {column.label}</h2>
    <p>{row[column.key]}</p>
    <button onClick={onHide}>Cerrar</button>
  </div>
);

function App() {
  return (
    <BootstrapTable
      columns={columns}
      data={data}
      renderModalContent={renderModalContent}
      totalDias={30}
      subtitle="Ejemplo de Tabla"
      items="Datos de prueba"
      dateColumnKey="dias_habiles"
    />
  );
}

export default App;

