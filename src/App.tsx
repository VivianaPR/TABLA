import './App.css';
import { VentanaLienzo } from 'eco-unp/ui'
import { BootstrapTable } from './components/tabla'
import { Tabs } from 'react-bootstrap';
import { TabVentana } from 'eco-unp/ui'
import { FaUsers } from "react-icons/fa";

function App() {
  const columns = [
    {
      key: 'solicitud',
      label: 'Solicitud',
    },
    { key: "no_orden", label: "No de Orden", hasModal: true },
    { key: "nombre_evaluado", label: "Nombre del Evaluado" },
    { key: "id_evaluado", label: "Identificación" },
    { key: "fecha_asignacion", label: "Fecha de asignación" },
    { key: "dias_habiles", label: "Días hábiles" },
    { key: "poblacion", label: "Población" },
    { key: "tipo_estudio", label: "Tipo de estudio" },
    { key: "anexos", label: "Anexos", hasModal: true },
    {
      key: 'analista',
      label: 'Analista',
      renderComponent: (row: any) => <select className="form-select">
        <option value="0">Seleccione el analista</option>
        <option value="1">Analista uno</option>
        <option value="2">Analista dos</option>
        <option value="3">{row.no_orden}</option>
      </select>
    },
  ];

  const data = [
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
  ];

  // Función para renderizar contenido dinámico en el modal
  const renderModalContent = (row: Record<string, any>, column: any) => {
    switch (column.key) {
      case "no_orden":
        return (<h1>{row.no_orden}</h1>);
      case "anexos":
        return (<h1>{row.nombre_evaluado}</h1>);
      default:
        return <p>No hay información adicional disponible.</p>;
    }
  };

  const extraInput = (
    <button className="btn custom-button">
      <FaUsers /> Colectivas
    </button>
  );

  return (
    <div className="App">
      <VentanaLienzo>
        <Tabs defaultActiveKey="tab1">
          <TabVentana eventKey={'tab1'} title={'Solicitudes'} >
            <BootstrapTable
              columns={columns}
              data={data}
              renderModalContent={renderModalContent}
              totalDias={30}
              subtitle={'Solicitudes por asignar'}
              extraInput={extraInput}
            />
          </TabVentana>
        </Tabs>
      </VentanaLienzo>
    </div>
  );
}

export default App;
