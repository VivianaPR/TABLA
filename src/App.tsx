import './App.css';
import { VentanaLienzo } from 'eco-unp/ui';
import { TablaRegistros } from './components/TablaRegistros';
import { Routes, Route } from 'react-router-dom';

function App() {


  const columns = [
    { key: "no_orden", label: "No de Orden", hasModal: true },
    { key: "nombre_evaluado", label: "Grupo evaluado", hasModal: true },
    { key: "id_evaluado", label: "Identificación" },
    { key: "fecha_asignacion", label: "Fecha de asignación" },
    { key: "dias_habiles", label: "Días hábiles" },
    { key: "poblacion", label: "Población", redirectTo: (row:any) => `/prueba/ecosistema/${row.id_evaluado}` },
    { key: "tipo_estudio", label: "Tipo de estudio", hasModal: true }
  ];

  const data = [
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "ROM", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "ROM", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "ROM", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "PCCC", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "PCCC", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "PCCC", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "Buscadoras", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "ROM", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "ROM", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "ROM", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "PCCC", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "PCCC", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / CAUCA", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "PCCC", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" },
    { no_orden: "OTC01", nombre_evaluado: "Líderes comunales / VAUPES", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 7, poblacion: "Buscadoras", tipo_estudio: "A" },
    { no_orden: "OTC02", nombre_evaluado: "Grupo AFRO - LGBT / ATLANTICO ", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 33, poblacion: "AFRO", tipo_estudio: "A1" },
    { no_orden: "OTC03", nombre_evaluado: "Mujeres cabeza de hogar / NARIÑO", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" }
  ];

  // Función para renderizar contenido dinámico en el modal
  const renderModalContent = (row: Record<string, any>, column: any) => {
    if (column.key === "no_orden") {
      return (
        <div>
          <h4>Detalles de la Orden: {row.no_orden}</h4>
          <p>ID Evaluado: {row.id_evaluado}</p>
          <p>Nombre: {row.nombre_evaluado}</p>
          <p>Fecha de Asignación: {row.fecha_asignacion}</p>
        </div>
      );
    }

    if (column.key === "tipo_estudio") {
      return (
        <div>
          <h4>Tipo de Estudio: {row.tipo_estudio}</h4>
          <p>Descripción del estudio relacionado a {row.tipo_estudio}</p>
          <p>Nombre: {row.nombre_evaluado}</p>
        </div>
      );
    }

    return <p>No hay información adicional disponible.</p>;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <VentanaLienzo>
              <TablaRegistros
                columns={columns}
                data={data}
                renderModalContent={renderModalContent}
                totalDias={50}
                enableColumnSearch={true}
                title="Subdirección de Evaluación de Riesgo"
                subtitle="Órdenes de trabajo"
                enableColumnSorter={true}
              />
            </VentanaLienzo>
          }
        />
      </Routes>
    </>
  )
}

export default App;
