# 🏆 **BootstrapTable**

## 📌 Índice  
1. [📖 Referencia de Documentación de Usabilidad](#referencia-de-documentación-de-usabilidad)  
2. [📌 Descripción General](#descripción-general)  
3. [⚙️ Propiedades del Componente](#propiedades-del-componente)  
   - [`TableProps`](#tableprops)  
   - [`Column`](#column)  
4. [🚀 Características y Funcionalidad](#características-y-funcionalidad)  
5. [📌 Ejemplo de Uso](#ejemplo-de-uso)  

---

## 📖 **Referencia de Documentación de Usabilidad**  
**👩‍💻 Desarrollador(a):** _Viviana Pérez Ruiz_  

---

## 📌 **Descripción General**  
El componente `BootstrapTable` es un componente reutilizable de **React** para mostrar datos en formato de tabla, con las siguientes características:  

✅ **Funcionalidad de búsqueda** 🔍  
✅ **Búsqueda por columnas** 🧩  
✅ **Scroll infinito** 🔄  
✅ **Estilizado condicional de celdas** 🎨  
✅ **Integración con modales** 🏷️  
✅ **Soporte para columnas dinámicas** 📊  
✅ **Animaciones personalizadas** 🚀  

---

## ⚙️ **Propiedades del Componente**

### 🎯 `TableProps`  
El componente acepta las siguientes propiedades:  

| 🏷️ Propiedad | 🛠️ Tipo | 📖 Descripción |
|-------------|--------|--------------|
| `columns` | `Column[]` | Array que define las columnas de la tabla, incluyendo etiquetas y lógica de renderizado. |
| `data` | `Array<Record<string, any>>` | Conjunto de datos a mostrar en la tabla. |
| `renderModalContent` | `(row, column, onHide) => React.ReactNode` | Función para renderizar el contenido del modal basado en la fila y columna seleccionada. |
| `totalDias` | `number` | Número total de días para estilizado condicional en la columna `dias_habiles`. |
| `subtitle` | `string` | Texto del subtítulo mostrado encima de la tabla. |
| `items` | `string` | Texto adicional mostrado en la sección del subtítulo. |
| `extraInput` | `React.ReactNode` | Campos de entrada adicionales renderizados junto al campo de búsqueda. |
| `dateColumnKey` | `string` | Clave de la columna de fecha usada para ordenar filas en orden descendente. |
| `enableColumnSearch` | `boolean` | Habilita la búsqueda por columnas específicas. |

### 📊 `Column`  
Define la estructura y el comportamiento de cada columna de la tabla:  

| 🏷️ Propiedad | 🛠️ Tipo | 📖 Descripción |
|-------------|--------|--------------|
| `key` | `string` | Clave correspondiente a un campo de datos en el conjunto de datos. |
| `label` | `string` | Etiqueta mostrada en el encabezado de la tabla. |
| `hasModal` | `boolean` | Si es `true`, al hacer clic en la celda se abre un modal. |
| `renderComponent` | `(row) => React.ReactNode` | Lógica personalizada de renderizado para el contenido de la columna. |

---

## 🚀 **Características y Funcionalidad**

### 🔍 **1. Búsqueda General**  
- Utiliza el componente `BusquedaInput` para filtrar filas basándose en una búsqueda **insensible a mayúsculas y acentos**.  
- Filtra datos dinámicamente mientras el usuario escribe.  

### 🧩 **2. Búsqueda por Columnas**  
- Cuando `enableColumnSearch` es `true`, se activa un campo de búsqueda independiente para cada columna.  
- Las búsquedas se aplican de manera independiente y combinada.  
- Ideal para análisis detallado por atributos específicos.

### 🔄 **3. Scroll Infinito**  
- Carga más filas automáticamente a medida que el usuario hace scroll en la tabla.  
- Controlado por la función `handleScroll`.  

### 🎨 **4. Estilizado Condicional**  
- Aplica **colores de fondo y texto** a la columna `dias_habiles` basado en el **porcentaje de días transcurridos**.  

### 🏷️ **5. Integración con Modales**  
- Abre un modal cuando se hace clic en una celda con `hasModal: true`.  
- El modal muestra contenido basado en la función `renderModalContent`.  

### 📊 **6. Columnas Dinámicas**  
- Las columnas se generan dinámicamente con `columns`, permitiendo flexibilidad en la estructura de la tabla.  

### 🚀 **7. Animaciones para Estados Vacíos**  
- Muestra **animaciones** con la librería **Lottie** cuando:  
  - El conjunto de datos está vacío.  
  - Ninguna fila coincide con los criterios de búsqueda.  

### 🎯 **8. Otras Características**  
- **Subtítulo** y **campos de entrada adicionales** proporcionan información contextual e interactividad.  
- **Ordenamiento por fecha** cuando se proporciona `dateColumnKey`.  

---

## 📌 **Ejemplo de Uso**
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
      enableColumnSearch={true}
    />
  );
}

export default App;



