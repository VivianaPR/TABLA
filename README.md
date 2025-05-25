
# 🏆 BootstrapTable

> **Tabla reutilizable en React con Bootstrap y características avanzadas como búsqueda, scroll infinito, modales y estilizado condicional**

---

## 📚 Índice

1. [👩‍💻 Autor](#-autor)  
2. [📦 Instalación](#-instalación)  
3. [🧩 Descripción General](#-descripción-general)  
4. [⚙️ Props Detalladas](#️-props-detalladas)  
5. [🧠 Funcionalidades Clave](#-funcionalidades-clave)  
6. [📊 Ejemplo de Uso](#-ejemplo-de-uso)  
7. [💡 Consideraciones Técnicas](#-consideraciones-técnicas)  
8. [🤝 Contribuciones](#-contribuciones)  
9. [📄 Licencia](#-licencia)

---

## 👩‍💻 Autor

- **Nombre:** Viviana Pérez Ruiz  
- **Rol:** Desarrolladora de Software  
- **Propósito:** Crear un componente de tabla reutilizable, robusto y flexible para proyectos React.

---

## 📦 Instalación

Agrega este componente en tu proyecto:

```bash
# Clona o copia el archivo
cp BootstrapTable.tsx ./components/

# Asegúrate de tener estas dependencias
npm install react-bootstrap bootstrap lottie-react
```

---

## 🧩 Descripción General

El componente `BootstrapTable` fue diseñado para:

- ✅ Renderizar tablas altamente configurables  
- 🔍 Incluir filtros y búsqueda general o por columna  
- 🔄 Soportar scroll infinito para mejorar rendimiento  
- 📦 Mostrar modales personalizados por celda  
- 🎨 Aplicar estilos condicionales dinámicos a celdas  
- 🚫 Mostrar animaciones cuando no hay datos  

---

## ⚙️ Props Detalladas

### `columns`

**Tipo:** `Column[]`  
**Descripción:** Define las columnas que la tabla debe renderizar.

```ts
type Column = {
  key: string;
  label: string;
  hasModal?: boolean;
  renderComponent?: (row: any) => React.ReactNode;
};
```

---

### `data`

**Tipo:** `Array<Record<string, any>>`  
**Descripción:** Lista de objetos que representan las filas de la tabla.  

---

### `renderModalContent`

**Tipo:** `(row: any, column: Column, onHide: () => void) => React.ReactNode`  
**Descripción:** Renderiza el contenido del modal para celdas que lo necesiten.

---

### `totalDias`

**Tipo:** `number`  
**Descripción:** Días totales usados para calcular el % en la columna `dias_habiles`.

---

### `subtitle`

**Tipo:** `string`  
**Descripción:** Subtítulo que se muestra arriba de la tabla.

---

### `items`

**Tipo:** `string`  
**Descripción:** Texto adicional mostrado junto al subtítulo (ej. `"chalecos entregados"`).

---

### `extraInput`

**Tipo:** `React.ReactNode`  
**Descripción:** Componente adicional mostrado junto al input de búsqueda (ej. filtros personalizados).

---

### `dateColumnKey`

**Tipo:** `string`  
**Descripción:** Clave de la columna con fechas, usada para ordenar por fecha.

---

### `enableColumnSearch`

**Tipo:** `boolean`  
**Descripción:** Si es `true`, habilita búsqueda por columnas.

---

## 🧠 Funcionalidades Clave

### 🔍 Búsqueda Global

- Filtra todos los datos con una sola barra de búsqueda  
- Ignora mayúsculas, minúsculas y acentos

### 🔍 Búsqueda por Columnas

- Filtros individuales en cada encabezado de columna  
- Activado con la prop `enableColumnSearch`

### 🎨 Estilo Condicional

- La columna `dias_habiles` cambia de color según porcentaje del total:
  - 🟩 Verde: ≥ 75%  
  - 🟨 Amarillo: 25% a 74%  
  - 🟥 Rojo: < 25%

### 📦 Modales

- Renderiza contenido personalizado por celda con `hasModal: true`  
- El contenido se define con la prop `renderModalContent`

### 🔄 Scroll Infinito

- Muestra más filas conforme se hace scroll  
- Mejora el rendimiento en grandes volúmenes de datos

### ✨ Animaciones sin datos

- Usa Lottie para mostrar animaciones personalizadas cuando no hay resultados

---

## 📊 Ejemplo de Uso

```tsx
import BootstrapTable from './BootstrapTable';

const columns = [
  { key: 'nombre', label: 'Nombre', hasModal: true },
  { key: 'zona', label: 'Zona' },
  { key: 'dias_habiles', label: 'Días Hábiles' },
];

const data = [
  { nombre: 'Persona A', zona: 'Norte', dias_habiles: 12 },
  { nombre: 'Persona B', zona: 'Sur', dias_habiles: 4 },
];

const renderModalContent = (row, column, onHide) => (
  <div>
    <h4>{column.label}</h4>
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
      totalDias={20}
      subtitle="Personas Protegidas"
      items="chalecos asignados"
      dateColumnKey="dias_habiles"
      enableColumnSearch={true}
    />
  );
}
```

---

## 💡 Consideraciones Técnicas

- Usa `useEffect`, `useState`, `useMemo` para optimizaciones  
- Requiere `bootstrap` para estilos y `lottie-react` para animaciones  
- Compatible con React ≥ 18

---

## 📄 Licencia

MIT © [Viviana Pérez Ruiz](mailto:viviana.perez@unp.gov.co)



